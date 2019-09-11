// Way to declare private methods in JS
const _radius = new WeakMap();
const _draw = new WeakMap();
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius)
    }

    // Getter
    get radius() {
        return _radius.get(this);
    }

    // Setter
    set radius(value) {
        if(value <= 0) throw new Error('Invalid Radius Value')
        _radius.set(this, value);
    }
};

const c = new Circle(1);
console.log(c.radius); // 1