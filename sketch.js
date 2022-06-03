let imagen;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(0);
}

function draw() {
  stroke(cos(frameCount*0.05)*255,sin(frameCount*0.01)*255,sin(frameCount*-0.03)*255);
  strokeWeight(15);
  line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX);

  // pushMatrix();
  // translate(width * .5, height * .5);
  // scale(1.75);
  // rotate(frameCount * .01);
  // tint(204, 24);
 
  imageMode(CENTER)
   //scale(1.0005);
   image(get(), windowWidth/2,windowHeight/2,windowWidth*1.001,windowHeight*1.001);
  // popMatrix();
}