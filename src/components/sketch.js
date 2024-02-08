
import React from 'react';
import Sketch from 'react-p5';

function P5Sketch() {
    let theta = 0.0;
    let yvalues =[];
    let maxwaves = 4;
    let amplitude = new Array(4);
    let dx = new Array(4);
    let w;
    let xspacing = 12;
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(1561, 200).parent(canvasParentRef)
        
        p5.frameRate(30);
        p5.colorMode(p5.RGB, 255, 255, 255, 100);
        w = p5.width + 16;
        

        for (let i = 0; i < maxwaves; i++) {
            amplitude[i] = p5.random(10, 30);
            let period = p5.random(100, 300); // Num pixels before wave repeats
            dx[i] = (p5.TWO_PI / period) * xspacing;
        }

        yvalues = new Array(p5.floor(w / xspacing));
    }

    const draw = (p5) => {
        p5.background("#f4f0dd");

        theta += 0.02;

  // Set all height values to zero
        for (let i = 0; i < yvalues.length; i++) {
            yvalues[i] = 0;
        }

        // Accumulate wave height values
        for (let j = 0; j < maxwaves; j++) {
            let x = theta;
            for (let i = 0; i < yvalues.length; i++) {
            // Every other wave is cosine instead of sine
            if (j % 2 == 0) yvalues[i] += p5.sin(x) * amplitude[j];
            else yvalues[i] += p5.cos(x) * amplitude[j];
            x += dx[j];
            }
        }

        p5.noStroke();
        p5.fill(25, 90);
        p5.ellipseMode(p5.CENTER);
        for (let x = 0; x < yvalues.length; x++) {
            p5.ellipse(x * xspacing, p5.width / 2 + yvalues[x]-700, 18, 18);
        }
   
    }

    return (
        <Sketch setup={setup} draw={draw} />
    )
}

export default P5Sketch;