function pantallaInicio() {
  push();
  image(img[0], 0, 0, width, height);

  // TITULO ======================================================
  textAlign(CENTER, CENTER);
  fill (52, 108, 121);
  textFont(fuenteTitulo);
  textSize (70);
  text ("Ojos De Piedra", width/2, height/2-165);

  // BOTÓN CENTRO ================================================
  textFont(fuenteBoton);
  textSize(20);
  botones("Empezar", width/2, height/2+165, 130, 55);
  pop();

  textFont(fuenteBoton);
  textSize(12);
  botones("Musica: OFF", 50, 410, 80, 30);
  botones("Musica: ON", 50, 450, 80, 30);
}


function pantalla1() {
  push();
  image(img[1], 0, 0, width, height);

  // TEXTO =======================================================
  textAlign(LEFT, TOP);
  fill(255);
  textFont(fuenteTexto);
  textSize(15);
  text(texto[0][0], 30, 50, width-60, height-50);
  textSize(17);
  text(texto[0][1], 30, 100, width-70, height-50);

  // BOTÓN =========================================================
  textFont(fuenteBoton);
  textSize(20);
  botones("Siguiente", 530, height/2+165, 130, 55);
  pop();

  textFont(fuenteBoton);
  textSize(12);
  botones("Musica: OFF", 50, 410, 80, 30);
  botones("Musica: ON", 50, 450, 80, 30);
}

function pantalla2() {
  push();
  image(img[2], 0, 0, width, height);

  // TEXTO =======================================================
  noStroke();
  fill(0, 80);
  rect(0, height * 0.64, width, height - 350);
  fill(255);
  textFont(fuenteTexto);
  textAlign(CENTER);
  textSize(17);
  text("Observas un jardín lleno de estatuas de personas en la entrada al templo, ¿Qué haces?", 0, height * 0.72, width, height * 0.3);

  // DIBUJAR BOTON =============================================
  textFont(fuenteBoton);
  textSize(13);
  botones("Ignorar las estatuas y avanzar", 130, 400, 180, 40);
  botones("Inspeccionar el jardin", 520, 400, 150, 40);
  pop();

  textFont(fuenteBoton);
  textSize(12);
  botones("Musica: OFF", 50, 30, 80, 30);
  botones("Musica: ON", 50, 70, 80, 30);
}

function pantalla3() {
  push();
  background(0);

  // APARECER =================================================
  if (opacidadPantalla < 255) {
    opacidadPantalla += 5;
  }

  // TITULO ===================================================
  textAlign(CENTER);
  textFont(fuenteTitulo);
  textSize(40);
  fill(206, 0, 0, opacidadPantalla);
  text("Has muerto", width / 2, height / 2 - 120);

  // TEXTO ====================================================
  textAlign(CENTER);
  textFont(fuenteTexto);
  textSize(20);
  fill(255, opacidadPantalla);
  text(texto[1], 30, height / 2, width - 70, height - 50);

  // BOTON ====================================================
  textFont(fuenteBoton);
  textSize(15);
  fill(255);
  botones("Volver a Empezar", width / 2, height / 2 + 165, 130, 55);

  pop();
}

function pantalla4() {
  push();
  image(img[3], 0, 0, width, height);

  // TEXTO ====================================================
  noStroke();
  fill(0, 80);
  rect(0, height * 0.64, width, height - 350);
  fill(255);
  textFont(fuenteTexto);
  textAlign(CENTER);
  textSize(17);
  text(texto[2], 0, height * 0.72, width, height * 0.3);

  // BOTÓN ====================================================
  textFont(fuenteBoton);
  textSize(20);
  botones("Presionar", width/2, height/2+165, 180, 40);
  pop();

  textFont(fuenteBoton);
  textSize(12);
  botones("Musica: OFF", 50, 30, 80, 30);
  botones("Musica: ON", 50, 70, 80, 30);
}

function pantalla5() {
  push();
  image(img[4], 0, 0, width, height);

  // TEXTO =======================================================
  noStroke();
  fill(0, 80);
  rect(0, height * 0.64, width, height - 350);
  fill(255);
  textFont(fuenteTexto);
  textAlign(CENTER);
  textSize(17);
  text(texto[3], 0, height * 0.72, width, height * 0.3);

  // DIBUJAR BOTON =============================================
  textFont(fuenteBoton);
  textSize(17);
  botones("Entrar al templo", width/2, height/2+165, 180, 40);
  pop();

  textFont(fuenteBoton);
  textSize(12);
  botones("Musica: OFF", 50, 30, 80, 30);
  botones("Musica: ON", 50, 70, 80, 30);
}

