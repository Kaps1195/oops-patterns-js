function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate method');
}


function Circle(radius, color) {
    Shape.call(this, color);

    this.radius = radius;
}


Circle.prototype.draw = function () {
    console.log('draw');
}

function extend(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
// INSTEAD WE USE
extend(Circle,Shape);


const s = new Shape();
const c = new Circle(10, 'red');

console.log(c.color); // red
console.log(c.duplicate()); //duplicate method