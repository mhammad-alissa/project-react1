<?php 

header("Access-control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$servername = "localhost";
$username = "root";
$password = "";
$database= "travelix";

$id ="";

// Create connection
$db = mysqli_connect($servername, $username, $password, $database);
 
// Check connection
if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}

$method = $_SERVER['REQUEST_METHOD'];


switch ($method) {
    case 'GET':

      if(isset($_GET["id"])){
        $id = $_GET['id'];  
      }     
      $sql = "select * from contacts".($id?" where id=$id":''); 
      break;
    case 'POST':
            move_uploaded_file($_FILES["image"]["tmp_name"], "img/" . $_FILES["image"]["name"]);
            $name = $_POST["name"];
            $email = $_POST["email"];
            $password = $_POST["password"];
            $phone = $_POST["phone"];
            $role = $_POST["role"];
            $image = $_POST["image"];
            $sql = "insert into users (name, email, password, phone,role,image) values ('$name', '$email', '$password','$phone','$role','$image')"; 
    break;
}
 
// run SQL statement
$result = mysqli_query($db,$sql);
 
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($db));
}
 
if ($method == 'GET') {
    if (!$id) echo '[';
      for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
      }
    if (!$id) echo ']';
} elseif ($method == 'POST') {
    echo json_encode($result);
} else {
    echo mysqli_affected_rows($db);
}

$db->close();

?>