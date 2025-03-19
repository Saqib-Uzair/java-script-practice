function createPerson(name,age){
    return {
        name,
        age,
        greet(){
            console.log(`Hello my name is ${this.name}`);
        }
    };
}

const person = createPerson('saqib', 25);
person.greet();