let btn = document.getElementById("btn");
btn.onclick = function(){
    if(btn.innerText === "OFF"){
        btn.innerText = "ON";
    }else{
        btn.innerText = "OFF";
    }
}
