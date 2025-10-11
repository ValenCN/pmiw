// PMIW - TP#FINAL - VALENTINA CARANCINI, CARLA CHOQUETOPA COM.3
//Videos: Valentina: https://youtu.be/kk44itlpPHQ Carla:https://youtu.be/QFDirWK20yY?si=jH5pSK9vpeQpHFXb

let pantalla;
let opacidadPantalla = 0

  // IMG, TEXTO, FUENTES, SONIDO ========================
  let texto =[];
let img =[];
let fuenteTitulo;
let fuenteBoton;
let fuenteTexto;
let sonidoBoton;
let sonidoMusica;
let sonidoHorror;
let sonidoFin;

function preload() {
  // IMAGENES ==========================================
  for (let i = 0; i < 15; i++) {
    img[i] = loadImage("./data/imagenes/imagen_" + nf(i, 2) + ".jpg");
  }

  // TEXTO ============================================
  for (let i = 0; i < 9; i++) {
    texto[i] = loadStrings("data/textos/texto_" + nf(i, 2) + ".txt");
  }

  // FUENTES =========================================
  fuenteTitulo = loadFont("data/fuentes/Beardsons-normal.ttf");
  fuenteBoton = loadFont("data/fuentes/catcafe.medium.ttf");
  fuenteTexto = loadFont("data/fuentes/Credit_valley_bold.otf");

  // SONIDO ==========================================
  sonidoBoton = loadSound("data/sonido/button-press.mp3");
  sonidoMusica = loadSound("data/sonido/dark-horror-atmosphere-for-scary-scenes-179446.mp3");
  sonidoHorror = loadSound("data/sonido/horror-orchestra-warning-338415.mp3");
  sonidoFin = loadSound ("data/sonido/creepy-outro-sound-effect-82367.mp3");
}

function setup() {
  createCanvas(640, 480);
  pantalla = 0;
  sonidoBoton.setVolume(0.3);
  sonidoFin.setVolume(0.3);
}

function draw() {
  background(200);
  if (pantalla === 0) {
    pantallaInicio();
  } else if (pantalla == 1) {
    pantalla1();
  } else if (pantalla == 2) {
    pantalla2();
  } else if (pantalla == 3) {
    pantalla3();
  } else if (pantalla == 4) {
    pantalla4();
  } else if (pantalla == 5) {
    pantalla5();
  } else if (pantalla == 6) {
    pantalla6();
  } else if (pantalla == 7) {
    pantalla7();
  } else if (pantalla == 8) {
    pantalla8();
  } else if (pantalla == 9) {
    pantalla9();
  } else if (pantalla == 10) {
    pantalla10();
  } else if (pantalla == 11) {
    pantalla11();
  } else if (pantalla == 12) {
    pantalla12();
  } else if (pantalla == 13) {
    pantalla13();
  } else if (pantalla == 14) {
    pantalla14();
  } else if (pantalla== 15) {
    pantalla15();
  } else if (pantalla == 16) {
    pantallaCreditos();
  }
}

// SUBIR/BAJAR VOLUMEN ====================================
function keyPressed() {
  let volActual =  sonidoMusica.getVolume();
  if (key ==='+') {
    volActual+=0.1;
  }
  if (key ==='-') {
    volActual-=0.1;
  }
  volActual = constrain(volActual, 0, 1);
  sonidoMusica.setVolume(volActual);

  // PASAR PANTALLA CON TECLA ================================
  // avanzar:
  if (keyCode === ENTER) {
    if (pantalla < 15) {
      pantalla++;
      opacidadPantalla = 0;
    }
  }
  // retroceder:
  if (keyCode === BACKSPACE) {
    if (pantalla > 0) {
      pantalla--;
      opacidadPantalla = 0;
    }
  }
}


