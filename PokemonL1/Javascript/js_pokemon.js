/*Fonctions obligatoire*/

function Now(){
    let d = new Date();
    let date = document.getElementById("hour"); /* cible l'element qui a pour id : "hour" */
    date.value = "Il est " + d.getHours() + "h " + d.getMinutes() + "min " + d.getSeconds() + "s" + ". Le " + d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear() + ".";
    /* change l'attribut valeur de la variable date pour qu'il affiche : Il est (*heure sur l'ordi de la personne*)h (*minute sur l'ordi de la personne*)min (*seconde sur l'ordi de la personne*)s.Le (*jour sur l'ordi de la personne*)/(*mois(les mois sont comptés de 0 à 11) sur l'ordi de la personne*)/(*année sur l'ordi de la personne*)*/

    /* pour l'animation setInterval */
    window.anim = -1;
}

/* interchange le src l'alt et le title de l'image1 et de l'image 2  */
function changeimg(img1,img2){
    let src1 = img1.src;
    let alt1 = img1.alt;
    let title1 = img1.title;

    img1.src = img2.src;
    img1.alt = img2.alt;
    img1.title = img2.title;

    img2.src = src1;
    img2.alt = alt1;
    img2.title = title1;
}

/* document.image est un tableau qui se compose des images de la page ciblé */
function changeimg1() {
    changeimg(document.images[0],document.images[1])
}

function changeimg2() {
    changeimg(document.images[1],document.images[0])
}

/* diplay l'élément cibler si il est caché et le cache si il est display */
function Display(id) {
    let a = document.getElementById(id).style;
    if (a.display === "none"){
        a.display = "inline"
    }
    else{a.display = "none"}
}

function Switch() {

    if (window.anim === -1){
        window.anim = setInterval('changeimg1()',500); /* change la variable window.anim en 500 puisque la fonction setinterval renvoie un int en plus d'appeler periodiquement la fonction changeimg1 */
    }
    else{
        clearInterval(window.anim); /* stop la fonction setInterval */
        window.anim = -1;           /* "reset" la variable window.anim */
    }

}

/* Pour la barre de recherche*/
function search(myid){
    let S = document.getElementById(myid).value; /* S est la chaine de caractères recherchée */
    let obj = document.getElementById('Search').getElementsByTagName('li'); /* obj est un tableau formé de tous les <li> de l'élément <ul> */
    for(let i = 0; i < obj.length-1 ; i++){
        obj[i].style.display = "block"; /* je commence par diplay chaques élémments */
        if(S === "Rechercher"){         /* si la chaine de carcatères recherchée est celle inscrite de base alors il n'y a pas de recherche effectué donc tous les éléments sont display */
            obj[i].style.display = "block";
        }
        else if (!(obj[i].firstElementChild.firstChild.nodeValue.toUpperCase().includes(S.toUpperCase()) /* Je transforme la chaine de caractère chercher en majuscule et de même pour les noms de pokémon pour que la recherche ne soit pas sensible à la casse */
            || obj[i].firstChild.nodeValue.includes(S))){ /* Je permet d'effectuer une recherche par l'identifiant de pokemon aussi */
            obj[i].style.display = "none"; /* chache les pokemons qui ne correspondent pas au critère de la recherche */
        }
    }
}

/* change la valeur de l'input en string vide des que la fonction est appelé */
function newclearInput(id) {
    document.getElementById(id).value = ""
}

/* Fonctions des formulaires */

/* renvoie un booléen qui vérifie si la valeur de name est la même que celle de value */
function test(id) {
    let obj = document.getElementById(id);
    return(!(obj.value === obj.name));
}

/* change la valeur de l'input seulement si la valeur de l'input correspond à la valeur de son attribut name (je me sers de son attribut name comme d'espace de stockage)*/
function clearInput(id) {
    let obj = document.getElementById(id);
    if (!test(id)) {
        obj.value = ""
    }
}

/* change la valeur de value pour qu'elle revienne à sa valeur de base que je contient dans name */
function displayDefault(id) {
    let obj = document.getElementById(id);
    if (obj.value === ""){
        obj.value = obj.name
    }
}

/* Verifie que tous les champs du formulaire ID sont remplis */
function verifieID() {
    if (test('nom') && test('prenom') && test('psedo') && test('mail') && test('user') && test('password') && test('verif') && test('reponse')){
        window.alert('Toutes les informations entrées dans le formulaire sont conformes.')
    }
    else{
        window.alert('Il y a dans le formulaire des champs non renseignés.')
    }
}

/* Verifie que tous les champs du formulaire CreatPokemon sont remplis */
function verifieCreat() {
    if (test('nom') && test('Id') && test('gen') && test('cat') && test('taille') && test('poids') && test('desc') && test('abil1')){
        window.alert('Toutes les informations entrées dans le formulaire sont conformes.')
    }
    else{
        window.alert('Il y a dans le formulaire des champs non renseignés.')
    }
}

/* Verifie que les attributs value des éléments ayant pour id : think et verif */
function verifPassword(think,verif){
    if (!(document.getElementById(think).value === document.getElementById(verif).value)){
        newclearInput(verif);
        window.alert('Les champs mot de passe et vérification doivent être identiques.')
    }
}

/* Verifie qu'une case est cochée */
function verifieChecked(id) {
    return (document.getElementById(id).checked)
}

/* Vérifie que les bonnes case du Quiz sont cochées */
function verifieQuiz() {
    if ((verifieChecked('Elek') && !verifieChecked('Acier') && !verifieChecked('Norm')) &&
        (verifieChecked('Faible')) &&
        (verifieChecked('Abo')) &&
        (verifieChecked('Non'))){
        window.alert('oui')
    }
    else{
        window.alert('non')
    }
}

//-- Blanchard Allan --
