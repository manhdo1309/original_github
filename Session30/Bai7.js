function findSubarr(arr, num){
    let n = 1;
    let flag = true;
    let number = num;
    while(n < array.length){
        for(let i = 0; i < array.length; i++){
            let subArray = [];
            for(let j = i; j < i + n; j++){
                subArray.push(array[j]);
            }
            if(subArray.length === n){
                let sum = 0;
                for(let element of subArray){
                    sum += element;
                }
                if(sum > number){
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
}
let array = [1, 2, 3, 4, 5];
let number = 13;
findSubarr(array, number);