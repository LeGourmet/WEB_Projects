<?php
Try{
    $connection = new PDO("mysql:host=localhost;dbname=myPokeDataBase", "root", "");
    $connection->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    $query = $connection->prepare("SET NAMES UTF8");
    $query->execute();

    $v = $_POST['t'];
    $id = (int) $_POST['id'];
    if($v=='R'){
        $query = $connection->prepare("SELECT nom,id FROM Attaque ORDER BY nom ASC");

        $query->execute();
        $result = $query->fetchall();

        echo "<input type='Text' class='search' value='Rechercher' name='Rechercher' size='15' onfocus=\"this.value=''\" onblur=\"this.value = this.name;\"
                onkeyup=\"
                let obj = document.getElementsByClassName('listAtt')[0].getElementsByTagName('li');
                for(let i = 0; i <obj.length ; i++){
                    obj[i].style.display = 'block';
                    if(this.value !== 'Rechercher' && !(obj[i].textContent.toUpperCase().trim().includes(this.value.toUpperCase().trim()))){
                        obj[i].style.display = 'none';
                }}\"></br>";

        echo "<input type='button' value='reset' class='buttonSearch'
              onclick=\"
              let obj = document.getElementsByClassName('listAtt')[0].getElementsByTagName('li');
              for(let i = 0; i <obj.length ; i++){obj[i].style.display = 'block';}\">";

        echo "<ul class='listAtt'>";
        for($i=0;$i<sizeof($result);$i++){
            $nom = $result[$i][0];
            $tmp = $result[$i][1];
            echo "<li class=\"attaque\" id='$tmp'>$nom</li>";
        }
        echo "</ul>";
    }elseif($v=='L'){
        $query = $connection->prepare("SELECT nom,type,puissance,pp,`precision`,description FROM Attaque WHERE id=$id");

        $query->execute();
        $result = $query->fetchall();

        $nom = $result[0][0];
        $type = $result[0][1];
        $pui = $result[0][2];
        $pp = $result[0][3];
        $pre = $result[0][4];
        $descr = $result[0][5];

        echo "<h1>Nom : $nom<span id='resultClose' class='close'>&times;</span></h1><br>
                  <ul class='Attaque'>
                    <li>Type : $type</li>
                    <li>Puissance : $pui</li>
                    <li>PP : $pp</li>
                    <li>Precision : $pre</li>
                    <li>Description : $descr</li>
                  </ul>
               ";
    }
    $connection = null;
}
CATCH(PDOEXCEPTION $e){echo 'echec in connection:' . $e->getMessage();}