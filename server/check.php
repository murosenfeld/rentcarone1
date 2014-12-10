<?php 

session_start();

if(isset($_POST['username'], $_POST['password'])){

$email = $_POST['username'];
$pass = $_POST['password'];



include 'PDO.php';
$statement=$pdo-> prepare("SELECT id,name,`email`,status FROM users WHERE `email`='$email' AND `password`='$pass' AND status='active';");
$statement-> execute();
$results=$statement->fetchAll(PDO::FETCH_ASSOC);


if(count($results)>0)
{
    
   
    $json = json_encode($results);
 //   var_dump($json['id']);
    echo $json;
}
 else {
     echo 1;
}
/*
foreach ($results as $key => $useless){

    if($useless['status']=='active' ) {
	
    echo 'true';
   
    }
if ($useless['status']=='inactive'){
    echo 'false';
}
}


$num=$results->rowCount(PDO::FETCH_ASSOC);
if($num > 0){
    header("location:ejemplo1.html");
}
else{
    header("location:statistical.html");

}

*/
}
 
