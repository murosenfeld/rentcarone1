<?php

$email = $_GET["email"];
$idModels = $_GET["id"];

include 'PDO.php';
$statement=$pdo-> prepare("INSERT INTO `orderbyclient`(`email`,`idModels`) VALUES ('$email','$idModels')");
$statement-> execute();
