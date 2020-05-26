//llamada y declaracion de las opciones para la seleccion de personajes
var pacman = document.getElementById('pacman');
var missPacman = document.getElementById('missPacman');
var uniPacman = document.getElementById('uniPacman');

//llamada y declaracion de las imagenes de los mapas por personaje
var mapPacman = document.getElementById('mapPacman');
var mapMissPacman = document.getElementById('mapMissPacman');
var mapUniPacman = document.getElementById('mapUniPacman');

//llamada y declaracion de los botones regresar y jugar
var buttonRegresar = document.getElementById('buttonRegresarPlay');
var buttonPlay = document.getElementById('buttonPlay');

var principal = document.getElementById('Principal');
var start = document.getElementById('start');
var game = document.getElementById('game');

var canvas = document.getElementById('canvas');


let { append, cons, first, isEmpty, isList, length, rest } = functionalLight;

function make(data, attribute) {
  return Object.assign({}, data, attribute);
}

//Si hay puntos en el mapa
var existenPuntos = false;
//si hay frutas malas en el mapa
var existeBadFruta = false;
// si hay frutas buenas en el mapa
var existeGoodFruta = false;
//velocidad de los fantasmas
var ghostSpeed = 2

//Dimensiones del canvas
const WIDTH = 900;
const HEIGHT = 775;
const SIZE = 25;
//Mostrar texto nivel;
var niveles = true;




/**
 * Revisa cada elemento de un Mapa y revisa si cumple las condiciones de f.
 * @param {Array} l 
 * @param {function} f 
 * @param {0} index 
 * @returns {boolean}
 * @example mapeado([1,1,0,1,1], (n,x)=> if(n == 1){processing.loadImage(pic,x,y,sizex,sizey)}//=> true
 */

function mapeado(l, f, index = 0) {
  if (!isEmpty(l)) {
    f(first(l), index);
    mapeado(rest(l), f, index + 1);
  }
}


/**
 * Busca el numero de la fila, en la cual existe el numero.
 * @param {Array} list 
 * @param {*} n 
 * @returns {*}
 * @example buscarY([1,2,3],[4,5,6],[7,8,9],5)//=> 1
 */

function buscarY(list, n) {
  const fila = function (primero, resto, y, n) {
    if (isEmpty(resto)) return -1;
    if (isEmpty(primero)) return fila(first(resto), rest(resto), y + 1, n);
    if (first(primero) == n) return y;
    else return fila(rest(primero), resto, y, n)
  }
  return fila(first(list), rest(list), 0, n)
}
/**
 * Busca el numero de la columna, en la cual existe el numero.
 * @param {Array} list 
 * @param {*} n 
 * @returns {*}
 * @example buscarX([1,2,3],[4,5,6],[7,8,9],9)//=> 2
 */
function buscarX(list, n) {
  const fila = function (primero, resto, x, n) {
    if (isEmpty(resto)) return -1;
    if (isEmpty(primero)) return fila(first(resto), rest(resto), x = 0, n);
    if (first(primero) == n) return x;
    else return fila(rest(primero), resto, x + 1, n)
  }
  return fila(first(list), rest(list), 0, n)
}



window.addEventListener("keydown", selection, false);
window.addEventListener("keydown", button, false);

