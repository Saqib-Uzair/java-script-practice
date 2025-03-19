const id = Symbol('id');

const user = {
    name:'Saqib',
    [id]:123
}
console.log(user[id]);