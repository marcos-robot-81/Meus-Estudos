
<?php
$name = $_REQUEST["name"] ?? "00";
$senha = intval($_REQUEST["senha"] ?? "00");
$s = $senha == 0000;
$n = $name == "marcos";

if ($s == $n) {
    echo '
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>tudo certo <h1/>
        </body>
        </html>
        ';
}else{
    echo '
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Senha ou nome incoretor <h1/>
        </body>
        </html>
        ';
};
    
       

?>