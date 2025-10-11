function botones (texto_, x_, y_, ancho_, alto_) {
  push();
  translate(x_, y_);
  rectMode (CENTER);

  // CONDICIONAL DEL COLOR ==============================
  if (mouseRect(x_, y_, ancho_, alto_)) {
    fill(130, 177, 203);
  } else {
    fill(87, 153, 180);
  }

  // DIBUJAR BOTON =====================================
  noStroke();
  rect (0, 0, ancho_, alto_);
  fill (0);
  textAlign(CENTER, CENTER);
  text(texto_, 0, 0);
  pop();
}

// DETECTAR MOUSE EN BOTÓN ===================================
function mouseRect(x_, y_, ancho_, alto_) {
  if (mouseX>x_ - ancho_/2 && mouseX < x_ + ancho_/2 &&
    mouseY>y_ - alto_/2 && mouseY <y_ + alto_/2) {
    return true;
  } else {
    return false;
  }
}