function selection(key) {

  //Si se presiona arrowUp
  if (key.keyCode == "38" && start.className == "startVisible") {
    sonidoMenu.play();
    if (pacman.className == "" && missPacman.className == "" && uniPacman.className == "" && buttonPlay.className == "" && buttonRegresar.className == "") {
      pacman.className = "active";
      missPacman.className = "";
      uniPacman.className = "";

      mapPacman.className = "show";
      mapMissPacman.className = "";
      mapUniPacman.className = "";

      musicaPacman.play();
      musicaMissPacman.pause();
      musicaUniPacman.pause();
    }
    else if (pacman.className == "active") {
      pacman.className = "";
      missPacman.className = "";
      uniPacman.className = "";

      buttonRegresar.className = "active";

      mapPacman.className = "";
      mapMissPacman.className = "";
      mapUniPacman.className = "";

      musicaPacman.play();
      musicaMissPacman.pause();
      musicaUniPacman.pause();
    }
    else if (uniPacman.className == "active") {
      pacman.className = "";
      missPacman.className = "active";
      uniPacman.className = "";

      mapPacman.className = "";
      mapMissPacman.className = "show";
      mapUniPacman.className = "";

      musicaPacman.pause();
      musicaMissPacman.play();
      musicaUniPacman.pause();
    }
    else if (missPacman.className == "active") {
      pacman.className = "active";
      missPacman.className = "";
      uniPacman.className = "";

      mapPacman.className = "show";
      mapMissPacman.className = "";
      mapUniPacman.className = "";

      musicaPacman.play();
      musicaMissPacman.pause();
      musicaUniPacman.pause();
    }
    else if (buttonRegresar.className == "active" || buttonPlay.className == "active") {
      pacman.className = "";
      missPacman.className = "";
      uniPacman.className = "active";

      buttonRegresar.className = "";
      buttonPlay.className = "";

      mapPacman.className = "";
      mapMissPacman.className = "";
      mapUniPacman.className = "show";

      musicaPacman.pause();
      musicaMissPacman.pause();
      musicaUniPacman.play();
    }
    else {

    }
  }

  //Si se presiona arrowDown
  else if (key.keyCode == "40" && start.className == "startVisible") {
    sonidoMenu.play();
    if (pacman.className == "" && missPacman.className == "" && uniPacman.className == "" && buttonPlay.className == "" && buttonRegresar.className == "") {
      pacman.className = "active";
      missPacman.className = "";
      uniPacman.className = "";

      mapPacman.className = "show";
      mapMissPacman.className = "";
      mapUniPacman.className = "";

      musicaPacman.play();
      musicaMissPacman.pause();
      musicaUniPacman.pause();
    }
    else if (pacman.className == "active") {
      pacman.className = "";
      missPacman.className = "active";
      uniPacman.className = "";

      mapPacman.className = "";
      mapMissPacman.className = "show";
      mapUniPacman.className = "";

      musicaPacman.pause();
      musicaMissPacman.play();
      musicaUniPacman.pause();
    }
    else if (missPacman.className == "active") {
      pacman.className = "";
      missPacman.className = "";
      uniPacman.className = "active";

      mapPacman.className = "";
      mapMissPacman.className = "";
      mapUniPacman.className = "show";

      musicaPacman.pause();
      musicaMissPacman.pause();
      musicaUniPacman.play();
    }
    else if (uniPacman.className == "active") {
      pacman.className = "";
      missPacman.className = "";
      uniPacman.className = "";

      buttonRegresar.className = "active";

      mapPacman.className = "";
      mapMissPacman.className = "";
      mapUniPacman.className = "";

      musicaPacman.play();
      musicaMissPacman.pause();
      musicaUniPacman.pause();
    }
    else if (buttonRegresar.className == "active" || buttonPlay.className == "active") {
      pacman.className = "active";
      missPacman.className = "";
      uniPacman.className = "";

      buttonRegresar.className = "";
      buttonPlay.className = "";

      mapPacman.className = "show";
      mapMissPacman.className = "";
      mapUniPacman.className = "";

      musicaPacman.play();
      musicaMissPacman.pause();
      musicaUniPacman.pause();
    }
    else {
    }
  }

  //Si se presiona ArrowLeft
  else if (key.keyCode == "37" && start.className == "startVisible") {
    sonidoMenu.play();
    if (buttonRegresar.className == "active") {
      buttonPlay.className = "active";
      buttonRegresar.className = "";
    }
    else if (buttonPlay.className == "active") {
      buttonPlay.className = ""
      buttonRegresar.className = "active"
    }
  }

  //Si se presiona ArrowRight
  else if (key.keyCode == "39" && start.className == "startVisible") {
    sonidoMenu.play();
    if (buttonRegresar.className == "active") {
      buttonPlay.className = "active";
      buttonRegresar.className = "";
    }
    else if (buttonPlay.className == "active") {
      buttonPlay.className = ""
      buttonRegresar.className = "active"
    }
  }

  //Si se presiona Enter
  else if (key.keyCode == "13" && start.className == "startVisible" && (pacman.className == "active" || missPacman.className == "active" ||
    uniPacman.className == "active" || buttonRegresar.className == "active" || buttonPlay.className == "active")) {
    if (pacman.className == "active") {
      pacman.className = "selected";
      buttonPlay.className = "active";
    }
    else if (missPacman.className == "active") {
      missPacman.className = "selected";
      buttonPlay.className = "active";
    }
    else if (uniPacman.className == "active") {
      uniPacman.className = "selected";
      buttonPlay.className = "active";
    }
    else if (buttonRegresar.className == "active") {
      start.className = "";
      principal.className = "";

      pacman.className = "";
      missPacman.className = "";
      uniPacman.className = "";

      mapPacman.className = "";
      mapMissPacman.className = "";
      mapUniPacman.className = "";

      buttonPlay.className = "";
      buttonRegresar.className = "";
    }
    else if (buttonPlay.className == "active") {
      start.className = "";
      principal.className = "PrincipalInvisible";
      game.className = "gameVisible";

      buttonPlay.className = "";
      buttonRegresar.className = "";

      if (pacman.className == "selected") {

        function sketchProc(processing) {

          //Posicion base de blinky
          const rx = buscarX(pacMapa, 8);
          const ry = buscarY(pacMapa, 8);
          //Posicion base de inky
          const bx = buscarX(pacMapa, 12);
          const by = buscarY(pacMapa, 12);
          //Posicion base de pinky
          const px = buscarX(pacMapa, 14);
          const py = buscarY(pacMapa, 14);
          //Posicion base de clyde
          const ox = buscarX(pacMapa, 16);
          const oy = buscarY(pacMapa, 16);
          //Posicion base de Pac-Man
          const pacmanX = buscarX(pacMapa, 10);
          const pacmanY = buscarY(pacMapa, 10);




          processing.setup = function () {
            processing.frameRate(rate);
            processing.size(WIDTH, HEIGHT);

            //Frutas
            A1 = processing.loadImage("Frutas/pacman/Apple1.png");
            A2 = processing.loadImage("Frutas/pacman/Apple2.png");
            A3 = processing.loadImage("Frutas/pacman/Apple3.png")
            C1 = processing.loadImage("Frutas/pacman/cherry1.png");
            C2 = processing.loadImage("Frutas/pacman/cherry2.png");
            C3 = processing.loadImage("Frutas/pacman/cherry3.png");
            G1 = processing.loadImage("Frutas/pacman/grape1.png");
            G2 = processing.loadImage("Frutas/pacman/grape2.png");
            G3 = processing.loadImage("Frutas/pacman/grape3.png");
            PA1 = processing.loadImage("Frutas/pacman/Pineapple1.png");
            PA2 = processing.loadImage("Frutas/pacman/Pineapple2.png");
            PA3 = processing.loadImage("Frutas/pacman/Pineapple3.png");
            S1 = processing.loadImage("Frutas/pacman/strawberry1.png");
            S2 = processing.loadImage("Frutas/pacman/strawberry2.png");
            S3 = processing.loadImage("Frutas/pacman/strawberry3.png");
            //Pac-Man
            M1 = processing.loadImage("img/death1.png")
            M2 = processing.loadImage("img/death2.png")
            M3 = processing.loadImage("img/death3.png")
            PacDeath2 = processing.loadImage("img/pacMuere2.png")
            PacDeath3 = processing.loadImage("img/pacMuere3.png")
            PacDeath4 = processing.loadImage("img/pacMuere4.png")
            V1 = processing.loadImage("img/Mvida1.png")
            V2 = processing.loadImage("img/Mvida2.png")
            V3 = processing.loadImage("img/Mvida3.png")
            Pac1 = processing.loadImage("img/pacman/characters/pac1.png");
            Pac2 = processing.loadImage("img/pacman/characters/pac2.png");
            Pac3 = processing.loadImage("img/pacman/characters/pac3.png");
            //Fantasmas
            B1 = processing.loadImage("img/pacman/characters/cyanBody1.png");
            B2 = processing.loadImage("img/pacman/characters/cyanBody2.png");
            B3 = processing.loadImage("img/pacman/characters/cyanBody3.png");
            R1 = processing.loadImage("img/pacman/characters/redBody1.png");
            R2 = processing.loadImage("img/pacman/characters/redBody2.png");
            R3 = processing.loadImage("img/pacman/characters/redBody3.png");
            P1 = processing.loadImage("img/pacman/characters/pinkBody1.png");
            P2 = processing.loadImage("img/pacman/characters/pinkBody2.png");
            P3 = processing.loadImage("img/pacman/characters/pinkBody3.png");
            O1 = processing.loadImage("img/pacman/characters/orangeBody1.png");
            O2 = processing.loadImage("img/pacman/characters/orangeBody2.png");
            O3 = processing.loadImage("img/pacman/characters/orangeBody3.png");
            eyeR = processing.loadImage("img/eyesRight.png");
            eyeD = processing.loadImage("img/eyesDown.png");
            eyeU = processing.loadImage("img/eyesUp.png");
            eyeL = processing.loadImage("img/eyesLeft.png");
            //Paredes
            wall1 = processing.loadImage("img/pacman/walls/wall1.png");
            wall2 = processing.loadImage("img/pacman/walls/wall2.png");
            wall3 = processing.loadImage("img/pacman/walls/wall3.png");
            wall4 = processing.loadImage("img/pacman/walls/wall4.png");
            wall5 = processing.loadImage("img/pacman/walls/wall5.png");
            wall6 = processing.loadImage("img/pacman/walls/wall6.png");
            wall7 = processing.loadImage("img/pacman/walls/wall7.png");
            wall8 = processing.loadImage("img/pacman/walls/wall8.png");
            wall9 = processing.loadImage("img/pacman/walls/wall9.png");
            wall10 = processing.loadImage("img/pacman/walls/wall10.png");
            wall11 = processing.loadImage("img/pacman/walls/wall11.png");
            wall12 = processing.loadImage("img/pacman/walls/wall12.png");
            wall13 = processing.loadImage("img/pacman/walls/wall13.png");
            wall14 = processing.loadImage("img/pacman/walls/wall14.png");
            wall15 = processing.loadImage("img/pacman/walls/wall15.png");
            wall16 = processing.loadImage("img/pacman/walls/wall16.png");
            wall17 = processing.loadImage("img/pacman/walls/wall17.png");
            //Puntos
            empty = processing.loadImage("img/pacman/walls/empty.png");
            star = processing.loadImage("img/star.png");
            bigstar = processing.loadImage("img/pacman/walls/punto2.png")

            processing.state = {
              time: 0,
              pacman: { x: pacmanX * SIZE, y: pacmanY * SIZE, lives: 3 },
              dir: "left", canvas: { x: pacmanX * SIZE, y: pacmanY * SIZE },
              points: 0,
              blinky: { pos: { x: rx * SIZE, y: ry * SIZE, dir: "up" }, state: 1, time: 0 },
              inky: { pos: { x: bx * SIZE, y: by * SIZE, dir: "up" }, state: 1, time: 0 },
              pinky: { pos: { x: px * SIZE, y: py * SIZE, dir: "up" }, state: 1, time: 0 },
              clyde: { pos: { x: ox * SIZE, y: oy * SIZE, dir: "up" }, state: 1, time: 0 },
              globalGhost: { state: 1, time: 0 },
              level: 1
            };
          }


          processing.drawGame = function (world) {

            /** Puntos de pacman */
            const puntos = world.points
            /** Numero de vidas de pacman */
            const vidas = world.pacman.lives
            //Posicion x, y de pacman
            const pacX = world.pacman.x
            const pacY = world.pacman.y
            const canvasX = world.canvas.x
            const canvasY = world.canvas.y
            //Blinky
            const blinkyX = world.blinky.pos.x
            const blinkyY = world.blinky.pos.y
            const blinkyEstado = world.blinky.state
            //Pinky
            const pinkyX = world.pinky.pos.x
            const pinkyY = world.pinky.pos.y
            const pinkyEstado = world.pinky.state
            //Clyde
            const clydeX = world.clyde.pos.x
            const clydeY = world.clyde.pos.y
            const clydeEstado = world.clyde.state
            //Inky
            const inkyX = world.inky.pos.x
            const inkyY = world.inky.pos.y
            const inkyEstado = world.inky.state
            //Extras
            const globalState = world.globalGhost.state
            const globalTime = world.globalGhost.time



            processing.background(00, 0, 0);
            let puntaje = "Puntaje: " + puntos
            processing.textSize(30);
            processing.fill(255, 255, 255);
            processing.text(puntaje, 28 * SIZE, 2 * SIZE);

            /**
             * Revisa cuantas vidas tiene pacman y muestra la cantidad al lado del texto Vidas.
             * Si la vida de pacman es = 0 entonces retorna, texto de GAME OVER
             */

            function lives() {
              let ghostTime = "Vidas:"
              let extraVida = (vidas - 3)
              processing.textSize(30);
              processing.text(ghostTime, 28 * SIZE, SIZE * 4);
              const mini = SIZE - 2
              var x = (length(pacMapa[2]) + 3.5) * SIZE
              if (extraVida > 0) {
                processing.textSize(20);
                processing.text("+ " + extraVida, x + (SIZE * 3), 97);
              }
              if (vidas >= 1) {
                processing.image(Pac3, x, 78, mini, mini)
              }
              if (vidas >= 2) {
                x = x + SIZE
                processing.image(Pac3, x, 78, mini, mini)
              }
              if (vidas >= 3) {
                x = x + (SIZE)
                processing.image(Pac3, x, 78, mini, mini)
              }
              if (vidas == 0) {
                processing.fill(0, 0, 0, 220)
                processing.rect(2 * SIZE, 12 * SIZE, 615, 200, 7);
                processing.fill(255, 255, 0)
                const over = " GAME OVER "
                const finalPoints = "Score:" + puntos
                processing.textSize(100);
                processing.text(over, SIZE, 16 * SIZE);
                processing.textSize(80);
                processing.text(finalPoints, 8 * SIZE, 19 * SIZE);
              }
              if (vidas !== 0) {
                
              }
            }

            /**
             * Si ya no existen puntos, y niveles es true, entonces aparece el texto en el nivel que este.
             */
            function levels() {
              if (world.time <= 8 && vidas !== 0) {
                if (niveles == true) {
                  const textNivel = " NIVEL " + world.level
                  processing.textSize(100);
                  processing.fill(255, 255, 0)
                  processing.text(textNivel, 6 * SIZE, 16 * SIZE);
                }

                else {
                  niveles = false;
                }
              }
            }


            /**
             * Revisa la direcion que esta tomando pacman, y acomoda la imagen para mirar hacia esa direccion.
             */
            function movimientoPacman() {

              /** Aplica la animacion muerte de pacman, cuando el estado global es 4. */
              const muerte = function () {
                processing.pushMatrix();
                processing.translate(canvasX, canvasY);
                var p = empty;
                if (globalTime % 5 == 1) { p = PacDeath2; }
                if (globalTime % 5 == 2) { p = PacDeath3; }
                if (globalTime % 5 == 3) { p = PacDeath4; }
                processing.image(p, 0, 0, SIZE, SIZE);
                processing.popMatrix();
              }

              if (globalState == 4) return muerte();

              processing.pushMatrix();
              var p = Pac3;
              if (world.dir == "left") {
                processing.translate(pacX + SIZE, pacY);
                processing.scale(-1, 1);
                if (world.time % 4 == 1) { p = Pac1; }
                if (world.time % 4 == 2 || world.time % 4 == 0) { p = Pac2; }
                processing.image(p, 0, 0, SIZE, SIZE);
              }
              if (world.dir == "right") {
                processing.translate(pacX - SIZE, pacY);
                if (world.time % 4 == 1) { p = Pac1; }
                if (world.time % 4 == 2 || world.time % 4 == 0) { p = Pac2; }
                processing.image(p, SIZE, 0, SIZE, SIZE);
              }
              if (world.dir == "up") {
                processing.translate(pacX + (SIZE / 2), pacY);
                processing.rotate(processing.radians(-90));
                if (world.time % 4 == 1) { p = Pac1; }
                if (world.time % 4 == 2 || world.time % 4 == 0) { p = Pac2; }
                processing.image(p, -SIZE, -(SIZE / 2), SIZE, SIZE);
              }
              if (world.dir == "down") {
                processing.translate(pacX, pacY + (SIZE / 2));
                processing.rotate(processing.radians(90));
                if (world.time % 4 == 1) { p = Pac1; }
                if (world.time % 4 == 2 || world.time % 4 == 0) { p = Pac2; }
                processing.image(p, -(SIZE / 2), -SIZE, SIZE, SIZE);
              }
              processing.popMatrix();
            }

            /**
             * Aplica la animacion correcta, segun el estado del fantasma
             * @param {Array} list 
             * @param {*} state 
             */

            function fantasmas(list, state) {
              if (state == 3) {
                var ojos = eyeR;
                processing.pushMatrix();
                if (first(list) == R1) { processing.translate(blinkyX, blinkyY) }
                if (first(list) == B1) { processing.translate(inkyX, inkyY) }
                if (first(list) == P1) { processing.translate(pinkyX, pinkyY) }
                if (first(list) == O1) { processing.translate(clydeX, clydeY) }
                if (world.dir == "left") { ojos = eyeL; }
                if (world.dir == "up") { ojos = eyeU; }
                if (world.dir == "down") { ojos = eyeD; }
                processing.image(ojos, 0, 0, SIZE, SIZE);
                processing.popMatrix();
              }
              if (state == 2) {
                var b = M3;
                processing.pushMatrix();
                if (first(list) == R1) { processing.translate(blinkyX, blinkyY) }
                if (first(list) == B1) { processing.translate(inkyX, inkyY) }
                if (first(list) == P1) { processing.translate(pinkyX, pinkyY) }
                if (first(list) == O1) { processing.translate(clydeX, clydeY) }
                if (world.time % 4 == 1) { b = M1; }
                if (world.time % 4 == 2 || world.time % 4 == 0) { b = M2; }
                processing.image(b, 0, 0, SIZE, SIZE);
                processing.popMatrix();
                if (globalTime > 70 && globalTime % 2 == 0) {
                  var a = V3;
                  processing.pushMatrix();
                  if (first(list) == R1) { processing.translate(blinkyX, blinkyY) }
                  if (first(list) == B1) { processing.translate(inkyX, inkyY) }
                  if (first(list) == P1) { processing.translate(pinkyX, pinkyY) }
                  if (first(list) == O1) { processing.translate(clydeX, clydeY) }
                  if (world.time % 4 == 1) { b = V1; }
                  if (world.time % 4 == 2 || world.time % 4 == 0) { b = V2; }
                  processing.image(b, 0, 0, SIZE, SIZE);
                  processing.popMatrix();
                }
              }
              if (state == 1) {
                var ojos = eyeR;
                var b = first(rest(rest(list)));
                processing.pushMatrix();
                if (first(list) == R1) { processing.translate(blinkyX, blinkyY) }
                if (first(list) == B1) { processing.translate(inkyX, inkyY) }
                if (first(list) == P1) { processing.translate(pinkyX, pinkyY) }
                if (first(list) == O1) { processing.translate(clydeX, clydeY) }
                if (world.dir == "left") { ojos = eyeL; }
                if (world.dir == "up") { ojos = eyeU; }
                if (world.dir == "down") { ojos = eyeD; }
                if (world.time % 4 == 1) { b = first(list); }
                if (world.time % 4 == 2 || world.time % 4 == 0) { b = first(rest(list)); }
                processing.image(b, 0, 0, SIZE, SIZE);
                processing.image(ojos, 0, 0, SIZE, SIZE);
                processing.popMatrix();
              }
            }

            mapeado(pacMapa, (row, y) => {
              mapeado(row, (cell, x) => {
                if (cell == 1) {
                  processing.image(wall, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 0 || cell == 3) {
                  processing.image(empty, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 2) {
                  processing.image(star, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 4) {
                  var f = A3;
                  if (world.time % 4 == 1) { f = A1; }
                  if (world.time % 4 == 2 || world.time % 4 == 0) { f = A2; }
                  processing.image(f, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 20) {
                  var f = G3;
                  if (world.time % 4 == 1) { f = G1; }
                  if (world.time % 4 == 2 || world.time % 4 == 0) { f = G2; }
                  processing.image(f, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 22) {
                  var f = C3;
                  if (world.time % 4 == 1) { f = C1; }
                  if (world.time % 4 == 2 || world.time % 4 == 0) { f = C2; }
                  processing.image(f, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 24) {
                  var f = S3;
                  if (world.time % 4 == 1) { f = S1; }
                  if (world.time % 4 == 2 || world.time % 4 == 0) { f = S2; }
                  processing.image(f, x * SIZE, y * SIZE, SIZE, SIZE);
                } if (cell == 60) {
                  var f = PA3;
                  if (world.time % 4 == 1) { f = PA1; }
                  if (world.time % 4 == 2 || world.time % 4 == 0) { f = PA2; }
                  processing.image(f, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 5) {
                  processing.image(wall1, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 6) {
                  processing.image(bigstar, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 7) {
                  processing.image(wall2, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 9) {
                  processing.image(wall3, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 11) {
                  processing.image(wall4, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 13) {
                  processing.image(wall5, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 15) {
                  processing.image(wall6, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 17) {
                  processing.image(wall7, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 19) {
                  processing.image(wall8, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 21) {
                  processing.image(wall9, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 23) {
                  processing.image(wall10, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 25) {
                  processing.image(wall11, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 27) {
                  processing.image(wall12, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 29) {
                  processing.image(wall13, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 31) {
                  processing.image(wall14, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 33) {
                  processing.image(wall15, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 35) {
                  processing.image(wall16, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 37) {
                  processing.image(wall17, x * SIZE, y * SIZE, SIZE, SIZE)

                }
              });
            });

            /**
             * Revisa si un punto [2] existe en un Array
             * @param {Array} maps 
             * @example puntosExist([1,2,3], [4,5,6])//=> true;
             */
            function puntosExist(maps) {
              if (isEmpty(maps)) {
                existenPuntos = false;
                niveles = true;
                return
              }
              const revisar = function (fila) {
                if (!isEmpty(fila)) {
                  if (first(fila) == 2) return existenPuntos = true;
                  else return revisar(rest(fila))
                }
                return puntosExist(rest(maps))
              }
              return revisar(first(maps))
            }
            /**
             * Revisa si una fruta mala [4] o [20] existe en un Array.
             * @param {Array} maps 
             * @example badFruittExist([1,2,3], [4,5,6])//=> true;
             */
            function badFruittExist(maps) {
              if (isEmpty(maps)) {
                existeBadFruta = false;
                return
              }
              const revisarBadFruit = function (fila) {
                if (!isEmpty(fila)) {
                  if (first(fila) == 4) return existeBadFruta = true;
                  if (first(fila) == 20) return existeBadFruta = true;

                  else return revisarBadFruit(rest(fila))
                }
                return badFruittExist(rest(maps))
              }
              return revisarBadFruit(first(maps))
            }

            /**
             * Checks if a bad fruit [22],[24] or [60] exists in an Array
             * @param {Array} maps 
             */
            function goodFruittExist(maps) {
              if (isEmpty(maps)) {
                existeGoodFruta = false;
                return
              }
              const revisarGoodFruit = function (fila) {
                if (!isEmpty(fila)) {
                  if (first(fila) == 22) return existeGoodFruta = true;
                  if (first(fila) == 24) return existeGoodFruta = true;
                  if (first(fila) == 60) return existeGoodFruta = true;
                  else return revisarGoodFruit(rest(fila))
                }
                return goodFruittExist(rest(maps))
              }
              return revisarGoodFruit(first(maps))
            }

            /**
             * Si una fruta mala no existe en un array, entonces se pintara una fruta mala en un espacio [0]. 
             * @param {Array} maps 
             * @example drawBadFruit([1,3,5],[5,6,7])//=>  maps[y][x] = 4 or 20
             */
            function drawBadFruit(maps) {

              const fruity = Math.floor(Math.random() * length(maps))
              const fruitx = Math.floor(Math.random() * length(first(maps)))
              const listaFrutas = [20, 4, 20]
              const fruta = listaFrutas[Math.floor(Math.random() * length(listaFrutas))]
              if (world.time >= 25) {
                if (existeBadFruta == false && maps[fruity][fruitx] == 0) {
                  existeBadFruta = true;
                  maps[fruity][fruitx] = fruta
                }
                else return
              }
            }

            /**
             * Si una fruta buena no existe en un array, entonces se pintara una fruta buena en un espacio [0]. 
             * @param {Array} maps 
             * @example drawGoodFruit([1,3,5],[5,6,7])//=>  maps[y][x] = 22, 24, or 60
             */
            function drawGoodFruit(maps) {

              const fruity = Math.floor(Math.random() * length(maps))
              const fruitx = Math.floor(Math.random() * length(first(maps)))
              const listaFrutas = [22, 24, 22, 24, 24, 22, 22, 22, 24, 60]
              const fruta = listaFrutas[Math.floor(Math.random() * length(listaFrutas))]
              if (world.time >= 30) {
                if (existeGoodFruta == false && maps[fruity][fruitx] == 0) {
                  existeGoodFruta = true;
                  maps[fruity][fruitx] = fruta
                }
                else return
              }
            }

            goodFruittExist(pacMapa);
            badFruittExist(pacMapa);
            fantasmas([R1, R2, R3], blinkyEstado);
            fantasmas([B1, B2, B3], inkyEstado);
            fantasmas([P1, P2, P3], pinkyEstado);
            fantasmas([O1, O2, O3], clydeEstado);
            movimientoPacman();
            puntosExist(pacMapa);
            drawGoodFruit(pacMapa);
            drawBadFruit(pacMapa);
            lives();
            levels();

          }

          processing.onTic = function (world) {

            //Pacman
            /** vidas de pacman */
            const vida = world.pacman.lives
            const pacX = world.pacman.x
            const pacY = world.pacman.y
            const canvasX = world.canvas.x
            const canvasY = world.canvas.y
            //Blinky
            const blinkyX = world.blinky.pos.x
            const blinkyY = world.blinky.pos.y
            const blinkyDir = world.blinky.pos.dir
            const blinkyEstado = world.blinky.state
            const blinkyTime = world.blinky.time
            //Inky
            const inkyX = world.inky.pos.x
            const inkyY = world.inky.pos.y
            const inkyDir = world.inky.pos.dir
            const inkyEstado = world.inky.state
            const inkyTime = world.inky.time
            //Pinky
            const pinkyX = world.pinky.pos.x
            const pinkyY = world.pinky.pos.y
            const pinkyDir = world.pinky.pos.dir
            const pinkyEstado = world.pinky.state
            const pinkyTime = world.pinky.time
            //Clyde
            const clydeX = world.clyde.pos.x
            const clydeY = world.clyde.pos.y
            const clydeDir = world.clyde.pos.dir
            const clydeEstado = world.clyde.state
            const clydeTime = world.clyde.time
            //Casitas
            const rojox = rx * SIZE
            const rojoy = ry * SIZE
            const azulx = bx * SIZE
            const azuly = by * SIZE
            const rosax = px * SIZE
            const rosay = py * SIZE
            const naranjax = ox * SIZE
            const naranjay = oy * SIZE
            //Global
            const globalState = world.globalGhost.state
            const globalTime = world.globalGhost.time

            // PAUSADO
            if (processing.keyCode == 80) return make(world, world);


            // Para reiniciar el mundo cuando pasa de nivel
            if (existenPuntos == false) {
              pacMapa = [
                [17, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 29, 17, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 29],
                [5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27],
                [5, 6, 33, 11, 11, 9, 2, 33, 11, 11, 11, 9, 2, 27, 5, 2, 33, 11, 11, 11, 9, 2, 33, 11, 11, 9, 6, 27],
                [5, 2, 27, 18, 18, 5, 2, 27, 18, 18, 18, 5, 2, 27, 5, 2, 27, 18, 18, 18, 5, 2, 27, 18, 18, 5, 2, 27],
                [5, 2, 31, 13, 13, 7, 2, 31, 13, 13, 13, 7, 2, 31, 7, 2, 31, 13, 13, 13, 7, 2, 31, 13, 13, 7, 2, 27],
                [5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27],
                [5, 2, 33, 11, 11, 9, 2, 33, 9, 2, 33, 11, 11, 11, 11, 11, 11, 9, 2, 33, 9, 2, 33, 11, 11, 9, 2, 27],
                [5, 2, 31, 13, 13, 7, 2, 27, 5, 2, 31, 13, 13, 29, 17, 13, 13, 7, 2, 27, 5, 2, 31, 13, 13, 7, 2, 27],
                [5, 2, 2, 2, 2, 2, 2, 27, 5, 2, 2, 2, 2, 27, 5, 2, 2, 2, 2, 27, 5, 2, 2, 2, 2, 2, 2, 27],
                [15, 11, 11, 11, 11, 9, 2, 27, 15, 11, 11, 9, 2, 27, 5, 2, 33, 11, 11, 35, 5, 2, 33, 11, 11, 11, 11, 35],
                [18, 18, 18, 18, 18, 5, 2, 27, 17, 13, 13, 7, 2, 31, 7, 2, 31, 13, 13, 29, 5, 2, 27, 18, 18, 18, 18, 18],
                [18, 18, 18, 18, 18, 5, 2, 27, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 5, 2, 27, 18, 18, 18, 18, 18],
                [18, 18, 18, 18, 18, 5, 2, 27, 5, 2, 33, 11, 11, 3, 3, 11, 11, 9, 2, 27, 5, 2, 27, 18, 18, 18, 18, 18],
                [13, 13, 13, 13, 13, 7, 2, 31, 7, 2, 27, 18, 3, 18, 18, 3, 18, 5, 2, 31, 7, 2, 31, 13, 13, 13, 13, 13],
                [18, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 18, 16, 8, 12, 14, 18, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [11, 11, 11, 11, 11, 9, 2, 33, 9, 2, 27, 18, 3, 3, 3, 18, 18, 5, 2, 33, 9, 2, 33, 11, 11, 11, 11, 11],
                [18, 18, 18, 18, 18, 5, 2, 27, 5, 2, 31, 13, 13, 13, 13, 13, 13, 7, 2, 27, 5, 2, 27, 18, 18, 18, 18, 18],
                [18, 18, 18, 18, 18, 5, 2, 27, 5, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 27, 5, 2, 27, 18, 18, 18, 18, 18],
                [18, 18, 18, 18, 18, 5, 2, 27, 5, 2, 33, 11, 11, 11, 11, 11, 11, 9, 2, 27, 5, 2, 27, 18, 18, 18, 18, 18],
                [17, 13, 13, 13, 13, 7, 2, 31, 7, 2, 31, 13, 13, 29, 17, 13, 13, 7, 2, 31, 7, 2, 31, 13, 13, 13, 13, 29],
                [5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27],
                [5, 2, 33, 11, 11, 9, 2, 33, 11, 11, 11, 9, 2, 27, 5, 2, 33, 11, 11, 11, 9, 2, 33, 11, 11, 9, 2, 27],
                [5, 2, 31, 13, 29, 5, 2, 31, 13, 13, 13, 7, 2, 31, 7, 2, 31, 13, 13, 13, 7, 2, 27, 17, 13, 7, 2, 27],
                [5, 2, 2, 2, 27, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 5, 2, 2, 2, 27],
                [15, 11, 9, 2, 27, 5, 2, 33, 9, 2, 33, 11, 11, 11, 11, 11, 11, 9, 2, 33, 9, 2, 27, 5, 2, 33, 11, 35],
                [17, 13, 7, 2, 31, 7, 2, 27, 5, 2, 31, 13, 13, 29, 17, 13, 13, 7, 2, 27, 5, 2, 31, 7, 2, 31, 13, 29],
                [5, 2, 2, 2, 2, 2, 2, 27, 5, 2, 2, 2, 2, 27, 5, 2, 2, 2, 2, 27, 5, 2, 2, 2, 2, 2, 2, 27],
                [5, 2, 33, 11, 11, 11, 11, 35, 15, 11, 11, 9, 2, 27, 5, 2, 33, 11, 11, 35, 15, 11, 11, 11, 11, 9, 2, 27],
                [5, 6, 31, 13, 13, 13, 13, 13, 13, 13, 13, 7, 2, 31, 7, 2, 31, 13, 13, 13, 13, 13, 13, 13, 13, 7, 6, 27],
                [5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27],
                [15, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 35]];

              return make(world, { time: 0, pacman: { x: pacmanX * SIZE, y: pacmanY * SIZE, lives: vida }, dir: "left", canvas: { x: pacmanX * SIZE, y: pacmanY * SIZE }, points: world.points, blinky: { pos: { x: rx * SIZE, y: ry * SIZE, dir: "up" }, state: 1, time: 0 }, inky: { pos: { x: bx * SIZE, y: by * SIZE, dir: "up" }, state: 1, time: 0 }, pinky: { pos: { x: px * SIZE, y: py * SIZE, dir: "up" }, state: 1, time: 0 }, clyde: { pos: { x: ox * SIZE, y: oy * SIZE, dir: "up" }, state: 1, time: 0 }, globalGhost: { state: 1, time: 0 }, level: world.level + 1 });
            }



            /**
             * Reinicia el juego y resta una vida cuando pacman toca un fantasma
             * @param {object} fantasma 
             */
            function muertePacman(fantasma) {
              if (globalState !== 4) return make(world, { pacman: { x: pacX, y: pacY, lives: vida - 1 }, globalGhost: { state: 4, time: 0 } });
              if (globalState == 4) {
                if (globalTime == 4) return make(world, { time: 0, pacman: { x: pacmanX * SIZE, y: pacmanY * SIZE, lives: vida }, dir: "left", canvas: { x: pacmanX * SIZE, y: pacmanY * SIZE }, points: world.points, blinky: { pos: { x: rx * SIZE, y: ry * SIZE, dir: "up" }, state: 1, time: 0 }, inky: { pos: { x: bx * SIZE, y: by * SIZE, dir: "up" }, state: 1, time: 0 }, pinky: { pos: { x: px * SIZE, y: py * SIZE, dir: "up" }, state: 1, time: 0 }, clyde: { pos: { x: ox * SIZE, y: oy * SIZE, dir: "up" }, state: 1, time: 0 }, globalGhost: { state: 1, time: 0 } });
                if (fantasma == world.blinky) return make(world, { blinky: { pos: { x: fantasma.pos.x, y: fantasma.pos.y, dir: fantasma.pos.dir }, state: 4, time: fantasma.time }, globalGhost: { state: globalState, time: globalTime + 1 } });
                if (fantasma == world.inky) return make(world, { inky: { pos: { x: fantasma.pos.x, y: fantasma.pos.y, dir: fantasma.pos.dir }, state: 4, time: fantasma.time }, globalGhost: { state: globalState, time: globalTime + 1 } });
                if (fantasma == world.pinky) return make(world, { pinky: { pos: { x: fantasma.pos.x, y: fantasma.pos.y, dir: fantasma.pos.dir }, state: 4, time: fantasma.time }, globalGhost: { state: globalState, time: globalTime + 1 } });
                if (fantasma == world.clyde) return make(world, { clyde: { pos: { x: fantasma.pos.x, y: fantasma.pos.y, dir: fantasma.pos.dir }, state: 4, time: fantasma.time }, globalGhost: { state: globalState, time: globalTime + 1 } });
              }
            }

            /**
             * Escoje un movimiento random que el fantasma pueda recorrer sin traspasar las paredes.
             * @param {object} pos 
             */
            function posibleMoves(pos) {
              var moves = [];
              var fantasmax = 0
              var fantasmay = 0

              if ((pos == world.blinky.pos || pos == world.clyde.pos) && pauseTitle.className == "") {
                fantasmax = rojox
                fantasmay = rojoy
              }
              if ((pos == world.inky.pos || pos == world.pinky.pos) && pauseTitle.className == "") {
                fantasmax = azulx
                fantasmay = azuly
              }
              if (pos.x == fantasmax && pos.y == fantasmay || pos.x == fantasmax && pos.y == (fantasmay - SIZE) || pos.x == fantasmax && pos.y == (fantasmay - (SIZE * 2)) && pauseTitle.className == "") return { x: pos.x, y: pos.y - SIZE, dir: "up" }
              if (world.time % ghostSpeed == 0 && pauseTitle.className == "") {
                if (pacMapa[(pos.y - SIZE) / SIZE][pos.x / SIZE] % 2 == 0 && pos.dir !== "down") {
                  moves = cons({ x: pos.x, y: pos.y - SIZE, dir: "up" }, moves)
                }
                if (pacMapa[(pos.y + SIZE) / SIZE][pos.x / SIZE] % 2 == 0 && pos.dir !== "up") {
                  moves = cons({ x: pos.x, y: pos.y + SIZE, dir: "down" }, moves)
                }
                if (pacMapa[pos.y / SIZE][(pos.x + SIZE) / SIZE] % 2 == 0 && pos.dir !== "left") {
                  moves = cons({ x: pos.x + SIZE, y: pos.y, dir: "right" }, moves)
                }
                if (pacMapa[pos.y / SIZE][(pos.x - SIZE) / SIZE] % 2 == 0 && pos.dir !== "right") {
                  moves = cons({ x: pos.x - SIZE, y: pos.y, dir: "left" }, moves)
                }
                var randomIndex = Math.floor(Math.random() * length(moves));
                return moves[randomIndex];
              } else return { x: pos.x, y: pos.y, dir: pos.dir }
            }

            /**
             * Calcula cual es la mejor direcion que lo acerque mas a parcman segun la posicion de pacman en el pacMapa
             * @param {*} pos 
             */

            function seguirPacman(pos) {
              const leftWall = pacMapa[pos.y / SIZE][(pos.x - SIZE) / SIZE]
              const rightWall = pacMapa[pos.y / SIZE][(pos.x + SIZE) / SIZE]
              const downWall = pacMapa[(pos.y + SIZE) / SIZE][pos.x / SIZE]
              const upWall = pacMapa[(pos.y - SIZE) / SIZE][pos.x / SIZE]
              var fantasmax = 0
              var fantasmay = 0

              if ((pos == world.blinky.pos || pos == world.clyde.pos) && pauseTitle.className == "") {
                fantasmax = rojox
                fantasmay = rojoy
              }
              if ((pos == world.inky.pos || pos == world.pinky.pos) && pauseTitle.className == "") {
                fantasmax = azulx
                fantasmay = azuly
              }

              if (pos.x == fantasmax && pos.y == fantasmay || pos.x == fantasmax && pos.y == (fantasmay - SIZE) || pos.x == fantasmax && pos.y == (fantasmay - (SIZE * 2)) && pauseTitle.className == "") return { x: pos.x, y: pos.y - SIZE, dir: "up" }

              if (world.time % ghostSpeed == 0 && pauseTitle.className == "") {
                if (canvasY > pos.y) {
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
                  if (upWall % 2 == 0 && pos.dir !== "down" || upWall == 3) return { x: pos.x, y: pos.y - SIZE, dir: "up" }
                }
                if (canvasY < pos.y) {
                  if (upWall % 2 == 0 && pos.dir !== "down" || upWall == 3) return { x: pos.x, y: pos.y - SIZE, dir: "up" }
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
                }
                if (canvasX < pos.x) {
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" }
                  if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                }
                if (canvasX > pos.x) {
                  if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" }
                }
                if (canvasX == pos.x) {
                  if (canvasY < pos.y) {
                    if (upWall % 2 == 0 && pos.dir !== "down" || upWall == 3) return { x: pos.x, y: pos.y - SIZE, dir: "up" }
                    if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                    if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" }
                  }
                  if (canvasY > pos.y) {
                    if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
                    if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                    if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" }
                  }
                }
                if (canvasY == pos.y) {
                  if (canvasX < pos.x) {
                    if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                    if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" }
                    if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
                    if (upWall % 2 == 0 && pos.dir !== "down" || upWall == 3) return { x: pos.x, y: pos.y - SIZE, dir: "up" }
                  }
                  if (canvasX > pos.x) {
                    if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" }
                    if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                    if (upWall % 2 == 0 && pos.dir !== "down" || upWall == 3) return { x: pos.x, y: pos.y - SIZE, dir: "up" }
                    if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
                  }
                }
              } else return { x: pos.x, y: pos.y, dir: pos.dir }
            }

            /**
             * Toma las direcciones necesarias para llevar el fantasma en estado 3 a la casa.
             * @param {object} pos 
             * @param {*} x 
             * @param {*} y 
             */

            function ojosBase(pos, x, y) {
              const leftWall = pacMapa[pos.y / SIZE][(pos.x - SIZE) / SIZE]
              const rightWall = pacMapa[pos.y / SIZE][(pos.x + SIZE) / SIZE]
              const downWall = pacMapa[(pos.y + SIZE) / SIZE][pos.x / SIZE]
              const upWall = pacMapa[(pos.y - SIZE) / SIZE][pos.x / SIZE]
              if (pos.y == y && pos.x == x) return { x: pos.x, y: pos.y, dir: pos.dir }

              if (upWall == 1 && leftWall == 1 && pos.dir !== "up") return { x: pos.x + SIZE, y: pos.y, dir: "down" };
              if (upWall == 1 && leftWall == 1 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" };

              if (pos.x == x) {
                if (pos.y < y && downWall % 2 == 0 || pos.y < y && downWall == 3) return { x: pos.x, y: pos.y + SIZE, dir: "down" };
                if (pos.y > y && upWall % 2 == 0) return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" };
                if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
              }
              if (pos.x < x) {
                if (pos.y == y) {
                  if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" };
                  if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
                }
                if (pos.y < y) {
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" };
                  if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" };
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                  if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                }
                if (pos.y > y) {
                  if (pos.x == x && upWall % 2 == 0) return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                  if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                  if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                  if (downWall % 2 == 0) return { x: pos.x, y: pos.y + SIZE, dir: "down" };
                }
              }

              if (pos.x > x) {
                if (pos.y == y) {
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                  if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                  if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" };
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" };
                }
                if (pos.y < y) {
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" };
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                  if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" };
                  if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                }
                if (pos.y > y) {
                  if (pos.x == x && upWall % 2 == 0) return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                  if (upWall % 2 == 0) return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                  if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" };
                }
              }
            }

            /**
             * Cuando el fantasma este en estado 2, su movimiento sera aleatorio y al cumplir un tiempo global de 80 cambia el estado a 1
             * @param {object} fantasma 
             */
            function transformarse(fantasma) {
              if (globalTime == 80) {
                if (fantasma == world.blinky && fantasma.state !== 3 || fantasma == world.pinky && fantasma.state !== 3) { return { pos: seguirPacman(fantasma.pos), state: 1, time: 0 } }
                if (fantasma == world.inky && fantasma.state !== 3 || fantasma == world.clyde && fantasma.state !== 3) return { pos: posibleMoves(fantasma.pos), state: 1, time: 0 }
              }
              if (fantasma.state == 3) {
                if (fantasma == world.blinky) return casita(fantasma, rojox, rojoy)
                if (fantasma == world.inky) return casita(fantasma, azulx, azuly)
                if (fantasma == world.clyde) return casita(fantasma, rojox, rojoy)
                if (fantasma == world.pinky) return casita(fantasma, azulx, azuly)
              }
              else return { pos: posibleMoves(fantasma.pos), state: fantasma.state, time: fantasma.time }
            }

            /**
             * Cuando el fantasma este en su casa, despues de cierto tiempo su estado se vuelve 1.
             * @param {object} fantasma 
             * @param {*} x 
             * @param {*} y 
             */
            function casita(fantasma, x, y) {
              if (fantasma.time == 20) {
                if (fantasma == world.blinky || fantasma == world.inky) return { pos: seguirPacman(fantasma.pos), state: 1, time: 0 };
                else return { pos: posibleMoves(fantasma.pos), state: 1, time: 0 };
              }
              if (fantasma.pos.x == x && fantasma.pos.y == y) return { pos: { x: fantasma.pos.x, y: fantasma.pos.y, dir: "up" }, state: 3, time: fantasma.time + 1 };
              if (fantasma.state == 3) return { pos: ojosBase(fantasma.pos, x, y), state: 3, time: 0 };
              else return { pos: posibleMoves(fantasma.pos), state: fantasma.state, time: fantasma.time };
            }

            //Si Pac-Man muere por un fantasma
            if (canvasX == blinkyX && canvasY == blinkyY) {
              if (globalState == 4) return muertePacman(world.blinky);
              if (blinkyEstado == 4) return muertePacman(world.blinky);
              if (blinkyEstado == 1) return muertePacman(world.blinky);
            }
            if (canvasX == inkyX && canvasY == inkyY) {
              if (globalState == 4) return muertePacman(world.inky);
              if (inkyEstado == 4) return muertePacman(world.inky);
              if (inkyEstado == 1) return muertePacman(world.inky);
            }
            if (canvasX == pinkyX && canvasY == pinkyY) {
              if (globalState == 4) return muertePacman(world.pinky);
              if (pinkyEstado == 4) return muertePacman(world.pinky);
              if (pinkyEstado == 1) return muertePacman(world.pinky);
            }
            if (canvasX == clydeX && canvasY == clydeY) {
              if (globalState == 4) return muertePacman(world.clyde);
              if (clydeEstado == 4) return muertePacman(world.clyde);
              if (clydeEstado == 1) return muertePacman(world.clyde);
            }
            //Si Pac-Man muere
            if (vida == 0) {
              return (world, world)
            }

            //Para pasar a el otro lado del mapa
            if (blinkyX <= 0 * SIZE) { return make(world, { time: world.time + 1, blinky: { pos: { x: 27 * SIZE, y: blinkyY, dir: "left" }, state: blinkyEstado, time: blinkyTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (blinkyX >= 27 * SIZE && blinkyDir !== "left") { return make(world, { time: world.time + 1, blinky: { pos: { x: 0, y: blinkyY, dir: "right" }, state: blinkyEstado, time: blinkyTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (inkyX <= 0 * SIZE) { return make(world, { time: world.time + 1, inky: { pos: { x: 27 * SIZE, y: inkyY, dir: "left" }, state: inkyEstado, time: inkyTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (inkyX >= 27 * SIZE && inkyDir !== "left") { return make(world, { time: world.time + 1, inky: { pos: { x: 0, y: inkyY, dir: "right" }, state: inkyEstado, time: inkyTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (pinkyX <= 0 * SIZE && pinkyDir !== "right") { return make(world, { time: world.time + 1, pinky: { pos: { x: 27 * SIZE, y: pinkyY, dir: "left" }, state: pinkyEstado, time: pinkyTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (pinkyX >= 27 * SIZE) { return make(world, { time: world.time + 1, pinky: { pos: { x: 0, y: pinkyY, dir: "right" }, state: pinkyEstado, time: pinkyTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (clydeX <= 0 * SIZE && clydeDir !== "right") { return make(world, { time: world.time + 1, clyde: { pos: { x: 27 * SIZE, y: clydeY, dir: "left" }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (clydeX >= 27 * SIZE) { return make(world, { time: world.time + 1, clyde: { pos: { x: 0, y: clydeY, dir: "right" }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }

            //Cuando los fantasmas estan asustados
            if (inkyEstado == 2 || blinkyEstado == 2 || pinkyEstado == 2 || clydeEstado == 2) {
              return make(world, { time: world.time + 1, blinky: transformarse(world.blinky), inky: transformarse(world.inky), pinky: transformarse(world.pinky), clyde: transformarse(world.clyde), globalGhost: { state: globalState, time: globalTime + 1 } });
            }
            //Cuando los fantasmas han sido comidos.
            if (inkyEstado == 3 || blinkyEstado == 3 || pinkyEstado == 3 || clydeEstado == 3) {
              return make(world, { time: world.time + 1, blinky: casita(world.blinky, rojox, rojoy), inky: casita(world.inky, azulx, azuly), pinky: casita(world.pinky, azulx, azuly), clyde: casita(world.clyde, rojox, rojoy), globalGhost: { state: globalState, time: globalTime } });
            }



            //Cuando los fantasmas estan normal
            if (blinkyEstado == 1 || inkyEstado == 1 || pinkyEstado == 1 || clydeEstado == 1) {
              if (pinkyX == rosax && pinkyY == rosay) return make(world, { time: world.time + 1, pinky: { pos: { x: pinkyX - SIZE, y: pinkyY, dir: "right" }, state: pinkyEstado, time: pinkyTime }, globalGhost: { state: globalState, time: globalTime } });
              if (clydeX == naranjax && clydeY == naranjay) return make(world, { time: world.time + 1, clyde: { pos: { x: clydeX + SIZE, y: clydeY, dir: "left" }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime } });
              if (inkyX == azulx && inkyY == azuly || inkyX == azulx && inkyY == (azuly - SIZE) || inkyX == azulx && inkyY == (azulx - (SIZE * 2))) return make(world, { time: world.time + 1, inky: { pos: { x: inkyX, y: inkyY - SIZE, dir: "up" }, state: inkyEstado, time: inkyTime }, globalGhost: { state: globalState, time: globalTime } });
              if (blinkyX == rojox && blinkyY == rojoy || blinkyX == rojox && blinkyY == (rojoy - SIZE) || blinkyX == rojox && blinkyY == (rojoy - (SIZE * 2))) return make(world, { time: world.time + 1, blinky: { pos: { x: blinkyX, y: blinkyY - SIZE, dir: "up" }, state: blinkyEstado, time: blinkyTime }, globalGhost: { state: globalState, time: globalTime } });
              return make(world, { time: world.time + 1, blinky: { pos: seguirPacman(world.blinky.pos), state: blinkyEstado, time: blinkyTime }, inky: { pos: posibleMoves(world.inky.pos), state: inkyEstado, time: inkyTime }, pinky: { pos: seguirPacman(world.pinky.pos), state: pinkyEstado, time: pinkyTime }, clyde: { pos: posibleMoves(world.clyde.pos), state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime + 1 } });
            }



            return make(world, { time: world.time + 1 });
          }


          processing.onKeyEvent = function (world, keyCode) {

            //pacman
            const pacX = world.pacman.x
            const pacY = world.pacman.y
            const canvasX = world.canvas.x
            const canvasY = world.canvas.y
            //blinky
            const blinkyX = world.blinky.pos.x
            const blinkyY = world.blinky.pos.y
            const blinkyTime = world.blinky.time
            const blinkyDir = world.blinky.pos.dir
            const blinkyEstado = world.blinky.state
            //inky
            const inkyX = world.inky.pos.x
            const inkyY = world.inky.pos.y
            const inkyDir = world.inky.pos.dir
            const inkyEstado = world.inky.state
            const inkyTime = world.inky.time
            //pinky
            const pinkyX = world.pinky.pos.x
            const pinkyY = world.pinky.pos.y
            const pinkyDir = world.pinky.pos.dir
            const pinkyEstado = world.pinky.state
            const pinkyTime = world.pinky.time
            //clyde
            const clydeX = world.clyde.pos.x
            const clydeY = world.clyde.pos.y
            const clydeDir = world.clyde.pos.dir
            const clydeEstado = world.clyde.state
            const clydeTime = world.clyde.time
            //Extras
            const vida = world.pacman.lives
            const globalState = world.globalGhost.state
            const globalTime = world.globalGhost.time

            //Para que Pac-Man no se mueva en Game Over
            if (vida <= 0) return (world, world);

            if (keyCode == processing.DOWN && pauseTitle.className == "") {
              movimientoPacman.play();
              //Si es pared, Pac-Man no puede seguir.
              if (pacMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] % 2 == 1 || globalState == 4) return (world, world);
              //Cuando Pac-Man se come una manzana.
              if (pacMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 4) {
                ghostSpeed = 1;
                pacMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
              }
              //Cuando Pac-Man se come una fresa.
              if (pacMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 24) {
                ghostSpeed = 3;
                pacMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
              }
              //Cuando Pac-Man se come un punto especial.
              if (pacMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 6) {
                pacMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 50, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 2, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 2, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 2, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 2, time: 0 }, globalGhost: { state: 2, time: 0 }, level: world.level });
              }
              //Cuando Pac-Man se come una cerezas.
              if (pacMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 22) {
                ghostSpeed = 2;
                pacMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              //Cuando Pac-Man se come una uva.
              if (pacMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 20) {
                ghostSpeed = 2;
                pacMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points - 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              //Cuando Pac-Man se come una Piña.
              if (pacMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 60) {
                ghostSpeed = 2;
                pacMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida + 1 }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              //Si Pac-Man se puede comer algun fantasma 
              if (pacX == blinkyX && pacY == blinkyY && blinkyEstado == 2 || pacX == blinkyX && pacY == blinkyY - SIZE && blinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 3, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == inkyX && pacY == inkyY && inkyEstado == 2 || pacX == inkyX && pacY == inkyY - SIZE && inkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 3, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == pinkyX && pacY == pinkyY && inkyEstado == 2 || pacX == pinkyX && pacY == pinkyY - SIZE && pinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 3, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == clydeX && pacY == clydeY && clydeEstado == 2 || pacX == clydeX && pacY == clydeY - SIZE && clydeEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 3, time: 0 }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              //Cuando Pac-Man come una pepa normal
              if (pacMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 2) {
                pacMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 10, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              } {
                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
            }

            if (keyCode == processing.LEFT && pauseTitle.className == "") {
              movimientoPacman.play();
              if (canvasX == 0) {
                return (world, { time: world.time, pacman: { x: 27 * SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: 27 * SIZE, y: canvasY }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] % 2 == 1 || globalState == 4) return (world, world);

              if (pacMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 4) {
                ghostSpeed = 1;
                pacMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
              }

              if (pacMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 24) {
                ghostSpeed = 3;
                pacMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
              }

              if (pacMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 6) {
                pacMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 50, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 2, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 2, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 2, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 2, time: 0 }, globalGhost: { state: 2, time: 0 }, level: world.level });
              }

              if (pacMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 20) {
                ghostSpeed = 2;
                pacMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points - 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 22) {
                ghostSpeed = 2;
                pacMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 60) {
                ghostSpeed = 2;
                pacMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida + 1 }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }


              if (pacX == blinkyX && pacY == blinkyY && blinkyEstado == 2 || pacX == blinkyX + SIZE && pacY == blinkyY && blinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 3, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == inkyX && pacY == inkyY && inkyEstado == 2 || pacX == inkyX + SIZE && pacY == inkyY && inkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 3, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == pinkyX && pacY == pinkyY && inkyEstado == 2 || pacX == pinkyX + SIZE && pacY == pinkyY && pinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 3, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == clydeX && pacY == clydeY && clydeEstado == 2 || pacX == clydeX + SIZE && pacY == clydeY && clydeEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 3, time: 0 }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 2) {
                pacMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 10, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
            }

            if (keyCode == processing.RIGHT && pauseTitle.className == "") {
              movimientoPacman.play();
              if (canvasX == 27 * SIZE) {
                return (world, { time: world.time, pacman: { x: 0, y: pacY, lives: vida }, dir: "right", canvas: { x: 0, y: canvasY }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              if (pacMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 4) {
                ghostSpeed = 1;
                pacMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
              }
              if (pacMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 24) {
                ghostSpeed = 3;
                pacMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
              }

              if (pacMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] % 2 == 1 || globalState == 4) return (world, world);
              if (pacMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 20) {
                ghostSpeed = 2;
                pacMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points - 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 22) {
                ghostSpeed = 2;
                pacMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 60) {
                ghostSpeed = 2;
                pacMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida + 1 }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }


              if (pacMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 6) {
                pacMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 50, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 2, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 2, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 2, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 2, time: 0 }, globalGhost: { state: 2, time: 0 }, level: world.level });
              }

              if (pacX == blinkyX && pacY == blinkyY && blinkyEstado == 2 || pacX == blinkyX - SIZE && pacY == blinkyY && blinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 3, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == inkyX && pacY == inkyY && inkyEstado == 2 || pacX == inkyX - SIZE && pacY == inkyY && inkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 3, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == pinkyX && pacY == pinkyY && inkyEstado == 2 || pacX == pinkyX - SIZE && pacY == pinkyY && pinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 3, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == clydeX && pacY == clydeY && clydeEstado == 2 || pacX == clydeX - SIZE && pacY == clydeY && clydeEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 3, time: 0 }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 2) {
                pacMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 10, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
            }

            if (keyCode == processing.UP && pauseTitle.className == "") {
              movimientoPacman.play();
              if (pacMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] % 2 == 1 || globalState == 4) return (world, world);

              if (pacMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 4) {
                ghostSpeed = 1;
                pacMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
              }

              if (pacMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 24) {
                ghostSpeed = 3;
                pacMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
              }

              if (pacMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 20) {
                ghostSpeed = 2;
                pacMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points - 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 22) {
                ghostSpeed = 2;
                pacMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 60) {
                ghostSpeed = 2;
                pacMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida + 1 }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              if (pacMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 6) {
                pacMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 50, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 2, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 2, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 2, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 2, time: 0 }, globalGhost: { state: 2, time: 0 }, level: world.level });
              }

              if (pacX == blinkyX && pacY == blinkyY && blinkyEstado == 2 || pacX == blinkyX && pacY == blinkyY + SIZE && blinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 3, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              if (pacX == inkyX && pacY == inkyY && inkyEstado == 2 || pacX == inkyX && pacY == inkyY + SIZE && inkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 3, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              if (pacX == pinkyX && pacY == pinkyY && pinkyEstado == 2 || pacX == pinkyX && pacY == pinkyY + SIZE && pinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 3, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              if (pacX == clydeX && pacY == clydeY && clydeEstado == 2 || pacX == clydeX && pacY == clydeY + SIZE && clydeEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 3, time: 0 }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              if (pacMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 2) {
                pacMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 10, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
            }

            else return (world, world);

          }

          processing.onMouseEvent = function (world, event) {
            return make(world, {});
          }

          // ******************** De aquí hacia abajo no debe cambiar nada. ********************

          // Esta es la función que pinta todo. Se ejecuta 60 veces por segundo. 
          // No cambie esta función. Su código debe ir en drawGame
          processing.draw = function () {
            processing.drawGame(processing.state);
            processing.state = processing.onTic(processing.state);
          };

          // Esta función se ejecuta cada vez que presionamos una tecla. 
          // No cambie esta función. Su código debe ir en onKeyEvent
          processing.keyPressed = function () {
            processing.state = processing.onKeyEvent(processing.state, processing.keyCode);
          }

          // Esta función se ejecuta cada vez movemos el mouse. 
          // No cambie esta función. Su código debe ir en onKeyEvent
          processing.mouseMoved = function () {
            processing.state = processing.onMouseEvent(processing.state,
              { action: "move", mouseX: processing.mouseX, mouseY: processing.mouseY });
          }

          // Estas funciones controlan los eventos del mouse. 
          // No cambie estas funciones. Su código debe ir en OnMouseEvent
          processing.mouseClicked = function () {
            processing.state = processing.onMouseEvent(processing.state,
              { action: "click", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
          }

          processing.mouseDragged = function () {
            processing.state = processing.onMouseEvent(processing.state,
              { action: "drag", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
          }

          processing.mousePressed = function () {
            processing.state = processing.onMouseEvent(processing.state,
              { action: "press", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
          }

          processing.mouseReleased = function () {
            processing.state = processing.onMouseEvent(processing.state,
              { action: "release", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
          }
          // Fin de los eventos del mouse
        }
        var canvas = document.getElementById("canvas");
        var processingInstance = new Processing(canvas, sketchProc);
        canvas.focus() = true;
      }

      else if (missPacman.className == "selected") {

        function sketchProc(processing) {

          //Posicion base de blinky.
          const rx = buscarX(missMapa, 8);
          const ry = buscarY(missMapa, 8);
          //Posicion base de inky.
          const bx = buscarX(missMapa, 12);
          const by = buscarY(missMapa, 12);
          //Posicion base de pinky
          const px = buscarX(missMapa, 14);
          const py = buscarY(missMapa, 14);
          //Posicion base de clyde
          const ox = buscarX(missMapa, 16);
          const oy = buscarY(missMapa, 16);
          //Posicion base de Miss Pac-Man 
          const pacmanX = buscarX(missMapa, 10);
          const pacmanY = buscarY(missMapa, 10);




          processing.setup = function () {
            processing.frameRate(rate);
            processing.size(WIDTH, HEIGHT);
            //Frutas
            A1 = processing.loadImage("Frutas/MissPacman/pear1.png");
            A2 = processing.loadImage("Frutas/MissPacman/pear2.png");
            A3 = processing.loadImage("Frutas/MissPacman/pear3.png")
            C1 = processing.loadImage("Frutas/MissPacman/burger1.png");
            C2 = processing.loadImage("Frutas/MissPacman/burger2.png");
            C3 = processing.loadImage("Frutas/MissPacman/burger3.png");
            G1 = processing.loadImage("Frutas/MissPacman/cookie1.png");
            G2 = processing.loadImage("Frutas/MissPacman/cookie2.png");
            G3 = processing.loadImage("Frutas/MissPacman/cookie3.png");
            PA1 = processing.loadImage("Frutas/MissPacman/pizza1.png");
            PA2 = processing.loadImage("Frutas/MissPacman/pizza2.png");
            PA3 = processing.loadImage("Frutas/MissPacman/pizza3.png");
            S1 = processing.loadImage("Frutas/MissPacman/ice1.png");
            S2 = processing.loadImage("Frutas/MissPacman/ice2.png");
            S3 = processing.loadImage("Frutas/MissPacman/ice3.png");
            //Miss Pac-Man
            M1 = processing.loadImage("img/death1.png")
            M2 = processing.loadImage("img/death2.png")
            M3 = processing.loadImage("img/death3.png")
            PacDeath2 = processing.loadImage("img/pacMuere2.png")
            PacDeath3 = processing.loadImage("img/pacMuere3.png")
            PacDeath4 = processing.loadImage("img/pacMuere4.png")
            V1 = processing.loadImage("img/Mvida1.png")
            V2 = processing.loadImage("img/Mvida2.png")
            V3 = processing.loadImage("img/Mvida3.png")
            Pac1 = processing.loadImage("img/missPacman/characters/missPac1.png");
            Pac2 = processing.loadImage("img/missPacman/characters/missPac2.png");
            Pac3 = processing.loadImage("img/missPacman/characters/missPac3.png");
            //Fantasmas
            B1 = processing.loadImage("img/missPacman/characters/blue1.png");
            B2 = processing.loadImage("img/missPacman/characters/blue2.png");
            B3 = processing.loadImage("img/missPacman/characters/blue3.png");
            R1 = processing.loadImage("img/missPacman/characters/pink1.png");
            R2 = processing.loadImage("img/missPacman/characters/pink2.png");
            R3 = processing.loadImage("img/missPacman/characters/pink3.png");
            P1 = processing.loadImage("img/missPacman/characters/purple1.png");
            P2 = processing.loadImage("img/missPacman/characters/purple2.png");
            P3 = processing.loadImage("img/missPacman/characters/purple3.png");
            O1 = processing.loadImage("img/missPacman/characters/lime1.png");
            O2 = processing.loadImage("img/missPacman/characters/lime2.png");
            O3 = processing.loadImage("img/missPacman/characters/lime3.png");
            eyeR = processing.loadImage("img/missPacman/characters/eyesRight.png");
            eyeD = processing.loadImage("img/missPacman/characters/eyesDown.png");
            eyeU = processing.loadImage("img/missPacman/characters/eyesUp.png");
            eyeL = processing.loadImage("img/missPacman/characters/eyesLeft.png");
            //Paredes
            wall = processing.loadImage("img/missPacman/walls/wallPink.png");
            wall1 = processing.loadImage("img/missPacman/walls/wall1.png");
            wall2 = processing.loadImage("img/missPacman/walls/wall2.png");
            wall3 = processing.loadImage("img/missPacman/walls/wall3.png");
            wall4 = processing.loadImage("img/missPacman/walls/wall4.png");
            wall5 = processing.loadImage("img/missPacman/walls/wall5.png");
            wall6 = processing.loadImage("img/missPacman/walls/wall6.png");
            wall7 = processing.loadImage("img/missPacman/walls/wall7.png");
            wall8 = processing.loadImage("img/missPacman/walls/wall8.png");
            wall9 = processing.loadImage("img/missPacman/walls/wall9.png");
            wall10 = processing.loadImage("img/missPacman/walls/wall10.png");
            wall11 = processing.loadImage("img/missPacman/walls/wall11.png");
            wall12 = processing.loadImage("img/missPacman/walls/wall12.png");
            wall13 = processing.loadImage("img/missPacman/walls/wall13.png");
            wall14 = processing.loadImage("img/missPacman/walls/wall14.png");
            wall15 = processing.loadImage("img/missPacman/walls/wall15.png");
            wall16 = processing.loadImage("img/missPacman/walls/wall16.png");
            wall17 = processing.loadImage("img/missPacman/walls/wall17.png");
            //Puntos
            empty = processing.loadImage("img/missPacman/walls/empty.png");
            star = processing.loadImage("img/star.png");
            bigstar = processing.loadImage("img/missPacman/walls/punto2Rosa.png")
            bigstar2 = processing.loadImage("img/missPacman/walls/punto2Rosa2.png")
            bigstar3 = processing.loadImage("img/missPacman/walls/punto2Rosa3.png")
            processing.state = {
              time: 0,
              pacman: { x: pacmanX * SIZE, y: pacmanY * SIZE, lives: 3 },
              dir: "left", canvas: { x: pacmanX * SIZE, y: pacmanY * SIZE },
              points: 0,
              blinky: { pos: { x: rx * SIZE, y: ry * SIZE, dir: "up" }, state: 1, time: 0 },
              inky: { pos: { x: bx * SIZE, y: by * SIZE, dir: "up" }, state: 1, time: 0 },
              pinky: { pos: { x: px * SIZE, y: py * SIZE, dir: "up" }, state: 1, time: 0 },
              clyde: { pos: { x: ox * SIZE, y: oy * SIZE, dir: "up" }, state: 1, time: 0 },
              globalGhost: { state: 1, time: 0 },
              level: 1
            };
          }


          processing.drawGame = function (world) {

            /** Puntos de pacman */
            const puntos = world.points
            /** Numero de vidas de pacman */
            const vidas = world.pacman.lives
            //Posicion x, y de pacman
            const pacX = world.pacman.x
            const pacY = world.pacman.y
            const canvasX = world.canvas.x
            const canvasY = world.canvas.y
            //Blinky
            const blinkyX = world.blinky.pos.x
            const blinkyY = world.blinky.pos.y
            const blinkyEstado = world.blinky.state
            //Pinky
            const pinkyX = world.pinky.pos.x
            const pinkyY = world.pinky.pos.y
            const pinkyEstado = world.pinky.state
            //Clyde
            const clydeX = world.clyde.pos.x
            const clydeY = world.clyde.pos.y
            const clydeEstado = world.clyde.state
            //Inky
            const inkyX = world.inky.pos.x
            const inkyY = world.inky.pos.y
            const inkyEstado = world.inky.state
            //Extras
            const globalState = world.globalGhost.state
            const globalTime = world.globalGhost.time

            processing.background(00, 0, 0);
            let puntaje = "Puntaje: " + puntos
            processing.textSize(30);
            processing.fill(255, 255, 255);
            processing.text(puntaje, 28 * SIZE, 2 * SIZE);

            /**
             * Revisa cuantas vidas tiene pacman y muestra la cantidad al lado del texto Vidas.
             * Si la vida de pacman es = 0 entonces retorna, texto de GAME OVER
             */

            function lives() {
              let ghostTime = "Vidas:"
              let extraVida = (vidas - 3)
              processing.textSize(30);
              processing.text(ghostTime, 28 * SIZE, SIZE * 4);
              const mini = SIZE - 2
              var x = (length(pacMapa[2]) + 3.5) * SIZE
              if (extraVida > 0) {
                processing.textSize(20);
                processing.text("+ " + extraVida, x + (SIZE * 3), 97);
              }
              if (vidas >= 1) {
                processing.image(Pac3, x, 78, mini, mini)
              }
              if (vidas >= 2) {
                x = x + SIZE
                processing.image(Pac3, x, 78, mini, mini)
              }
              if (vidas >= 3) {
                x = x + (SIZE)
                processing.image(Pac3, x, 78, mini, mini)
              }
              if (vidas == 0) {
                processing.fill(0, 0, 0, 220)
                processing.rect(2 * SIZE, 12 * SIZE, 615, 200, 7);
                processing.fill(255, 255, 0)
                const over = " GAME OVER "
                const finalPoints = "Score:" + puntos
                processing.textSize(100);
                processing.text(over, SIZE, 16 * SIZE);
                processing.textSize(80);
                processing.text(finalPoints, 8 * SIZE, 19 * SIZE);
              }
              if (vidas !== 0) {
                
              }
            }
            /**
             * Si ya no existen puntos, y niveles es true, entonces aparece el texto en el nivel que este.
             */
            function levels() {
              if (world.time <= 8) {
                if (niveles == true && vidas !== 0) {
                  const textNivel = " NIVEL " + world.level
                  processing.textSize(100);
                  processing.fill(255, 255, 255);
                  processing.text(textNivel, 6 * SIZE, 16 * SIZE);
                }

                else {
                  niveles = false;
                }
              }
            }

            /**
             * Revisa la direcion que esta tomando pacman, y acomoda la imagen para mirar hacia esa direccion.
             */
            function movimientoPacman() {

              /** Aplica la animacion muerte de pacman, cuando el estado global es 4. */
              const muerte = function () {
                processing.pushMatrix();
                processing.translate(canvasX, canvasY);
                var p = empty;
                if (globalTime % 5 == 1) { p = PacDeath2; }
                if (globalTime % 5 == 2) { p = PacDeath3; }
                if (globalTime % 5 == 3) { p = PacDeath4; }
                processing.image(p, 0, 0, SIZE, SIZE);
                processing.popMatrix();
              }

              if (globalState == 4) return muerte();

              processing.pushMatrix();
              var p = Pac3;
              if (world.dir == "left") {
                processing.translate(pacX + SIZE, pacY);
                processing.scale(-1, 1);
                if (world.time % 4 == 1) { p = Pac1; }
                if (world.time % 4 == 2 || world.time % 4 == 0) { p = Pac2; }
                processing.image(p, 0, 0, SIZE, SIZE);
              }
              if (world.dir == "right") {
                processing.translate(pacX - SIZE, pacY);
                if (world.time % 4 == 1) { p = Pac1; }
                if (world.time % 4 == 2 || world.time % 4 == 0) { p = Pac2; }
                processing.image(p, SIZE, 0, SIZE, SIZE);
              }
              if (world.dir == "up") {
                processing.translate(pacX + (SIZE / 2), pacY);
                processing.rotate(processing.radians(-90));
                if (world.time % 4 == 1) { p = Pac1; }
                if (world.time % 4 == 2 || world.time % 4 == 0) { p = Pac2; }
                processing.image(p, -SIZE, -(SIZE / 2), SIZE, SIZE);
              }
              if (world.dir == "down") {
                processing.translate(pacX, pacY + (SIZE / 2));
                processing.rotate(processing.radians(90));
                if (world.time % 4 == 1) { p = Pac1; }
                if (world.time % 4 == 2 || world.time % 4 == 0) { p = Pac2; }
                processing.image(p, -(SIZE / 2), -SIZE, SIZE, SIZE);
              }
              processing.popMatrix();
            }

            /**
             * Aplica la animacion correcta, segun el estado del fantasma
             * @param {Array} list 
             * @param {*} state 
             */

            function fantasmas(list, state) {
              if (state == 3) {
                var ojos = eyeR;
                processing.pushMatrix();
                if (first(list) == R1) { processing.translate(blinkyX, blinkyY) }
                if (first(list) == B1) { processing.translate(inkyX, inkyY) }
                if (first(list) == P1) { processing.translate(pinkyX, pinkyY) }
                if (first(list) == O1) { processing.translate(clydeX, clydeY) }
                if (world.dir == "left") { ojos = eyeL; }
                if (world.dir == "up") { ojos = eyeU; }
                if (world.dir == "down") { ojos = eyeD; }
                processing.image(ojos, 0, 0, SIZE, SIZE);
                processing.popMatrix();
              }
              if (state == 2) {
                var b = M3;
                processing.pushMatrix();
                if (first(list) == R1) { processing.translate(blinkyX, blinkyY) }
                if (first(list) == B1) { processing.translate(inkyX, inkyY) }
                if (first(list) == P1) { processing.translate(pinkyX, pinkyY) }
                if (first(list) == O1) { processing.translate(clydeX, clydeY) }
                if (world.time % 4 == 1) { b = M1; }
                if (world.time % 4 == 2 || world.time % 4 == 0) { b = M2; }
                processing.image(b, 0, 0, SIZE, SIZE);
                processing.popMatrix();
                if (globalTime > 70 && globalTime % 2 == 0) {
                  var a = V3;
                  processing.pushMatrix();
                  if (first(list) == R1) { processing.translate(blinkyX, blinkyY) }
                  if (first(list) == B1) { processing.translate(inkyX, inkyY) }
                  if (first(list) == P1) { processing.translate(pinkyX, pinkyY) }
                  if (first(list) == O1) { processing.translate(clydeX, clydeY) }
                  if (world.time % 4 == 1) { b = V1; }
                  if (world.time % 4 == 2 || world.time % 4 == 0) { b = V2; }
                  processing.image(b, 0, 0, SIZE, SIZE);
                  processing.popMatrix();
                }
              }
              if (state == 1) {
                var ojos = eyeR;
                var b = first(rest(rest(list)));
                processing.pushMatrix();
                if (first(list) == R1) { processing.translate(blinkyX, blinkyY) }
                if (first(list) == B1) { processing.translate(inkyX, inkyY) }
                if (first(list) == P1) { processing.translate(pinkyX, pinkyY) }
                if (first(list) == O1) { processing.translate(clydeX, clydeY) }
                if (world.dir == "left") { ojos = eyeL; }
                if (world.dir == "up") { ojos = eyeU; }
                if (world.dir == "down") { ojos = eyeD; }
                if (world.time % 4 == 1) { b = first(list); }
                if (world.time % 4 == 2 || world.time % 4 == 0) { b = first(rest(list)); }
                processing.image(b, 0, 0, SIZE, SIZE);
                processing.image(ojos, 0, 0, SIZE, SIZE);
                processing.popMatrix();
              }
            }

            mapeado(missMapa, (row, y) => {
              mapeado(row, (cell, x) => {
                if (cell == 1) {
                  processing.image(wall, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 0 || cell == 3) {
                  processing.image(empty, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 2) {
                  processing.image(star, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 4) {
                  var f = A3;
                  if (world.time % 4 == 1) { f = A1; }
                  if (world.time % 4 == 2 || world.time % 4 == 0) { f = A2; }
                  processing.image(f, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 20) {
                  var f = G3;
                  if (world.time % 4 == 1) { f = G1; }
                  if (world.time % 4 == 2 || world.time % 4 == 0) { f = G2; }
                  processing.image(f, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 22) {
                  var f = C3;
                  if (world.time % 4 == 1) { f = C1; }
                  if (world.time % 4 == 2 || world.time % 4 == 0) { f = C2; }
                  processing.image(f, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 24) {
                  var f = S3;
                  if (world.time % 4 == 1) { f = S1; }
                  if (world.time % 4 == 2 || world.time % 4 == 0) { f = S2; }
                  processing.image(f, x * SIZE, y * SIZE, SIZE, SIZE);
                } if (cell == 60) {
                  var f = PA3;
                  if (world.time % 4 == 1) { f = PA1; }
                  if (world.time % 4 == 2 || world.time % 4 == 0) { f = PA2; }
                  processing.image(f, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 5) {
                  processing.image(wall1, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 6) {
                  var f = bigstar;
                  if (world.time % 6 == 1) { f = bigstar3; }
                  if (world.time % 6 == 2 || world.time % 6 == 0) { f = bigstar2; }
                  processing.image(f, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 7) {
                  processing.image(wall2, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 9) {
                  processing.image(wall3, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 11) {
                  processing.image(wall4, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 13) {
                  processing.image(wall5, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 15) {
                  processing.image(wall6, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 17) {
                  processing.image(wall7, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 19) {
                  processing.image(wall8, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 21) {
                  processing.image(wall9, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 23) {
                  processing.image(wall10, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 25) {
                  processing.image(wall11, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 27) {
                  processing.image(wall12, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 29) {
                  processing.image(wall13, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 31) {
                  processing.image(wall14, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 33) {
                  processing.image(wall15, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 35) {
                  processing.image(wall16, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 37) {
                  processing.image(wall17, x * SIZE, y * SIZE, SIZE, SIZE)

                }
              });
            });

            /**
             * Revisa si un punto [2] existe en un Array
             * @param {Array} maps 
             * @example puntosExist([1,2,3], [4,5,6])//=> true;
             */

            function puntosExist(maps) {
              if (isEmpty(maps)) {
                existenPuntos = false
                niveles = true;
                return
              }
              const revisar = function (fila) {
                if (!isEmpty(fila)) {
                  if (first(fila) == 2) return existenPuntos = true;
                  else return revisar(rest(fila))
                }
                return puntosExist(rest(maps))
              }
              return revisar(first(maps))
            }

            /**
           * Revisa si una fruta mala [4] o [20] existe en un Array.
           * @param {Array} maps 
           * @example badFruittExist([1,2,3], [4,5,6])//=> true;
           */
            function badFruittExist(maps) {
              if (isEmpty(maps)) {
                existeBadFruta = false;
                return
              }
              const revisarBadFruit = function (fila) {
                if (!isEmpty(fila)) {
                  if (first(fila) == 4) return existeBadFruta = true;
                  if (first(fila) == 20) return existeBadFruta = true;

                  else return revisarBadFruit(rest(fila))
                }
                return badFruittExist(rest(maps))
              }
              return revisarBadFruit(first(maps))
            }

            /**
             * Revisa si una fruta buena [22],[24] o [60] existe en un Array.
             * @param {Array} maps 
             * @example goodFruittExist([1,2,3], [4,5,6])//=> false;
             */
            function goodFruittExist(maps) {
              if (isEmpty(maps)) {
                existeGoodFruta = false;
                return
              }
              const revisarGoodFruit = function (fila) {
                if (!isEmpty(fila)) {
                  if (first(fila) == 22) return existeGoodFruta = true;
                  if (first(fila) == 24) return existeGoodFruta = true;
                  if (first(fila) == 60) return existeGoodFruta = true;
                  else return revisarGoodFruit(rest(fila))
                }
                return goodFruittExist(rest(maps))
              }
              return revisarGoodFruit(first(maps))
            }

            /**
             * Si una fruta mala no existe en un array, entonces se pintara una fruta mala en un espacio [0]. 
             * @param {Array} maps 
             * @example drawBadFruit([1,3,5],[5,6,7])//=>  maps[y][x] = 4 or 20
             */
            function drawBadFruit(maps) {

              const fruity = Math.floor(Math.random() * length(maps))
              const fruitx = Math.floor(Math.random() * length(first(maps)))
              const listaFrutas = [20, 4, 20]
              const fruta = listaFrutas[Math.floor(Math.random() * length(listaFrutas))]
              if (world.time >= 25) {
                if (existeBadFruta == false && maps[fruity][fruitx] == 0) {
                  existeBadFruta = true;
                  maps[fruity][fruitx] = fruta
                }
                else return
              }
            }

            /**
              * Si una fruta buena no existe en un array, entonces se pintara una fruta buena en un espacio [0]. 
              * @param {Array} maps 
              * @example drawGoodFruit([1,3,5],[5,6,7])//=>  maps[y][x] = 22, 24, or 60
              */
            function drawGoodFruit(maps) {

              const fruity = Math.floor(Math.random() * length(maps))
              const fruitx = Math.floor(Math.random() * length(first(maps)))
              const listaFrutas = [22, 24, 22, 24, 24, 22, 22, 22, 24, 60]
              const fruta = listaFrutas[Math.floor(Math.random() * length(listaFrutas))]
              if (world.time >= 30) {
                if (existeGoodFruta == false && maps[fruity][fruitx] == 0) {
                  existeGoodFruta = true;
                  maps[fruity][fruitx] = fruta
                }
                else return
              }
            }


            badFruittExist(missMapa)
            goodFruittExist(missMapa)
            fantasmas([R1, R2, R3], blinkyEstado);
            fantasmas([B1, B2, B3], inkyEstado);
            fantasmas([P1, P2, P3], pinkyEstado);
            fantasmas([O1, O2, O3], clydeEstado);
            movimientoPacman();
            puntosExist(missMapa);
            drawBadFruit(missMapa)
            drawGoodFruit(missMapa)
            lives();
            levels();
          }

          processing.onTic = function (world) {

            //Pacman
            /** vidas de pacman */
            const vida = world.pacman.lives
            const pacX = world.pacman.x
            const pacY = world.pacman.y
            const canvasX = world.canvas.x
            const canvasY = world.canvas.y
            //Blinky
            const blinkyX = world.blinky.pos.x
            const blinkyY = world.blinky.pos.y
            const blinkyDir = world.blinky.pos.dir
            const blinkyEstado = world.blinky.state
            const blinkyTime = world.blinky.time
            //Inky
            const inkyX = world.inky.pos.x
            const inkyY = world.inky.pos.y
            const inkyDir = world.inky.pos.dir
            const inkyEstado = world.inky.state
            const inkyTime = world.inky.time
            //Pinky
            const pinkyX = world.pinky.pos.x
            const pinkyY = world.pinky.pos.y
            const pinkyDir = world.pinky.pos.dir
            const pinkyEstado = world.pinky.state
            const pinkyTime = world.pinky.time
            //Clyde
            const clydeX = world.clyde.pos.x
            const clydeY = world.clyde.pos.y
            const clydeDir = world.clyde.pos.dir
            const clydeEstado = world.clyde.state
            const clydeTime = world.clyde.time
            //Casitas
            const rojox = rx * SIZE
            const rojoy = ry * SIZE
            const azulx = bx * SIZE
            const azuly = by * SIZE
            const rosax = px * SIZE
            const rosay = py * SIZE
            const naranjax = ox * SIZE
            const naranjay = oy * SIZE
            //Global
            const globalState = world.globalGhost.state
            const globalTime = world.globalGhost.time

            //Pausado
            if (processing.keyCode == 80) return make(world, world);

            //Cuando Pac-Man pasa de nivel
            if (existenPuntos == false) {
              missMapa = [
                [17, 13, 13, 13, 29, 18, 18, 18, 18, 18, 17, 13, 13, 13, 13, 13, 13, 29, 18, 18, 18, 18, 18, 17, 13, 13, 13, 29],
                [5, 6, 2, 2, 31, 13, 13, 13, 13, 13, 7, 2, 2, 2, 2, 2, 2, 31, 13, 13, 13, 13, 13, 7, 2, 2, 6, 27],
                [5, 2, 37, 2, 2, 2, 37, 2, 2, 2, 2, 2, 33, 11, 11, 9, 2, 2, 2, 2, 2, 37, 2, 2, 2, 37, 2, 27],
                [5, 2, 2, 2, 27, 2, 2, 2, 5, 2, 27, 2, 31, 13, 13, 7, 2, 5, 2, 27, 2, 2, 2, 5, 2, 2, 2, 27],
                [15, 11, 9, 2, 31, 13, 13, 29, 5, 2, 27, 2, 2, 2, 2, 2, 2, 5, 2, 27, 25, 11, 11, 19, 2, 33, 11, 35],
                [18, 18, 5, 2, 2, 2, 2, 27, 5, 2, 27, 13, 13, 13, 13, 13, 13, 5, 2, 27, 5, 2, 2, 2, 2, 27, 18, 18],
                [18, 18, 5, 2, 33, 9, 2, 31, 7, 2, 31, 13, 13, 13, 13, 13, 13, 7, 2, 31, 7, 2, 33, 9, 2, 27, 18, 18],
                [18, 18, 5, 2, 31, 7, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 31, 7, 2, 27, 18, 18],
                [18, 18, 5, 2, 2, 2, 2, 11, 11, 9, 2, 33, 11, 11, 11, 11, 9, 2, 33, 11, 11, 2, 2, 2, 2, 27, 18, 18],
                [17, 13, 7, 2, 13, 13, 13, 13, 13, 7, 2, 31, 13, 13, 13, 13, 7, 2, 31, 13, 13, 13, 13, 13, 2, 31, 13, 29],
                [5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27],
                [5, 2, 27, 2, 11, 11, 11, 11, 9, 2, 33, 11, 11, 11, 11, 11, 11, 9, 2, 33, 11, 11, 11, 11, 2, 5, 2, 27],
                [5, 2, 27, 2, 2, 37, 37, 37, 5, 2, 27, 18, 18, 18, 18, 18, 18, 5, 2, 27, 37, 37, 37, 2, 2, 5, 2, 27],
                [5, 2, 27, 37, 2, 2, 37, 37, 5, 2, 27, 18, 14, 12, 8, 16, 18, 5, 2, 27, 37, 37, 2, 2, 37, 5, 2, 27],
                [5, 2, 27, 37, 37, 2, 2, 37, 5, 2, 27, 18, 18, 18, 18, 18, 18, 5, 2, 27, 37, 2, 2, 37, 37, 5, 2, 27],
                [5, 2, 27, 37, 37, 37, 2, 13, 7, 2, 31, 13, 13, 3, 3, 13, 13, 7, 2, 31, 13, 2, 37, 37, 37, 5, 2, 27],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [25, 11, 2, 33, 11, 11, 11, 11, 11, 11, 11, 2, 33, 11, 11, 9, 2, 11, 11, 11, 11, 11, 11, 11, 9, 2, 37, 27],
                [5, 2, 2, 27, 37, 2, 2, 2, 2, 2, 2, 2, 27, 18, 18, 5, 2, 2, 2, 2, 2, 2, 2, 37, 5, 2, 2, 27],
                [5, 2, 37, 27, 2, 2, 33, 11, 11, 11, 11, 2, 31, 13, 13, 7, 2, 11, 11, 11, 11, 9, 2, 2, 5, 37, 2, 27],
                [5, 2, 2, 27, 2, 33, 35, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 15, 9, 2, 5, 2, 2, 27],
                [5, 5, 2, 2, 2, 27, 18, 5, 2, 33, 11, 11, 11, 11, 11, 11, 11, 11, 9, 2, 27, 18, 5, 2, 2, 2, 27, 27],
                [5, 15, 11, 11, 2, 31, 13, 7, 2, 31, 13, 13, 13, 13, 13, 13, 13, 13, 7, 2, 31, 13, 7, 2, 11, 11, 35, 27],
                [5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27],
                [5, 2, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 29, 17, 13, 13, 13, 13, 13, 13, 13, 13, 2, 27],
                [5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 37, 2, 2, 2, 2, 2, 31, 7, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27],
                [5, 2, 27, 2, 11, 9, 2, 11, 9, 2, 2, 2, 27, 2, 5, 2, 2, 2, 2, 33, 11, 2, 33, 11, 2, 5, 2, 27],
                [5, 2, 27, 2, 2, 5, 2, 37, 15, 11, 11, 11, 35, 2, 15, 11, 11, 11, 11, 35, 37, 2, 27, 2, 2, 5, 2, 27],
                [5, 2, 31, 13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 7, 2, 27],
                [5, 6, 2, 2, 2, 33, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 9, 2, 2, 2, 6, 27],
                [15, 11, 11, 11, 11, 35, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 15, 11, 11, 11, 11, 35]]

              return make(world, { time: 0, pacman: { x: pacmanX * SIZE, y: pacmanY * SIZE, lives: vida }, dir: "left", canvas: { x: pacmanX * SIZE, y: pacmanY * SIZE }, points: world.points, blinky: { pos: { x: rx * SIZE, y: ry * SIZE, dir: "up" }, state: 1, time: 0 }, inky: { pos: { x: bx * SIZE, y: by * SIZE, dir: "up" }, state: 1, time: 0 }, pinky: { pos: { x: px * SIZE, y: py * SIZE, dir: "up" }, state: 1, time: 0 }, clyde: { pos: { x: ox * SIZE, y: oy * SIZE, dir: "up" }, state: 1, time: 0 }, globalGhost: { state: 1, time: 0 }, level: world.level + 1 });
            }



            /**
             * Reinicia el juego y resta una vida cuando pacman toca un fantasma
             * @param {object} fantasma 
             */
            function muertePacman(fantasma) {
              if (globalState !== 4) return make(world, { pacman: { x: pacX, y: pacY, lives: vida - 1 }, globalGhost: { state: 4, time: 0 } });
              if (globalState == 4) {
                if (globalTime == 4) return make(world, { time: 0, pacman: { x: pacmanX * SIZE, y: pacmanY * SIZE, lives: vida }, dir: "left", canvas: { x: pacmanX * SIZE, y: pacmanY * SIZE }, points: world.points, blinky: { pos: { x: rx * SIZE, y: ry * SIZE, dir: "up" }, state: 1, time: 0 }, inky: { pos: { x: bx * SIZE, y: by * SIZE, dir: "up" }, state: 1, time: 0 }, pinky: { pos: { x: px * SIZE, y: py * SIZE, dir: "up" }, state: 1, time: 0 }, clyde: { pos: { x: ox * SIZE, y: oy * SIZE, dir: "up" }, state: 1, time: 0 }, globalGhost: { state: 1, time: 0 } });
                if (fantasma == world.blinky) return make(world, { blinky: { pos: { x: fantasma.pos.x, y: fantasma.pos.y, dir: fantasma.pos.dir }, state: 4, time: fantasma.time }, globalGhost: { state: globalState, time: globalTime + 1 } });
                if (fantasma == world.inky) return make(world, { inky: { pos: { x: fantasma.pos.x, y: fantasma.pos.y, dir: fantasma.pos.dir }, state: 4, time: fantasma.time }, globalGhost: { state: globalState, time: globalTime + 1 } });
                if (fantasma == world.pinky) return make(world, { pinky: { pos: { x: fantasma.pos.x, y: fantasma.pos.y, dir: fantasma.pos.dir }, state: 4, time: fantasma.time }, globalGhost: { state: globalState, time: globalTime + 1 } });
                if (fantasma == world.clyde) return make(world, { clyde: { pos: { x: fantasma.pos.x, y: fantasma.pos.y, dir: fantasma.pos.dir }, state: 4, time: fantasma.time }, globalGhost: { state: globalState, time: globalTime + 1 } });
              }
            }

            /**
             * Escoje un movimiento random que el fantasma pueda recorrer sin traspasar las paredes.
             * @param {object} pos 
             */
            function posibleMoves(pos) {
              var moves = [];
              var fantasmax = 0
              var fantasmay = 0
              if ((pos == world.blinky.pos || pos == world.clyde.pos) && pauseTitle.className == "") {
                fantasmax = rojox
                fantasmay = rojoy
              }
              if ((pos == world.inky.pos || pos == world.pinky.pos) && pauseTitle.className == "") {
                fantasmax = azulx
                fantasmay = azuly
              }
              if (pos.x == fantasmax && pos.y == fantasmay || pos.x == fantasmax && pos.y == (fantasmay + SIZE) || pos.x == fantasmax && pos.y == (fantasmay + (SIZE * 2)) && pauseTitle.className == "") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
              if (world.time % ghostSpeed == 0 && pauseTitle.className == "") {
                if (missMapa[(pos.y - SIZE) / SIZE][pos.x / SIZE] % 2 == 0 && pos.dir !== "down") {
                  moves = cons({ x: pos.x, y: pos.y - SIZE, dir: "up" }, moves)
                }
                if (missMapa[(pos.y + SIZE) / SIZE][pos.x / SIZE] % 2 == 0 && pos.dir !== "up") {
                  moves = cons({ x: pos.x, y: pos.y + SIZE, dir: "down" }, moves)
                }
                if (missMapa[pos.y / SIZE][(pos.x + SIZE) / SIZE] % 2 == 0 && pos.dir !== "left") {
                  moves = cons({ x: pos.x + SIZE, y: pos.y, dir: "right" }, moves)
                }
                if (missMapa[pos.y / SIZE][(pos.x - SIZE) / SIZE] % 2 == 0 && pos.dir !== "right") {
                  moves = cons({ x: pos.x - SIZE, y: pos.y, dir: "left" }, moves)
                }
                var randomIndex = Math.floor(Math.random() * length(moves));
                return moves[randomIndex];
              } else return { x: pos.x, y: pos.y, dir: pos.dir }
            }

            /**
             * Calcula cual es la mejor direcion que lo acerque mas a parcman segun la posicion de pacman en el missMapa
             * @param {*} pos 
             */

            function seguirPacman(pos) {
              const leftWall = missMapa[pos.y / SIZE][(pos.x - SIZE) / SIZE]
              const rightWall = missMapa[pos.y / SIZE][(pos.x + SIZE) / SIZE]
              const downWall = missMapa[(pos.y + SIZE) / SIZE][pos.x / SIZE]
              const upWall = missMapa[(pos.y - SIZE) / SIZE][pos.x / SIZE]
              var fantasmax = 0
              var fantasmay = 0
              if ((pos == world.blinky.pos || pos == world.clyde.pos) && pauseTitle.className == "") {
                fantasmax = rojox
                fantasmay = rojoy
              }
              if ((pos == world.inky.pos || pos == world.pinky.pos) && pauseTitle.className == "") {
                fantasmax = azulx
                fantasmay = azuly
              }

              if (pos.x == fantasmax && pos.y == fantasmay || pos.x == fantasmax && pos.y == (fantasmay + SIZE) || pos.x == fantasmax && pos.y == (fantasmay + (SIZE * 2)) && pauseTitle.className == "") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
              if (pos.x == fantasmax && pos.y == (fantasmay + (SIZE * 3)) || pos.x == (fantasmax - SIZE) && pos.y == (fantasmay + (SIZE * 3)) && pauseTitle.className == "") return { x: pos.x - SIZE, y: pos.y, dir: "left" }

              if (world.time % ghostSpeed == 0 && pauseTitle.className == "") {
                if (canvasY > pos.y) {
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
                  if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" }
                }
                if (canvasY < pos.y) {
                  if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" }
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
                }
                if (canvasX < pos.x) {
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" }
                  if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                }
                if (canvasX > pos.x) {
                  if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" }
                }
                if (canvasX == pos.x) {
                  if (canvasY < pos.y) {
                    if (upWall % 2 == 0 && pos.dir !== "down" || upWall == 3) return { x: pos.x, y: pos.y - SIZE, dir: "up" }
                    if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                    if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" }
                  }
                  if (canvasY > pos.y) {
                    if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
                    if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                    if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" }
                  }
                }
                if (canvasY == pos.y) {
                  if (canvasX < pos.x) {
                    if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                    if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" }
                    if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
                    if (upWall % 2 == 0 && pos.dir !== "down" || upWall == 3) return { x: pos.x, y: pos.y - SIZE, dir: "up" }
                  }
                  if (canvasX > pos.x) {
                    if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" }
                    if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                    if (upWall % 2 == 0 && pos.dir !== "down" || upWall == 3) return { x: pos.x, y: pos.y - SIZE, dir: "up" }
                    if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
                  }
                }
              } else return { x: pos.x, y: pos.y, dir: pos.dir }
            }

            /**
             * Toma las direcciones necesarias para llevar el fantasma en estado 3 a la casa.
             * @param {object} pos 
             * @param {*} x 
             * @param {*} y 
             */

            function ojosBase(pos, x, y) {
              const leftWall = missMapa[pos.y / SIZE][(pos.x - SIZE) / SIZE]
              const rightWall = missMapa[pos.y / SIZE][(pos.x + SIZE) / SIZE]
              const downWall = missMapa[(pos.y + SIZE) / SIZE][pos.x / SIZE]
              const upWall = missMapa[(pos.y - SIZE) / SIZE][pos.x / SIZE]
              if (pos.y == y && pos.x == x) return { x: pos.x, y: pos.y, dir: pos.dir }
              if (upWall % 2 == 1 && rightWall % 2 == 1 && pos.dir == "right") return { x: pos.x, y: pos.y + SIZE, dir: "down" };

              if (pos.x == x) {
                if (pos.y > y && upWall % 2 == 0 || pos.y > y && upWall == 3) return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                if (pos.y < y && downWall % 2 == 0) return { x: pos.x, y: pos.y + SIZE, dir: "down" };
                if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" };
                if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
              }
              if (pos.x < x) {
                if (pos.y == y) {
                  if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" };
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
                  if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                }
                if (pos.y < y) {
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" };
                  if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" };
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                  if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                }
                if (pos.y > y) {
                  if (pos.x == x && upWall % 2 == 0) return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                  if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                  if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" };
                  if (downWall % 2 == 0) return { x: pos.x, y: pos.y + SIZE, dir: "down" };
                }
              }

              if (pos.x > x) {
                if (pos.y == y) {
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" };
                  if (leftWall % 2 == 0 && pos.dir !== "right" || leftWall % 2 == 0 && pos.dir == "left") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                  if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                  if (rightWall % 2 == 0 && pos.dir !== "left" || rightWall % 2 == 0 && pos.dir == "right") return { x: pos.x + SIZE, y: pos.y, dir: "right" };
                }
                if (pos.y < y) {
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" };
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                  if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" };
                  if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                }
                if (pos.y > y) {
                  if (pos.x == x && upWall % 2 == 0) return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                  if (upWall % 2 == 0) return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                  if (leftWall % 2 == 0 && pos.dir !== "right" || leftWall % 2 == 0 && pos.dir == "left") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                  if (rightWall % 2 == 0 && pos.dir !== "left" || rightWall % 2 == 0 && pos.dir == "right") return { x: pos.x + SIZE, y: pos.y, dir: "right" };
                }
              }
            }

            /**
             * Cuando el fantasma este en estado 2, su movimiento sera aleatorio y al cumplir un tiempo global de 80 cambia el estado a 1
             * @param {object} fantasma 
             */
            function transformarse(fantasma) {
              if (globalTime == 80) {
                if (fantasma == world.blinky && fantasma.state !== 3 || fantasma == world.pinky && fantasma.state !== 3) { return { pos: seguirPacman(fantasma.pos), state: 1, time: 0 } }
                if (fantasma == world.inky && fantasma.state !== 3 || fantasma == world.clyde && fantasma.state !== 3) return { pos: posibleMoves(fantasma.pos), state: 1, time: 0 }
              }
              if (fantasma.state == 3) {
                if (fantasma == world.blinky) return casita(fantasma, rojox, rojoy)
                if (fantasma == world.inky) return casita(fantasma, azulx, azuly)
                if (fantasma == world.clyde) return casita(fantasma, rojox, rojoy)
                if (fantasma == world.pinky) return casita(fantasma, azulx, azuly)
              }
              else return { pos: posibleMoves(fantasma.pos), state: fantasma.state, time: fantasma.time }
            }

            /**
             * Cuando el fantasma este en su casa, despues de cierto tiempo su estado se vuelve 1.
             * @param {object} fantasma 
             * @param {*} x 
             * @param {*} y 
             */
            function casita(fantasma, x, y) {
              if (fantasma.time == 20) {
                if (fantasma == world.blinky || fantasma == world.inky) return { pos: seguirPacman(fantasma.pos), state: 1, time: 0 };
                else return { pos: posibleMoves(fantasma.pos), state: 1, time: 0 };
              }
              if (fantasma.pos.x == x && fantasma.pos.y == y) return { pos: { x: fantasma.pos.x, y: fantasma.pos.y, dir: "up" }, state: 3, time: fantasma.time + 1 };
              if (fantasma.state == 3) return { pos: ojosBase(fantasma.pos, x, y), state: 3, time: 0 };
              else return { pos: posibleMoves(fantasma.pos), state: fantasma.state, time: fantasma.time };
            }

            //Cuando Pac-Man muere por un fantasma
            if (canvasX == blinkyX && canvasY == blinkyY) {
              if (globalState == 4) return muertePacman(world.blinky);
              if (blinkyEstado == 4) return muertePacman(world.blinky);
              if (blinkyEstado == 1) return muertePacman(world.blinky);
            }
            if (canvasX == inkyX && canvasY == inkyY) {
              if (globalState == 4) return muertePacman(world.inky);
              if (inkyEstado == 4) return muertePacman(world.inky);
              if (inkyEstado == 1) return muertePacman(world.inky);
            }
            if (canvasX == pinkyX && canvasY == pinkyY) {
              if (globalState == 4) return muertePacman(world.pinky);
              if (pinkyEstado == 4) return muertePacman(world.pinky);
              if (pinkyEstado == 1) return muertePacman(world.pinky);
            }
            if (canvasX == clydeX && canvasY == clydeY) {
              if (globalState == 4) return muertePacman(world.clyde);
              if (clydeEstado == 4) return muertePacman(world.clyde);
              if (clydeEstado == 1) return muertePacman(world.clyde);
            }

            //Pausar el mundo cuando es Game Over
            if (vida == 0) {
              return (world, world)
            }

            //Para pasar de un lado del mapa a otro
            if (blinkyX <= 0 * SIZE) { return make(world, { time: world.time + 1, blinky: { pos: { x: 27 * SIZE, y: blinkyY, dir: "left" }, state: blinkyEstado, time: blinkyTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (blinkyX >= 27 * SIZE && blinkyDir !== "left") { return make(world, { time: world.time + 1, blinky: { pos: { x: 0, y: blinkyY, dir: "right" }, state: blinkyEstado, time: blinkyTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (inkyX <= 0 * SIZE) { return make(world, { time: world.time + 1, inky: { pos: { x: 27 * SIZE, y: inkyY, dir: "left" }, state: inkyEstado, time: inkyTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (inkyX >= 27 * SIZE && inkyDir !== "left") { return make(world, { time: world.time + 1, inky: { pos: { x: 0, y: inkyY, dir: "right" }, state: inkyEstado, time: inkyTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (pinkyX <= 0 * SIZE && pinkyDir !== "right") { return make(world, { time: world.time + 1, pinky: { pos: { x: 27 * SIZE, y: pinkyY, dir: "left" }, state: pinkyEstado, time: pinkyTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (pinkyX >= 27 * SIZE) { return make(world, { time: world.time + 1, pinky: { pos: { x: 0, y: pinkyY, dir: "right" }, state: pinkyEstado, time: pinkyTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (clydeX <= 0 * SIZE && clydeDir !== "right") { return make(world, { time: world.time + 1, clyde: { pos: { x: 27 * SIZE, y: clydeY, dir: "left" }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (clydeX >= 27 * SIZE) { return make(world, { time: world.time + 1, clyde: { pos: { x: 0, y: clydeY, dir: "right" }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }

            //Cuando los fantasmas estan asustados
            if (inkyEstado == 2 || blinkyEstado == 2 || pinkyEstado == 2 || clydeEstado == 2) {
              return make(world, { time: world.time + 1, blinky: transformarse(world.blinky), inky: transformarse(world.inky), pinky: transformarse(world.pinky), clyde: transformarse(world.clyde), globalGhost: { state: globalState, time: globalTime + 1 } });
            }

            //Cuando los fantasmas son solo ojos
            if (inkyEstado == 3 || blinkyEstado == 3 || pinkyEstado == 3 || clydeEstado == 3) {
              return make(world, { time: world.time + 1, blinky: casita(world.blinky, rojox, rojoy), inky: casita(world.inky, azulx, azuly), pinky: casita(world.pinky, azulx, azuly), clyde: casita(world.clyde, rojox, rojoy), globalGhost: { state: globalState, time: globalTime } });
            }



            //Cuando los fantasmas estan normal
            if (blinkyEstado == 1 || inkyEstado == 1 || pinkyEstado == 1 || clydeEstado == 1) {
              if (pinkyX == rosax && pinkyY == rosay) return make(world, { time: world.time + 1, pinky: { pos: { x: pinkyX + SIZE, y: pinkyY, dir: "right" }, state: pinkyEstado, time: pinkyTime }, globalGhost: { state: globalState, time: globalTime } });
              if (clydeX == naranjax && clydeY == naranjay) return make(world, { time: world.time + 1, clyde: { pos: { x: clydeX + SIZE, y: clydeY, dir: "right" }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime } });
              if (inkyX == azulx && inkyY == azuly || inkyX == azulx && inkyY == (azuly + SIZE) || inkyX == azulx && inkyY == (azulx + (SIZE * 2))) return make(world, { time: world.time + 1, inky: { pos: { x: inkyX, y: inkyY + SIZE, dir: "down" }, state: inkyEstado, time: inkyTime }, globalGhost: { state: globalState, time: globalTime } });
              if (blinkyX == rojox && blinkyY == (rojoy + (SIZE * 3)) || blinkyX == (rojox - SIZE) && blinkyY == (rojoy + (SIZE * 3))) return make(world, { time: world.time + 1, blinky: { pos: { x: blinkyX - SIZE, y: blinkyY, dir: "left" }, state: blinkyEstado, time: blinkyTime }, globalGhost: { state: globalState, time: globalTime } });
              if (blinkyX == rojox && blinkyY == rojoy || blinkyX == rojox && blinkyY == (rojoy + SIZE) || blinkyX == rojox && blinkyY == (rojoy + (SIZE * 2))) return make(world, { time: world.time + 1, blinky: { pos: { x: blinkyX, y: blinkyY + SIZE, dir: "down" }, state: blinkyEstado, time: blinkyTime }, globalGhost: { state: globalState, time: globalTime } });
              return make(world, { time: world.time + 1, blinky: { pos: seguirPacman(world.blinky.pos), state: blinkyEstado, time: blinkyTime }, inky: { pos: posibleMoves(world.inky.pos), state: inkyEstado, time: inkyTime }, pinky: { pos: seguirPacman(world.pinky.pos), state: pinkyEstado, time: pinkyTime }, clyde: { pos: posibleMoves(world.clyde.pos), state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime + 1 } });
            }



            return make(world, { time: world.time + 1 });
          }


          processing.onKeyEvent = function (world, keyCode) {

            //pacman
            const pacX = world.pacman.x
            const pacY = world.pacman.y
            const canvasX = world.canvas.x
            const canvasY = world.canvas.y
            //blinky
            const blinkyX = world.blinky.pos.x
            const blinkyY = world.blinky.pos.y
            const blinkyTime = world.blinky.time
            const blinkyDir = world.blinky.pos.dir
            const blinkyEstado = world.blinky.state
            //inky
            const inkyX = world.inky.pos.x
            const inkyY = world.inky.pos.y
            const inkyDir = world.inky.pos.dir
            const inkyEstado = world.inky.state
            const inkyTime = world.inky.time
            //pinky
            const pinkyX = world.pinky.pos.x
            const pinkyY = world.pinky.pos.y
            const pinkyDir = world.pinky.pos.dir
            const pinkyEstado = world.pinky.state
            const pinkyTime = world.pinky.time
            //clyde
            const clydeX = world.clyde.pos.x
            const clydeY = world.clyde.pos.y
            const clydeDir = world.clyde.pos.dir
            const clydeEstado = world.clyde.state
            const clydeTime = world.clyde.time
            //Extras
            const vida = world.pacman.lives
            const globalState = world.globalGhost.state
            const globalTime = world.globalGhost.time


            if (vida <= 0) return (world, world);
            if (keyCode == processing.DOWN && pauseTitle.className == "") {
              movimientoPacman.play();
              if (missMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] % 2 == 1 || globalState == 4) return (world, world);

              if (missMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 4) {
                ghostSpeed = 1;
                missMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
              }
              if (missMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 24) {
                ghostSpeed = 3;
                missMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
              }
              if (missMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 6) {
                missMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 50, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 2, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 2, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 2, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 2, time: 0 }, globalGhost: { state: 2, time: 0 }, level: world.level });
              }
              if (missMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 22) {
                ghostSpeed = 2;
                missMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (missMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 20) {
                ghostSpeed = 2;
                missMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points - 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (missMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 60) {
                ghostSpeed = 2;
                missMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida + 1 }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == blinkyX && pacY == blinkyY && blinkyEstado == 2 || pacX == blinkyX && pacY == blinkyY - SIZE && blinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 3, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == inkyX && pacY == inkyY && inkyEstado == 2 || pacX == inkyX && pacY == inkyY - SIZE && inkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 3, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == pinkyX && pacY == pinkyY && inkyEstado == 2 || pacX == pinkyX && pacY == pinkyY - SIZE && pinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 3, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == clydeX && pacY == clydeY && clydeEstado == 2 || pacX == clydeX && pacY == clydeY - SIZE && clydeEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 3, time: 0 }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (missMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 2) {
                missMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 10, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              } {
                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
            }

            if (keyCode == processing.LEFT && pauseTitle.className == "") {
              movimientoPacman.play();
              if (canvasX == 0) {
                return (world, { time: world.time, pacman: { x: 27 * SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: 27 * SIZE, y: canvasY }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (missMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] % 2 == 1 || globalState == 4) return (world, world);

              if (missMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 4) {
                ghostSpeed = 1;
                missMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
              }

              if (missMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 24) {
                ghostSpeed = 3;
                missMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
              }

              if (missMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 6) {
                missMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 50, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 2, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 2, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 2, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 2, time: 0 }, globalGhost: { state: 2, time: 0 }, level: world.level });
              }

              if (missMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 20) {
                ghostSpeed = 2;
                missMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points - 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (missMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 22) {
                ghostSpeed = 2;
                missMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (missMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 60) {
                ghostSpeed = 2;
                missMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida + 1 }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }


              if (pacX == blinkyX && pacY == blinkyY && blinkyEstado == 2 || pacX == blinkyX + SIZE && pacY == blinkyY && blinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 3, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == inkyX && pacY == inkyY && inkyEstado == 2 || pacX == inkyX + SIZE && pacY == inkyY && inkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 3, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == pinkyX && pacY == pinkyY && inkyEstado == 2 || pacX == pinkyX + SIZE && pacY == pinkyY && pinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 3, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == clydeX && pacY == clydeY && clydeEstado == 2 || pacX == clydeX + SIZE && pacY == clydeY && clydeEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 3, time: 0 }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (missMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 2) {
                missMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 10, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
            }

            if (keyCode == processing.RIGHT && pauseTitle.className == "") {
              movimientoPacman.play();
              if (canvasX == 27 * SIZE) {
                return (world, { time: world.time, pacman: { x: 0, y: pacY, lives: vida }, dir: "right", canvas: { x: 0, y: canvasY }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              if (missMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 4) {
                ghostSpeed = 1;
                missMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
              }
              if (missMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 24) {
                ghostSpeed = 3;
                missMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
              }

              if (missMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] % 2 == 1 || globalState == 4) return (world, world);
              if (missMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 20) {
                ghostSpeed = 2;
                missMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points - 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (missMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 22) {
                ghostSpeed = 2;
                missMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (missMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 60) {
                ghostSpeed = 2;
                missMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida + 1 }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }


              if (missMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 6) {
                missMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 50, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 2, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 2, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 2, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 2, time: 0 }, globalGhost: { state: 2, time: 0 }, level: world.level });
              }

              if (pacX == blinkyX && pacY == blinkyY && blinkyEstado == 2 || pacX == blinkyX - SIZE && pacY == blinkyY && blinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 3, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == inkyX && pacY == inkyY && inkyEstado == 2 || pacX == inkyX - SIZE && pacY == inkyY && inkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 3, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == pinkyX && pacY == pinkyY && inkyEstado == 2 || pacX == pinkyX - SIZE && pacY == pinkyY && pinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 3, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == clydeX && pacY == clydeY && clydeEstado == 2 || pacX == clydeX - SIZE && pacY == clydeY && clydeEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 3, time: 0 }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (missMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 2) {
                missMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 10, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
            }

            if (keyCode == processing.UP && pauseTitle.className == "") {
              movimientoPacman.play();
              if (missMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] % 2 == 1 || globalState == 4) return (world, world);

              if (missMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 4) {
                ghostSpeed = 1;
                missMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
              }

              if (missMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 24) {
                ghostSpeed = 3;
                missMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
              }

              if (missMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 20) {
                ghostSpeed = 2;
                missMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points - 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (missMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 22) {
                ghostSpeed = 2;
                missMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (missMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 60) {
                ghostSpeed = 2;
                missMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida + 1 }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              if (missMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 6) {
                missMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 50, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 2, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 2, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 2, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 2, time: 0 }, globalGhost: { state: 2, time: 0 }, level: world.level });
              }

              if (pacX == blinkyX && pacY == blinkyY && blinkyEstado == 2 || pacX == blinkyX && pacY == blinkyY + SIZE && blinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 3, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              if (pacX == inkyX && pacY == inkyY && inkyEstado == 2 || pacX == inkyX && pacY == inkyY + SIZE && inkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 3, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              if (pacX == pinkyX && pacY == pinkyY && pinkyEstado == 2 || pacX == pinkyX && pacY == pinkyY + SIZE && pinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 3, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              if (pacX == clydeX && pacY == clydeY && clydeEstado == 2 || pacX == clydeX && pacY == clydeY + SIZE && clydeEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 3, time: 0 }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              if (missMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 2) {
                missMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 10, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
            }

            else return (world, world);

          }

          processing.onMouseEvent = function (world, event) {
            return make(world, {});
          }

          // ******************** De aquí hacia abajo no debe cambiar nada. ********************

          // Esta es la función que pinta todo. Se ejecuta 60 veces por segundo. 
          // No cambie esta función. Su código debe ir en drawGame
          processing.draw = function () {
            processing.drawGame(processing.state);
            processing.state = processing.onTic(processing.state);
          };

          // Esta función se ejecuta cada vez que presionamos una tecla. 
          // No cambie esta función. Su código debe ir en onKeyEvent
          processing.keyPressed = function () {
            processing.state = processing.onKeyEvent(processing.state, processing.keyCode);
          }

          // Esta función se ejecuta cada vez movemos el mouse. 
          // No cambie esta función. Su código debe ir en onKeyEvent
          processing.mouseMoved = function () {
            processing.state = processing.onMouseEvent(processing.state,
              { action: "move", mouseX: processing.mouseX, mouseY: processing.mouseY });
          }

          // Estas funciones controlan los eventos del mouse. 
          // No cambie estas funciones. Su código debe ir en OnMouseEvent
          processing.mouseClicked = function () {
            processing.state = processing.onMouseEvent(processing.state,
              { action: "click", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
          }

          processing.mouseDragged = function () {
            processing.state = processing.onMouseEvent(processing.state,
              { action: "drag", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
          }

          processing.mousePressed = function () {
            processing.state = processing.onMouseEvent(processing.state,
              { action: "press", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
          }

          processing.mouseReleased = function () {
            processing.state = processing.onMouseEvent(processing.state,
              { action: "release", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
          }
          // Fin de los eventos del mouse
        }
        var canvas = document.getElementById("canvas");
        var processingInstance = new Processing(canvas, sketchProc);
        canvas.focus() = true;
      }

      else if (uniPacman.className == "selected") {

        function sketchProc(processing) {

          const rx = buscarX(uniMapa, 8);
          const ry = buscarY(uniMapa, 8);
          const bx = buscarX(uniMapa, 12);
          const by = buscarY(uniMapa, 12);
          const px = buscarX(uniMapa, 14);
          const py = buscarY(uniMapa, 14);
          const ox = buscarX(uniMapa, 16);
          const oy = buscarY(uniMapa, 16);
          const pacmanX = buscarX(uniMapa, 10);
          const pacmanY = buscarY(uniMapa, 10);




          processing.setup = function () {
            processing.frameRate(rate);
            processing.size(WIDTH, HEIGHT);
            //Frutas
            A1 = processing.loadImage("Frutas/uniPacman/brownie1.png");
            A2 = processing.loadImage("Frutas/uniPacman/brownie2.png");
            A3 = processing.loadImage("Frutas/uniPacman/brownie3.png")
            C1 = processing.loadImage("Frutas/uniPacman/cookie1.png");
            C2 = processing.loadImage("Frutas/uniPacman/cookie2.png");
            C3 = processing.loadImage("Frutas/uniPacman/cookie3.png");
            G1 = processing.loadImage("Frutas/uniPacman/donut1.png");
            G2 = processing.loadImage("Frutas/uniPacman/donut2.png");
            G3 = processing.loadImage("Frutas/uniPacman/donut3.png");
            PA1 = processing.loadImage("Frutas/uniPacman/sandwich1.png");
            PA2 = processing.loadImage("Frutas/uniPacman/sandwich2.png");
            PA3 = processing.loadImage("Frutas/uniPacman/sandwich3.png");
            S1 = processing.loadImage("Frutas/uniPacman/soda1.png");
            S2 = processing.loadImage("Frutas/uniPacman/soda2.png");
            S3 = processing.loadImage("Frutas/uniPacman/soda3.png");
            //Explosion Papa Bomba
            papa0 = processing.loadImage("Frutas/papa0.png")
            papa1 = processing.loadImage("Frutas/papa1.png")
            papa2 = processing.loadImage("Frutas/papa2.png")
            papa3 = processing.loadImage("Frutas/papa3.png")
            papa4 = processing.loadImage("Frutas/papa4.png")
            papa5 = processing.loadImage("Frutas/papa5.png")
            papa6 = processing.loadImage("Frutas/papa6.png")
            papa7 = processing.loadImage("Frutas/papa7.png")
            papa8 = processing.loadImage("Frutas/papa8.png")
            //Uni Pac-Man
            M1 = processing.loadImage("img/death1.png")
            M2 = processing.loadImage("img/death2.png")
            M3 = processing.loadImage("img/death3.png")
            PacDeath2 = processing.loadImage("img/pacMuere2.png")
            PacDeath3 = processing.loadImage("img/pacMuere3.png")
            PacDeath4 = processing.loadImage("img/pacMuere4.png")
            V1 = processing.loadImage("img/Mvida1.png")
            V2 = processing.loadImage("img/Mvida2.png")
            V3 = processing.loadImage("img/Mvida3.png")
            Pac1 = processing.loadImage("img/uniPacman/characters/uniPac1.png");
            Pac2 = processing.loadImage("img/uniPacman/characters/uniPac3.png");
            Pac3 = processing.loadImage("img/uniPacman/characters/uniPac2.png");
            //Fantasmas
            B1 = processing.loadImage("img/pacman/characters/cyanBody1.png");
            B2 = processing.loadImage("img/pacman/characters/cyanBody2.png");
            B3 = processing.loadImage("img/pacman/characters/cyanBody3.png");
            R1 = processing.loadImage("img/pacman/characters/redBody1.png");
            R2 = processing.loadImage("img/pacman/characters/redBody2.png");
            R3 = processing.loadImage("img/pacman/characters/redBody3.png");
            P1 = processing.loadImage("img/pacman/characters/pinkBody1.png");
            P2 = processing.loadImage("img/pacman/characters/pinkBody2.png");
            P3 = processing.loadImage("img/pacman/characters/pinkBody3.png");
            O1 = processing.loadImage("img/pacman/characters/orangeBody1.png");
            O2 = processing.loadImage("img/pacman/characters/orangeBody2.png");
            O3 = processing.loadImage("img/pacman/characters/orangeBody3.png");
            eyeR = processing.loadImage("img/uniPacman/characters/ghostUniformRight.png");
            eyeD = processing.loadImage("img/uniPacman/characters/ghostUniformDown.png");
            eyeU = processing.loadImage("img/uniPacman/characters/ghostUniformUp.png");
            eyeL = processing.loadImage("img/uniPacman/characters/ghostUniformLeft.png");
            ojosR = processing.loadImage("img/eyesRight.png");
            ojosD = processing.loadImage("img/eyesDown.png");
            ojosU = processing.loadImage("img/eyesUp.png");
            ojosL = processing.loadImage("img/eyesLeft.png");
            //Paredes
            wall = processing.loadImage("img/wallPink.png");
            wall1 = processing.loadImage("img/uniPacman/walls/wall1.png");
            wall2 = processing.loadImage("img/uniPacman/walls/wall2.png");
            wall3 = processing.loadImage("img/uniPacman/walls/wall3.png");
            wall4 = processing.loadImage("img/uniPacman/walls/wall4.png");
            wall5 = processing.loadImage("img/uniPacman/walls/wall5.png");
            wall6 = processing.loadImage("img/uniPacman/walls/wall6.png");
            wall7 = processing.loadImage("img/uniPacman/walls/wall7.png");
            wall8 = processing.loadImage("img/uniPacman/walls/wall8.png");
            wall9 = processing.loadImage("img/uniPacman/walls/wall9.png");
            wall10 = processing.loadImage("img/uniPacman/walls/wall10.png");
            wall11 = processing.loadImage("img/uniPacman/walls/wall11.png");
            wall12 = processing.loadImage("img/uniPacman/walls/wall12.png");
            wall13 = processing.loadImage("img/uniPacman/walls/wall13.png");
            wall14 = processing.loadImage("img/uniPacman/walls/wall14.png");
            wall15 = processing.loadImage("img/uniPacman/walls/wall15.png");
            wall16 = processing.loadImage("img/uniPacman/walls/wall16.png");
            wall17 = processing.loadImage("img/uniPacman/walls/wall17.png");
            empty = processing.loadImage("img/uniPacman/walls/empty.png");
            //Puntos
            star = processing.loadImage("img/star.png");
            bigstar = processing.loadImage("img/uniPacman/walls/punto2.png")
            processing.state = {
              time: 0,
              pacman: { x: pacmanX * SIZE, y: pacmanY * SIZE, lives: 3 },
              dir: "left", canvas: { x: pacmanX * SIZE, y: pacmanY * SIZE },
              points: 0,
              blinky: { pos: { x: rx * SIZE, y: ry * SIZE, dir: "up" }, state: 1, time: 0 },
              inky: { pos: { x: bx * SIZE, y: by * SIZE, dir: "up" }, state: 1, time: 0 },
              pinky: { pos: { x: px * SIZE, y: py * SIZE, dir: "up" }, state: 1, time: 0 },
              clyde: { pos: { x: ox * SIZE, y: oy * SIZE, dir: "up" }, state: 1, time: 0 },
              globalGhost: { state: 1, time: 0 },
              level: 1
            };
          }


          processing.drawGame = function (world) {

            /** Puntos de pacman */
            const puntos = world.points
            /** Numero de vidas de pacman */
            const vidas = world.pacman.lives
            //Posicion x, y de pacman
            const pacX = world.pacman.x
            const pacY = world.pacman.y
            const canvasX = world.canvas.x
            const canvasY = world.canvas.y
            //Blinky
            const blinkyX = world.blinky.pos.x
            const blinkyY = world.blinky.pos.y
            const blinkyEstado = world.blinky.state
            //Pinky
            const pinkyX = world.pinky.pos.x
            const pinkyY = world.pinky.pos.y
            const pinkyEstado = world.pinky.state
            //Clyde
            const clydeX = world.clyde.pos.x
            const clydeY = world.clyde.pos.y
            const clydeEstado = world.clyde.state
            //Inky
            const inkyX = world.inky.pos.x
            const inkyY = world.inky.pos.y
            const inkyEstado = world.inky.state
            //Extras
            const globalState = world.globalGhost.state
            const globalTime = world.globalGhost.time

            processing.background(00, 0, 0);
            let puntaje = "Puntaje: " + puntos
            processing.textSize(30);
            processing.fill(255, 255, 255);
            processing.text(puntaje, 28 * SIZE, 2 * SIZE);

            /**
             * Revisa cuantas vidas tiene pacman y muestra la cantidad al lado del texto Vidas.
             * Si la vida de pacman es = 0 entonces retorna, texto de GAME OVER
             */

            function lives() {
              let ghostTime = "Vidas:"
              let extraVida = (vidas - 3)
              processing.textSize(30);
              processing.text(ghostTime, 28 * SIZE, SIZE * 4);
              const mini = SIZE - 2
              var x = (length(pacMapa[2]) + 3.5) * SIZE
              if (extraVida > 0) {
                processing.textSize(20);
                processing.text("+ " + extraVida, x + (SIZE * 3), 97);
              }
              if (vidas >= 1) {
                processing.image(Pac3, x, 78, mini, mini)
              }
              if (vidas >= 2) {
                x = x + SIZE
                processing.image(Pac3, x, 78, mini, mini)
              }
              if (vidas >= 3) {
                x = x + (SIZE)
                processing.image(Pac3, x, 78, mini, mini)
              }
              if (vidas == 0) {
                processing.fill(0, 0, 0, 220)
                processing.rect(2 * SIZE, 12 * SIZE, 615, 200, 7);
                processing.fill(255, 255, 0)
                const over = " GAME OVER "
                const finalPoints = "Score:" + puntos
                processing.textSize(100);
                processing.text(over, SIZE, 16 * SIZE);
                processing.textSize(80);
                processing.text(finalPoints, 8 * SIZE, 19 * SIZE);
              }
              if (vidas !== 0) {
                
              }
            }
            /**
             * Si ya no existen puntos, y niveles es true, entonces aparece el texto en el nivel que este.
             */
            function levels() {
              if (world.time <= 8 && vidas !== 0) {
                if (niveles == true) {
                  const textNivel = " NIVEL " + world.level
                  processing.textSize(100);
                  processing.fill(255, 255, 255);
                  processing.text(textNivel, 6 * SIZE, 16 * SIZE);
                }

                else {
                  niveles = false;
                }
              }
            }
            /**
             * Activa animación de papa bomba, segun donde se a comido una Pac-Man.
             * @param {*} x 
             * @param {*} y 
             */
            function papaBomba(x, y) {
              if (uniMapa[y / SIZE] == undefined) return;
              if (globalState == 2) {
                if (globalTime <= 7) {
                  processing.pushMatrix();
                  processing.translate(x - 60, y - 60);
                  var bomba = papa8;
                  if (globalTime % 8 == 1) { bomba = papa1; }
                  if (globalTime % 8 == 2) { bomba = papa2; }
                  if (globalTime % 8 == 3) { bomba = papa3; }
                  if (globalTime % 8 == 4) { bomba = papa4; }
                  if (globalTime % 8 == 5) { bomba = papa5; }
                  if (globalTime % 8 == 6) { bomba = papa6; }
                  if (globalTime % 8 == 7) { bomba = papa7; }
                  processing.image(bomba, 0, 0, 150, 150);
                  processing.popMatrix();
                }
              }
            }

            /**
             * Revisa la direcion que esta tomando pacman, y acomoda la imagen para mirar hacia esa direccion.
             */
            function movimientoPacman() {

              /** Aplica la animacion muerte de pacman, cuando el estado global es 4. */
              const muerte = function () {
                processing.pushMatrix();
                processing.translate(canvasX, canvasY);
                var p = empty;
                if (globalTime % 5 == 1) { p = PacDeath2; }
                if (globalTime % 5 == 2) { p = PacDeath3; }
                if (globalTime % 5 == 3) { p = PacDeath4; }
                processing.image(p, 0, 0, SIZE, SIZE);
                processing.popMatrix();
              }

              if (globalState == 4) return muerte();

              processing.pushMatrix();
              var p = Pac3;
              if (world.dir == "left") {
                processing.translate(pacX + SIZE, pacY);
                processing.scale(-1, 1);
                if (world.time % 4 == 1) { p = Pac1; }
                if (world.time % 4 == 2 || world.time % 4 == 0) { p = Pac2; }
                processing.image(p, 0, 0, SIZE, SIZE);
              }
              if (world.dir == "right") {
                processing.translate(pacX - SIZE, pacY);
                if (world.time % 4 == 1) { p = Pac1; }
                if (world.time % 4 == 2 || world.time % 4 == 0) { p = Pac2; }
                processing.image(p, SIZE, 0, SIZE, SIZE);
              }
              if (world.dir == "up") {
                processing.translate(pacX + (SIZE / 2), pacY);
                processing.rotate(processing.radians(-90));
                if (world.time % 4 == 1) { p = Pac1; }
                if (world.time % 4 == 2 || world.time % 4 == 0) { p = Pac2; }
                processing.image(p, -SIZE, -(SIZE / 2), SIZE, SIZE);
              }
              if (world.dir == "down") {
                processing.translate(pacX, pacY + (SIZE / 2));
                processing.rotate(processing.radians(90));
                if (world.time % 4 == 1) { p = Pac1; }
                if (world.time % 4 == 2 || world.time % 4 == 0) { p = Pac2; }
                processing.image(p, -(SIZE / 2), -SIZE, SIZE, SIZE);
              }
              processing.popMatrix();
            }

            /**
             * Aplica la animacion correcta, segun el estado del fantasma
             * @param {Array} list 
             * @param {*} state 
             */

            function fantasmas(list, state) {
              if (state == 3) {
                var ojos = ojosR;
                processing.pushMatrix();
                if (first(list) == R1) { processing.translate(blinkyX, blinkyY) }
                if (first(list) == B1) { processing.translate(inkyX, inkyY) }
                if (first(list) == P1) { processing.translate(pinkyX, pinkyY) }
                if (first(list) == O1) { processing.translate(clydeX, clydeY) }
                if (world.dir == "left") { ojos = ojosL; }
                if (world.dir == "up") { ojos = ojosU; }
                if (world.dir == "down") { ojos = ojosD; }
                processing.image(ojos, 0, 0, SIZE, SIZE);
                processing.popMatrix();
              }
              if (state == 2) {
                var b = M3;
                processing.pushMatrix();
                if (first(list) == R1) { processing.translate(blinkyX, blinkyY) }
                if (first(list) == B1) { processing.translate(inkyX, inkyY) }
                if (first(list) == P1) { processing.translate(pinkyX, pinkyY) }
                if (first(list) == O1) { processing.translate(clydeX, clydeY) }
                if (world.time % 4 == 1) { b = M1; }
                if (world.time % 4 == 2 || world.time % 4 == 0) { b = M2; }
                processing.image(b, 0, 0, SIZE, SIZE);
                processing.popMatrix();
                if (globalTime > 70 && globalTime % 2 == 0) {
                  var a = V3;
                  processing.pushMatrix();
                  if (first(list) == R1) { processing.translate(blinkyX, blinkyY) }
                  if (first(list) == B1) { processing.translate(inkyX, inkyY) }
                  if (first(list) == P1) { processing.translate(pinkyX, pinkyY) }
                  if (first(list) == O1) { processing.translate(clydeX, clydeY) }
                  if (world.time % 4 == 1) { b = V1; }
                  if (world.time % 4 == 2 || world.time % 4 == 0) { b = V2; }
                  processing.image(b, 0, 0, SIZE, SIZE);
                  processing.popMatrix();
                }
              }
              if (state == 1) {
                var ojos = eyeR;
                var b = first(rest(rest(list)));
                processing.pushMatrix();
                if (first(list) == R1) { processing.translate(blinkyX, blinkyY) }
                if (first(list) == B1) { processing.translate(inkyX, inkyY) }
                if (first(list) == P1) { processing.translate(pinkyX, pinkyY) }
                if (first(list) == O1) { processing.translate(clydeX, clydeY) }
                if (world.dir == "left") { ojos = eyeL; }
                if (world.dir == "up") { ojos = eyeU; }
                if (world.dir == "down") { ojos = eyeD; }
                if (world.time % 4 == 1) { b = first(list); }
                if (world.time % 4 == 2 || world.time % 4 == 0) { b = first(rest(list)); }
                processing.image(b, 0, 0, SIZE, SIZE);
                processing.image(ojos, 0, 0, SIZE, SIZE);
                processing.popMatrix();
              }
            }

            mapeado(uniMapa, (row, y) => {
              mapeado(row, (cell, x) => {
                if (cell == 1) {
                  processing.image(wall, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 0 || cell == 3) {
                  processing.image(empty, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 2) {
                  processing.image(star, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 4) {
                  var f = A3;
                  if (world.time % 4 == 1) { f = A1; }
                  if (world.time % 4 == 2 || world.time % 4 == 0) { f = A2; }
                  processing.image(f, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 20) {
                  var f = G3;
                  if (world.time % 4 == 1) { f = G1; }
                  if (world.time % 4 == 2 || world.time % 4 == 0) { f = G2; }
                  processing.image(f, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 22) {
                  var f = C3;
                  if (world.time % 4 == 1) { f = C1; }
                  if (world.time % 4 == 2 || world.time % 4 == 0) { f = C2; }
                  processing.image(f, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 24) {
                  var f = S3;
                  if (world.time % 4 == 1) { f = S1; }
                  if (world.time % 4 == 2 || world.time % 4 == 0) { f = S2; }
                  processing.image(f, x * SIZE, y * SIZE, SIZE, SIZE);
                } if (cell == 60) {
                  var f = PA3;
                  if (world.time % 4 == 1) { f = PA1; }
                  if (world.time % 4 == 2 || world.time % 4 == 0) { f = PA2; }
                  processing.image(f, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 5) {
                  processing.image(wall1, x * SIZE, y * SIZE, SIZE, SIZE);
                }
                if (cell == 6) {
                  processing.image(papa0, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 7) {
                  processing.image(wall2, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 9) {
                  processing.image(wall3, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 11) {
                  processing.image(wall4, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 13) {
                  processing.image(wall5, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 15) {
                  processing.image(wall6, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 17) {
                  processing.image(wall7, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 19) {
                  processing.image(wall8, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 21) {
                  processing.image(wall9, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 23) {
                  processing.image(wall10, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 25) {
                  processing.image(wall11, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 27) {
                  processing.image(wall12, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 29) {
                  processing.image(wall13, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 31) {
                  processing.image(wall14, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 33) {
                  processing.image(wall15, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 35) {
                  processing.image(wall16, x * SIZE, y * SIZE, SIZE, SIZE)
                }
                if (cell == 37) {
                  processing.image(wall17, x * SIZE, y * SIZE, SIZE, SIZE)

                }
              });
            });


            /**
             * Revisa si un punto [2] existe en un Array
             * @param {Array} maps 
             * @example puntosExist([1,2,3], [4,5,6])//=> true;
             */
            function puntosExist(maps) {
              if (isEmpty(maps)) {
                existenPuntos = false
                niveles = true;
                return
              }
              const revisar = function (fila) {
                if (!isEmpty(fila)) {
                  if (first(fila) == 2) return existenPuntos = true;
                  else return revisar(rest(fila))
                }
                return puntosExist(rest(maps))
              }
              return revisar(first(maps))
            }

            /**
         * Revisa si una fruta mala [4] o [20] existe en un Array.
         * @param {Array} maps 
         * @example badFruittExist([1,2,3], [4,5,6])//=> true;
         */
            function badFruittExist(maps) {
              if (isEmpty(maps)) {
                existeBadFruta = false;
                return
              }
              const revisarBadFruit = function (fila) {
                if (!isEmpty(fila)) {
                  if (first(fila) == 4) return existeBadFruta = true;
                  if (first(fila) == 20) return existeBadFruta = true;

                  else return revisarBadFruit(rest(fila))
                }
                return badFruittExist(rest(maps))
              }
              return revisarBadFruit(first(maps))
            }

            /**
             * Checks if a bad fruit [22],[24] or [60] exists in an Array
             * @param {Array} maps 
             */
            function goodFruittExist(maps) {
              if (isEmpty(maps)) {
                existeGoodFruta = false;
                return
              }
              const revisarGoodFruit = function (fila) {
                if (!isEmpty(fila)) {
                  if (first(fila) == 22) return existeGoodFruta = true;
                  if (first(fila) == 24) return existeGoodFruta = true;
                  if (first(fila) == 60) return existeGoodFruta = true;
                  else return revisarGoodFruit(rest(fila))
                }
                return goodFruittExist(rest(maps))
              }
              return revisarGoodFruit(first(maps))
            }

            /**
             * Si una fruta mala no existe en un array, entonces se pintara una fruta mala en un espacio [0]. 
             * @param {Array} maps 
             * @example drawBadFruit([1,3,5],[5,6,7])//=>  maps[y][x] = 4 or 20
             */
            function drawBadFruit(maps) {

              const fruity = Math.floor(Math.random() * length(maps))
              const fruitx = Math.floor(Math.random() * length(first(maps)))
              const listaFrutas = [20, 4, 20]
              const fruta = listaFrutas[Math.floor(Math.random() * length(listaFrutas))]
              if (world.time >= 25) {
                if (existeBadFruta == false && maps[fruity][fruitx] == 0) {
                  existeBadFruta = true;
                  maps[fruity][fruitx] = fruta
                }
                else return
              }
            }

            /**
             * Si una fruta buena no existe en un array, entonces se pintara una fruta buena en un espacio [0]. 
             * @param {Array} maps 
             * @example drawGoodFruit([1,3,5],[5,6,7])//=>  maps[y][x] = 22, 24, or 60
             */
            function drawGoodFruit(maps) {

              const fruity = Math.floor(Math.random() * length(maps))
              const fruitx = Math.floor(Math.random() * length(first(maps)))
              const listaFrutas = [22, 24, 22, 24, 24, 22, 22, 22, 24, 60]
              const fruta = listaFrutas[Math.floor(Math.random() * length(listaFrutas))]
              if (world.time >= 30) {
                if (existeGoodFruta == false && maps[fruity][fruitx] == 0) {
                  existeGoodFruta = true;
                  maps[fruity][fruitx] = fruta
                }
                else return
              }
            }

            goodFruittExist(uniMapa);
            badFruittExist(uniMapa);
            fantasmas([R1, R2, R3], blinkyEstado);
            fantasmas([B1, B2, B3], inkyEstado);
            fantasmas([P1, P2, P3], pinkyEstado);
            fantasmas([O1, O2, O3], clydeEstado);
            movimientoPacman();
            puntosExist(uniMapa);
            drawGoodFruit(uniMapa);
            drawBadFruit(uniMapa);
            lives();
            levels();
            papaBomba(buscarX(uniMapa, 40) * SIZE, buscarY(uniMapa, 40) * SIZE);



          }

          processing.onTic = function (world) {

            //Pacman
            /** vidas de pacman */
            const vida = world.pacman.lives
            const pacX = world.pacman.x
            const pacY = world.pacman.y
            const canvasX = world.canvas.x
            const canvasY = world.canvas.y
            //Blinky
            const blinkyX = world.blinky.pos.x
            const blinkyY = world.blinky.pos.y
            const blinkyDir = world.blinky.pos.dir
            const blinkyEstado = world.blinky.state
            const blinkyTime = world.blinky.time
            //Inky
            const inkyX = world.inky.pos.x
            const inkyY = world.inky.pos.y
            const inkyDir = world.inky.pos.dir
            const inkyEstado = world.inky.state
            const inkyTime = world.inky.time
            //Pinky
            const pinkyX = world.pinky.pos.x
            const pinkyY = world.pinky.pos.y
            const pinkyDir = world.pinky.pos.dir
            const pinkyEstado = world.pinky.state
            const pinkyTime = world.pinky.time
            //Clyde
            const clydeX = world.clyde.pos.x
            const clydeY = world.clyde.pos.y
            const clydeDir = world.clyde.pos.dir
            const clydeEstado = world.clyde.state
            const clydeTime = world.clyde.time
            //Casitas
            const rojox = rx * SIZE
            const rojoy = ry * SIZE
            const azulx = bx * SIZE
            const azuly = by * SIZE
            const rosax = px * SIZE
            const rosay = py * SIZE
            const naranjax = ox * SIZE
            const naranjay = oy * SIZE
            //Global
            const globalState = world.globalGhost.state
            const globalTime = world.globalGhost.time

            //Pausado
            if (processing.keyCode == 80) return make(world, world);

            //Cuando Uni Pac-Man pasa de nivel
            if (existenPuntos == false) {

              uniMapa = [
                [17, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 29],
                [5, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 27],
                [5, 2, 33, 11, 11, 9, 2, 33, 11, 9, 2, 33, 11, 11, 9, 2, 33, 11, 11, 11, 11, 11, 11, 9, 2, 27, 2, 27],
                [5, 2, 27, 18, 18, 5, 2, 27, 18, 5, 2, 27, 18, 18, 5, 2, 27, 2, 2, 2, 2, 2, 2, 5, 2, 27, 2, 27],
                [5, 2, 31, 13, 13, 7, 2, 31, 13, 7, 2, 31, 13, 13, 5, 2, 27, 2, 33, 11, 11, 9, 2, 5, 2, 27, 2, 27],
                [5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 2, 2, 2, 27, 18, 18, 5, 2, 2, 2, 2, 2, 27],
                [5, 2, 33, 9, 2, 5, 2, 33, 11, 9, 2, 33, 9, 2, 15, 11, 9, 2, 31, 13, 13, 7, 2, 33, 11, 9, 2, 27],
                [5, 2, 31, 7, 2, 5, 2, 27, 18, 5, 2, 27, 5, 2, 17, 13, 7, 2, 2, 2, 2, 2, 2, 31, 13, 7, 2, 27],
                [5, 2, 2, 2, 2, 2, 2, 27, 18, 5, 2, 27, 5, 2, 5, 2, 2, 2, 2, 33, 9, 2, 2, 2, 2, 2, 2, 27],
                [15, 9, 2, 33, 11, 11, 11, 35, 18, 5, 2, 27, 5, 2, 5, 2, 33, 11, 11, 35, 5, 2, 33, 11, 11, 11, 11, 35],
                [18, 5, 2, 27, 18, 18, 18, 18, 17, 7, 2, 31, 7, 2, 5, 2, 31, 13, 13, 29, 5, 2, 27, 18, 18, 18, 18, 18],
                [18, 5, 2, 27, 18, 18, 18, 18, 5, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 27, 5, 2, 27, 18, 18, 18, 18, 18],
                [18, 5, 2, 27, 18, 18, 18, 18, 5, 2, 33, 11, 11, 11, 11, 11, 11, 9, 2, 27, 5, 2, 27, 18, 18, 18, 18, 18],
                [13, 7, 2, 31, 13, 13, 13, 13, 7, 2, 27, 18, 18, 18, 18, 18, 18, 5, 2, 31, 7, 2, 31, 13, 13, 13, 13, 13],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 18, 8, 16, 14, 12, 18, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [11, 11, 11, 11, 11, 9, 2, 33, 9, 2, 27, 18, 18, 18, 18, 18, 18, 5, 2, 33, 9, 2, 33, 11, 11, 11, 11, 11],
                [18, 18, 18, 18, 18, 5, 2, 31, 7, 2, 31, 13, 13, 13, 13, 13, 13, 7, 2, 27, 5, 2, 27, 18, 18, 18, 18, 18],
                [18, 18, 18, 18, 18, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 5, 2, 27, 18, 18, 18, 18, 18],
                [18, 18, 18, 18, 18, 5, 2, 33, 9, 2, 33, 11, 11, 2, 33, 11, 11, 9, 2, 27, 5, 2, 31, 13, 13, 13, 13, 29],
                [17, 13, 13, 13, 13, 7, 2, 27, 5, 2, 27, 18, 37, 2, 31, 13, 13, 7, 2, 31, 7, 2, 2, 2, 2, 2, 2, 27],
                [5, 2, 2, 2, 2, 2, 2, 31, 7, 2, 31, 13, 21, 2, 2, 2, 2, 2, 2, 2, 2, 2, 33, 11, 11, 9, 2, 27],
                [5, 2, 33, 11, 11, 9, 2, 2, 2, 2, 2, 2, 5, 2, 33, 11, 11, 11, 11, 11, 9, 2, 31, 13, 13, 7, 2, 27],
                [5, 2, 31, 13, 13, 7, 2, 33, 11, 11, 9, 2, 5, 2, 31, 13, 13, 13, 13, 13, 7, 2, 2, 2, 2, 2, 2, 27],
                [5, 2, 2, 2, 2, 2, 2, 27, 18, 18, 5, 2, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 33, 11, 11, 9, 2, 27],
                [5, 2, 33, 11, 11, 9, 2, 27, 18, 18, 5, 2, 5, 2, 33, 11, 11, 9, 2, 33, 9, 2, 31, 13, 13, 7, 2, 27],
                [5, 2, 31, 13, 13, 7, 2, 27, 18, 18, 5, 2, 5, 2, 27, 18, 18, 5, 2, 27, 5, 2, 2, 2, 2, 2, 2, 27],
                [5, 6, 2, 2, 2, 2, 2, 31, 13, 13, 7, 2, 5, 2, 27, 18, 18, 5, 2, 27, 5, 2, 33, 11, 11, 9, 6, 27],
                [5, 2, 33, 11, 11, 9, 2, 2, 2, 2, 2, 2, 5, 2, 27, 18, 18, 5, 2, 27, 5, 2, 27, 18, 18, 5, 2, 27],
                [5, 2, 31, 13, 13, 7, 2, 11, 11, 11, 11, 11, 19, 2, 31, 13, 13, 7, 2, 31, 7, 2, 31, 13, 13, 7, 2, 27],
                [5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27],
                [15, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 35]]

              return make(world, { time: 0, pacman: { x: pacmanX * SIZE, y: pacmanY * SIZE, lives: vida }, dir: "left", canvas: { x: pacmanX * SIZE, y: pacmanY * SIZE }, points: world.points, blinky: { pos: { x: rx * SIZE, y: ry * SIZE, dir: "up" }, state: 1, time: 0 }, inky: { pos: { x: bx * SIZE, y: by * SIZE, dir: "up" }, state: 1, time: 0 }, pinky: { pos: { x: px * SIZE, y: py * SIZE, dir: "up" }, state: 1, time: 0 }, clyde: { pos: { x: ox * SIZE, y: oy * SIZE, dir: "up" }, state: 1, time: 0 }, globalGhost: { state: 1, time: 0 }, level: world.level + 1 });
            }



            /**
             * Reinicia el juego y resta una vida cuando pacman toca un fantasma
             * @param {object} fantasma 
             */
            function muertePacman(fantasma) {
              if (globalState !== 4) return make(world, { pacman: { x: pacX, y: pacY, lives: vida - 1 }, globalGhost: { state: 4, time: 0 } });
              if (globalState == 4) {
                if (globalTime == 4) return make(world, { time: 0, pacman: { x: pacmanX * SIZE, y: pacmanY * SIZE, lives: vida }, dir: "left", canvas: { x: pacmanX * SIZE, y: pacmanY * SIZE }, points: world.points, blinky: { pos: { x: rx * SIZE, y: ry * SIZE, dir: "up" }, state: 1, time: 0 }, inky: { pos: { x: bx * SIZE, y: by * SIZE, dir: "up" }, state: 1, time: 0 }, pinky: { pos: { x: px * SIZE, y: py * SIZE, dir: "up" }, state: 1, time: 0 }, clyde: { pos: { x: ox * SIZE, y: oy * SIZE, dir: "up" }, state: 1, time: 0 }, globalGhost: { state: 1, time: 0 } });
                if (fantasma == world.blinky) return make(world, { blinky: { pos: { x: fantasma.pos.x, y: fantasma.pos.y, dir: fantasma.pos.dir }, state: 4, time: fantasma.time }, globalGhost: { state: globalState, time: globalTime + 1 } });
                if (fantasma == world.inky) return make(world, { inky: { pos: { x: fantasma.pos.x, y: fantasma.pos.y, dir: fantasma.pos.dir }, state: 4, time: fantasma.time }, globalGhost: { state: globalState, time: globalTime + 1 } });
                if (fantasma == world.pinky) return make(world, { pinky: { pos: { x: fantasma.pos.x, y: fantasma.pos.y, dir: fantasma.pos.dir }, state: 4, time: fantasma.time }, globalGhost: { state: globalState, time: globalTime + 1 } });
                if (fantasma == world.clyde) return make(world, { clyde: { pos: { x: fantasma.pos.x, y: fantasma.pos.y, dir: fantasma.pos.dir }, state: 4, time: fantasma.time }, globalGhost: { state: globalState, time: globalTime + 1 } });
              }
            }

            /**
             * Escoje un movimiento random que el fantasma pueda recorrer sin traspasar las paredes.
             * @param {object} pos 
             */
            function posibleMoves(pos) {
              var moves = [];
              var fantasmax = 0
              var fantasmay = 0
              if ((pos == world.blinky.pos || pos == world.clyde.pos) && pauseTitle.className == "") {
                fantasmax = rojox
                fantasmay = rojoy
                if (pos.x == fantasmax && pos.y == fantasmay || pos.x == (fantasmax - SIZE) && pos.y == fantasmay || pos.x == (fantasmax - (SIZE * 2)) && pos.y == fantasmay) return { x: pos.x - SIZE, y: pos.y, dir: "left" }

              }
              if ((pos == world.inky.pos || pos == world.pinky.pos) && pauseTitle.className == "") {
                fantasmax = azulx
                fantasmay = azuly
                if (pos.x == fantasmax && pos.y == fantasmay || pos.x == (fantasmax + SIZE) && pos.y == fantasmay || pos.x == (fantasmax + (SIZE * 2)) && pos.y == fantasmay) return { x: pos.x + SIZE, y: pos.y, dir: "right" }

              }
              if (world.time % ghostSpeed == 0 && pauseTitle.className == "") {
                if (uniMapa[(pos.y - SIZE) / SIZE][pos.x / SIZE] % 2 == 0 && pos.dir !== "down") {
                  moves = cons({ x: pos.x, y: pos.y - SIZE, dir: "up" }, moves)
                }
                if (uniMapa[(pos.y + SIZE) / SIZE][pos.x / SIZE] % 2 == 0 && pos.dir !== "up") {
                  moves = cons({ x: pos.x, y: pos.y + SIZE, dir: "down" }, moves)
                }
                if (uniMapa[pos.y / SIZE][(pos.x + SIZE) / SIZE] % 2 == 0 && pos.dir !== "left") {
                  moves = cons({ x: pos.x + SIZE, y: pos.y, dir: "right" }, moves)
                }
                if (uniMapa[pos.y / SIZE][(pos.x - SIZE) / SIZE] % 2 == 0 && pos.dir !== "right") {
                  moves = cons({ x: pos.x - SIZE, y: pos.y, dir: "left" }, moves)
                }
                var randomIndex = Math.floor(Math.random() * length(moves));
                return moves[randomIndex];
              } else return { x: pos.x, y: pos.y, dir: pos.dir }
            }

            /**
             * Calcula cual es la mejor direcion que lo acerque mas a parcman segun la posicion de pacman en el uniMapa
             * @param {*} pos 
             */

            function seguirPacman(pos) {
              const leftWall = uniMapa[pos.y / SIZE][(pos.x - SIZE) / SIZE]
              const rightWall = uniMapa[pos.y / SIZE][(pos.x + SIZE) / SIZE]
              const downWall = uniMapa[(pos.y + SIZE) / SIZE][pos.x / SIZE]
              const upWall = uniMapa[(pos.y - SIZE) / SIZE][pos.x / SIZE]
              var fantasmax = 0
              var fantasmay = 0
              if ((pos == world.blinky.pos || pos == world.clyde.pos) && pauseTitle.className == "") {
                fantasmax = rojox
                fantasmay = rojoy
                if (pos.x == fantasmax && pos.y == fantasmay || pos.x == (fantasmax - SIZE) && pos.y == fantasmay || pos.x == (fantasmax - (SIZE * 2)) && pos.y == fantasmay) return { x: pos.x - SIZE, y: pos.y, dir: "left" }
              }
              if ((pos == world.inky.pos || pos == world.pinky.pos) && pauseTitle.className == "") {
                fantasmax = azulx
                fantasmay = azuly
                if (pos.x == fantasmax && pos.y == fantasmay || pos.x == (fantasmax + SIZE) && pos.y == fantasmay || pos.x == (fantasmax + (SIZE * 2)) && pos.y == fantasmay) return { x: pos.x + SIZE, y: pos.y, dir: "right" }
              }



              if (world.time % ghostSpeed == 0 && pauseTitle.className == "") {
                if (canvasY > pos.y) {
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
                  if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" }
                }
                if (canvasY < pos.y) {
                  if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" }
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
                }
                if (canvasX < pos.x) {
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" }
                  if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                }
                if (canvasX > pos.x) {
                  if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" }
                }
                if (canvasX == pos.x) {
                  if (canvasY < pos.y) {
                    if (upWall % 2 == 0 && pos.dir !== "down" || upWall == 3) return { x: pos.x, y: pos.y - SIZE, dir: "up" }
                    if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                    if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" }
                  }
                  if (canvasY > pos.y) {
                    if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
                    if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                    if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" }
                  }
                }
                if (canvasY == pos.y) {
                  if (canvasX < pos.x) {
                    if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                    if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" }
                    if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
                    if (upWall % 2 == 0 && pos.dir !== "down" || upWall == 3) return { x: pos.x, y: pos.y - SIZE, dir: "up" }
                  }
                  if (canvasX > pos.x) {
                    if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" }
                    if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                    if (upWall % 2 == 0 && pos.dir !== "down" || upWall == 3) return { x: pos.x, y: pos.y - SIZE, dir: "up" }
                    if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
                  }
                }
              } else return { x: pos.x, y: pos.y, dir: pos.dir }
            }

            /**
             * Toma las direcciones necesarias para llevar el fantasma en estado 3 a la casa.
             * @param {object} pos 
             * @param {*} x 
             * @param {*} y 
             */

            function ojosBase(pos, x, y) {
              const leftWall = uniMapa[pos.y / SIZE][(pos.x - SIZE) / SIZE]
              const rightWall = uniMapa[pos.y / SIZE][(pos.x + SIZE) / SIZE]
              const downWall = uniMapa[(pos.y + SIZE) / SIZE][pos.x / SIZE]
              const upWall = uniMapa[(pos.y - SIZE) / SIZE][pos.x / SIZE]

              if (pos.y == y && pos.x == x) return { x: pos.x, y: pos.y, dir: pos.dir }
              if (upWall % 2 == 1 && rightWall % 2 == 1 && pos.dir == "right") return { x: pos.x, y: pos.y + SIZE, dir: "down" };


              if (pos.x < x) {
                if (pos.y == y) {
                  if (rightWall % 2 == 0 && pos.dir !== "left" || rightWall == 3) return { x: pos.x + SIZE, y: pos.y, dir: "right" };
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
                  if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                }
                if (pos.y < y) {
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" };
                  if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" };
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                  if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                }
                if (pos.y > y) {
                  if (pos.x == x && upWall % 2 == 0) return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                  if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                  if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" }
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" };
                  if (downWall % 2 == 0) return { x: pos.x, y: pos.y + SIZE, dir: "down" };
                }
              }

              if (pos.x > x) {
                if (pos.y == y) {
                  if (leftWall % 2 == 0 && pos.dir !== "right" || leftWall == 3) return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" };
                  if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                  if (rightWall % 2 == 0 && pos.dir !== "left" || rightWall % 2 == 0 && pos.dir == "right") return { x: pos.x + SIZE, y: pos.y, dir: "right" };
                }
                if (pos.y < y) {
                  if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" };
                  if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                  if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" };
                  if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                }
                if (pos.y > y) {
                  if (pos.x == x && upWall % 2 == 0) return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                  if (upWall % 2 == 0) return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                  if (leftWall % 2 == 0 && pos.dir !== "right" || leftWall % 2 == 0 && pos.dir == "left") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                  if (rightWall % 2 == 0 && pos.dir !== "left" || rightWall % 2 == 0 && pos.dir == "right") return { x: pos.x + SIZE, y: pos.y, dir: "right" };
                }
              }

              if (pos.x == x) {
                if (pos.y > y && upWall % 2 == 0) return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                if (pos.y < y && downWall % 2 == 0) return { x: pos.x, y: pos.y + SIZE, dir: "down" };
                if (rightWall % 2 == 0 && pos.dir !== "left") return { x: pos.x + SIZE, y: pos.y, dir: "right" };
                if (leftWall % 2 == 0 && pos.dir !== "right") return { x: pos.x - SIZE, y: pos.y, dir: "left" };
                if (upWall % 2 == 0 && pos.dir !== "down") return { x: pos.x, y: pos.y - SIZE, dir: "up" };
                if (downWall % 2 == 0 && pos.dir !== "up") return { x: pos.x, y: pos.y + SIZE, dir: "down" }
              }

            }

            /**
             * Cuando el fantasma este en estado 2, su movimiento sera aleatorio y al cumplir un tiempo global de 80 cambia el estado a 1
             * @param {object} fantasma 
             */
            function transformarse(fantasma) {
              if (globalTime == 80) {
                if (fantasma == world.blinky && fantasma.state !== 3 || fantasma == world.pinky && fantasma.state !== 3) { return { pos: seguirPacman(fantasma.pos), state: 1, time: 0 } }
                if (fantasma == world.inky && fantasma.state !== 3 || fantasma == world.clyde && fantasma.state !== 3) return { pos: posibleMoves(fantasma.pos), state: 1, time: 0 }
              }
              if (fantasma.state == 3) {
                if (fantasma == world.blinky) return casita(fantasma, rojox, rojoy)
                if (fantasma == world.inky) return casita(fantasma, azulx, azuly)
                if (fantasma == world.clyde) return casita(fantasma, rojox, rojoy)
                if (fantasma == world.pinky) return casita(fantasma, azulx, azuly)
              }
              else return { pos: posibleMoves(fantasma.pos), state: fantasma.state, time: fantasma.time }
            }

            /**
             * Cuando el fantasma este en su casa, despues de cierto tiempo su estado se vuelve 1.
             * @param {object} fantasma 
             * @param {*} x 
             * @param {*} y 
             */
            function casita(fantasma, x, y) {
              if (fantasma.time == 20) {
                if (fantasma == world.blinky || fantasma == world.inky) return { pos: seguirPacman(fantasma.pos), state: 1, time: 0 };
                else return { pos: posibleMoves(fantasma.pos), state: 1, time: 0 };
              }
              if (fantasma.pos.x == x && fantasma.pos.y == y) return { pos: { x: fantasma.pos.x, y: fantasma.pos.y, dir: "up" }, state: 3, time: fantasma.time + 1 };
              if (fantasma.state == 3) return { pos: ojosBase(fantasma.pos, x, y), state: 3, time: 0 };
              else return { pos: posibleMoves(fantasma.pos), state: fantasma.state, time: fantasma.time };
            }

            //Cuando Uni Pac-Man muere por un fantasma
            if (canvasX == blinkyX && canvasY == blinkyY) {
              if (globalState == 4) return muertePacman(world.blinky);
              if (blinkyEstado == 4) return muertePacman(world.blinky);
              if (blinkyEstado == 1) return muertePacman(world.blinky);
            }
            if (canvasX == inkyX && canvasY == inkyY) {
              if (globalState == 4) return muertePacman(world.inky);
              if (inkyEstado == 4) return muertePacman(world.inky);
              if (inkyEstado == 1) return muertePacman(world.inky);
            }
            if (canvasX == pinkyX && canvasY == pinkyY) {
              if (globalState == 4) return muertePacman(world.pinky);
              if (pinkyEstado == 4) return muertePacman(world.pinky);
              if (pinkyEstado == 1) return muertePacman(world.pinky);
            }
            if (canvasX == clydeX && canvasY == clydeY) {
              if (globalState == 4) return muertePacman(world.clyde);
              if (clydeEstado == 4) return muertePacman(world.clyde);
              if (clydeEstado == 1) return muertePacman(world.clyde);
            }

            //Pausar el mundo cuando es Game Over
            if (vida == 0) {
              return (world, world)
            }

            //Pasar al otro lado del mapa
            if (blinkyX <= 0 * SIZE) { return make(world, { time: world.time + 1, blinky: { pos: { x: 27 * SIZE, y: blinkyY, dir: "left" }, state: blinkyEstado, time: blinkyTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (blinkyX >= 27 * SIZE && blinkyDir !== "left") { return make(world, { time: world.time + 1, blinky: { pos: { x: 0, y: blinkyY, dir: "right" }, state: blinkyEstado, time: blinkyTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (inkyX <= 0 * SIZE) { return make(world, { time: world.time + 1, inky: { pos: { x: 27 * SIZE, y: inkyY, dir: "left" }, state: inkyEstado, time: inkyTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (inkyX >= 27 * SIZE && inkyDir !== "left") { return make(world, { time: world.time + 1, inky: { pos: { x: 0, y: inkyY, dir: "right" }, state: inkyEstado, time: inkyTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (pinkyX <= 0 * SIZE && pinkyDir !== "right") { return make(world, { time: world.time + 1, pinky: { pos: { x: 27 * SIZE, y: pinkyY, dir: "left" }, state: pinkyEstado, time: pinkyTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (pinkyX >= 27 * SIZE) { return make(world, { time: world.time + 1, pinky: { pos: { x: 0, y: pinkyY, dir: "right" }, state: pinkyEstado, time: pinkyTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (clydeX <= 0 * SIZE && clydeDir !== "right") { return make(world, { time: world.time + 1, clyde: { pos: { x: 27 * SIZE, y: clydeY, dir: "left" }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }
            if (clydeX >= 27 * SIZE) { return make(world, { time: world.time + 1, clyde: { pos: { x: 0, y: clydeY, dir: "right" }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime + 1 } }); }

            //Fantasmas Modo asustado
            if (inkyEstado == 2 || blinkyEstado == 2 || pinkyEstado == 2 || clydeEstado == 2) {
              return make(world, { time: world.time + 1, blinky: transformarse(world.blinky), inky: transformarse(world.inky), pinky: transformarse(world.pinky), clyde: transformarse(world.clyde), globalGhost: { state: globalState, time: globalTime + 1 } });
            }

            //Fantasmas Modo ojos
            if (inkyEstado == 3 || blinkyEstado == 3 || pinkyEstado == 3 || clydeEstado == 3) {
              return make(world, { time: world.time + 1, blinky: casita(world.blinky, rojox, rojoy), inky: casita(world.inky, azulx, azuly), pinky: casita(world.pinky, azulx, azuly), clyde: casita(world.clyde, rojox, rojoy), globalGhost: { state: globalState, time: globalTime } });
            }


            //Fantasmas normal
            if (blinkyEstado == 1 || inkyEstado == 1 || pinkyEstado == 1 || clydeEstado == 1) {
              if (pinkyX == rosax && pinkyY == rosay) return make(world, { time: world.time + 1, pinky: { pos: { x: pinkyX + SIZE, y: pinkyY, dir: "right" }, state: pinkyEstado, time: pinkyTime }, globalGhost: { state: globalState, time: globalTime } });
              if (clydeX == naranjax && clydeY == naranjay || clydeX == (naranjax - SIZE) && clydeY == naranjay || clydeX == (naranjax - (SIZE * 2)) && clydeY == naranjay) return make(world, { time: world.time + 1, clyde: { pos: { x: clydeX - SIZE, y: clydeY, dir: "left" }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime } });
              if (inkyX == azulx && inkyY == azuly || inkyX == (azulx + SIZE) && inkyY == azuly || inkyX == (azulx + (SIZE * 2)) && inkyY == azuly) return make(world, { time: world.time + 1, inky: { pos: { x: inkyX + SIZE, y: inkyY, dir: "right" }, state: inkyEstado, time: inkyTime }, globalGhost: { state: globalState, time: globalTime } });
              if (blinkyX == rojox && blinkyY == rojoy || blinkyX == (rojox - SIZE) && blinkyY == rojoy || blinkyX == (rojox - (SIZE * 2)) && blinkyY == rojoy) return make(world, { time: world.time + 1, blinky: { pos: { x: blinkyX - SIZE, y: blinkyY, dir: "left" }, state: blinkyEstado, time: blinkyTime }, globalGhost: { state: globalState, time: globalTime } });
              return make(world, { time: world.time + 1, blinky: { pos: seguirPacman(world.blinky.pos), state: blinkyEstado, time: blinkyTime }, inky: { pos: posibleMoves(world.inky.pos), state: inkyEstado, time: inkyTime }, pinky: { pos: seguirPacman(world.pinky.pos), state: pinkyEstado, time: pinkyTime }, clyde: { pos: posibleMoves(world.clyde.pos), state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime + 1 } });
            }



            return make(world, { time: world.time + 1 });
          }


          processing.onKeyEvent = function (world, keyCode) {

            //pacman
            const pacX = world.pacman.x
            const pacY = world.pacman.y
            const canvasX = world.canvas.x
            const canvasY = world.canvas.y
            //blinky
            const blinkyX = world.blinky.pos.x
            const blinkyY = world.blinky.pos.y
            const blinkyTime = world.blinky.time
            const blinkyDir = world.blinky.pos.dir
            const blinkyEstado = world.blinky.state
            //inky
            const inkyX = world.inky.pos.x
            const inkyY = world.inky.pos.y
            const inkyDir = world.inky.pos.dir
            const inkyEstado = world.inky.state
            const inkyTime = world.inky.time
            //pinky
            const pinkyX = world.pinky.pos.x
            const pinkyY = world.pinky.pos.y
            const pinkyDir = world.pinky.pos.dir
            const pinkyEstado = world.pinky.state
            const pinkyTime = world.pinky.time
            //clyde
            const clydeX = world.clyde.pos.x
            const clydeY = world.clyde.pos.y
            const clydeDir = world.clyde.pos.dir
            const clydeEstado = world.clyde.state
            const clydeTime = world.clyde.time
            //Extras
            const vida = world.pacman.lives
            const globalState = world.globalGhost.state
            const globalTime = world.globalGhost.time


            if (uniMapa[buscarY(uniMapa, 40)] == undefined) { }
            if (uniMapa[buscarY(uniMapa, 40)] !== undefined && globalTime > 7) { uniMapa[buscarY(uniMapa, 40)][buscarX(uniMapa, 40)] = 0; }

            if (vida <= 0) return (world, world);
            if (keyCode == processing.DOWN && pauseTitle.className == "") {
              movimientoPacman.play();
              if (uniMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] % 2 == 1 || globalState == 4) return (world, world);

              if (uniMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 4) {
                ghostSpeed = 1;
                uniMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
              }
              if (uniMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 24) {
                ghostSpeed = 3;
                uniMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
              }
              if (uniMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 6) {
                uniMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 40;
                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 50, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 2, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 2, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 2, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 2, time: 0 }, globalGhost: { state: 2, time: 0 }, level: world.level });
              }
              if (uniMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 22) {
                ghostSpeed = 2;
                uniMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (uniMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 20) {
                ghostSpeed = 2;
                uniMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points - 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (uniMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 60) {
                ghostSpeed = 2;
                uniMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida + 1 }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == blinkyX && pacY == blinkyY && blinkyEstado == 2 || pacX == blinkyX && pacY == blinkyY - SIZE && blinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 3, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == inkyX && pacY == inkyY && inkyEstado == 2 || pacX == inkyX && pacY == inkyY - SIZE && inkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 3, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == pinkyX && pacY == pinkyY && inkyEstado == 2 || pacX == pinkyX && pacY == pinkyY - SIZE && pinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 3, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == clydeX && pacY == clydeY && clydeEstado == 2 || pacX == clydeX && pacY == clydeY - SIZE && clydeEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 3, time: 0 }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (uniMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] == 2) {
                uniMapa[(canvasY + SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points + 10, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              } {
                return (world, { time: world.time, pacman: { x: pacX, y: pacY + SIZE, lives: vida }, dir: "down", canvas: { x: canvasX, y: canvasY + SIZE }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
            }

            if (keyCode == processing.LEFT && pauseTitle.className == "") {
              movimientoPacman.play();
              if (canvasX == 0) {
                return (world, { time: world.time, pacman: { x: 27 * SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: 27 * SIZE, y: canvasY }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (uniMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] % 2 == 1 || globalState == 4) return (world, world);

              if (uniMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 4) {
                ghostSpeed = 1;
                uniMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
              }

              if (uniMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 24) {
                ghostSpeed = 3;
                uniMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
              }

              if (uniMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 6) {
                uniMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 40
                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 50, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 2, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 2, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 2, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 2, time: 0 }, globalGhost: { state: 2, time: 0 }, level: world.level });
              }

              if (uniMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 20) {
                ghostSpeed = 2;
                uniMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points - 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (uniMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 22) {
                ghostSpeed = 2;
                uniMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (uniMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 60) {
                ghostSpeed = 2;
                uniMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida + 1 }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }


              if (pacX == blinkyX && pacY == blinkyY && blinkyEstado == 2 || pacX == blinkyX + SIZE && pacY == blinkyY && blinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 3, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == inkyX && pacY == inkyY && inkyEstado == 2 || pacX == inkyX + SIZE && pacY == inkyY && inkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 3, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == pinkyX && pacY == pinkyY && inkyEstado == 2 || pacX == pinkyX + SIZE && pacY == pinkyY && pinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 3, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == clydeX && pacY == clydeY && clydeEstado == 2 || pacX == clydeX + SIZE && pacY == clydeY && clydeEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 3, time: 0 }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (uniMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] == 2) {
                uniMapa[canvasY / SIZE][(canvasX - SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points + 10, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              return (world, { time: world.time, pacman: { x: pacX - SIZE, y: pacY, lives: vida }, dir: "left", canvas: { x: canvasX - SIZE, y: canvasY }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
            }

            if (keyCode == processing.RIGHT && pauseTitle.className == "") {
              movimientoPacman.play();
              if (canvasX == 27 * SIZE) {
                return (world, { time: world.time, pacman: { x: 0, y: pacY, lives: vida }, dir: "right", canvas: { x: 0, y: canvasY }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              if (uniMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 4) {
                ghostSpeed = 1;
                uniMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
              }
              if (uniMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 24) {
                ghostSpeed = 3;
                uniMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
              }

              if (uniMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] % 2 == 1 || globalState == 4) return (world, world);
              if (uniMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 20) {
                ghostSpeed = 2;
                uniMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points - 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (uniMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 22) {
                ghostSpeed = 2;
                uniMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (uniMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 60) {
                ghostSpeed = 2;
                uniMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida + 1 }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }


              if (uniMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 6) {
                uniMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 40
                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 50, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 2, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 2, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 2, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 2, time: 0 }, globalGhost: { state: 2, time: 0 }, level: world.level });
              }

              if (pacX == blinkyX && pacY == blinkyY && blinkyEstado == 2 || pacX == blinkyX - SIZE && pacY == blinkyY && blinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 3, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == inkyX && pacY == inkyY && inkyEstado == 2 || pacX == inkyX - SIZE && pacY == inkyY && inkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 3, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == pinkyX && pacY == pinkyY && inkyEstado == 2 || pacX == pinkyX - SIZE && pacY == pinkyY && pinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 3, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (pacX == clydeX && pacY == clydeY && clydeEstado == 2 || pacX == clydeX - SIZE && pacY == clydeY && clydeEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 3, time: 0 }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (uniMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] == 2) {
                uniMapa[canvasY / SIZE][(canvasX + SIZE) / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points + 10, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              return (world, { time: world.time, pacman: { x: pacX + SIZE, y: pacY, lives: vida }, dir: "right", canvas: { x: canvasX + SIZE, y: canvasY }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
            }

            if (keyCode == processing.UP && pauseTitle.className == "") {
              movimientoPacman.play();
              if (uniMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] % 2 == 1 || globalState == 4) return (world, world);

              if (uniMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 4) {
                ghostSpeed = 1;
                uniMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
              }

              if (uniMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 24) {
                ghostSpeed = 3;
                uniMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
              }

              if (uniMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 20) {
                ghostSpeed = 2;
                uniMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points - 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (uniMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 22) {
                ghostSpeed = 2;
                uniMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 80, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }
              if (uniMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 60) {
                ghostSpeed = 2;
                uniMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida + 1 }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              if (uniMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 6) {
                uniMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 40
                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 50, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 2, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 2, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 2, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 2, time: 0 }, globalGhost: { state: 2, time: 0 }, level: world.level });
              }

              if (pacX == blinkyX && pacY == blinkyY && blinkyEstado == 2 || pacX == blinkyX && pacY == blinkyY + SIZE && blinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: 3, time: 0 }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              if (pacX == inkyX && pacY == inkyY && inkyEstado == 2 || pacX == inkyX && pacY == inkyY + SIZE && inkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: 3, time: 0 }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              if (pacX == pinkyX && pacY == pinkyY && pinkyEstado == 2 || pacX == pinkyX && pacY == pinkyY + SIZE && pinkyEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: 3, time: 0 }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              if (pacX == clydeX && pacY == clydeY && clydeEstado == 2 || pacX == clydeX && pacY == clydeY + SIZE && clydeEstado == 2) {

                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 100, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: 3, time: 0 }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              if (uniMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] == 2) {
                uniMapa[(canvasY - SIZE) / SIZE][canvasX / SIZE] = 0
                return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points + 10, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
              }

              return (world, { time: world.time, pacman: { x: pacX, y: pacY - SIZE, lives: vida }, dir: "up", canvas: { x: canvasX, y: canvasY - SIZE }, points: world.points, blinky: { pos: { x: blinkyX, y: blinkyY, dir: blinkyDir }, state: blinkyEstado, time: blinkyTime }, inky: { pos: { x: inkyX, y: inkyY, dir: inkyDir }, state: inkyEstado, time: inkyTime }, pinky: { pos: { x: pinkyX, y: pinkyY, dir: pinkyDir }, state: pinkyEstado, time: pinkyTime }, clyde: { pos: { x: clydeX, y: clydeY, dir: clydeDir }, state: clydeEstado, time: clydeTime }, globalGhost: { state: globalState, time: globalTime }, level: world.level });
            }

            else return (world, world);

          }
          processing.onMouseEvent = function (world, event) {
            return make(world, {});
          }

          // ******************** De aquí hacia abajo no debe cambiar nada. ********************

          // Esta es la función que pinta todo. Se ejecuta 60 veces por segundo. 
          // No cambie esta función. Su código debe ir en drawGame
          processing.draw = function () {
            processing.drawGame(processing.state);
            processing.state = processing.onTic(processing.state);
          };

          // Esta función se ejecuta cada vez que presionamos una tecla. 
          // No cambie esta función. Su código debe ir en onKeyEvent
          processing.keyPressed = function () {
            processing.state = processing.onKeyEvent(processing.state, processing.keyCode);
          }

          // Esta función se ejecuta cada vez movemos el mouse. 
          // No cambie esta función. Su código debe ir en onKeyEvent
          processing.mouseMoved = function () {
            processing.state = processing.onMouseEvent(processing.state,
              { action: "move", mouseX: processing.mouseX, mouseY: processing.mouseY });
          }

          // Estas funciones controlan los eventos del mouse. 
          // No cambie estas funciones. Su código debe ir en OnMouseEvent
          processing.mouseClicked = function () {
            processing.state = processing.onMouseEvent(processing.state,
              { action: "click", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
          }

          processing.mouseDragged = function () {
            processing.state = processing.onMouseEvent(processing.state,
              { action: "drag", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
          }

          processing.mousePressed = function () {
            processing.state = processing.onMouseEvent(processing.state,
              { action: "press", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
          }

          processing.mouseReleased = function () {
            processing.state = processing.onMouseEvent(processing.state,
              { action: "release", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
          }
          // Fin de los eventos del mouse
        }
        var canvas = document.getElementById("canvas");
        var processingInstance = new Processing(canvas, sketchProc);
        canvas.focus() = true;
      }

      else {

      }
    }

    else {

    }
  }

  else if (key.keyCode == "80" && game.className == "gameVisible") {
    if (pauseTitle.className == "") {
      pauseTitle.className = "show"
    }
    else if (pauseTitle.className == "show") {
      pauseTitle.className = ""
    }
    else {
    }
  }

  //Si se presiona Backspace
  else if (key.keyCode == "8" && start.className == "startVisible") {
    if (pacman.className == "selected" || missPacman.className == "selected" || uniPacman.className == "selected") {
      pacman.className = "";
      missPacman.className = "";
      uniPacman.className = "";
    }
    else {

    }
  }
}

