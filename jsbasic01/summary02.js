// premitive 7 catogries
//  call by value
// 7 type: String , Number, Boolean, Null, Undefined, Symbol, BigInt

// call by refrence
// array, object, funtion
// ********************************memory******************************
// stack memory: copy adress not orginal(primitive)
let myYoutube = "hitesh"
let anotherName = myYoutube
anotherName = "chai aur code"
console.log(myYoutube);
console.log(anotherName);
// heap memory: copy refrance ant change in orginal(non-primitive)
let user1 = {
    email : "aka@gmail.com",
    upi : "aka@apl"
}