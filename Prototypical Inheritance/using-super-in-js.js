function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate method');
}


function Circle(radius, color) {
    // In this scenario, we want to use shape's color property inside Circle function
    // and set it with Circle c's object
    // This is the way to call super in js
    Shape.call(this, color);

    this.radius = radius;
}


Circle.prototype.draw = function () {
    console.log('draw');
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const s = new Shape();
const c = new Circle(10, 'red');

console.log(c.color); // red