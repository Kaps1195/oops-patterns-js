function Shape() {
//
}

Shape.prototype.duplicate = function() {
    console.log('duplicate method of shape function');
}


function Circle(radius) {
    this.radius = radius;
}


Circle.prototype.draw = function() {
    console.log('draw method of circle function');
}

// The 'c' instance of Circle below can now have the Shape's duplicate() property
// Basically Circle contains the Shape Object's properties <= Prototypical(Parental) Inheritance
Circle.prototype = Object.create(Shape.prototype);






const s = new Shape();
s.duplicate();

const c = new Circle(1);
c.draw();
c.duplicate();
