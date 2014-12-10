<?php

$pdo = new PDO('mysql:host=localhost;dbname=rentcar;charset=utf8', 'root', '');
$statement=$pdo-> prepare("select * from models order by IdModels asc");

$statement-> execute();
$results=$statement->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;

