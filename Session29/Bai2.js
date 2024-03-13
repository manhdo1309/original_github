function longestElement(array){
    let longestElement = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i].length > longestElement.length){
            longestElement = array[i];
        }
    }
    console.log(longestElement);
}

let array = ["abc", "bc", "a", "abcd", "ac"];
console.log(longestElement(array));