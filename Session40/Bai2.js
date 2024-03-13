let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let playerList = document.querySelector(".player-list");
let formElement = document.querySelector(".form");

const playerDatabase = JSON.parse(localStorage.getItem("players")) || [];

function renderPlayer(){
    let ulHTMLs = playerDatabase.map(function(player){
        return `<li class="list-item">${player.name}</li>`
    });
    const ulHTML = ulHTMLs.join("")
    playerList.innerHTML = ulHTML
}
renderPlayer();

function createPlayer(){
    if(!input.value){
        alert("Tên cầu thủ không được để trống");
    }else{
        let newPlayer = {
            name: input.value,
            id: Math.ceil(Math.random() * 10000000000),
        };
        playerDatabase.push(newPlayer);
        localStorage.setItem("players", JSON.stringify(playerDatabase));
        input.value = "";
        renderPlayer();
    }

}

formElement.addEventListener("submit", function(event){
    event.preventDefault();
    createPlayer();
});