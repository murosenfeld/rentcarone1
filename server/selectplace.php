<?php

include 'PDO.php';
$statement=$pdo-> prepare("select * from models order by IdModels asc");

$statement-> execute();
$results=$statement->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;

