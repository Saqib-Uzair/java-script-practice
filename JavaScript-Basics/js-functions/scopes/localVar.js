// Declare a variable localVar inside a function and try to log it outside the function.


function printLocalVar(){
    const localVar = 'This is the local var';
    console.log(localVar);
}

printLocalVar();
console.log(localVar); // It will generate the reference error because of the variable is used inside the function