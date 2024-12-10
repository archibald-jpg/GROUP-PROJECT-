//create a red circle of 100px in the middle of the canvas
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  noStroke();
  fill("red");
  circle(width / 2, height / 2, 100);
}
