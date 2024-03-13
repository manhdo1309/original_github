let array = [1, 2, 3, 4, 5];
for(let i = array.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
console.log(array);

// array.sort(() => Math.random() - 0.5);
// console.log(array);