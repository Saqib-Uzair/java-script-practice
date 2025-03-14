class Car{
    constructor(make,model,year){
        this.make = make;
        this.model= model;
        this.year = year;
    }

    getCarInfor(){
        return `${this.year} ${this.make} ${this.model}`;
    }
}

let corolla = new Car("Toyoto","Carimty",2020);
const info = corolla.getCarInfor();
console.log(info);