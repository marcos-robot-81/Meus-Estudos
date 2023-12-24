<?php
	//Sample Database Connection Syntax for PHP and MySQL.
	
	//Connect To Database
	$hostname="localhost";
	$username="Marcos";
	$password="0000";
	$dbname="urse";
	$usertable="usuario";
	$yourfield = "name";
	
	$conn = mysqli_connect($hostname,$username, $password,$dbname) or die ("Erro");
	//;mysqli_select_db($dbname);
	
	# Check If Record Exists
	
	$query = "SELECT * FROM $usertable";
	
	
    ?>
    <!DOCTYPE html>
    <html>
        <head></head>
        <body>
    <?php
    //----------------
	$result = mysqli_query($conn, $query);
	if($result){
		while($row = mysqli_fetch_array($result)){
			$name = $row["$yourfield"];
			echo "Name: ".$name."<br/>";
		}
	}
    //---------------
    $result = mysqli_query($conn, $query);
    $yourfield = "senha";
    if($result){
		while($row = mysqli_fetch_array($result)){
			$name = $row["$yourfield"];
			echo "Name: ".$name."<br/>";
		}
	}
    
    if (!$conn) {
        die("Falha na conexão: " . mysqli_connect_error());
    }

?>
</body>
</html>