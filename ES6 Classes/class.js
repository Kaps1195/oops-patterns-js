// function Circle() {
//     this.radius = radius;
    
//     this.draw = function() {
//         console.log('draw');
//     }
// }

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    draw() {
        console.log('draw');
    }
}

const c = new Circle(10);
console.log(c);