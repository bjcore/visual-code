function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(220);
  strokeWeight(3);
  stroke(100);

  beginShape();
  vertex(250, 100);
  vertex(350, 200);
  vertex(250, 200);
  endShape();

  beginShape();
  vertex(250, 400);
  vertex(250, 100);
  endShape();

  beginShape();
  vertex(100, 250);
  vertex(400, 250);
  vertex(250, 400);
  vertex(100, 250);
  endShape();

  /*strokeWeight();
  text(mouseX + "," + mouseY, mouseX - 50, mouseY - 50);*/
}
