// Lớp cha
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeSound(): void {
        console.log("Âm thanh");
    }
}

// Lớp con kế thừa từ lớp cha
class Dog extends Animal {
    makeSound(): void {
        console.log("Gâu Gâu");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meo Meo");
    }
}

// Sử dụng tính đa hình
let myPet: Animal;

myPet = new Dog("Linh");
myPet.makeSound(); // Output: Gâu Gâu

myPet = new Cat("Chó");
myPet.makeSound(); // Output: Meo Meo
