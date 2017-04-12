<?php
	$data = json_decode(file_get_contents('php://input'), true);

	$name = filter_var($data['Name'], FILTER_SANITIZE_STRING);
	$email = filter_var($data['email'], FILTER_SANITIZE_STRING);
	$question = filter_var($data['question'], FILTER_SANITIZE_STRING);

	$msg = "You just got a new contact from your Portfolio Website!" .
	"\r\nName: " . $name .
	"\r\nEmail: " . $email .
	"\r\nQuestion from the contact: " . $question;

	mail("Kdaisho <info@daishodesign.com>", 'Contact from your portfolio', $msg, "From:Daisho Portfolio <no-reply@info@daishodesign.com>");

	echo  "<p style='color:rgb(2,136,209); font-size:24px;'>Thank you " . $name . ", I will get back to you soon!</p>";
 ?>