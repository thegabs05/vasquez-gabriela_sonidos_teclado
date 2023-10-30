let sonidoSalto;

function preload() {
  soundFormats("wav", "mp3", "ogg");
  sonidoSalto = loadSound("sonidos/salto");
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(presionado);
}

function presionado() {
  sonidoSalto.play();
  circle(mouseX, mouseY, 20);
}

function draw() {}
