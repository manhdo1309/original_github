function countChar(str, char){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            count++;
        }
    }
    console.log(count);
}
let str = prompt("Hãy nhập vào 1 chuỗi");
let char = prompt("Hãy nhập vào 1 ký tự");
countChar(str, char);