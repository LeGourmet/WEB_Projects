<?php
Try{
    $connection = new PDO("mysql:host=localhost;dbname=myPokeDataBase", "root", "");
    $connection->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    $query = $connection->prepare("SET NAMES UTF8");
    $query->execute();

    $id = (int) $_POST['id'];

    $query = $connection->prepare("SELECT normal,combat,vol,poison,sol,roche,insecte,spectre,acier,feu,eau,plante,electrik,psy,glace,dragon,ténèbres,fée,nom FROM Types WHERE id=$id");
    $query->execute();
    $result = $query->fetchall();

    $nom = $result[0][18];
    echo "<h1>$nom<span id='resultClose' class='close'>&times;</span></h1>\n";
    echo "<table class='faiblesses'>";
    echo "<tr><td>normal</td><td>combat</td><td>vol</td><td>poison</td><td>sol</td><td>roche</td><td>insecte</td>
                  <td>spectre</td><td>acier</td><td>feu</td><td>eau</td><td>plante</td><td>electrik</td><td>psy</td>
                  <td>glace</td><td>dragon</td><td>ténèbre</td><td>fée</td></tr>";
    echo "<tr>";
    for($i=0;$i<18;$i++){
        $res = $result[0][$i];
        echo "<td>$res</td>";
    }
    echo "</tr></table>";
    $connection = null;
}
CATCH(PDOEXCEPTION $e){echo 'echec in connection:' . $e->getMessage();}
