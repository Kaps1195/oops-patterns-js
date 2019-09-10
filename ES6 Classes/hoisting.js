// sayHello(); Perfectly valid to call here
// sayGoodBye(); gives an error beacuse function expressions are not hoisted
// console.log(number); gives an error beacuse variables are not hoisted
function sayHello() {}

const sayGoodBye = function() {};
const number = 1;