// singleton object
// Object.create()
// object literals
const mySym = Symbol("key1")

const jsuser = {
    name:"Akash",
    age: 18,
    email: "akash@gmail.com",
    [mySym]: "key1",
    address: "Mumbai",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsuser["email"])
// console.log(jsuser["name"])
// console.log(jsuser[mySym])

jsuser.greeting = function(){
    console.log("Hello Js USer");
}
jsuser.greeting2 = function(){
    console.log(`Hello Js USer, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());
