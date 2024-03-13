function filterArr(arr, str) {
    let dupliStr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(str)) {
            dupliStr.push(arr[i]);
        }
    }
    console.log(dupliStr);
}

let array = ["manh", "do", "huy", "hanoi", "vietnam"];
let string = prompt("Nhập vào một chuỗi bất kỳ:");
filterArr(array, string);
