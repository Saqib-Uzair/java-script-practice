// Write a factory function createMultiplier that takes a number and returns a function to multiply any number by that value.

function createMultiplier(){
    let num = 5;

    return function(){
        return num * num;
    }
}

const multiplication = createMultiplier();
console.log(multiplication());
console.log(multiplication());