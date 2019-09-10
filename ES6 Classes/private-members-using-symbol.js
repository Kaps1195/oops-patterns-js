// Way to declare private methods in JS
const _radius = Symbol();
const _draw = Symbol();

class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    [_draw]() {
        console.log('draw');
    }
};

const c = new Circle(1);

// Can't access these methods/properties because they are private
c.draw();
console.log(c.radius);