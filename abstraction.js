function Circle(radius) {

    this.radius = radius;

    let defaultLocation = { x: 1, y: 1 };

    let computeOptimumLocation = function(someValue) {
        // ...do something
    }

    this.draw = function() {
        //let x,y;

        //defaultLocation
        //this.radius;
        computeOptimumLocation(0.1);
        console.log('draw');
    }
}

const circle = new Circle(10);

circle.draw();