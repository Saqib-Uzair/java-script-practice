// Use spread and rest operators to copy and modify objects/arrays.

const fruits =['apple', 'banana'];
const update_fruits = [...fruits,'mango', 'strawberry', 'cherry'];
console.log(update_fruits);


const ids =[1,2,3,4,5,6,7,8,9,0];
const [first,second,...rest] = ids;
console.log(first);
console.log(second);
console.log(rest);