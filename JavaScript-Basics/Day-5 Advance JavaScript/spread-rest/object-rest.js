const user ={
    name: 'uzair',
    age: 25,
    country: 'pakistan',
}

const {name,...details} = user;
console.log(name);
console.log(details);