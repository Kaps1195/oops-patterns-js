function Shape() {
    //
}

Shape.prototype.duplicate = function () {
    console.log('duplicate method');
}


function Circle(radius) {
    this.radius = radius;
}


Circle.prototype.draw = function () {
    console.log('draw');
}

Circle.prototype = Object.create(Shape.prototype);

// Whenever you reset the prototype, in this case circle's prototype becomes shape from above,
// one must also reset the constructor of it
Circle.prototype.constructor = Circle;

const c = new Circle(10);
console.log(c.radius);