<?php
require('connect.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization,Origin, X-Requested-With, Content");
header('Content-Type: application/json; charset=utf-8');
$id = $_POST['id'];
$sql = "SELECT * FROM users where id = $id;";
$result = $db->query($sql);
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
print json_encode($row); 
//Update User Data
// $postdata = file_get_contents("php://input");
if(isset($_POST) && !empty($_POST)){
    move_uploaded_file($_FILES['test']['tmp_name'],"../travelix/public/userImages/".$_FILES['test']['name']);
    // $request = json_decode($postdata);
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $id=$_POST['id'];
    // $image=$request->image;
    $phone = $_POST['phone'];

    if ($_POST['image_name']==""){
      // $sql = "SELECT * FROM users WHERE id=$id";
      // $result = $db->query($sql);
      // $row = $result->fetch_assoc();
      $image_name='sc.jpg';
    }else{
      $image_name = $_POST['image_name'];
    }
    // print_r($_FILES["image"]);
    $destination="/img".$_FILES['test']['name'];
    // move_uploaded_file($_FILES['test']['tmp_name'],"/img".$_FILES['test']['name']);
    $sql_edit = "UPDATE users
            SET name = '$name', email= '$email',password='$password', phone='$phone',image='$image_name'
            WHERE id = $id;";
    if(mysqli_query($db,$sql_edit)){
        http_response_code(201);
    }
    else{
         http_response_code(422); 
    }
}
?>
