let percentage = document.querySelector(".percentage");
let background = document.querySelector(".background");

let loading = 0;

let runFunction = setInterval(blur, 10);

function blur() {
    loading ++;
    if(loading > 99){
        clearInterval(runFunction);
    }
    percentage.innerText = `${loading}%`;
    percentage.style.opacity = scale(loading, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`
}

let scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}