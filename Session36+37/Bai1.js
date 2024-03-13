let answer = document.getElementById("answer");
let btn = document.getElementById("btn");
btn.onclick = function(){
    if(answer.value.length > 10){
        alert("Không hợp lệ");
    }
    else if(answer.value.length <= 10){
        alert("Thành công");
    }
}