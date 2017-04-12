<?php
  // $user = filter_var($_POST['Name'],FILTER_SANITIZE_STRING);
  // $email = filter_var($_POST['email'],FILTER_SANITIZE_EMAIL);
  // $message = filter_var($_POST['question'],FILTER_SANITIZE_STRING);

  // $str_json = file_get_contents('php://input');

  // echo $str_json;

	$data = json_decode(file_get_contents('php://input'), true);

	// print_r($data);
	echo $data["Name"];
  
  //mail(to,subject,message,from);
  
  // $msg ="
  // You just got a new contact from your Portfolio Website!
  // Name: $user
  // Email: $email
  
  // Question from the contact:
  // $message";

	$msg = "You just got a new contact from your Portfolio Website!
	Name: " . $data['Name'] .
	"Email: ". $data['email'] .
	"Question from the contact: " . $data['question'];

  
  // mail("Kdaisho <info@daishodesign.com>",'Contact from your portfolio',$msg,"From:Daisho Portfolio <no-reply@info@daishodesign.com>");
  mail("Kdaisho <info@daishodesign.com>", 'Contact from your portfolio', $msg, "From:Daisho Portfolio <no-reply@info@daishodesign.com>");
  
  // echo  "<p style='color:rgb(2,136,209); font-size:24px;'>Thank you $user, I will get back to you soon!</p>";
  echo  "<p style='color:rgb(2,136,209); font-size:24px;'>Thank you " . $data['Name'] . ", I will get back to you soon!</p>"; 
 ?>