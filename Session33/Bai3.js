class Contact{
    constructor(name, phone, email){
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    displayInfo(){
        console.log("Tên:", this.name);
        console.log("Điện thoại:", this.phone);
        console.log("email", this.email);
        console.log("-------------------------");
    }
}

let contact1 = new Contact("Alice", "123-456-7890", "alice@example.com");
let contact2 = new Contact("Bob", "987-654-3210", "bob@example.com");

contact1.displayInfo();
contact2.displayInfo();




