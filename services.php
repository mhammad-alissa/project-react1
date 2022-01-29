<?php

header("Access-control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

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
      $sql = "select services.* , categories.name as category_name from services INNER JOIN categories on services.category_id = categories.id".($id?" where id=$id":''); 
      break;
    case 'POST':
            $name = $_POST["name"];
            $description = $_POST["description"];
            $image = $_POST["image"];
            $sub_image1 = $_POST["sub_image1"];
            $sub_image2 = $_POST["sub_image2"];
            $price = $_POST["price"];
            $category_id = $_POST["category_id"];
            $service_user_name = $_POST["service_user_name"];
            $service_user_phone = $_POST["service_user_phone"];
            $sql = "insert into services (name, description, image, sub_image1, sub_image2, price, category_id, service_user_name, service_user_phone) 
            values ('$name', '$description', '$image','$sub_image1','$sub_image2','$price','$category_id','$service_user_name','$service_user_phone)"; 
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