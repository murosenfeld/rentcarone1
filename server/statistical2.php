<?php

include 'PDO.php';


	
$statement=$pdo-> prepare("SELECT `City`, COUNT(`Name`) AS CountOClient FROM `users`GROUP BY `City`");
$statement-> execute();
$results=$statement->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;







