// let person1 = {
//     //properties: key & value
//     // key: value,
//     // key2: value2,
//     // ...
//     name: "John",
//     age: 30, 
//     favoriteFoods: ["pasta", "ribs", "french fries"],
//     single: true,
//     //methods
//     //key: value,
//     //...
//     //value is function
//     sayHello: function () {
//         console.log("Hello!");
//     },       
// }; 
// console.log(person1);
// person1.sayHello();

// let person2 = {
//     name: "Jake",
//     age: 30,
//     bestFriend: "John",
//     single: false,
//     replyJohn: function(){
//         console.log("Hi John!");
//     }
// }
// console.log(person2);
// person2.replyJohn();

// let person3 = {
//     name: "Anna",
//     age: 27,
//     friends: ["John", "Jake"],
//     single: true,
//     replyJake: function(){
//         console.log("How are you today guys?");
//     }
// }
// console.log(person3);
// person3.replyJake();

// let student1 = {
//     id: 1,
//     name: "Steve",
//     age: 18,
//     school: "PTIT",
// };
// let student2 = {
//     id: 2,
//     name: "Mark",
//     age: 18,
//     school: "PTIT",
// }
// let student3 = {
//     id: 3,
//     name: "David",
//     age: 18,
//     school: "PTIT",
// }

// function Student(id, name, age, school) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.school = school;
//     this.introduction = function(){
//         console.log("I am", this.name, "and I am", this.age, "years old");
//     }
// };

// let student1 = new Student(1, "Steve", 18, "PTIT");
// let student2 = new Student(2, "Mark", 18, "PTIT");
// let student3 = new Student(3, "David", 18, "PTIT");

// console.log(student1, student2, student3);
// student1.introduction();

// class Student{
//     constructor(id, name, age, school){
//         this.id = id;
//         this.name = name;
//         this.age = age;
//         this.school = school;
//     }
//     introduction(){
//         console.log("I am", this.name, "and I am", this.age, "years old");
//     }
// }
// let student1 = new Student(1, "Steve", 18, "PTIT");
// let student2 = new Student(2, "Mark", 18, "PTIT");
// let student3 = new Student(3, "David", 18, "PTIT");
// console.log(student1, student2, student3);
// student1.introduction();


//prototype là gì?
//cơ chế prototype-based inheritance?

let person1 = {
    //properties: key & value
    // key: value,
    // key2: value2,
    // ...
    name: "John",
    age: 30, 
    favoriteFoods: ["pasta", "ribs", "french fries"],
    single: true,
    //methods
    //key: value,
    //...
    //value is function
    sayHello: function () {
        console.log("Hello!");
    },       
}; 
// console.log(person1.favoriteFoods[2]);
// person1.sayHello();

//read all - using for...in
// for(let key in person1){
//     console.log(key,person1[key]);
// }