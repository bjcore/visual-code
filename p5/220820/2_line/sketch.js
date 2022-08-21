function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  line(100, 100, 250, 100);
  line(250, 100, mouseX, mouseY);
  line(100, 100, mouseX, mouseY);
}
