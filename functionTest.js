function f(x){
    console.log("f(x) = "+x);
     x += 2;
     x *= 2;
     x -= 2;

     return x*10;
} 
function g(y){
    console.log("g(Y) = " +y*2);
    let z = f(y);
    return z;
}
 let ans = g(10);
 console.log("ans = " +ans );
 
 // if we don't return fxn manually then Js return undefind auto-matically

 function test(){
    let x = 10;
    x*=2;
 }
 let newAns = test();
console.log(newAns); 

//Passing more than one parameter in fxn
function add(x,y){
    return x+y;
}
console.log(add(10,20));

//defult perameter
function add(x,y = 5){
    return x*y;
}
console.log(add(10));

//pass infinite no. of parameter in function

//(...values) rest parameter
function fun(...values){
    console.log(fun);
    
}
fun(10, 20, 30 ,40 ,50);



