function extend(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function Shape() {
    //
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle() {
    //
}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
    // Calling Shape's duplicate method inside Circle's duplicate function
    // i.e. reimplementing a method in the child object
    Shape.prototype.duplicate.call(this);
    
    console.log('duplicate circle');
}

const c = new Circle();
c.duplicate();