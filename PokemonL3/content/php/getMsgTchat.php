<?php
Try{
    $connection = new PDO("mysql:host=localhost;dbname=myPokeDataBase", "root", "");
    $connection->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    $query = $connection->prepare("SET NAMES UTF8");
    $query->execute();

    $query = $connection->prepare("SELECT pseudo,message,`date` FROM Tchat ORDER BY id ASC");
    $query->execute();
    $result = $query->fetchall();

    foreach ($result as $res) {
        $qui = $res[0];
        $quand = $res[2];
        $quoi = $res[1];
        echo "<p class='msg'><span class='qui_quand'>$qui le $quand</span><span class='quoi'> : $quoi</span></p></br>";
    }

    $connection = null;
}CATCH(PDOEXCEPTION $e){echo 'echec in connection:' . $e->getMessage();}