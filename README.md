# Shape5.js
Shape5.js is a wrapper for [P5.js](https://www.p5js.org). You can try out the Shape5.js library [here](https://editor.p5js.org/patrick/sketches/ByAcAtJ6X). The idea behind is project is to reduce the learning curve for making static art with P5.

## Syntax
The pattern for creating a shape is declare a variable, instantiate a shape, modify the shape, draw the shape.

### Shape Variable
The shape variable can be global or local to the `draw` function. Global variables may help to reinforce more traditional coding practices. Using the global variable method is not necessary. It may prove to be more confusing for first-time coders since the shape must be instatiated in the `setup` function. Shape variables can also be declared and instatiated in a single line of code directly in the `draw` function. 

### Instantiating the Shape
If you are using the global variable method, then the shapes must be instantiated in the `setup` function.

### Modifying the Shape

### Drawing the Shape

### Example Shape

~~~javascript
let box;

function setup() {
  createCanvas(400, 400);
  box = new Square();
}

function draw() {
  background('white');
  
  box.x = 150;
  box.y = 300;
  box.size = 75;
  box.color = 'papayawhip';
  box.spin = 45;
  box.show();
}
~~~

## Shapes & P5 Equivalents
The following shapes are available in Shape5.js:

* Circle => `ellipse` command in P5 with same width and height 
* Square => `rect` command in p5 with same width and height
* Triangle => creates an equillateral triangle with the `beginShape` and `endShape` commands
* Polygon => creates a hexagon by default; uses the `beginShape` and `endShape` commands
* Oval => `ellipse` command in P5
* Rectangle => `rect` command in P5
* Semicircle => `arc` command in P5
* Rhombus => creates a rhombus using the `beginShape` and `endShapes` commands
* RightTriangle => creates a right triangle with the `beginShape` and `endShape` commands
* IsoscelesTriangle => creates an isosceles triangle with the `beginShape` and `endShape` commands
* Stripe => `line` command in P5

## Attributes
