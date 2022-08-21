let cnv;
let x;
let y;

function setup() {
  cnv = createCanvas(500, 500);
  cnv.mouseClicked(grow);
  background(229, 239, 193);
}

function draw() {}

function grow() {
  x = mouseX;
  y = mouseY;
  //높이 정하기
  let rnd = random(50, cnv.height / 2);
  //(x,y), (x,y-1), (x,y-2)..
  for (let i = 0; i < rnd; i++) {
    strokeWeight(5);
    stroke(2, 129, 116, 5);
    line(x, y, x, y - i);
  }
}
