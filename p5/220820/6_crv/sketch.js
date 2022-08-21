function setup() {
  createCanvas(500, 500);
  noFill();
}

function draw() {
  background(220);
  strokeWeight(5);
  stroke("red");
  curve(0, 0, 100, 100, 100, 250, 400, 250);

  stroke("black");
  curve(0, 0, 100, 250, 400, 250, 500, 250);

  stroke("blue");
  curve(0, 0, 400, 250, 100, 300, 0, 0);

  //text(mouseX + "," + mouseY, mouseX - 50, mouseY - 50);
}
