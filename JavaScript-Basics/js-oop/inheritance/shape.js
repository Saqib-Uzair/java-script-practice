class Shape {
    calculateArea(){}
}

class Circle extends Shape {
    
    constructor(radius){
        super();
        this.radius = radius;
    }
    calculateArea(){
        console.log(3.14*this.radius**2);
    }
}

class Rectangle extends Shape {
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(){
        console.log(this.width*this.height);
    }
}

const circle = new Circle(2);
const rectangle = new Rectangle(5,5);
circle.calculateArea();
rectangle.calculateArea();