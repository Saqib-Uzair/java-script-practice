const car = {
    make:'Toyota',
    model:'Camry',
    year: 2020,

    owner:{
        name:'saqib',
        age:25,
        },

    start(){
        console.log(`The ${this.make} ${this.model} is starting...`);
    }
}

function updateOwner(newName, newAge){
    car.owner.name = newName;
    car.owner.age = newAge;
}

car.start()
updateOwner('uzair',30);
console.log(car.owner.name);
console.log(car.owner.age);