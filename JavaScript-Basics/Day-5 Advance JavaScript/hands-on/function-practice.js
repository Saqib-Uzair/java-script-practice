// Create a function that uses destructuring to extract properties from an object.


const  details=({name, id})=>{
    console.log(`Name: ${name} ID: ${id}`);
};

const obj = {name:'saqib',id:123};
details(obj);