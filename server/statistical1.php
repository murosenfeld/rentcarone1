<?php

$count =2;

include 'PDO.php';

for ($i=14; $i>$count; $count++){
	
$statement=$pdo-> prepare("SELECT `idCar` as id, `NameModel` as value, NameCar, COUNT(`manufactorId`) AS CountOfCars FROM `models` INNER JOIN manufacturer  WHERE idCar=`manufactorId` AND `manufactorId`=".$count);
$statement-> execute();
$results=$statement->fetchAll(PDO::FETCH_ASSOC);
$json[] = $results;}
echo json_encode($json);







