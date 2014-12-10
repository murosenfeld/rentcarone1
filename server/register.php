<?php 

$username= $_GET["username"];
$email = $_GET["email"];
$pass = $_GET["password"];
$LastName = $_GET["name"];
$city = $_GET['city'];
$phone = $_GET['phone'];
$card = $_GET['cardtype'];
$CardNumber = $_GET['cardnumber'];
$NameofCard = $_GET['namecard'];
$age = $_GET['age'];
$sex = $_GET['sex'];
echo $NameofCard;

include 'PDO.php';
$statement=$pdo-> prepare("INSERT INTO `users`(`Name`, `email`, `password`, `Last Name`, `City`, `Phone`, `Card`, `Card number`, `Name on Card`, `Age`, `Sex`) VALUES ('$username','$email','$pass','$LastName','$city','$phone','$card','$CardNumber','$NameofCard','$age','$sex')");
$statement-> execute();

