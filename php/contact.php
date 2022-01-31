<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");


// $postdata = file_get_contents("php://input");
// $check = true;


// $check = true;

// if(empty($name)){
//     $name_error = 'please enter User Name';
//     $check = false;
//   }
// if(empty($email)){
//     $email_error = 'please enter User phone';
//     $check = false;
//   }
//   if(empty($subject)){
//     $email_error = 'please enter your email ';
//     $check = false;
//   }
//   if(empty($message)){
//     $message_error = 'please enter a message';
//     $check = false;
//   }

if(isset($_POST) && !empty($_POST)){ 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $sql = "INSERT INTO contacts (name,email,subject,message) VALUES ('$name','$email','$subject','$message')";
    if(mysqli_query($db,$sql)){
        http_response_code(201);
    }

    else{
      echo "Error";
         http_response_code(422); 
    }
}