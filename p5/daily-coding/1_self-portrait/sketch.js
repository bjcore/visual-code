function setup() {
  createCanvas(500, 500);
  background(220);
}

function draw() {
  let eye = map(mouseX, 0, 500, 240, 260);
  strokeWeight(4);
  triangle(250, 340, 110, 340, 200, 120);
  triangle(390, 340, 250, 340, 300, 120);
  ellipseMode(CENTER);
  ellipse(250, 220, 220, 230);
  fill(255);
  ellipse(150, 230, 30, 40);
  ellipse(350, 230, 30, 40);
  ellipse(250, 600, 470, 500);
  rectMode(CENTER);
  rect(250, 350, 70, 80);
  fill(255);
  ellipse(250, 225, 200, 225);
  fill(0);
  ellipse(eye - 40, 225, 10, 15);
  ellipse(eye + 40, 225, 10, 15);
  ellipseMode(RADIUS);
  arc(250, 265, 50, 50, 0, PI, CHORD);
  arc(250, 200, 97, 97, PI, 0, CHORD);
}