function pantalla6() {
  push();
  image(img[5], 0, 0, width, height);


  // TEXTO =======================================================
  noStroke();
  fill(0, 80);
  rect(0, height * 0.64, width, height - 350);
  fill(255);
  textFont(fuenteTexto);
  textAlign(CENTER);
  textSize(17);
  text("Entras al templo en ruinas, hacia donde sigues?", 0, height * 0.72, width, height * 0.3);

  // DIBUJAR BOTON =============================================
  textFont(fuenteBoton);
  textSize(11.5);
  botones("Caminar por el pasillo iluminado", 130, 400, 180, 40);
  botones("Caminar por el pasillo oscuro", 520, 400, 150, 40);
  pop();

  textFont(fuenteBoton);
  textSize(12);
  botones("Musica: OFF", 50, 30, 80, 30);
  botones("Musica: ON", 50, 70, 80, 30);
}

function pantalla7() {
  push();
  image(img[6], 0, 0, width, height);

  // APARECER =================================================
  if (opacidadPantalla < 255) {
    opacidadPantalla += 5;
  }

  // TITULO ===================================================
  textAlign(CENTER);
  textFont(fuenteTitulo);
  textSize(40);
  fill(206, 0, 0, opacidadPantalla);
  text("Has muerto", width / 2, height / 2 - 120);

  // TEXTO ====================================================
  noStroke();
  fill(0, 90);
  rect(0, height * 0.65, width, height - 350);
  textAlign(CENTER);
  textFont(fuenteTexto);
  textSize(17);
  fill(255, opacidadPantalla);
  text(texto[4], 0, height * 0.73, width, height * 0.3);

  // BOTON ====================================================
  textFont(fuenteBoton);
  textSize(15);
  fill(255);
  botones("Volver a Empezar", width / 2, height / 2 + 165, 130, 55);
  pop();
}

function pantalla8() {
  push();
  image(img[7], 0, 0, width, height);

  // TEXTO =====================================================
  noStroke();
  fill(0, 80);
  rect(0, height * 0.64, width, height - 350);
  fill(255);
  textFont(fuenteTexto);
  textAlign(CENTER);
  textSize(17);
  text("Al final del pasillo se observa una puerta rota", 0, height * 0.72, width, height * 0.3);

  // DIBUJAR BOTON =============================================
  textFont(fuenteBoton);
  textSize(15);
  botones("Abrir la puerta y entrar", width/2, height/2+165, 180, 40);
  pop();

  textFont(fuenteBoton);
  textSize(12);
  botones("Musica: OFF", 50, 30, 80, 30);
  botones("Musica: ON", 50, 70, 80, 30);
}

function pantalla9() {
  push();
  image (img[8], 0, 0, width, height);

  // TEXTO =====================================================
  noStroke();
  fill(0, 80);
  rect(0, height * 0.64, width, height - 350);
  fill(255);
  textFont(fuenteTexto);
  textAlign(CENTER);
  textSize(17);
  text(texto[5], 0, height * 0.72, width, height * 0.3);

  // BOTÓN DERECHA =============================================
  textFont(fuenteBoton);
  textSize(18);
  botones("Siguiente", 530, height/2+165, 130, 55);
  pop();

  textFont(fuenteBoton);
  textSize(12);
  botones("Musica: OFF", 50, 30, 80, 30);
  botones("Musica: ON", 50, 70, 80, 30);
}

function pantalla10() {
  push();
  image (img[9], 0, 0, width, height);

  // TEXTO =====================================================
  noStroke();
  fill(0, 80);
  rect(0, height * 0.64, width, height - 350);
  fill(255);
  textFont(fuenteTexto);
  textAlign(CENTER);
  textSize(17);
  text("Escuchas a Medusa acercarse a la habitación ¿Cuál es tu decisión?", 0, height * 0.72, width, height * 0.3);

  // BOTONES ===================================================
  textFont(fuenteBoton);
  textSize(11.5);
  botones("Esconderse en el armario", 130, 400, 180, 40);
  botones("Enfrentarla con el espejo", 332, 400, 180, 40);
  textSize(14);
  botones("Escapar por el pasadizo", 520, 400, 150, 40);
  pop();

  textFont(fuenteBoton);
  textSize(12);
  botones("Musica: OFF", 50, 30, 80, 30);
  botones("Musica: ON", 50, 70, 80, 30);
}

function pantalla11() {
  push();
  image(img[10], 0, 0, width, height);

  // APARECER =================================================
  if (opacidadPantalla < 255) {
    opacidadPantalla += 5;
  }

  // TITULO ===================================================
  textAlign(CENTER);
  textFont(fuenteTitulo);
  textSize(40);
  fill(162, 28, 28, opacidadPantalla);
  text("Fin", width / 2, height / 2 - 140);

  // TEXTO ==================================================
  noStroke();
  fill(0, 80);
  rect(0, height * 0.64, width, height - 350);
  fill(255);
  textFont(fuenteTexto);
  textAlign(CENTER, CENTER);
  textSize(17);
  text("Medusa te escuchó.", 0, height * 0.60, width, height * 0.2);

  // BOTÓN ================================================
  textFont(fuenteBoton);
  textSize(17);
  botones("Volver a empezar", width / 2, height / 2 + 165, 180, 40);
  pop();
}

