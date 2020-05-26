//Llamada y declaracion de los botones de la seccion Acerca de
var buttonGame = document.getElementById("buttonAboutGame");
var buttonInstructions = document.getElementById("buttonAboutInstructions");
var buttonDevelopers = document.getElementById("buttonAboutDevelopers");
var buttonRegresarAbout = document.getElementById('buttonRegresarAbout');

//Llamada y declaracion de las divisiones de la seccion Acerca de
var divAboutOptions = document.getElementById("aboutOptions");
var divGame = document.getElementById("aboutGame");
var divInstructions = document.getElementById("aboutInstructions");
var divDevelopers = document.getElementById("aboutDevelopers")

//llamada y declaracion variables para el boton Regresar
var principal = document.getElementById('Principal');
var about = document.getElementById('about');


window.addEventListener("keydown", selection, false);
window.addEventListener("keydown", buttonPrincipal, false);

function selection(key) {
    //Si se presiona ArrowUp
    if (key.keyCode == "38" && about.className == "aboutVisible") {
        sonidoMenu.play();
        if (buttonGame.className == "" && buttonInstructions.className == "" && buttonDevelopers.className == "" && buttonRegresarAbout.className == ""){
            buttonGame.className = "active";
        }
        else if (buttonGame.className == "active") {
            buttonGame.className = "";
            buttonInstructions.className = "";
            buttonDevelopers.className = "";
            buttonRegresarAbout.className = "active";
        }
        else if (buttonInstructions.className == "active") {
            buttonGame.className = "active";
            buttonInstructions.className = "";
            buttonDevelopers.className = "";
            ButtonRegresarAbout.className = "";
        }
        else if (buttonDevelopers.className == "active") {
            buttonGame.className = "";
            buttonInstructions.className = "active";
            buttonDevelopers.className = "";
            buttonRegresarAbout.className = "";
        }
        else if (buttonRegresarAbout.className == "active") {
            buttonGame.className = "";
            buttonInstructions.className = "";
            buttonDevelopers.className = "active";
            buttonRegresarAbout.className = "";
        }
        else {
        }
    }

    //Si se presiona ArrowDown
    else if (key.keyCode == "40" && about.className == "aboutVisible") {
        sonidoMenu.play();
        if (buttonGame.className == "" && buttonInstructions.className == "" && buttonDevelopers.className == "" && buttonRegresarAbout.className == ""){
            buttonGame.className = "active";
        }
        else if (buttonGame.className == "active") {
            buttonGame.className = "";
            buttonInstructions.className = "active";
            buttonDevelopers.className = "";
            buttonRegresarAbout.className = "";
        }
        else if (buttonInstructions.className == "active") {
            buttonGame.className = "";
            buttonInstructions.className = "";
            buttonDevelopers.className = "active";
            buttonRegresarAbout.className = "";
        }
        else if (buttonDevelopers.className == "active") {
            buttonGame.className = "";
            buttonInstructions.className = "";
            buttonDevelopers.className = "";
            buttonRegresarAbout.className = "active";
        }
        else if (buttonRegresarAbout.className == "active") {
            buttonGame.className = "active";
            buttonInstructions.className = "";
            buttonDevelopers.className = "";
            buttonRegresarAbout.className = "";
        }
        else {
        }
    }
}

function buttonPrincipal(key) {
    //si se presiona Enter
    if (key.keyCode == "13" && about.className == "aboutVisible") {
        sonidoEnter.play();
        if (buttonGame.className == "active") {
            if (divAboutOptions.className == "") {

                divAboutOptions.className = "small";
                divGame.className = "show";
        
                buttonGame.className = "active";
            }
        
            else if (divAboutOptions.className == "small" && divGame.className == "") {
                divGame.className = "show";
                divInstructions.className = "";
                divDevelopers.className = "";
        
                buttonGame.className = "active";
                buttonInstructions.className = "";
                buttonDevelopers.className = "";
            }
        
            else {
        
                divAboutOptions.className = "";
                divGame.className = "";
        
                buttonGame.className = "";  
            }
        }
        else if (buttonInstructions.className == "active") {
            if (divAboutOptions.className == "") {

                divAboutOptions.className = "small";
                divInstructions.className = "show";
        
                buttonInstructions.className = "active";
            }
        
            else if (divAboutOptions.className == "small" && divInstructions.className == "") {
                divGame.className = "";
                divInstructions.className = "show";
                divDevelopers.className = "";
        
                buttonGame.className = "";
                buttonInstructions.className = "active";
                buttonDevelopers.className = "";
            }
        
            else {
        
                divAboutOptions.className = "";
                divInstructions.className = "";
                buttonInstructions.className = "";
            } 
        }
        else if (buttonDevelopers.className == "active") {
            if (divAboutOptions.className == "") {

                divAboutOptions.className = "small";
                divDevelopers.className = "show";
        
                buttonDevelopers.className = "active";
            }
        
            else if (divAboutOptions.className == "small" && divDevelopers.className == "") {
                divGame.className = "";
                divInstructions.className = "";
                divDevelopers.className = "show";
        
                buttonGame.className = "";
                buttonInstructions.className = "";
                buttonDevelopers.className = "active";
            }
        
            else {
        
                divAboutOptions.className = "";
                divDevelopers.className = "";
                buttonDevelopers.className = "";
            }
        }
        else if (buttonRegresarAbout.className == "active") {
            if (Principal.className == "PrincipalInvisible") {
        
                about.className = "";
                Principal.className = "";
        
                divAboutOptions.className = "";
                divGame.className = "";
                divInstructions.className = "";
                divDevelopers.className = "";
        
                buttonGame.className = "";
                buttonInstructions.className = "";
                buttonDevelopers.className = "";
                buttonRegresarAbout.className = "";
            }
            else {
        
            }
        }
        else {

        }
    }
    else {

    }
}