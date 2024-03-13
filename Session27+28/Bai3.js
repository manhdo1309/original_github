let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray = [];
for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
        newArray.push(array[i]);
    }
}
console.log(newArray);