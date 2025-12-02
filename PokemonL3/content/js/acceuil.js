function loadAccueil(){
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
            color: "white"
        });}
    );
    $(".navLeft").css({"background-color":"#661d99",color:"white"});
    $(".navLeft").hover(
        function(){$(this).css({});},
        function(){$(this).css({"background-color":"#661d99",color:"white"});});

    $(".pokedex").css({display:"none"});
    $(".accueil").css({display:"block"});
}

$(".navLi:eq(0)").click(function(){
    loadAccueil();
});

$(document).ready(function(){
    loadAccueil();
});