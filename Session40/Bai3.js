let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");
let formElement = document.querySelector(".form");

const playerList = [
    {
        id: 1,
        name: "L. Messi",
    },
    {
        id: 2,
        name: "C. Ronaldo",
    },
    {
        id: 3,
        name: "L. Modrik",
    },
];

function renderJob(){
    let ulHTMLs = playerList.map(function(player){
        return `<li class="list-item">${player.name}</li>`
    });
    const ulHTML = ulHTMLs.join("")
    list.innerHTML = ulHTML
}
renderJob();

function deletePlayer(){
    if(!input.value){
        alert("Tên cầu thủ không được để trống");
    }else{
        for(let index in playerList){
            playerList[index].id = input.value;
            
        }
        input.value = "";
        renderPlayer();
    }
}

formElement.addEventListener("submit", function(event){
    event.preventDefault();
    deletePlayer();
})
