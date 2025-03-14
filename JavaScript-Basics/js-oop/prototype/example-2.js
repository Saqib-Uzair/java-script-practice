// Create an object dog from animal and override the speak() method.

const animal = {
    speak:function(){
        console.log("Animal Makes Sound");
    }
};

const dog = Object.create(animal);
dog.speak = function(){
    console.log("Bark Woof Woof!");
};

animal.speak();
dog.speak();