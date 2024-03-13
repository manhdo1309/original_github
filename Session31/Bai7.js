function fakeFilter(arr, callback){
    let arrayLength = arr.length;
    let newArr = [];
    for(let i = 0; i < arrayLength; i++){
        if(myCallback(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
function myCallback(e){
    return e % 2 === 0;
}
console.log(fakeFilter([1,2,3,4]));