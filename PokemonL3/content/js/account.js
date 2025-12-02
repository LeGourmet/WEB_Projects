function charger(){
    setTimeout( function(){
        $.ajax({
            url : "content/php/getMsgTchat.php",
            type : "POST",
            datatype: 'html',
        }).done(function(com){$('.tchat-text').html(com);});
        charger();
    }, 1000);
}

$(".navLi:eq(4)").click(function(){
    var CoButton = this;
    var tchat = document.getElementsByClassName("tchat")[0];
    if(CoButton.textContent==="Connexion") {
        var modal = document.getElementById("modal");
        var connect = function() {
            $(".modal-header").html("<span id=\"modalClose\" class=\"close\">&times;</span><h1>Connexion</h1>");
            $(".modal-body").html("" +
                "<form id='formConnexion' action='content/php/getInfoConnexion.php' method='post'>" +
                "   <label for='PostPseudo'>Pseudo :</label>\n" +
                "   <input id='PostPseudo' type='text' name='pseudo' value='Entrez votre pseudo' onfocus=\"this.value = ''\"" +
                "   onblur=\"if(this.value.trim()===''){this.value='Entrez votre pseudo'}else{this.value = this.value.split(' ').join('');}\"><br>\n" +
                "   <label for='PostPassword'>Mot de passe :</label>\n" +
                "   <input id='PostPassword' type='password' name='password' onfocus=\"this.value = ''\"><br>" +
                "   <input class='button' type='submit' name='save' value='Connexion'>" +
                "</form>");
            $(".modal-footer").html("<h4 class='inscription'>Inscription</h4>");
            document.getElementById("modalClose").onclick = function (){modal.style.display = "none"};
            $("#formConnexion").submit(function(e){
                e.preventDefault();
                var donnees = $(this).serialize();
                $.ajax({
                    url: 'content/php/getInfoConnexion.php',
                    type: 'POST',
                    data : donnees,
                    datatype: 'text'
                }).done(function(txt){
                   if(txt==='OK'){
                        tchat.style.display = "block";
                        modal.style.display = "none"
                        CoButton.textContent = "Déconnexion";
                        $('.tchat-content').html("<section class='tchat-text'></section></br>" +
                            "<input class='inputMsg' type='text' value='Entrez votre message ici.' onfocus=\"this.value = ''\"" +
                            " onblur=\"if(this.value.trim()===''){this.value='Entrez votre message ici.'}else{this.value = this.value.trim();}\">" +
                            "<input class='tchatButton' type='button' value='Envoyer'>");
                        charger();
                        $(".tchatButton").click(function(){
                            var tmp = document.getElementsByClassName('inputMsg')[0].value.trim();
                            if(tmp!=='Entrez votre message ici.'&& tmp !=='') {
                                $.ajax({
                                    url: 'content/php/postMsgTchat.php',
                                    type: 'POST',
                                    data: {msg: tmp},
                                    datatype: 'html'
                                }).done(function(){
                                    document.getElementsByClassName('inputMsg')[0].value = "Entrez votre message ici.";
                                });
                            }
                        });
                   }else{
                        window.alert(txt);
                   }
                });
            });
        }

        var inscr = function(){
            $(".modal-header").html("<span id=\"modalClose\" class=\"close\">&times;</span><h1>Inscription</h1>");
            $(".modal-body").html("" +
                "<form id='formInscription' action='content/php/postInfoInscription.php' method='post'>\n" +
                "   <label for='PostName'>Nom :</label>\n" +
                "   <input id='PostName' type='text' name='name' value='Entrez votre prénom' onfocus=\"this.value = ''\"" +
                "   onblur=\"if(this.value.trim()===''){this.value='Entrez votre prénom'}else{this.value = this.value.split(' ').join('');}\"><br>\n" +
                "   <label for='PostFirstName'>Prenom :</label>\n" +
                "   <input id='PostFirstName' type='text' name='firstname' value='Entrez votre nom' onfocus=\"this.value = ''\"" +
                "   onblur=\"if(this.value.trim()===''){this.value='Entrez votre nom'}else{this.value = this.value.split(' ').join('');}\"> <br>\n" +
                "   <label for='PostPseudo'>Pseudo :</label>\n" +
                "   <input id='PostPseudo' type='text' name='pseudo' value='Entrez votre pseudo' onfocus=\"this.value = ''\"" +
                "   onblur=\"if(this.value.trim()===''){this.value='Entrez votre pseudo'}else{this.value = this.value.split(' ').join('');}\"><br>\n" +
                "   <label for='PostPassword'>Mot de passe :</label>\n" +
                "   <input id='PostPassword' type='password' name='password' onfocus=\"this.value = ''\"><br>\n" +
                "   <label for='PostMail'>E-mail :</label>\n" +
                "   <input id='PostMail' type='email' name='mail' value='Entrez votre mail' onfocus=\"this.value = ''\"" +
                "   onblur=\"if(this.value.trim()===''){this.value='Entrez votre mail'}else{this.value = this.value.split(' ').join('');}\"><br>\n" +
                "   <label for='PostBirth'>Date de naissance :</label>\n" +
                "   <input id='PostBirth' type='date' name='birthdate'><br>\n" +
                "   <input class='button' type='submit' name='save'>\n" +
                "</form>\n");
            $(".modal-footer").html("<h4 class='Connexion'>Connexion</h4>");
            document.getElementById("modalClose").onclick = function (){modal.style.display = "none"};
            $("#formInscription").submit(function(e){
                e.preventDefault();
                var donnees = $(this).serialize();
                $.ajax({
                    url: 'content/php/postInfoInscription.php',
                    type: 'POST',
                    data : donnees,
                    datatype: 'text'
                }).done(function(txt){
                    if(txt==='OK'){
                        connect();
                        window.alert("Inscription reussi!");
                    }else{
                        window.alert(txt);
                    }
                });
            });
        }

        connect()
        $(".modal-footer").on("click",".Connexion",function(){connect();});
        $(".modal-footer").on("click",".inscription",function(){inscr();});

        modal.style.display = "block";
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }else{
        tchat.style.display = "block";
        $(".tchat-content").html('');
        (document.getElementsByClassName("tchat")[0]).style.display = "none";
        this.textContent = "Connexion";
    }
});

var openTchat = true;
$(".imageTchat").click(function() {
    var tmp = document.getElementsByClassName("tchat-content")[0];
    if(openTchat){
        tmp.style.display = "none";
        $(".buttonImgTchat").css({
            "background-color": "#1e1e1e",
            "margin-top": "2%",
            "margin-bottom": "2%",
            padding: "1%",
            "border-left": "10px solid crimson",
            "border-bottom": "10px solid crimson",
            "border-right": "10px solid #1e1e1e",
            "border-top": "10px solid #1e1e1e",
            transform:"rotate(135deg)"
        });
    }else{
        tmp.style.display = "block";
        $(".buttonImgTchat").css({
            "background-color": "#1e1e1e",
            "margin-top": "2%",
            "margin-bottom": "2%",
            padding: "1%",
            "border-left": "10px solid crimson",
            "border-bottom": "10px solid crimson",
            "border-right": "10px solid #1e1e1e",
            "border-top": "10px solid #1e1e1e",
            transform:"rotate(-45deg)"
        });
    }
    openTchat = !openTchat;
})