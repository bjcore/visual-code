let cnv;
let x;
let y;

function setup() {
  cnv = createCanvas(500, 700);
  cnv.mouseClicked(grow);
  background(229, 239, 193);
  ellipseMode(CENTER);
}

function draw() {}

function grow() {
  x = mouseX;
  y = mouseY;
  noFill();
  strokeWeight(5);
  stroke(2, 129, 116);

  if (x < cnv.width / 2 && y > cnv.height / 2) {
    curve(0, cnv.height, x, y, x, y - 100, cnv.width / 2, y - cnv.height / 2);
  } else if (x > cnv.width / 2 && y > cnv.height / 2) {
    curve(500, cnv.height, x, y, x, y - 100, cnv.width / 2, y - cnv.height / 2);
  } else if (x < cnv.width / 2 && y < cnv.height / 2) {
    curve(0, cnv.height / 2, x, y, x, y - 100, cnv.width / 2, 0);
  } else {
    curve(500, cnv.height / 2, x, y, x, y - 100, cnv.width / 2, 0);
  }
  for (let i = 0; i < 50; i = i + 10) {
    noStroke();
    fill(255, 100);
    ellipse(x, y - 100, 20 + i);
  }
}
