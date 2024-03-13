class Job{
    constructor(id, title, description, completed) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.completed = completed;
    }
}

let jobs = [];

function addJob(){
    let id = prompt("Nhập ID công việc:");
    let title = prompt("Nhập tiêu đề công việc:");
    let description = prompt("Nhập mô tả công việc:");
    let completed = prompt("Công việc đã hoàn thành?");
  
    let newJob = new Job(id, title, description, completed);
    jobs.push(newJob);
}

function displayJobs(){
    for (let key of jobs) {
        console.log(`ID: ${key.id}`);
        console.log(`Tiêu đề công việc: ${key.title}`);
        console.log(`Mô tả công việc: ${key.description}`);
        console.log(`Trạng thái: ${key.completed}`);
    }
}

function searchJobById(){
    let searchId = prompt("Nhập ID công việc cần tìm");
    let foundJob = jobs.find(job => job.id === searchId);
  
    if(foundJob){
        console.log(`ID: ${foundJob.id}`);
        console.log(`Tiêu đề công việc: ${foundJob.title}`);
        console.log(`Mô tả công việc: ${foundJob.description}`);
        console.log(`Trạng thái: ${foundJob.completed}`);
    }else {
        console.log("Không tìm thấy công việc");
    }
}

let choice;
do{
    console.log("===== Quản lý công việc =====");
    console.log("1. Thêm mới công việc");
    console.log("2. In ra danh sách công việc");
    console.log("3. Tìm kiếm công việc theo ID");
    console.log("4. Thoát chương trình");
    choice = prompt("Nhập lựa chọn của bạn (1-4):");
    switch (choice) {
        case "1":
            addJob();
            break;
        case "2":
            displayJobs();
            break;
        case "3":
            searchJobById();
            break;
        case "4":
            console.log("Chương trình kết thúc.");
            break;
    }
}while (choice !== "4");