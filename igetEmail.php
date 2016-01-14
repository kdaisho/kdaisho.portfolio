<?php
  $user =  filter_var($_POST['Name'],FILTER_SANITIZE_STRING);
  $email =  filter_var($_POST['email'],FILTER_SANITIZE_EMAIL);
  $message =  filter_var($_POST['question'],FILTER_SANITIZE_STRING);
  
  //mail(to,subject,message,from);
  
  $msg ="
  You just got a new contact from your Portfolio Website!
  Name: $user
  Email: $email
  
  Question from the contact:
  $message";
  
  mail("Kdaisho <info@daishodesign.com>",'Contact from your portfolio',$msg,"From:Daisho Portfolio <no-reply@info@daishodesign.com>");
  
  echo  "<p style='color:rgb(2,136,209); font-size:24px;'>Thank you $user, I will get back to you soon!</p>";

  
 ?>