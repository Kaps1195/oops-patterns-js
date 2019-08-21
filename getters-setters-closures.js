function Circle(radius) {

    this.radius = radius;

    let defaultLocation = { x: 1, y: 1 };

    this.getDefaultLocation = function() {
        // Inside this function, we can access the defaultLocation Object
        
        let x,y;
        // closure of this getDefaultLocation function refers to the variables(x,y) defined 
        // in this function + the variables defined in the parent(Circle) function
        return defaultLocation;
    }

    this.draw = function() {
        computeOptimumLocation(0.1);
        console.log('draw');
    }
                                // defaultLocation here is a property with getter and setter
    Object.defineProperty(this, 'defaultLocation', {
        // getter is meant for read-only
        get: function() {
            // this defaultLocation Object is part of the closure of the inner function
            return defaultLocation;
        },
        // setting the value
        set: function(value) {
            if(!value.x && !value.y) 
                throw new Error('Invalid Location.');

           defaultLocation = value; 
        }
    })
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();