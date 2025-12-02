<?php
session_start();
Try{
    $connection = new PDO("mysql:host=localhost;dbname=myPokeDataBase", "root", "");
    $connection->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    $query = $connection->prepare("SET NAMES UTF8");
    $query->execute();

    $msg = (string) $_POST['msg'];
    $pseudo = (string) $_SESSION['pseudo'];
    $query = $connection->prepare("INSERT INTO Tchat(pseudo,message,`date`) VALUE (:pseudo,:msg,NOW())");
    $query->execute(array(':pseudo' => $pseudo,':msg' => $msg));

    $connection = null;
}
CATCH(PDOEXCEPTION $e){echo 'echec in connection:' . $e->getMessage();}