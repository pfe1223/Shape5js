class Circle {
  constructor() {
    this.x = 200;
    this.y = 200;
    this.size = 10;
    this.color = 'darkgray';
    this.spin = 0;
  }

  //draw the circle to the canvas
  show() {
    noStroke()
    angleMode(DEGREES);
    push();
    translate(this.x, this.y);
    rotate(this.spin);
    fill(this.color)
    ellipse(0, 0, this.size*2);
    pop();
  }
}

class Square {
  constructor() {
  	this.x = 200;
  	this.y = 200;
  	this.size = 20;
  	this.color = 'darkgray';
    this.spin = 0;
  }

  show() {
    noStroke();
    rectMode(CENTER);
    angleMode(DEGREES);
    push();
    translate(this.x, this.y);
    rotate(this.spin);
    fill(this.color);
    rect(0, 0, this.size, this.size);
    pop();
  }
}

class Triangle {
  constructor() {
    this.size = 20;
    this.x = 200;
    this.y = 200;
    this.color = 'darkgray';
    this.spin = 0;
  }

  show() {
    let x1 = this.x - (this.size/2);
    let x2 = this.x;
    let x3 = this.x + (this.size/2);
    let y1 = this.y + (this.size/2);
    let y2 = this.y - (this.size/2);
    let y3 = this.y + (this.size/2);

    // console.log(x1, x2, x3, y1, y2, y3);

    fill(this.color);
    noStroke();
    angleMode(DEGREES);
    push();
    translate(this.x, this.y);
    rotate(this.spin);
    beginShape();
    vertex(x1 - this.x, y1 - this.y);
    vertex(x2 - this.x, y2 - this.y);
    vertex(x3 - this.x, y3 - this.y);
    endShape(CLOSE);
    pop();
  }
}

class Polygon {
  constructor() {
    this.x = 200;
    this.y = 200;
    this.size = 20;
    this.sides = 6;
    this.color = 'darkgray';
    this.spin = 0;
  }

  show() {
    noStroke();
    fill(this.color);
    angleMode(DEGREES);
    push();
    translate(this.x, this.y);
    rotate(this.spin);
    beginShape();
    for(let i = 1; i < this.sides + 1; i++) {
      let x = cos(360/this.sides * i)*this.size;
      let y = sin(360/this.sides * i)*this.size;
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }
}

class Oval {
  constructor() {
    this.x = 200;
  	this.y = 200;
  	this.width = 20;
    this.height = 40;
  	this.color = 'darkgray';
    this.spin = 0;
  }

  show() {
    noStroke()
    angleMode(DEGREES);
    push();
    translate(this.x, this.y);
    rotate(this.spin);
    fill(this.color)
    ellipse(0, 0, this.width, this.height);
    pop();
  }
}

class Rectangle {
  constructor() {
    this.x = 200;
  	this.y = 200;
  	this.width = 20;
    this.height = 40;
  	this.color = 'darkgray';
    this.spin = 0;
  }

  show() {
    noStroke();
    rectMode(CENTER);
    angleMode(DEGREES);
    push();
    translate(this.x, this.y);
    rotate(this.spin);
    fill(this.color)
    rect(0, 0, this.width, this.height);
    pop();
  }
}

class Semicircle {
  constructor() {
    this.x = 200;
  	this.y = 200;
  	this.size = 20;
  	this.color = 'darkgray';
    this.degrees = 90;
    this.spin = 0;
  }

  show() {
    noStroke()
    angleMode(DEGREES);
    push();
    translate(this.x, this.y);
    rotate(this.spin);
    fill(this.color)
    if(this.degrees >= 0) {
    	arc(0, 0, this.size, this.size, 270, 270 + this.degrees);
    } else if(this.degrees < 0) {
      arc(0, 0, this.size, this.size, 270 + this.degrees, 270);
    }
    pop();
  }
}

class Rhombus {
  constructor() {
    this.x = 200;
  	this.y = 200;
  	this.size = 40;
    this.angle = 50;
  	this.color = 'darkgray';
    this.spin = 0;
  }

  show() {
    let a1 = (180 - this.angle)/2;
    let a2 = (180 - (180 - this.angle))/2;
    let x1 = 0;
    let y1 = 0;
    let x2 = cos(a1) * this.size;
    let y2 = sin(a1) * this.size;
    let x3 = cos(90 + a2) * this.size + x2;
    let y3 = sin(90 + a2) * this.size + y2;
    let x4 = cos(180 + a1) * this.size + x3;
    let y4 = sin(180 + a1) * this.size + y3;
    let middleY = dist(x1, y1, x3, y3)/2;
    noStroke();
    angleMode(DEGREES);
    push();
    translate(this.x, this.y - middleY);
    rotate(this.spin);
    fill(this.color)
    beginShape();
    vertex(x1, y1);
    vertex(x2, y2);
    vertex(x3, y3);
    vertex(x4, y4);
    endShape(CLOSE);
    pop();
  }
}

class RightTriangle {
  constructor() {
    this.x = 200;
  	this.y = 200;
  	this.width = 40;
    this.height = 60;
  	this.color = 'darkgray';
    this.spin = 0;
  }

  show() {
    noStroke();
    angleMode(DEGREES);
    push();
    translate(this.x, this.y);
    rotate(this.spin);
    fill(this.color)
    beginShape();
    vertex(0, 0);
    vertex(this.width, 0);
    vertex(0, -this.height);
    endShape(CLOSE)
    pop();
  }
}

class IsoscelesTriangle {
  constructor() {
    this.x = 200;
  	this.y = 200;
  	this.length = 60;
    this.width = 30;
  	this.color = 'darkgray';
    this.spin = 0;
  }

  show() {
    let a = this.width/2;
    let c = this.length;
    let b = sqrt(sq(c) - sq(a));
    noStroke();
    angleMode(DEGREES);
    push();
    translate(this.x, this.y);
    rotate(this.spin);
    fill(this.color)
    beginShape();
    vertex(-a, 0);
    vertex(a, 0);
    vertex(0, -b);
    endShape(CLOSE)
    pop();
  }
}

class Stripe {
  constructor() {
    this.x = 200;
    this.y = 200;
    this.length = 20;
    this.width = 5;
    this.color = 'darkgray';
    this.spin = 0;
  }

  show() {
    stroke(this.color);
    strokeWeight(this.width);
    angleMode(DEGREES);
    push();
    translate(this.x, this.y);
    let x = cos(this.spin)*this.length;
    let y = sin(this.spin)*this.length;
    line(0, 0, x, y);
    pop();
  }
}
