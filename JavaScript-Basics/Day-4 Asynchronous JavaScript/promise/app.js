const myPromise = new Promise((resolve, reject)=>{
    let success = false;

    if (success){
        resolve('Operation Successful')
    }else{
        reject('Operation Failed')
    }
});

myPromise
.then((result=> console.log(result)))
.catch(error => console.log(error))
.finally(()=> console.log('Done'));