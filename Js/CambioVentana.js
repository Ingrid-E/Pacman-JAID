//Llamada y declaracion de las secciones
var principal = document.getElementById('Principal');
var start = document.getElementById('start');
var score = document.getElementById('score');
var about = document.getElementById('about');

//Llamada y declaracion de los botones
var buttonStart = document.getElementById('ButtonStart');
var buttonScore = document.getElementById('ButtonScore');
var buttonAbout = document.getElementById('ButtonAbout');

var musicaPacman = new Audio('Media/Sonido/MusicaPacman2.mp3');
var musicaMissPacman = new Audio('Media/Sonido/MusicaMissPacman.mp3');
var musicaUniPacman = new Audio('Media/Sonido/MusicaUniPacman.mp3');
var sonidoMenu = new Audio('Media/Sonido/SonidoMenu.mp3');
var sonidoEnter = new Audio('Media/Sonido/SonidoEnter.mp3');
var movimientoPacman = new Audio('Media/Sonido/MovimientoPacman.mp3');

musicaPacman.loop = true;
musicaMissPacman.loop = true;
musicaUniPacman.loop = true;

musicaPacman.play();

window.addEventListener("keydown", selection, false);
window.addEventListener("keydown", buttonPrincipal, false);

function selection(key) {
    //Si se presiona ArrowUp
    if (key.keyCode == "38" && principal.className == "") {
        sonidoMenu.play();
        if (buttonStart.className == "" && buttonScore.className == "" && ButtonAbout.className == ""){
            buttonStart.className = "active";
        }
        else if (buttonStart.className == "active") {
            buttonStart.className = "";
            buttonScore.className = "";
            buttonAbout.className = "active";
        }
        else if (buttonScore.className == "active") {
            buttonStart.className = "active";
            buttonScore.className = "";
            buttonAbout.className = "";
        }
        else if (buttonAbout.className == "active") {
            buttonStart.className = "";
            buttonScore.className = "active";
            buttonAbout.className = "";
        }
        else {
        }
    }

    //Si se presiona ArrowDown
    else if (key.keyCode == "40" && principal.className == "") {
        sonidoMenu.play();
        if (buttonStart.className == "" && buttonScore.className == "" && ButtonAbout.className == ""){
            buttonStart.className = "active";
        }
        else if (buttonStart.className == "active") {
            buttonStart.className = "";
            buttonScore.className = "active";
            buttonAbout.className = "";
        }
        else if (buttonScore.className == "active") {
            buttonStart.className = "";
            buttonScore.className = "";
            buttonAbout.className = "active";
        }
        else if (buttonAbout.className == "active") {
            buttonStart.className = "active";
            buttonScore.className = "";
            buttonAbout.className = "";
        }
        else {
        }
    }
}

function buttonPrincipal(key) {
    //si se presiona Enter
    if (key.keyCode == "13" && principal.className == "") {
        sonidoEnter.play();
        if (buttonStart.className == "active") {
            start.className = "startVisible";
            principal.className = "PrincipalInvisible";
            buttonStart.className = "";
        }
        else if (buttonScore.className == "active") {
            score.className = "scoreVisible";
            principal.className = "PrincipalInvisible";
            buttonScore.className = "";
        }
        else if (buttonAbout.className == "active") {
            about.className = "aboutVisible";
            principal.className = "PrincipalInvisible";
            buttonAbout.className = "";
        }
        else {

        }
    }
    else {

    }
}