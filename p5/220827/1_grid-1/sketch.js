function setup() {
  createCanvas(500, 500);
  background(220);
}

function draw() {
  line(0, 100, 500, 100);
  line(0, 200, 500, 200);
  line(0, 300, 500, 300);
  line(0, 400, 500, 400);
  line(100, 0, 100, 500);
  line(200, 0, 200, 500);
  line(300, 0, 300, 500);
  line(400, 0, 400, 500);

  let x = mouseX;
  let y = mouseY;
  if (x > 200 && y > 200 && x < 400 && y < 400) {
    fill(0);
  } else {
    fill(255);
  }
  rect(200, 200, 100, 100);
}
