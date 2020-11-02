var h, m, s, hAngle, mAngle, sAngle;

function setup() {
  var canvas = createCanvas(450, 450);
}

function draw() {
  background("black");

  translate(200, 200)
  rotate(-90);

  h = hour();
  m = minute();
  s = second();

  fill("black");

  stroke("red");
  strokeWeight(8);
  sAngle = map(s, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, sAngle);

  stroke("#29B518");
  strokeWeight(8);
  mAngle = map(m, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, mAngle);

  stroke("Blue");
  strokeWeight(8);
  hAngle = map(h % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hAngle);

  push();
  rotate(sAngle);
  stroke("Red");
  strokeWeight(8);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mAngle);
  stroke("#29B518");
  strokeWeight(8);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hAngle);
  stroke("Blue");
  strokeWeight(8);
  line(0, 0, 50, 0);
  pop();

  stroke("White");
  strokeWeight(8);
  line(0, 0, 0, 0);

  drawSprites();
}