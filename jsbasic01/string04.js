const nme = "Akash"
const repoCount = "50"

// console.log(`Hello my name is ${nme} and my repo count is ${repoCount}`);
const gameName = new String('Aakash Tiwari')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.split('_'));
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(7));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString =  gameName.slice(-11, 4)
console.log(anotherString);

const anotherStringOne = "  Akash  "
console.log(anotherStringOne);
console.log(anotherStringOne.trim());

const url = "http://akash%20tiwari.com"
console.log(url.replace('%20', '_'));
console.log(url.includes('akash'));