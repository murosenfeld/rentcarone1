<?php


$email = $_GET["email"];
$idModels = $_GET["id"];


include 'PDO.php';
$statement=$pdo-> prepare("INSERT INTO `models`(`IdModels`, `Year`, `NameModel`, `Color`, `SeatingCapacity`, `TypeOfMotor`, `TypeModel`, `AirCondition`, `PriceDay`, `PriceMont`, `ImageModel`, `manufactorId`, `city`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10],[value-11],[value-12],[value-13])");
$statement-> execute();
