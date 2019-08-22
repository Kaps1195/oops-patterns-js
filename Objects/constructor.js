function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(5);

// new String(); can be '',"",``
// new Boolean(); can be true,false
// new Number(); can be 1,2,3 etc 
