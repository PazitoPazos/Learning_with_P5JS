// Author: PazitoPazos
// Date: 25/02/2022

// --- Tutorial ---
// -- https://www.youtube.com/watch?v=Qf4dIN99e2w
// - What is Perlin Noise?
// -- https://www.youtube.com/watch?v=YcdldZ1E9gU
// - Difference between random() and noise() -> random(min [optional], max) VS noise(smoothness)
// -- https://www.youtube.com/watch?v=y7sgcFhk6ZM
// - Graphing 1D Perlin Noise
// -- https://www.youtube.com/watch?v=ikwNrFvnL3g
// - 2D Noise
// -- https://www.youtube.com/watch?v=D1BBj2VaBl4
// - noiseDetail(smoothness, impact_over_last_value)


// -- Variables --
// var xoff = 0;
// var xoff2 = 10000;
// var yoff = 0;
var inc = 0.1;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
}

function draw() {

  // noiseDetail() -> Controls the behaviour of Perlin Noise
  noiseDetail(4, 0.5); // Default (I think)

  // --- 2D Noise ---
  var yoff = 0;

  loadPixels();

  for (var x = 0; x < width; x++) {
    var xoff = 0;
    for (var y = 0; y < height; y++) {
      var index = (x + y * width) * 4;
      var r = noise(xoff, yoff) * 255;
      pixels[index+0] = r;
      pixels[index+1] = r;
      pixels[index+2] = r;
      pixels[index+3] = 255;

      xoff += inc;
    }
    yoff += inc;
  }

  updatePixels();

  noLoop(); // Stop looping

  // --- Prints a moving circle ---
  // -- Random --
  // var x = random(width);

  // -- Noise --
  // var x = map(noise(xoff), 0, 1, 0, width); // Maps numbers from 0 to width into 0 to 1 
  // var y = map(noise(xoff2), 0, 1, 0, height); // Moves around the square
  // var y = map(noise(yoff), 0, 1, 0, height); // Moves diagonal

  // -- Offset --
  // xoff += 0.01;
  // xoff2 += 0.01; // Moves around the square

  // yoff += 0.01; // Moves diagonal

  // -- Circle --
  // ellipse(x, y, 24, 24);

    // --- 1D Graph comparing random() vs noise() ---
    // stroke(255);
    // noFill();
    // beginShape();
    // var xoff = start;
    // for (var x = 0; x < width; x++) {
    //   stroke(255);
    //   var n = map(noise(xoff), 0, 1, -50, 50); // Swap -50, 50 for 0, height ->
    //   var s = map(sin(xoff), -1, 1, 0, height); // -> To do a wave with a lot of noise
    //   var y = s + n; // Sinusoidal wave with noise
      
      // var y = random(height);
      // var y = noise(xoff)*height; // Similar to a terrain generator in 1D
      // var y = height / 2 + sin(xoff) * height / 2; // Sinusoidal wave
  
    //   vertex(x, y);
      
    //   xoff += inc;
    // }
    // endShape();
  
    // start += inc;
  
    // noLoop(); // Stop looping
}

