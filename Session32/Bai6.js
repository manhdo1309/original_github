function sortProduct(arr){
    let highest = arr[0];
    let lowest = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].price > highest.price){
            highest = arr[i];
        }
        else if(arr[i].price < lowest.price){
            lowest = arr[i];
        }
    }
    arr.pop(highest);
    arr.pop(lowest);
    arr.unshift(lowest);
    arr.push(highest);
    console.log(arr);
}

let products = [];

class product{
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

let product1 = new product(1, "iPhone 12", 20000000);
let product2 = new product(2, "iPhone 11", 10000000);
let product3 = new product(3, "samsung note 10", 500000000);

products.push(product1, product2, product3);

sortProduct(products);


