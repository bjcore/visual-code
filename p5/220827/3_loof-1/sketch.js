function setup() {
  createCanvas(500, 500);
  background(220);
}

function draw() {
  for (i = 0; i <= 500; i = i + 100) {
    line(i, 0, i, 500);
    line(0, i, 500, i);
    fill(i);
    rect(i, i, 100, 100);
    rect(i, 400 - i, 100, 100);
  }
}
