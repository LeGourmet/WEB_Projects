<?php
Try{
    $connection = new PDO("mysql:host=localhost;dbname=myPokeDataBase", "root", "");
    $connection->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    $query = $connection->prepare("SET NAMES UTF8");
    $query->execute();

    $v = $_POST['t'];
    $id = (int) $_POST['id'];
    if($v=="R"){
        $query = $connection->prepare("SELECT id_national,nom,id FROM Pokemon ORDER BY id_national,nom ASC");

        $query->execute();
        $result = $query->fetchall();

        echo "<input type='Text' class='search' value='Rechercher' name='Rechercher' size='15' onfocus=\"this.value=''\" onblur=\"this.value = this.name;\"
                onkeyup=\"
                let obj = document.getElementsByClassName('listPok')[0].getElementsByTagName('li');
                for(let i = 0; i <obj.length ; i++){
                    obj[i].style.display = 'block';
                    if(this.value !== 'Rechercher' && !(obj[i].textContent.toUpperCase().trim().includes(this.value.toUpperCase().trim()))){
                        obj[i].style.display = 'none';
                }}\"></br>";

        echo "<input type='button' value='reset' class='buttonSearch'
              onclick=\"
              let obj = document.getElementsByClassName('listPok')[0].getElementsByTagName('li');
              for(let i = 0; i <obj.length ; i++){obj[i].style.display = 'block';}\">";

        echo "<ul class='listPok'>";
        for($i=0;$i<sizeof($result);$i++){
            $tmp = $result[$i][2];
            $id = $result[$i][0];
            $nom = $result[$i][1];
            echo "<li class=\"poke\" id='$tmp'>$id : $nom</li>";
        }
        echo "</ul>";
    }elseif($v=="L"){
        $query = $connection->prepare("SELECT nom,poids,taille,description,type1,type2,talent1,talent2,pv,attaque,defense,attaque_spe,defense_spe,vitesse FROM Pokemon WHERE id=$id");

        $query->execute();
        $result = $query->fetchall();

        $nom = $result[0][0];
        $poids = $result[0][1];
        $taille = $result[0][2];
        $description = $result[0][3];
        $types = $result[0][4];
        if($result[0][5]!=""){
            $types .= " ".$result[0][5];
        }
        $pv = $result[0][8];
        $att = $result[0][9];
        $def = $result[0][10];
        $attS = $result[0][11];
        $defS = $result[0][12];
        $vit = $result[0][13];

        $query = $connection->prepare("SELECT t.nom,t.description FROM Pokemon p LEFT JOIN Talent t ON p.talent1=t.nom WHERE p.id=$id");
        $query->execute();
        $result = $query->fetchall();
        $talents = "<ul><li>".$result[0][0]." : ".$result[0][1]."</li>";
        $query = $connection->prepare("SELECT t.nom,t.description FROM Pokemon p LEFT JOIN Talent t ON p.talent2=t.nom WHERE p.id=$id");
        $query->execute();
        $result = $query->fetchall();
        if($result[0][0]!=""){
            $talents .= "<li>".$result[0][0]." : ".$result[0][1]."</li>";
        }
        $talents .= "</ul>";

        echo "<span id='resultClose' class='close'>&times;</span>
                  <section class='Nom'>Nom : $nom</section>
                  <div class='InfoGenPoke'><section class=\"image\"><img src='data/Images/Pokemons/$id.jpg' alt='img poke'></section>
                  <section class='Stats'>Statistiques : <br>
                    <ul>
                        <li>PV : $pv</li>
                        <li>Attaque : $att</li>
                        <li>Défense : $def</li>
                        <li>Attaque Spé : $attS</li>
                        <li>Défense Spé : $defS</li>
                        <li>Vitesse : $vit</li>
                    </ul>
                  </section></div>
                  <section class='General'>Poids : $poids, Taille : $taille</section>
                  <section class=\"Types\">Type(s) : $types<br></section>
                  <section class='descr'>Description : $description</section>
                  <section class=\"Talents\">Talent(s) :</br>$talents<br></section>";

        $query = $connection->prepare("SELECT attaque_lv,attaque_CS,formes FROM Pokemon WHERE id=$id");
        $query->execute();
        $result = $query->fetchall();

        $lv = $result[0][0];
        $lv = explode("€",$lv);
        for($i=0;$i<sizeof($lv);$i++) {
            $lv[$i] = explode("$", $lv[$i]);
        }
        $cs = $result[0][1];
        $cs = explode("€",$cs);
        for($i=0;$i<sizeof($cs);$i++) {
            $cs[$i] = explode("$", $cs[$i]);
        }

        echo "<h1>Attaques apprises par niveau</h1><table>";
        for($i=0;$i<sizeof($lv)-1;$i++){
            echo "<tr>";
            for($j=0;$j<sizeof($lv[$i])-1;$j++){
                $res = $lv[$i][$j];
                echo "<td>$res</td>";
            }
            echo "</tr>";
        }
        echo "</table>";
        echo "<h1>Attaques apprises pas cs</h1><table>";
        for($i=0;$i<sizeof($cs)-1;$i++){
            echo "<tr>";
            for($j=0;$j<sizeof($cs[$i])-1;$j++){
                $res = $cs[$i][$j];
                echo "<td>$res</td>";
            }
            echo "</tr>";
        }
        echo "</table>";

        $formes = $result[0][2];
        $formes = explode("]",$formes);
        $t=sizeof($formes);
        for($i=0;$i<sizeof($formes);$i++) {
            $formes[$i] = explode("[",$formes[$i]);
        }
        for($i=0;$i<sizeof($formes);$i++){
            for($j=0;$j<sizeof($formes[$i]);$j++) {
                $formes[$i][$j] = explode("$", $formes[$i][$j]);
            }
        }
        echo "<section class='formes'>";
        for($i=0;$i<sizeof($formes)-1;$i++){
            for($j=1;$j<sizeof($formes[$i]);$j++) {
                for($k=0;$k<sizeof($formes[$i][$j]);$k++) {
                    $tmp = $formes[$i][$j][$k];
                    if($j==1){
                        echo "<div class='forme'><h2>$tmp</h2>";
                    }else{
                        if($k%2==0){
                            echo"<ul><li>$tmp</li>";
                        }else{
                            echo"<li>$tmp</li></ul>";
                        }
                    }
                }
                echo "</div>";
            }
        }
        echo "</section>";
    }
    $connection = null;
}
CATCH(PDOEXCEPTION $e){echo 'echec in connection:' . $e->getMessage();}
