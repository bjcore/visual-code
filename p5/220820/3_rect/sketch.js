function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(220);

  rectMode(CENTER);
  fill(200, 100, 100, 255);
  rect(100, 100, 50, 50);

  rectMode(CORNER);
  fill(100, 200, 100, 70);
  rect(100, 100, 50, 50);
}
