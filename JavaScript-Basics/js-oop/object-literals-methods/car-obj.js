const car={
    brand:'Brand',
    model:'Model 2025',

    start:function(){
        console.log('Car started!');
        console.log(this.brand,this.model);
    }
};

car.start();