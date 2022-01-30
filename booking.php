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
      $sql = "select * from services_users ".($id?" where id=$id":''); 
      break;
    case 'POST':
            $user_id = $_POST["user_id"];
            $service_id = $_POST["service_id"];
            $delivery = $_POST["delivery"];
            $time_of_day = $_POST["time_of_day"];
            $date_chosen = $_POST["date_chosen"];
            $adults = $_POST["adults"];
            $children = $_POST["children"];
            $status = $_POST["status"];
            $notes = $_POST["notes"];
            $sql = "insert into services_users (user_id, service_id , delivery, time_of_day, date_chosen, adults, children, status, notes) 
            values ('$user_id', '$service_id' , '$delivery' ,'$time_of_day','$date_chosen','$adults','$children','$status','$notes')"; 
    break;
}


// run SQL statement
$result = mysqli_query($db,$sql);
 
//For booking in search component in reactJS
$sql_id  = "select id from services_users ORDER BY id DESC LIMIT 1 ";
$result2 =  mysqli_query($db,$sql_id);
$data2   =  mysqli_fetch_object($result2);

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
    $result = [$result , $data2->id];
    echo json_encode($result);
} else {
    echo mysqli_affected_rows($db);
}

$db->close();


?>