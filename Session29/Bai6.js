function firstWorduppercase(str){
    let words = str.split(" ");
    for(let i = 0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
let string = "xin chao tat ca cac ban";
let result = firstWorduppercase(string);
console.log(result);