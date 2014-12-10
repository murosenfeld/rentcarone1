<?php



include 'PDO.php';
$statement=$pdo-> prepare("SELECT `idCar` as id, `NameCar` as value FROM `manufacturer` ");

$statement-> execute();
$results=$statement->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;
