let formElement = document.querySelector("#form");
let input = document.querySelector(".input");
let list = document.querySelector(".list");
let btn = document.querySelector(".add-btn");

const jobsDatabase = JSON.parse(localStorage.getItem("jobs")) || [];

function renderJob(){
    let ulHTMLs = jobsDatabase.map(function(job){
        return `
        <li class="list-item">
            <span>${job.name}</span>
            <button>Sửa</button>
            <button>Xóa</button>
        </li>
        `
    });
    //Chuyển đổi từ mảng thành chuỗi HTML
    const ulHTML = ulHTMLs.join("")
    //Append chuỗi HTML vào trong DOM
    list.innerHTML = ulHTML
}
renderJob();
/**
 * Hàm thêm mới công việc
 * Auth: ĐHM (29/01/2024)
 */
function createJob(){
    if(!input.value){
        alert("Tên công việc không được để trống");
    }else{
        let newJob = {
            name: input.value,
            id: Math.ceil(Math.random() * 10000000000),
            status: false,
        };
        jobsDatabase.push(newJob);
        //Lưu dữ liệu lên localStorage
        localStorage.setItem("jobs", JSON.stringify(jobsDatabase));
        //Clear giá trị trong input
        input.value = "";
        //Gọi hàm render lại giao diện
        renderJob();
    }
}

function deleteJob(){

}

function updateJob(){

}



//Lắng nghe sự kiện submit form
formElement.addEventListener("submit", function(event){
    //Ngăn chặn sự kiện mặc định của form
    event.preventDefault();
    createJob();
});

// const arr = [1, 2, 3, 4]
// const newArr = arr.map(function(number){
//     return number * 2;
// })
// console.log(newArr);

//map() find() filter() findIndex() forEach()
//Ủy quyền sự kiện trong JS