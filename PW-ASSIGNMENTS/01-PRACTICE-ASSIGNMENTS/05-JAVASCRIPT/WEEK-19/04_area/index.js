class Shape{
    constructor(val1, val2, val3, val4, val5){
        this.radius = val1
        this.length = val2
        this.breadth = val3
        this.height = val4
        this.side = val5
    }

    calculateArea(){
        // Area calculation for generic shape
    }
    
}

class Circle extends Shape{
    constructor(val1){
        super(val1)
    }

    calculateArea(){
        const area = Math.PI * this.radius * this.radius
        return area
    }

    calculatePerimeter(){
        const perimeter = 2 * Math.PI * this.radius
        return perimeter
    }
}

class Rectangle extends Shape{
    constructor(val2, val3){
        super(undefined, val2, val3) // explicitly setting the value of radius as undefined so that the values are transferred to length and breadth
    }

    calculateArea(){
        const area = this.length * this.breadth
        return area
    }

    calculatePerimeter(){
        const perimeter = 2 * (this.length + this.breadth)
        return perimeter
    }
}

class Triangle extends Shape{
    constructor(val3, val4, val5){
        super(undefined, undefined, val3, val4, val5) // explicitly setting the value of radius and length as undefined so that the values are transferred to side, breadth and height
    }

    calculateArea(){
        const area = 0.5 * this.breadth * this.height
        return area
    }

    calculatePerimeter(){
        const perimeter = this.breadth + this.side + this.side
        return perimeter
    }
}

const circle = new Circle(5)
console.log(`Circle --> Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`);

const rectangle = new Rectangle(4, 6)
console.log(`Rectangle --> Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`);

const triangle = new Triangle(8, 6, 5)
console.log(`Traingle --> Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`);