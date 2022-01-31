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

$sql_contacts       = "select count(*) as contact_nums from contacts ".($id?" where id=$id":''); 
$sql_services       = "select count(*) as services_nums from services ".($id?" where id=$id":''); 
$sql_users          = "select count(*) as users_nums from users ".($id?" where id=$id":''); 
$sql_services_users = "select count(*) as services_users_nums from services_users ".($id?" where id=$id":''); 

// run SQL statement
$result_contacts       = mysqli_query($db,$sql_contacts);
$result_services       = mysqli_query($db,$sql_services);
$result_users          = mysqli_query($db,$sql_users);
$result_services_users = mysqli_query($db,$sql_services_users);

// die if SQL statement failed
if (!$result_contacts || !$result_services || !$result_users || !$result_services_users  ) {
  http_response_code(404);
  die(mysqli_error($db));
}

$contacts  = mysqli_fetch_assoc($result_contacts);
$services  = mysqli_fetch_assoc($result_services);
$users     = mysqli_fetch_assoc($result_users);
$ser_users = mysqli_fetch_assoc($result_services_users);

$result = array_merge($contacts,$services,$users,$ser_users);
print json_encode($result);

$db->close();


?>