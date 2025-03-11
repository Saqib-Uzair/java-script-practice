// Declare a variable blockVar inside an if block and try to log it outside the block.

if (true){
    const id = 25;
    console.log(`Block Variable: ${id}`);
}

console.log(id);