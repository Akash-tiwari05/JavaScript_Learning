let a = 10;

console.log(a);

let productPrice = 50000;
let name ="Akash";

//Obejcts basics(key value paired)

let product ={
    name : "Apple Iphone",// key is unique and it will override 
    price: 55000,
    dicount: 10,
    isAvilable: false
};
console.log(product);

// short circuting truthy vlue and falsy value
console.log(10 && 30); // expected output is true
console.log(0 && 30); // output false
console.log(0 || 40);// return true value 
console.log(null || "");// retrun last flsy value
console.log(10 || 30);

// comparison Operator

console.log(10 == "10"); // true by changing type(abstract equlity)
console.log(10 === "10"); // strict equality
console.log(10 != "10");  // Abstract inequallity
console.log(10 !== "10"); // Strict

//Desions Making
console.log("Starting....");
let isUserSignedIn = true;

if(isUserSignedIn) {
    console.log("Show the dasboard");
    
}else{
    console.log("Show the Home page");
}

