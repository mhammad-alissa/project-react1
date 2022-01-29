<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");


$postdata = file_get_contents("php://input");
$check = true;

if(empty($name)){

    echo '<script>alert("Welcome to Geeks for Geeks")</script>';
    $check=false;

}elseif(empty($email)){

    echo '<script>alert("Welcome to Geeks for Geeks")</script>';
    $check=false;

}elseif(empty($subject)){

    echo '<script>alert("Welcome to Geeks for Geeks")</script>';
    $check=false;

}elseif(empty($message)){

    echo '<script>alert("Welcome to Geeks for Geeks")</script>';
    $check=false;

}


if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
   
    $name = $request->name;
    $email = $request->email;
    $subject = $request->subject;
    $message = $request->message;
    $sql = "INSERT INTO contacts (name,email,subject,message) VALUES ('$name','$email','$subject','$message')";
    if(mysqli_query($db,$sql)){
    
        http_response_code(201);

    }

    else{
         http_response_code(422); 
    }


}