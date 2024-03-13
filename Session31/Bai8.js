function fakeReduce(arr, callback){
    let arrayLength = arr.length;
    let sum = 0;
    for(let i = 0; i < arrayLength; i++){
        sum = myCallback(sum, arr[i]);
    }
    return sum;
}
function myCallback(total, e){
    return total += e;
}
console.log(fakeReduce([1, 2, 3, 4, 5]));