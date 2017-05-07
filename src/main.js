import {operations} from './arithmetic.js';

let greetings = "Hi";
console.log(`-- ${greetings} Jay`);

let result = operations.add(1,1);
console.log(result);

result = operations.subtract(1,1);
console.log(result);

var included = "abcde".includes("cd");
console.log(included);

let promise = new Promise(function(resolve, reject) {

});
