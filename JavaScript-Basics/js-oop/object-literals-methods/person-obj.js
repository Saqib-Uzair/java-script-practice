// Exercise: Create an Object Literal

// Create an object literal named person with the following properties:

//     name: A string representing the person's name.

//     age: A number representing the person's age.

//     greet: A method that logs a greeting message like: "Hello, my name is [name] and I am [age] years old."

const person={
    name: 'Saqib',
    age: 25,
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    },

    haveBirthday(){
        this.age++;
        console.log(`Happy Birthday! I am now ${this.age} years old`)
    }
}

person.greet();
person.haveBirthday();