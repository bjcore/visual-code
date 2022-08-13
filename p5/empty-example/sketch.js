function setup() {
  createCanvas(500,500);
  background(220);
}

function draw() {
  strokeWeight(4);
  triangle(400,400,100,400,250,125);
  fill(255);
  ellipse(250,500+100,500,500);
  rectMode(CENTER);
  rect(250,350,50,75);
  fill(255);
  ellipse(250,225,200,225);
  fill(0);
  ellipse(200+10,220,10,10);
  ellipse(300-10,220,10,10);
  arc(250, 250, 270, 270, 0, PI + QUARTER_PI, CHORD);
}