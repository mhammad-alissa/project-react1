<?php
header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "travelix"; 
$id = '';
 
$con = mysqli_connect($host, $user, $password,$dbname);
 
$method = $_SERVER['REQUEST_METHOD'];
 
 
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}
 
 
switch ($method) {
    case 'GET':
      if(isset($_GET["id"])){
        $id = $_GET['id'];  
      }     
      $sql = "select * from categories".($id?" where id=$id":''); 
      break;
    case 'POST':
        if(isset($_GET["id"])){
            $id = $_GET['id'];  
            $name = $_POST["name"];
            $description = $_POST["description"];
            $image = $_POST["image"];
            $sql = "UPDATE categories SET name='$name', description='$description', image='$image', WHERE id = $id"; 
        }else if(isset($_GET["delete"])){
            $delete = $_GET['delete'];  
            $sql = "DELETE FROM categories WHERE id = $delete"; 
        }else{  
            $name = $_POST["name"];
            $description = $_POST["description"];
            $image = $_POST["image"];
          $sql = "insert into categories (name, description, image) values ('$name', '$description', '$image')"; 
        }
      break;
}
 
// run SQL statement
$result = mysqli_query($con,$sql);
 
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
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
    echo mysqli_affected_rows($con);
}

$con->close();