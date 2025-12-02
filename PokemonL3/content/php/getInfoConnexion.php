<?php
session_start();
Try{
    $connection = new PDO("mysql:host=localhost;dbname=myPokeDataBase", "root", "");
    $connection->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    $query = $connection->prepare("SET NAMES UTF8");
    $query->execute();

    $pseudo = (string) $_POST['pseudo'];

    $query = $connection->prepare("SELECT pseudo,mdp FROM Utilisateur WHERE pseudo=:pseudo");
    $query->execute(array(':pseudo' => $pseudo));
    $result = $query->fetchall();

    if($result!=null){
        if(password_verify($_POST['password'],$result[0][1])){
            $tmp = (string) $result[0][0];
            $_SESSION['pseudo'] = $tmp;
            echo "OK";
        }else{
            echo "Password incorrect!";
        }
    }else{
        echo "Pseudo incorrect!";
    }

    $connection = null;
}
CATCH(PDOEXCEPTION $e){echo 'echec in connection:' . $e->getMessage();}
