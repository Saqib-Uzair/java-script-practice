// Create a closure where an inner function accesses a variable from its outer function.

function outerFunction(){
    const outerVar = "Outer Variable";

    function innerFunction(){
        console.log(outerVar);
    }
    return 
    innerFunction;
}

const closure = outerFunction();
closure();