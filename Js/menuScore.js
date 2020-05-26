var buttonRegresarScore = document.getElementById('buttonRegresarScore');

var principal = document.getElementById('Principal');
var score = document.getElementById('score');

window.addEventListener("keydown", button, false);

function button(key) {
    if ((key.keyCode == "37" || key.keyCode == "38" || key.keyCode == "39" || key.keyCode == "40") && score.className == "scoreVisible") {
        buttonRegresarScore.className = "active";
        sonidoMenu.play();
    }
    else if (key.keyCode == "13" && score.className == "scoreVisible") {
        sonidoEnter.play();
        if (buttonRegresarScore.className == "active") {
            if (principal.className == "PrincipalInvisible") {
                score.className = "";
                principal.className = "";
                buttonRegresarScore.className = "";
            }
            else {
        
            }
        }
    }
    else {

    }
}