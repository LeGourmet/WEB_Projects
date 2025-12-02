$(".navLi:eq(3)").click(function(){
    $(".accueil").css({display:"none"});
    $(".pokedex").css({display:"block"});

    $(".navLi").css({
        "text-align":"center",
        padding: "6%",
        "background-color": "#4e3d62",
        "transition-duration": "0.5s",
        border: "1px solid black",
        color: "white"
    });
    $(".navLi").hover(
        function(){$(this).css({"background-color": "#661d99",color: "white"});},
        function(){$(this).css({
            "text-align":"center",
            padding: "6%",
            "background-color": "#4e3d62",
            "transition-duration": "0.5s",
            border: "1px solid black",
            color: "white"
        });}
    );
    $(".navTypes").css({"background-color":"#661d99",color:"white"});
    $(".navTypes").hover(
        function(){$(this).css({});},
        function(){$(this).css({"background-color":"#661d99",color:"white"});});

    $(".list").html("");
    $(".result-content").html("");
    $(".list").html(
        "<section class=\"boxType Normal\" id='1' style='background: #e8dccc;'><img class=\"imageType\" src=\"data/Images/Types/normal.png\" alt=\"\"/></br>Normal</section>\n" +
        "<section class=\"boxType Combat\" id='2' style=' background: #b05111;'><img class=\"imageType\" src=\"data/Images/Types/combat.png\" alt=\"\"/></br>Combat</section>\n" +
        "<section class=\"boxType Vol\" id='3' style='background: #74a4a4;'><img class=\"imageType\" src=\"data/Images/Types/vol.png\" alt=\"\"/></br>Vol</section>\n" +
        "<section class=\"boxType Poison\" id='4' style='background: #8423c6;'><img class=\"imageType\" src=\"data/Images/Types/poison.png\" alt=\"\"/></br>Poison</section>\n" +
        "<section class=\"boxType Sol\" id='5' style='background: #724e11;'><img class=\"imageType\" src=\"data/Images/Types/sol.png\" alt=\"\"/></br>Sol</section>\n" +
        "<section class=\"boxType Roche\" id='6' style='background: #afa379;'><img class=\"imageType\" src=\"data/Images/Types/roche.png\" alt=\"\"/></br>Roche</section>\n" +
        "<section class=\"boxType Insecte\" id='7' style='background: #798f11;'><img class=\"imageType\" src=\"data/Images/Types/insecte.png\" alt=\"\"/></br>Insecte</section>\n" +
        "<section class=\"boxType Spectre\" id='8' style=' background: #4e3d62;'><img class=\"imageType\" src=\"data/Images/Types/spectre.png\" alt=\"\"/></br>Spectre</section>\n" +
        "<section class=\"boxType Acier\" id='9' style='background: #76736a;'><img class=\"imageType\" src=\"data/Images/Types/acier.png\" alt=\"\"/></br>Acier</section>\n" +
        "<section class=\"boxType Feu\" id='10' style='background: #e82300;'><img class=\"imageType\" src=\"data/Images/Types/feu.png\" alt=\"\"/></br>Feu</section>\n" +
        "<section class=\"boxType Eau\" id='11' style='background: #0072e6;'><img class=\"imageType\" src=\"data/Images/Types/eau.png\" alt=\"\"/></br>Eau</section>\n" +
        "<section class=\"boxType Plante\" id='12' style='background: #199228;'><img class=\"imageType\" src=\"data/Images/Types/plante.png\" alt=\"\"/></br>Plante</section>\n" +
        "<section class=\"boxType Electrik\" id='13' style='background: #e8d900;'><img class=\"imageType\" src=\"data/Images/Types/electrique.png\" alt=\"\"/></br>Electrik</section>\n" +
        "<section class=\"boxType Psy\" id='14' style='background: #a97395;'><img class=\"imageType\" src=\"data/Images/Types/psy.png\" alt=\"\"/></br>Psy</section>\n" +
        "<section class=\"boxType Glace\" id='15' style='background: #b5bddb;'><img class=\"imageType\" src=\"data/Images/Types/glace.png\" alt=\"\"/></br>Glace</section>\n" +
        "<section class=\"boxType Dragon\" id='16' style='background: #a6891e;'><img class=\"imageType\" src=\"data/Images/Types/dragon.png\" alt=\"\"/></br>Dragon</section>\n" +
        "<section class=\"boxType Tenebre\" id='17' style=' background: #424242;'><img class=\"imageType\" src=\"data/Images/Types/tenebre.png\" alt=\"\"/></br>Ténèbres</section>\n" +
        "<section class=\"boxType Fee\" id='18' style='background: #ff2d8f;'><img class=\"imageType\" src=\"data/Images/Types/fee.png\" alt=\"\"/></br>Fée</section>\n"
    );
    $(".boxType").click(function (){
        $.ajax({
            url: 'content/php/getInfoTypes.php',
            type: 'POST',
            data: {id : this.id},
            datatype: "html"
        }).done(function(textL){
            $(".result-content").html(textL);
            var modal = document.getElementById("result");
            modal.style.display = "block";
            document.getElementById("resultClose").onclick = function (){modal.style.display = "none"};
            window.onclick = function (event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            }
        });
    });
});