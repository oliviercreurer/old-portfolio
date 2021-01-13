let blob

function preload() {
  textureimg = loadImage('https://cdn.glitch.com/9cd5970a-a622-40ca-9331-cc4d2e08d1e3%2Fimagehere-detail.JPG?v=1608230607302')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  blob = new Blobbo()
}

function draw() {
  background('#FFEED4')
  blob.draw2()
  blob.draw3()
  blob.draw1()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
