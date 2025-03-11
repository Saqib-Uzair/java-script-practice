// Hands-on Practice: Build a function that generates unique IDs using closures


function outer(){

    let id = 0;

    return function(){
        id++;
        return id;
    };
}

const unique = outer();
console.log(unique());
console.log(unique());
console.log(unique());
console.log(unique());