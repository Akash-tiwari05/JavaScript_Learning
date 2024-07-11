const marvelHeros = ["thor", "iron", "spiderman"]
const dcHeros = ["aqua man", "flash", "superman"]
// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros);

// const newHeros =marvelHeros.concat(dcHeros)
// console.log(newHeros);
// ********************spread operator*****************
const newHeros = [...marvelHeros, ...dcHeros]
console.log(newHeros);
const ano_arry = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_ano_arr = ano_arry.flat(3)
console.log(real_ano_arr);
console.log(Array.isArray("Akash"))
console.log(Array.from("Akash"))

console.log(Array.from({name: "Akash"}))    //Intresting Question 
let sco1 = 100
let sco2 = 200
let sco3 = 300
console.log(Array.of(sco1,sco2,sco3));