function StopWatch() {
    let startingTime, endingTime, running, duration = 0;

    this.start = function() {
        if(running) {
            throw new Error('StopWatch has already started.');
        }

        running = true;

        startingTime = new Date();
        // start the timer
        console.log(startingTime);
    }

    this.stop = function() {

        if(!running) {
            throw new Error('StopWatch has not started.');
        }

        running = false;
        endingTime = new Date();
        // Display the timer in seconds 
        const seconds = (endingTime.getTime() - startingTime.getTime()) / 1000;
        duration = duration + seconds;
        console.log(duration);
    }


    this.reset = function() {
        startingTime = null;
        endingTime = null;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this,'duration', {
        get: function() { return duration; }
    })
}

const sw = new StopWatch();
//console.log(sw.duration);
//console.log(sw.start());
//console.log(sw.stop());