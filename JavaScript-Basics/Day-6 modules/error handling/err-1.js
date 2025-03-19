try {
    let obj = null;
    console.log(obj.property);
}catch(error){
    if ( error instanceof TypeError){
        console.log('TypeError occurred:', error.message);
    }
    else{
        console.log('An error occurred', error.message);
    }
}