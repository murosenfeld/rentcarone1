<?php

$userId= $_REQUEST['city'];

include 'PDO.php';
$statement=$pdo-> prepare("SELECT `idCar` as id, `NameCar` as value, `Year`,`NameModel`,`Color`,`SeatingCapacity`,`TypeOfMotor`,`TypeModel`,`AirCondition`,`PriceDay`,`PriceMont`,`ImageModel`,`city`,`manufactorId` FROM `models` INNER JOIN manufacturer  WHERE idCar=`manufactorId`  AND `city`='".$userId."'");

$statement-> execute();
$results=$statement->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;
