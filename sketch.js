//create a red circle of 100px in the middle of the canvas
//create a "body" for the circle, create  square under the circle and maybe make the canvas bigger if neeed be
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  noStroke();
  fill("red");
  circle(width / 2, height / 2, 100);
}
