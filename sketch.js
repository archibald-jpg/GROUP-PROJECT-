//create a red circle of 100px in the middle of the canvas
//create a "body" for the circle, create  square under the circle and maybe make the canvas bigger if neeed be
// bethany is cool
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  noStroke();
  fill("red");
  circle(width / 2, height / 2, 100);

  noStroke();
  fill("blue");
  circle(width / 4, height / 4, 300);

  noStroke();
  fill("yellow");
  rect(100, 100, 100);

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < width; j++) {
      circle(5 + 1 * 10, 5 + j * 12, noise(i, j, frameCount / 4) * 10);
    }
  }
}