function mousePressed() {

  // BOTÓN SONIDO (ARRIBA) ==========================================================
  if (mousePressed) {
    if ( mouseRect (50, 30, 80, 30)) { // Musica: OFF
      if (sonidoMusica.isPlaying()) {
        sonidoMusica.pause();
      }
    }
    if (mouseRect(50, 70, 80, 30)) { // Musica: ON
      if (!sonidoMusica.isPlaying()) {
        sonidoMusica.loop();   //
      }
    }

    // BOTON SONIDO (ABAJO) ================================================
    if (mousePressed) {
      if ( mouseRect (50, 410, 80, 30)) { // Musica: OFF
        if (sonidoMusica.isPlaying()) {
          sonidoMusica.pause();
        }
      }
      if (mouseRect(50, 450, 80, 30)) { // Musica: ON
        if (!sonidoMusica.isPlaying()) {
          sonidoMusica.loop();   //
        }
      }
    }
 


      // PANTALLAS BOTONES TRANSICIÓN =====================================
      if (pantalla === 0) {
        if (mouseRect(width/2, height/2+165, 130, 55)) {
          sonidoBoton.play();
          pantalla = 1;
        }
      } else if (pantalla == 1) {
        if (mouseRect(530, height/2+165, 130, 55)) {
          sonidoBoton.play();
          pantalla = 2;
        }
      } else if (pantalla == 2) {
        if (mouseRect(130, 400, 180, 40)) { // Ignorar las estatuas y avanzar
          sonidoBoton.play();
          pantalla = 3;
          sonidoFin.play();
          opacidadPantalla = 0;
        }
        if (mouseRect(520, 400, 150, 40)) { // Inspeccionar el jardín
          sonidoBoton.play();
          pantalla = 4;
        }
      } else if (pantalla == 3) {
        if (mouseRect(width/2, height/2+165, 130, 55)) {
          if (sonidoFin.isPlaying()) sonidoFin.stop();
          sonidoBoton.play();
          pantalla = 0;
        }
      } else if (pantalla == 4) {
        if (mouseRect(width/2, height/2+165, 130, 55)) {
          sonidoBoton.play();
          pantalla =5;
        }
      } else if (pantalla == 5) {
        if (mouseRect(width/2, height/2+165, 180, 40)) {
          sonidoBoton.play();
          pantalla = 6;
        }
      } else if (pantalla == 6) {
        if (mouseRect(520, 400, 150, 40)) { // Caminar por el pasillo oscuro
          sonidoBoton.play();
          pantalla = 7;
          sonidoFin.play();
          opacidadPantalla = 0;
        }
        if (mouseRect(130, 400, 180, 40)) { // Caminar por el pasillo iluminado
          sonidoBoton.play();
          pantalla = 8;
        }
      } else if (pantalla == 7) {
        if (mouseRect(width/2, height/2+165, 130, 55)) {
          if (sonidoFin.isPlaying()) sonidoFin.stop();
          sonidoBoton.play();
          pantalla = 0;
        }
      } else if (pantalla == 8) {
        if (mouseRect (width/2, height/2+165, 180, 40)) {
          sonidoBoton.play();
          pantalla = 9;
        }
      } else if (pantalla == 9) {
        if (mouseRect(530, height/2+165, 130, 55)) {
          sonidoBoton.play();
          pantalla = 10;
        }
      } else if (pantalla == 10) {
        if (mouseRect(130, 400, 180, 40)) {
          sonidoBoton.play();
          pantalla = 11; // Esconderse en el armario
          sonidoHorror.play();
          sonidoHorror.setVolume(0.4);
          opacidadPantalla = 0;
        }
        if (mouseRect(332, 400, 180, 40)) {
          sonidoBoton.play();
          pantalla = 12;
          sonidoFin.play(); // Enfrentarla con el espejo
        }
        if (mouseRect(520, 400, 150, 40)) {
          sonidoBoton.play();
          pantalla = 13; // Escapas por el pasadizo
        }
      } else if (pantalla == 11) {
        if (mouseRect(width/2, height/2 + 165, 180, 40)) {
          opacidadPantalla = 0;
          sonidoBoton.play();
          pantalla = 0;
        }
      } else if (pantalla == 12) {
        if (mouseRect(width/2, height/2 + 165, 180, 40)) {
          if (sonidoFin.isPlaying()) sonidoFin.stop();
          sonidoBoton.play();
          pantalla =0;
        }
      } else if (pantalla == 13) {
        if (mouseRect(width/2, height/2 + 165, 180, 40)) {
          sonidoBoton.play();
          pantalla = 14;
        }
      } else if (pantalla == 14) {
        if (mouseRect(width/2, height/2 + 165, 180, 40)) {
          sonidoBoton.play();
          pantalla = 15;
          opacidadPantalla = 0;
        }
      } else if (pantalla == 15) {
        if (mouseRect(130, 400, 180, 40)) {
          sonidoBoton.play();
          pantalla = 0; // Volver a inicio
        }
        if (mouseRect(520, 400, 150, 40)) {
          sonidoBoton.play();
          pantalla = 16;  // Ir a creditos
          opacidadPantalla = 0;
        }
      } else if (pantalla == 16) {
        if (mouseRect(width/2, height/2+165, 180, 40)) {
          sonidoBoton.play();
          pantalla = 0;
        }
      }
    }
  }

