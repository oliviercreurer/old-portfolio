class Blobbo {
  constructor() {
    // setup
    this.numPoints = 500
    this.time = 0.1
  }

  wave(num, amp, freq, speed) {
    return amp * sin(freq * TWO_PI * num / this.numPoints + this.time * speed)
  }

  draw1() {
    //noStroke()
    fill('#ffffff')
    // begin path
    beginShape()
    // create blob
    for (let num = 0 ; num < this.numPoints ; num = num + 1) {
      let angle = TWO_PI * num / this.numPoints
      let r = windowHeight * 0.50
        + this.wave(num, 10, 3, 1)
        + this.wave(num, 15, 7, 3)
        + this.wave(num, 5, 9, 0)
        + this.wave(num, 2, 13, -5)
      //
      let x = (windowWidth/2) + r * cos(angle)
      let y = (windowHeight/2) + r * sin(angle)
      vertex(x,y)
    }
    endShape(CLOSE)
    this.time = this.time + 0.005
  }

  draw2() {
    //noStroke()
    fill('#3793FF')
    // begin path
    beginShape()
    // create blob
    for (let num = 0 ; num < this.numPoints ; num = num + 1) {
      let angle = TWO_PI * num / this.numPoints
      let r = windowHeight * 0.8
        + this.wave(num, 14, 7, 1)
        + this.wave(num, 7, 3, 3)
        + this.wave(num, 5, 4, 0)
        + this.wave(num, 3, 17, -5)
      //
      let x = (windowWidth/2) + r * cos(angle)
      let y = (windowHeight/2) + r * sin(angle)

      vertex(x,y)
    }
    endShape(CLOSE)
    this.time = this.time + 0.005
  }

  draw3() {
    //noStroke()
    // colorMode(HSB, 100)
    fill('#FFB5A5')

    // begin path
    beginShape()
    // create blob
    for (let num = 0 ; num < this.numPoints ; num = num + 1) {
      let angle = TWO_PI * num / this.numPoints

      let r = windowHeight * 0.55
        + this.wave(num, 10, 3, 1)
        + this.wave(num, 12, 8, 3)
        + this.wave(num, 5, 4, 0)
        + this.wave(num, 2, 16, -3)
      //
      let x = (windowWidth/2) + r * cos(angle)
      let y = (windowHeight/2) + r * sin(angle)

      vertex(x,y)
    }
    endShape(CLOSE)


    this.time = this.time + 0.007
  }
}
