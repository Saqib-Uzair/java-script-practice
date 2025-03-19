// Holds weak references to objects (collected when not used).

let obj = {name: 'Saqib'};
let map = new WeakMap();
map.set(obj, 'value');

console.log(map)