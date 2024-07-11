let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof(myDate));

// let myNewDate = new Date(2024, 5, 16)
// let myNewDate = new Date(2024, 5, 16, 5, 3)
// let myNewDate = new Date("2024-04-19")
// console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
// console.log(myTimeStamp.getTime());
console.log(Math.floor(Date.now()/1000));
let newDate = new Date();

// Get the month (adjusted to be 1-based)
console.log(newDate.getMonth() + 1);

// Get the full weekday name
console.log(newDate.toLocaleString('en-US', { weekday: 'long' }));
