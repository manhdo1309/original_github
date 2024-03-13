function fakeFind(arr, callback){
    let arrayLength = arr.length
    for(let i = 0; i < arrayLength; i++){
        if(myCallback(arr[i])){
            return arr[i];
        }
    }
}
function myCallback(e){
    return e % 2 === 0;
}
console.log(fakeFind([1,2,3,4]));

