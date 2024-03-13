class Contact{
    constructor(name, phone, email){
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
}

let phoneBook = [
    {name: "Alice", phone: "123-456-7890", email: "alice@example.com"},
    {name: "Bob", phone: "987-654-3210", email: "bob@example.com"},
]

for(let key in phoneBook){
    console.log(phoneBook[key]);
}