function findNumber(arr, sum){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let anotherNumber = sum - arr[i];
        let indexOfAnotherNumber = result.indexOf(anotherNumber);
        if(indexOfAnotherNumber !== -1){
            return [anotherNumber, arr[i]];
        }
        result.push(arr[i]);
    }
    return null;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let number = parseInt(prompt("Nhập vào một số nguyên:"));
let result = findNumber(array, number);
if (result) {
    console.log(result);
} else {
    console.log(`Không tìm thấy cặp số`);
}