<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
// $postdata = file_get_contents("php://input");
// $check = true;
// if(empty($name)){
//     $fullName_error = 'please enter User Name';
//     $check = false;
//   }
// if(empty($phone)){
//     $fullName_error = 'please enter User phone';
//     $check = false;
//   }
//   if(empty($email)){
//     $email_error = 'please enter your email ';
//     $check = false;
//   }
// //   else if(!(preg_match("/^[A-z0-9._-]+@(hotmail|gmail|yahoo).com$/", $email))) {
// //     $email_error = 'Email is not valid';
// //     $check = false;
// //   }
//   else{
//       $sql="SELECT * FROM users WHERE email='".$email."' limit 1 ";
//       $result = mysqli_query($conn,$sql);

//       if(mysqli_num_rows($result) == 1){
//           $email_error = "The email you entered already exists";
//           $check = false;
//       }
//   }
// //   if($_FILES['fileToUpload']['size'] === 0){
// //       $img_error = 'please select image';
// //       $check = false;
// //   }
//   if(empty($password)){
//     $pass_error = 'please enter your password';
//     $check = false;
//   }else if(!preg_match('#.*^(?=.{8,20})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$#',$password)) {
//     $pass_error = 'password is not valid';
//     $check = false;
//   }
//   if(empty($ConfirmPass)){
//     $ConfirmPass_error = 'please enter your password';
//     $check = false;
//   }else if($ConfirmPass != $pass ) {
//     $ConfirmPass_error = 'password is not match';
//     $check = false;
//   }

//   if($check == true){
if(isset($_POST) && !empty($_POST)){
    // $request = json_decode($postdata);
   
     
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $image = $_POST['image_name'];
    $sql="SELECT * FROM users WHERE email='".$email."' limit 1 ";
    $result = mysqli_query($db,$sql);

      if(mysqli_num_rows($result) == 1){
          $email_error = "The email you entered already exists";
          echo json_encode($email_error);
      }else{
    move_uploaded_file($_FILES['image']['tmp_name'],"../travelix/public/userImages/".$_FILES['image']['name']);
    $sql_insert = "INSERT INTO users (name,email,phone,password,image) VALUES ('$name','$email','$phone','$password','$image')";
    if(mysqli_query($db,$sql_insert)){
      // header('location:./')
        http_response_code(201);
        print json_encode($_POST);
    }

    else{
         http_response_code(422); 
    }
  }
//   }
// $check = false;
// if($check = true){
//   echo "  ";
// }
// $check = true;      
// }
}

?> 