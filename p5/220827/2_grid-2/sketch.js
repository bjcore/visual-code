function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  line(250, 0, 250, 500);
  line(0, 250, 500, 250);

  const x = mouseX;
  const y = mouseY;

  if (x < 250 && y < 250) {
    fill(0);
    rect(0, 0, 250, 250);
  } else if (x > 250 && y < 250) {
    fill(0);
    rect(250, 0, 250, 250);
  } else if (x < 250 && y > 250) {
    fill(0);
    rect(0, 250, 250, 250);
  } else {
    fill(0);
    rect(250, 250, 250, 250);
  }
}
