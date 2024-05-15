// Định nghĩa giao diện
interface Shape {
    calculateArea(): number;
}

// Lớp hình tròn triển khai giao diện Shape
class Circle implements Shape {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

// Lớp hình vuông triển khai giao diện Shape
class Square implements Shape {
    sideLength: number;
    constructor(sideLength: number) {
        this.sideLength = sideLength;
    }
    calculateArea(): number {
        return this.sideLength ** 2;
    }
}

// Sử dụng tính đa hình
let circle: Shape = new Circle(5);
console.log(circle.calculateArea()); // Output: ~78.54

let square: Shape = new Square(4);
console.log(square.calculateArea()); // Output: 16
