<?php
$nombre=$_POST['name'];
$email=$_POST['email'];
$mensaje=$_POST['texto'];

$mensaje = "Este mensaje lo mando " . $nombre . ",";


$para = "santineyra97@gmail.com";
$asunto= "Este mail fue enviado desde la web"


mail($para, $asunto, utf8_decode($mensaje))

?>