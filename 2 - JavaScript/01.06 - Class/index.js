// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//         this.rectangleArea = this.width * this.height;
//     }

//     getArea() {
//         return this.width * this.height;
//     };

//     getDiagonal() {
//         return (Math.sqrt((this.width * this.width) + (this.height * this.height)));
//     }
//     isBigger(otherRectangle) {
//         if (this.rectangleArea > otherRectangle.getArea()) {
//             return true;
//         }
//         return false;
//     }

//     isSmaller(otherRectangle) {
//         if (this.rectangleArea < otherRectangle.rectangleArea) {
//             return true;
//         }
//         return false;
//     }
// }

// let r1 = new Rectangle(10, 15);
// let r2 = new Rectangle(1, 5);

// console.log(r1.getArea(r2))
// console.log(r1.isBigger(r2));
// // console.log(r1.isSmaller(r2));
// // console.log(r1.getArea());
// // console.log(r1.getDiagonal());
// // console.log(r2.getArea());


class Animal {
    constructor(age, name, predator) {
        this.age = age;
        this.name = name;
        this.predator = predator;
    }

    makeNoise() {
        console.log("this animal make noise");
    }

    getAge() {
        return this.age;
    }
}


let a = new Animal(10, "Mishmish", false)
// console.log(a);
// a.getAge();
// console.log(a.getAge());

class Dog extends Animal {
    constructor(age, name, predator, furcolor) {
        super(age, name, predator);
        this.furcolor = furcolor;
    }

    makeNoise() {
        console.log("Woof");
    }
}
let d = new Dog(3, "Snow", false, "white");
// console.log(d);
// d.makeNoise();
// console.log(d.getAge());
// d.makeNoise();

console.log(d)

class Cat extends Animal {
    constructor(age, name, predator, color) {
        super(age, name, predator);
        this.color = color;
    }
    makeNoise() {
        console.log("Meow");
    }
}

let c = new Cat(5, "Mizi", true, "Gray")
// console.log(c);
// c.makeNoise();