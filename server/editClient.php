<?php

include 'PDO.php';
$statement=$pdo-> prepare("orderbyclient set ".$_POST["campo"]."='".$_POST["valor"]."where idOrder=".intval($_POST["id"])."' limit 1");
$statement-> execute();

