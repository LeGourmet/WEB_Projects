$(".navLi:eq(1)").click(function(){
    $(".accueil").css({display:"none"});
    $(".pokedex").css({display:"block"});

    $(".navLi").css({
        "text-align":"center",
        padding: "6%",
        "background-color": "#4e3d62",
        "transition-duration": "0.5s",
        overflow: "hidden",
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
            overflow: "hidden",
            border: "1px solid black",
            color: "bwhite"
        });}
    );
    $(".navPoke").css({"background-color":"#661d99",color:"white"});
    $(".navPoke").hover(
        function(){$(this).css({});},
        function(){$(this).css({"background-color":"#661d99",color:"white"});});

    $(".list").html("");
    $(".result-content").html("");
    $.ajax({
        url: 'content/php/getInfoPokemons.php',
        type: 'POST',
        data: {t:"R",id: 1},
        datatype: "html"
    }).done(function (textR){
        $(".list").html(textR);
        $(".poke").click(function (){
            var id = this.id;
            $.ajax({
                url: 'content/php/getInfoPokemons.php',
                type: 'POST',
                data: {t:'L',id: id},
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
});