function pantalla12() {
  push();
  image(img[11], 0, 0, width, height);

  // APARECER =================================================
  if (opacidadPantalla < 255) {
    opacidadPantalla += 5;
  }

  // TITULO ===================================================
  textAlign(CENTER);
  textFont(fuenteTitulo);
  textSize(40);
  fill(87, 153, 180, opacidadPantalla);
  text("Fin", width / 2, height / 2 - 140);

  // TEXTO ===============================================
  noStroke();
  fill(0, 90);
  rect(0, height * 0.64, width, height - 350);
  fill(255);
  textFont(fuenteTexto);
  textAlign(CENTER, CENTER);
  textSize(17);
  text(texto[6], 5, height * 0.56, width-15, height * 0.3);


  // BOTÓN ===============================================
  textFont(fuenteBoton);
  textSize(17);
  botones("Volver a Inicio", width / 2, height / 2 + 165, 180, 40);
  pop();
}

function pantalla13() {
  push();
  image(img[12], 0, 0, width, height);

  // TEXTO ==================================================
  noStroke();
  fill(0, 90);
  rect(0, height * 0.64, width, height - 350);
  fill(255);
  textFont(fuenteTexto);
  textAlign(CENTER, CENTER);
  textSize(17);
  text("La puerta del pasadiso esta cubierta de telarañas y maderas", 0, height * 0.57, width, height * 0.3);

  // BOTÓN ==============================================
  textFont(fuenteBoton);
  textSize(17);
  botones("Quitar las maderas", width / 2, height / 2 + 165, 180, 40);
  pop();

  textFont(fuenteBoton);
  textSize(12);
  botones("Musica: OFF", 50, 30, 80, 30);
  botones("Musica: ON", 50, 70, 80, 30);
}

function pantalla14() {
  push();
  image(img[13], 0, 0, width, height);

  // TEXTO ================================================
  noStroke();
  fill(0, 90);
  rect(0, height * 0.64, width, height - 350);
  fill(255);
  textFont(fuenteTexto);
  textAlign(CENTER, CENTER);
  textSize(17);
  text(
    "Corrés por el pasadizo. Al final ves una luz brillante: ¡la salida del templo!",
    0, height * 0.56, width, height * 0.3);

  // BOTON =====================================================
  textFont(fuenteBoton);
  textSize(17);
  botones("Salir al exterior", width / 2, height / 2 + 165, 180, 40);
  pop();

  textFont(fuenteBoton);
  textSize(12);
  botones("Musica: OFF", 50, 30, 80, 30);
  botones("Musica: ON", 50, 70, 80, 30);
}

function pantalla15() {
  push();
  image(img[14], 0, 0, width, height);

  // APARECER =================================================
  if (opacidadPantalla < 255) {
    opacidadPantalla += 5;
  }

  // TITULO ===================================================
  textAlign(CENTER);
  textFont(fuenteTitulo);
  textSize(60);
  fill(87, 153, 180, opacidadPantalla);
  text("Fin", width / 2, height / 2 - 120);

  // TEXTO==================================================
  noStroke();
  fill(0, 80);
  rect(0, height/2+45, width, height - 350);
  fill(255);
  textFont(fuenteTexto);
  textAlign(CENTER);
  textSize(17);
  text(texto[8], 30, height/2+90, width-70, height-50);

  // BOTON=====================================================
  textFont(fuenteBoton);
  textSize(17);
  botones("Volver a Inicio", 130, 400, 180, 40);
  botones("Creditos", 520, 400, 150, 40);
  pop();
}

function pantallaCreditos() {
  push();
  image(img[0], 0, 0, width, height);

  // APARECER =================================================
  if (opacidadPantalla < 255) {
    opacidadPantalla += 5;
  }

  // CREDITOS ====================================================
  textAlign(CENTER);
  textFont(fuenteTitulo);
  textSize(40);
  fill(87, 153, 180, );
  text("Creditos", width / 2, height / 2 - 170);
  noStroke();
  fill(0, 80);
  rect(0, height/2-145, width, height - 350);

  fill(255);
  textFont(fuenteTexto);
  textAlign(CENTER);
  textSize(18);

  text("Tema: Medusa", width / 2, height / 2 - 115);
  text("Obra: Ojos de Piedra", width / 2, height / 2 - 90);
  text("Alumnos: Valentina Carancini, Carla Choquetopa", width / 2, height / 2 - 65);
  textSize(24);
  text("PMIW: Comisión 3", width / 2, height / 2 - 34.5);

  // BOTON ========================================================
  textFont(fuenteBoton);
  textSize(17);
  botones("Volver a Inicio", width/2, height/2+165, 180, 40);

  textFont(fuenteBoton);
  textSize(12);
  botones("Musica: OFF", 50, 410, 80, 30);
  botones("Musica: ON", 50, 450, 80, 30);
  pop();
}
