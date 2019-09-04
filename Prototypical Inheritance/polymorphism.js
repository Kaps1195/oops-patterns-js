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
    console.log('duplicate circle');
}


function Square() {
    //
}


extend(Square, Shape);

Square.prototype.duplicate = function() {    
    console.log('duplicate square');
}

const shapes = [new Circle, new Square];


for(let shape of shapes) {
    shape.duplicate();
}
