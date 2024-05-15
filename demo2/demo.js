"use strict";
// Lớp hình tròn triển khai giao diện Shape
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
// Lớp hình vuông triển khai giao diện Shape
class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
    }
    calculateArea() {
        return Math.pow(this.sideLength, 2);
    }
}
// Sử dụng tính đa hình
let circle = new Circle(5);
console.log(circle.calculateArea()); // Output: ~78.54
let square = new Square(4);
console.log(square.calculateArea()); // Output: 16
