let array = [2, 1, 3, 5, 4];
let min = array[0];
let max = array[0];
for(let i = 0; i < array.length; i++){
    if(array[i] > max){
        max = array[i];
    }
    else if(array[i] < min){
        min = array[i];
    }
}
console.log(min);
console.log(max);