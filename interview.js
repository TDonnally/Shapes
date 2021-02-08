
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    get area(){
        return this.calcArea();
    }
    get perimiter(){
        return this.calcPerimiter();
    }
    calcArea(){
        return this.height*this.width;
    }
    calcPerimiter(){
        return 2*(this.height+this.width);
    }
}

class Triangle {
    constructor(base, height){
        this.base = base;
        this.height = height;
    }
    get area(){
        return this.calcArea();
    }
    get perimiter(){
        return this.calcPerimiter();
    }
    calcArea(){
        return .5*this.base*this.height;
    }
    calcPerimiter(){
        return 3*this.base;
    }
    
}
class Circle {
    constructor(radius){
        this.radius = radius;
    }
    get area(){
        return this.calcArea();
    }
    get circumference(){
        return this.calcCircumference();
    }
    calcArea(){
        return Math.PI*this.radius^2;
    }
    calcCircumference(){
        return this.radius*Math.PI*2;
    }
}

const square = new Rectangle(10,10);
const triangle = new Triangle(2,3);
const circle = new Circle(5);

console.log("The area of the square is: " + square.area);
console.log("The Perimiter of the square is: " + square.perimiter);
console.log("The area of the triangle is: "+ triangle.area);
console.log("The perimiter of the triangle is: "+ triangle.perimiter);
console.log("The area of the circle is: " + circle.area);
console.log("The circumference of the circle is: " + circle.circumference);
