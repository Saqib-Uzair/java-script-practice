function division(a,b){
    if (b===0){
        throw new Error('Division by 0 is not valid')
    }
    return a/b;
}

try{
    console.log(division(10,2))
}catch(erro){
    console.log('An error occured:', erro.message);
}finally{
    console.log('The finally block is optional:');
}