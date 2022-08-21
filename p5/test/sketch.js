function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(240);

  stroke(121, 214, 109);
  strokeWeight(4);
  noFill();
  line(250, 440, 330, 100);
  strokeWeight(3);
  bezier(282, 304, 323, 207, 340, 205, 363, 252);

  strokeWeight(1);
  stroke(104, 168, 59);
  line(240, 440, 180, 65);

  noFill();
  stroke(118, 219, 127);
  bezier(220, 440, 180, 150, 330, 100, 400, 180);

  strokeWeight(2);
  stroke(121, 214, 109);
  bezier(280, 440, 180, 60, 100, 300, 50, 300);

  strokeWeight(3);
  stroke(118, 219, 127);
  bezier(205, 440, 172, 191, 115, 130, 88, 192);
  strokeWeight(1.5);
  angleMode(DEGREES);
  arc(150, 355, 82, 82, 160, 360);
  line(240, 440, 285, 130);

  fill(255, 158, 253);
  noStroke();
  ellipse(180, 66, 20, 20);

  fill(126, 224, 108);
  noStroke();
  ellipse(283, 145, 15, 15);
  ellipse(284, 135, 15, 15);
  ellipse(285, 125, 15, 15);

  strokeWeight(20);
  stroke(202, 227, 79);
  line(330, 100, 312, 180);

  //flower using Polar Ellipses
  angleMode(RADIANS);
  setCenter(180, 66);
  polarEllipses(6, 3, 3, 40);

  //Ground
  setCenter(-180, -66);
  rectMode(CENTER);
  noStroke();
  fill(146, 240, 152);
  rect(250, 250, 100, 100);

  /*fill(0);
  strokeWeight(0);
  text("(" + mouseX + ", " + mouseY + ")", mouseX + 10, mouseY + 10);*/
}
