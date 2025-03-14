class Per {
    #name; // Private field
    #age;  // Private field

    constructor(name, age) {
        this.#name = name; // Initialize private field
        this.#age = age;   // Initialize private field
    }

    // Getter method to access the private name
    get getDetails() {
        return `Name:${this.#name} and age:${this.#age}`; // Return the private name
    }
}

const obj1 = new Per("saqib", 25);
console.log(obj1.getDetails); // Output: saqib