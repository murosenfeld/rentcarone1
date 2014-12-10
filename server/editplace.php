<?php


include 'PDO.php';
$statement=$pdo-> prepare("update models set ".$_POST["campo"]."='".$_POST["valor"]."' where IdModels='".intval($_POST["id"])."' limit 1");
$statement-> execute();

