let a = 1;
while(a <= 9){
    console.log("-----------");
    for(let i = 1; i <= 10; i++){
        let sum = a * i;
        console.log("", a, "*", "", i, "=", "", sum);
    }
    a++
}