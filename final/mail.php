<?php

   $nameError = $emailError = $phoneError = $subjectError = "";
   $name = $email = $phone = $subject = "";

   if ($_SERVER['REQUEST_METHOD'] == 'POST') {

      if (empty($_POST['name'])) {
         $nameError = 'Name if required';
      }
      else {
         $name = test_input($_POST['name']);
         if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
            $nameError = "Only letters and white spaces are allowed in name";
         }
      }

      if (empty($_POST['email'])) {
         $emailError = 'Email missing';
      }
      else {
         $email = test_input($_POST['email']);
         if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
            $emailError = "Not a valid email";
         }
      }

      if (empty($_POST['subject'])) {
         $subjectError = 'Message missing';
      }
      else {
         $subject = test_input($_POST['subject']);
      }


      if (($nameError == '') && ($emailError == '') && ($subjectError == '')){
         $formcontent = "From : $name \n Phone: $phone \n Message: $subject";
         $recipient = "cjbruin23@yahoo.com";
         $subject = "Website Contact Form";
         $mailheader = "From: $email \r\n";
         mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
         echo "Thank you!";
      }
      else {
         echo $nameError, $emailError, $messageError;
      }

   }

   function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
   }

 ?>
