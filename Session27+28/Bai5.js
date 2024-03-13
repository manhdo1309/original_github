let array = [1, 1, 3, 2, 2, 4, 4, 5, 6, 5];
let count = [];
for(let i = 0; i < array.length; i++){
    let element = array[i];
    if(count[element] === undefined){
        count[element] = 1;
    }
    else{
        count[element]++;
    }
}
for(let i = 0; i < count.length; i++){
    if(count[i] === 1){
        console.log(i);
        break;
    }
}