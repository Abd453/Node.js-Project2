const _ = require('lodash');

const numbers = [10, 45, 2, 99, 34, 76];
const max = _.max(numbers);
const min = _.min(numbers);

console.log(`Maximum number is: ${max}`);
console.log(`Minimum number is: ${min}`);
