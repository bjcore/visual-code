function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(255);
  fill(200);
  ellipse(300, 300, 300);
  fill(100);
  arc(375, 300, 150, 150, PI, TWO_PI);
  arc(300 - 75, 300, 150, 150, TWO_PI, PI);

  text("(" + mouseX + "," + mouseY + ")", mouseX - 100, mouseY - 100);
}
