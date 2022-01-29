<?php
header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
require("connect.php");

$id = '';
$method = $_SERVER['REQUEST_METHOD'];


      if(isset($_GET["id"])){
        $id = $_GET['id'];  
        
      }  
      echo $id;   
      $sql = "select * from services"; 

      
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