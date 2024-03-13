// let array = [1,5,6,3,2,1,1,5,6,7];
// let child_array = [];
// let n = parseInt(prompt("Nhập vào một số bất kỳ"));
// let sum = 0;
// let startIndex = 0;
// let endIndex = -1;
// for(let i = 0; i < array.length; i++){
//     sum += array[i];
//     while(sum > n && startIndex <= i){
//         sum -= array[startIndex];
//         startIndex ++;
//     }
//     if(sum === n){
//         endIndex = i;
//         break;
//     }
// }   
// if (endIndex !== -1) {
//     let resultArray = array.slice(startIndex, endIndex + 1);
//     console.log(resultArray);
// } else {
//     console.log("Không có mảng con thỏa mãn");
// }

const array = [1,5,6,3,2,1,1,5,6,7];
const input = +prompt("Nhập vào số bất kỳ");
let n = 1;
let flag = true;
// for(let i = 0; i < array.length; i++){
//     let subArray = [];
//     subArray.push(array[i])
//     console.log(subArray);
// }

while(n < array.length){
    for(let i = 0; i < array.length; i++){
        let subArray = [];
        for(let j = i; j < i + n; j++){
            if(array[j] !== undefined){
                subArray.push(array[j]);
            }
        }
        if(subArray.length === n){
            let sum = 0;
            for(let element of subArray){
                sum += element;
            }
            if(sum === input){
                console.log(subArray);
                flag = true;
                n = array.length;
                break;
            } else{
                flag = false;
            }
        }  
    }  
    n++;
}
if(flag === false){
    console.log("Không có mảng con thỏa mãn");
}
// for(let i = 0; i < array.length; i++){
//     let subArray = [];
//     for(let j = i; j < i + n; j++){
//         if(array[j] !== undefined){
//             subArray.push(array[j]);
//         }
//     }
//     if(subArray.length === n){
//         console.log(subArray);
//     }
    
