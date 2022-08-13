function setup() {
  createCanvas(500, 500);
  background(220);
}

function draw() {
  strokeWeight(4);
  triangle(250, 350, 100, 350, 200, 150);
  triangle(400, 350, 250, 350, 300, 150);
  fill(255);
  ellipseMode(CENTER);
  ellipse(250, 600, 500, 500);
  rectMode(CENTER);
  rect(250, 350, 50, 75);
  fill(255);
  ellipse(250, 225, 200, 225);
  fill(0);
  ellipse(210, 220, 10, 10);
  ellipse(290, 220, 10, 10);
  ellipseMode(RADIUS);
  arc(250, 255, 50, 50, 0, PI, CHORD);
}
