<?php

$userId= $_REQUEST['id'];
$userModel= $_REQUEST['value'];


include 'PDO.php';
$statement=$pdo-> prepare("SELECT `idCar` as id, `NameCar` as value, `Year`,`NameModel`,`Color`,`SeatingCapacity`,`TypeOfMotor`,`TypeModel`,`AirCondition`,`PriceDay`,`PriceMont`,`ImageModel` FROM `models` INNER JOIN manufacturer 
WHERE NameModel='".$userModel. "' AND IdCar=".$userId);

$statement-> execute();
$results=$statement->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;
