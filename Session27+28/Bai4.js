let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array1 = [];
let array2 = [];
for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
        array1.push(array[i]);
    }
    else if(array[i] % 2 !== 0){
        array2.push(array[i]);
    }
}
console.log(array1);
console.log(array2);