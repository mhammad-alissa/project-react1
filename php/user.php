<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "travelix";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}



$sql = "SELECT * FROM users";
$result = $conn->query($sql);
$rows=array();
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    $rows[] = $row;
    // print_r($rows);
    // echo "DATA1: " . $row["coffee_name"]. " - DATA2: " . $row["coffee_name"]. "<br>";
  }
} else {
  echo "0 results";
}
print json_encode($rows); 
//Update User Data
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $name = $request->name;
    $email = $request->email;
    $password = $request->password;
    $id=$request->id;
    $sql_edit = "UPDATE users
            SET name = '$name', email= '$email',password='$password'
            WHERE id = $id;";
    if(mysqli_query($conn,$sql_edit)){
        http_response_code(201);
        header('Location: http://www.google.com/');
    }
    else{
         http_response_code(422); 
    }
    
}
?>