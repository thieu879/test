"use strict";
// Lớp cha
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Âm thanh");
    }
}
// Lớp con kế thừa từ lớp cha
class Dog extends Animal {
    makeSound() {
        console.log("Gâu Gâu");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meo Meo");
    }
}
// Sử dụng tính đa hình
let myPet;
myPet = new Dog("Linh");
myPet.makeSound(); // Output: Gâu Gâu
myPet = new Cat("Chó");
myPet.makeSound(); // Output: Meo Meo
