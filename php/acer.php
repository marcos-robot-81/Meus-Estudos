<?php 
    // inicio
	$hostname="localhost";
	$username="Marcos";
	$password="0000";
	$dbname="urse";
	$usertable="usuario";
	$yourfield = "name";
	$conn = mysqli_connect($hostname,$username, $password,$dbname) or die ("Erro");
	$query = "SELECT * FROM $usertable";

    // login
    $name = $_REQUEST["name"] ?? null;
    $senha = intval($_REQUEST["senha"] ?? null);
    $v = [-1,-2];

    $result = mysqli_query($conn, $query);
	if($result){
		while($row = mysqli_fetch_array($result)){
			$n1 = $row["$yourfield"];
            
            if($n1 == $name){
                $v[0] = 1;
                break;
            }
			
		}
	}
    //---- 
    $result = mysqli_query($conn, $query);
    $yourfield = 'senha';
	if($result){
		while($row = mysqli_fetch_array($result)){
			$n1 = $row["$yourfield"];
            
            if($n1 == $senha){
                $v[1] = 1;
                break;
            }
			
		}
	}
    
   
?>

<!DOCTYPE html>
<html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
<?php

if ($v[0] == $v[1]) {
    printf("<p>Ola, seja bem vindo: %s </p>",$name);
}else{
    echo '<h1>Senha ou nome incoretor <h1/>';
};



?>
</body>
</html>