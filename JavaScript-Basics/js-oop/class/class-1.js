// Classes & Constructors

//     Create a Person class with a name and age property.
//     Add a greet() method to the class.
//     Create an instance and call the greet() method.


class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet=function(){
        console.log(`Hello this is ${this.name}, i am ${this.age} years old`)
    }
}

let obj = new Person("saqib",25);
obj.greet();
