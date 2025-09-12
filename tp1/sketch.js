// TP1 Valentina Carancini//
//https://youtu.be/2YEiWGM_f-A
let cantidad = 25;
let espacio = 6;

let img;
function preload() {
  img = loadImage("data/F_51.jpg");
}

//----------- funcion no retornable ------------------------------------------
function circulo(cantidad, espacio, mouseXlimited, mouseY) {
  //------------------- calcular cantidad y espacio --------------------------
  for (let i = 0; i < cantidad; i++) {
    let grosor = 0;
    let radio = i * espacio;

    //---------------- calcular grosor --------------------------------------
    for (let j = 0; j < cantidad; j++) {
      let cantidadGrosor = map(i + j, 0, cantidad, 6, 0.1);
      if (cantidadGrosor > grosor) {
        grosor = cantidadGrosor;
      }
    }

    let x = map(i, 0, cantidad, mouseXlimited, 600);
    let y = map(i, 0, cantidad, mouseY, height / 2);

    strokeWeight(grosor);
    ellipse(x, y, radio * 2, radio * 2);
  }
}

//------- funcion retornable -----------------------------------------
function obtenerColorFondo(mouseX) {
  let azulOscuro = color(10, 30, 80);
  let rojoOscuro = color(80, 10, 10); 
  
  let transicion = map(mouseX, width / 2, width, 0, 1);
  transicion = constrain(transicion, 0, 1);

  return lerpColor(azulOscuro, rojoOscuro, transicion);
}

//-------- color del grosor ------------------------------------------
function obtenerColorCirculo(mouseX) {
  let azulClaro = color(100, 150, 255);
  let rojoClaro = color(255, 100, 100);

   let transicion = map(mouseX, width / 2, width, 0, 1);
  transicion = constrain(transicion, 0, 1); 

  return lerpColor(azulClaro, rojoClaro, transicion);
}

function setup() {
  createCanvas(800, 400);
  noFill();
}

function draw() {
  let colorFondo = obtenerColorFondo(mouseX);
  let colorCirculo = obtenerColorCirculo(mouseX);

  //--------- condicional del color----------------------------------
  if (keyIsPressed) {
    colorFondo = obtenerColorFondo(mouseX);
    colorCirculo = obtenerColorCirculo(mouseX);
  } else {
    colorFondo = color(150, 255, 150);
    colorCirculo = color(255, 0, 0);
  }

  //------ color de fondo y grosor -----------------------
  background(colorFondo);
  stroke(colorCirculo);
  image(img, 0, 0, width / 2, height);

  //-------- vairable para limitar el área ----------------------
  let mouseXlimited = constrain(mouseX, width / 2, width);

  let Centrox = 600;
  let Centroy = height / 2;

  //-------- condicional de mouse -----------------------------------------------------
  if (mouseIsPressed) {
    circulo(cantidad, espacio, mouseXlimited, mouseY);
  } else {
    circulo(cantidad, espacio, Centrox, Centroy);
  }
}
