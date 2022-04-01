import React from 'react'
import Sketch from 'react-p5'

let x, y, width, height;

//generate circles




const Drawing = (props) => {
    height = 500;
    width = 400;
    x = width / 2;
    y = height / 1.5;

    const setup = (p5, canvasParentRef) => {
    p5.createCanvas(height, width).parent(canvasParentRef)
  }
  
    const draw = (p5) => {
        
        const drawRandomCircles = () => {
            //generate random # of circles between 1 and 25
            //ramdomize their positions and properties
            //give them random movement paths
            p5.ellipse(x-50, y, 150)
            p5.ellipse(x, y, 100)
        }
        
        
        p5.background(255, 130, 20)
        

        
    // Draw a line using the local variable "a"
        //p5.line(x, y, x + 50, y + 50);
        drawRandomCircles();
    
        // Jiggling randomly on the horizontal axis
        x = x + p5.random(-1, 1);
        // Moving up at a constant speed
        y = y - 1;
        
        // Reset to the bottom
        if (y < 0) {
            y = height;
        }
        // Make a call to the custom function drawAnotherLine()
        
        

    }

  
  return <Sketch setup={setup} draw={draw} />
}



export default Drawing;