// Use filter() to create a new array with only the odd numbers from [1, 2, 3, 4, 5].

const numbers = [1,2,3,4,5];
const odd = numbers.filter(num=> num % 2!==0);
console.log(odd);