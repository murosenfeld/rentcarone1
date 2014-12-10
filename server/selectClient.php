<?php

include 'PDO.php';
$statement=$pdo-> prepare("SELECT * FROM `orderbyclient` order by `idOrder` asc");

$statement-> execute();
$results=$statement->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;

