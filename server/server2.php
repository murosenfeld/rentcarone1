<?php

$userId= $_REQUEST['data'];

include 'PDO.php';
$statement=$pdo-> prepare("SELECT `idCar` as id, `NameModel` as value FROM `models` INNER JOIN manufacturer  WHERE idCar=`manufactorId` AND `manufactorId`=".$userId);

$statement-> execute();
$results=$statement->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;








