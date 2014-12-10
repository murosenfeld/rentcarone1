<?php 

$clientId= $_GET["id"];


include 'PDO.php';
$statement=$pdo-> prepare("INSERT INTO clientscar (`IdModels`,`Year`,`NameModel`,`Color`,`SeatingCapacity`,`TypeOfMotor`,`TypeModel`,`AirCondition`,`PriceDay`,`PriceMont`,`ImageModel`,`manufactorId`,`city`,idCar,`NameCar`) 
(SELECT * FROM `models` INNER JOIN manufacturer WHERE idCar=`manufactorId` AND `IdModels`=".$clientId.")");
$statement-> execute();