let userInput = prompt("Nhập vào một chuỗi:"); 
let string = [];
for (let i = 0; i < userInput.length; i++) {
    for (let j = i + 1; j <= userInput.length; j++) {
        string.push(userInput.slice(i, j));
    }
}
console.log(string);

