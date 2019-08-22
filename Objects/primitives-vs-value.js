// primitive types => Number, string, boolean, symbol, undefined, null
// reference types => Object, function, array

// let num = 10;


/////////// PRIMITIVE EXAMPLE ////////////////
// function increment(num) {
//     num++;
// }

// increment(10);
// console.log(num);


/////////// REFERENCE EXAMPLE ////////////////


let obj = { value: 10 };

function increment(object) {
    object.value++;
}

increment(obj);
console.log(obj);