<?php 

require("clasesMails/class.phpmailer.php");
$mail = new PHPMailer();
$mail->Host = "localhost";
$mail->IsHTML(true);


$nombre = $_POST['nombre'];
$asunto = $_POST['asunto'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];


$cuerpo =   "";


$cuerpo  .= "

<h1>FORMULARIO GRUPO PAMPAS</h1>
Nombre: ".$nombre." <br>
Email: ".$email." <br>
Asunto: ".$asunto." <br>
Mensaje: ".$mensaje." <br>

";


$mail->From = "mcd77.1990@gmail.com";
$mail->FromName = "GRUPO PAMPAS";
$mail->Subject = "MENSAJE DESDE SITIO WEB";
$mail->AddAddress('mcd77.1990@gmail.com',"GRUPO PAMPAS");
$mail->Body = $cuerpo;
$mail->AltBody = "";

  
      $mail->Send();

 ?>