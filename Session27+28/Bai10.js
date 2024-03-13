let array = [1, 2, 2, 4, 3, 3, 5, 6, 5, 7, 6];
array.sort(function(a, b){return a - b})
let subArray = Array.from(new Set(array));
for(let i = 0; i < array.length; i++){
    let element = array[i];
    if(subArray[element] === undefined){
        subArray.push(element);
    }
}
console.log(subArray);