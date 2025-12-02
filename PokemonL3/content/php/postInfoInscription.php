<?php
Try{
    $connection = new PDO("mysql:host=localhost;dbname=myPokeDataBase", "root", "");
    $connection->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    $query = $connection->prepare("SET NAMES UTF8");
    $query->execute();

    $pseudo = (string) $_POST['pseudo'];
    $mail = (string) $_POST['mail'];

    $query = $connection->prepare("SELECT pseudo FROM Utilisateur WHERE pseudo=:pseudo");
    $query->execute(array(':pseudo' => $pseudo));
    $result = $query->fetchall();
    if($result!=null){
        echo "Pseudo already use.";
    }else{

        $query = $connection->prepare("SELECT mail FROM Utilisateur WHERE mail=:mail");
        $query->execute(array(':mail' => $mail));
        $result = $query->fetchall();
        if($result!=null){
            echo "Mail already use.";
        }else{
            $name = (string) $_POST['name'];
            $firstName = (string) $_POST['firstname'];
            $psw = (string) password_hash($_POST['password'],PASSWORD_DEFAULT);
            $birth = $_POST['birthdate'];

            $query = $connection->prepare("INSERT INTO Utilisateur VALUE (:pseudo,:mdp,:nom,:prenom,:mail,:birth)");
            $query->execute(array(':pseudo' => $pseudo,':mdp' => $psw,':nom' => $firstName,':prenom' => $name,':mail' => $mail,':birth' => $birth));
            echo "OK";
        }
    }

    $connection = null;
}
CATCH(PDOEXCEPTION $e){echo 'echec in connection:' . $e->getMessage();}