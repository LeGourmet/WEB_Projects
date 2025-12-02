<?php
    session_start();
    $_SESSION['pseudo'] = '';
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>test</title>
    <link rel="stylesheet" href="style/Styles.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script defer src="content/js/acceuil.js"></script>
    <script defer src="content/js/attaques.js"></script>
    <script defer src="content/js/pokemon.js"></script>
    <script defer src="content/js/types.js"></script>
    <script defer src="content/js/account.js"></script>
</head>
<body>
    <header>
        <section class="navigation">
            <ul class="navUl">
                <li class="navLi navLeft">Accueil</li>
                <li class="navLi navPoke">Pokemon</li>
                <li class="navLi navAtt">Attaques</li>
                <li class="navLi navTypes">Types</li>
                <li class="navLi navRight">Connexion</li>
            </ul>
    </header>
    <main>
        <section class="accueil">
            <p class="texteAccueil">Bonjour et bienvenu sur ce Pokedex.<br><br>
                Vous trouverez ici toutes les informations nécessaires pour avancer convenablement dans l'univers des Pokemon.<br>
                Ici, vous ne trouverez aucune information sur les oeufs ou autre sorcellerie ! Seul le strict
                nécessaire sera présent comme par exemple les noms des Pokemon, leurs types et attaques, et les
                détails sur celles-ci.<br><br>
                Vous pourrez également rejoindre toute une communauté demandeuse de simplicité grâce à notre
                tchat instantanée, alors n'hésitez pas à vous inscrire !
                <br>Bonne visite à tous !
            </p>
            <p class="texteAccueil">
                Site nous ayant "permi" de récupérer les informations nécessaires à la création de la base de données :<br>
                <br><a href="https://www.pokebip.com/pokedex/pokemon">Pokebip</a>
            </p>
        </section>

        <section class="pokedex" style="display: none">
            <section class="list"></section>
            <section id="result" class="modal">
                <section class="result-content"></section>
            </section>
        </section>

        <section id="modal" class="modal">
            <section class="modal-content">
                <div class="modal-header"></div>
                <div class="modal-body"></div>
                <div class="modal-footer"></div>
            </section>
        </section>

        <section class="tchat" style="display:none">
            <section class="imageTchat"><button class="buttonImgTchat"></button></section>
            <section class="tchat-content"></section>
        </section>
    </main>
    <footer>Un site de Allan Blanchard et Antoine Bouin</footer>
</body>
</html>