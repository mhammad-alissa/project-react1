<?php
require 'connect.php';
header("Access-control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 

 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');

 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);

 // Populate User email from JSON $obj array and store into $email.
 $email = $obj['email'];

 // Populate Password from JSON $obj array and store into $password.
 $password = $obj['password'];

 //Applying User Login query with email and password match.
 $Sql_Query = "select * from users where email = '$email' and password = '$password' ";

 // Executing SQL Query.
 $check = mysqli_fetch_array(mysqli_query($db,$Sql_Query));
$result = mysqli_query($db,$Sql_Query);
$row = mysqli_fetch_assoc($result);

 if(isset($check)){
     $SuccessLoginMsg = 'Data Matched';

     // Converting the message into JSON format.
     $SuccessLoginJson = json_encode($SuccessLoginMsg);

     // Echo the message.
    //  echo $SuccessLoginJson ;
    print json_encode($row,true);

 } else{

     // If the record inserted successfully then show the message.
     $InvalidMSG = 'Invalid Username or Password' ;

     // Converting the message into JSON format.
     $InvalidMSGJSon = json_encode($InvalidMSG);

     // Echo the message.
     echo $InvalidMSGJSon ;

 }

 mysqli_close($db);




// $postdata = file_get_contents("php://input");
// if(isset($postdata) && !empty($postdata)){
//     $request = json_decode($postdata);
     
     
//     $email = $request->email;
//     $password = $request->password;
//     $sql="SELECT * FROM users WHERE email='".$email."' AND password='".$password."' limit 1 ";
   
   //  $sql = "INSERT INTO users (name,email,phone,password) VALUES ('$name','$email','$phone','$password')";
    // if(mysqli_query($db,$sql)){
    //     http_response_code(201);
    // }
    // else{
    //      http_response_code(422); 
    // }
   //  $sqluser = mysqli_query($db,$sql);

   //  if(mysqli_num_rows($sqluser) == 1){
      //  session_start();
      //   if(!isset($_SESSION['user'])){
      //      $row1 = $sqluser->fetch_assoc();
      //      $_SESSION['user'] = $row1['user_id'];
      //   }

   //  header("Location:./index.php");
   //  header("mmmmmmmm");
       
   // }
// else {
//        //  if user
//        $sql_user="SELECT * FROM users WHERE user_email='".$email."' AND user_password='".$pass."' limit 1 ";

//        $result_user = mysqli_query($conn,$sql_user);
       
//            if(mysqli_num_rows($result_user) == 1){
//                // session_start()
//                session_start();
//                 if(!isset($_SESSION['user'])){
//                   $row2 = $result_user->fetch_assoc();
//                   $_SESSION['user'] = $row2['user_id'];
//                 }
//                    echo $_SESSION['user'];
//                 header("Location:../index.php");

//            }
         
// }
?> 