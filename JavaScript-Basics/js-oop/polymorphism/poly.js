class Shape {
    draw(){
        console.log('Shape Drawn');
    }
}

class Circle extends Shape {
    draw(){
        console.log('Circle Drawn');
    }
}

class Square extends Shape {
    draw(){
        console.log('Square Drawn');
    }
}


const shape = new Shape();
const circle = new Circle();
const square = new Square();
shape.draw();
circle.draw();
square.draw();