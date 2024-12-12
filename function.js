//Function (protect from lot of duplications)
//Using This below syntax we can define our Function

function greatingToEvery() 
{
    console.log("Hello EveryOne");
    console.log("My Name is dev ");
    console.log("Thanks for visiting my web");
    
};
greatingToEvery(); //calling our fxn
//console.log(Math.SQRT(100)); //inbuilt function

// function isEvenOrOdd(x){// x is a perameter(place holder)
//     if(x%2 ==0)
//         console.log("Even");
//     else{
//         console.log("Odd")
//     }
// }

isEvenOrOdd(10); // 10 is an Argument

function details(name, age, location){
    console.log("My name is "+ name);
    console.log("And I am "+ age + " year  old");
    console.log("I am from " + location);

}

details("Akash" , 26, "Agra");
 
//genrate output from function and reuse it again
 function isEvenOrOdd(x){
    if(x %2 ==0){
        return "Even";
    }
    else{
     return"Odd";
    }
 }

 const ans = (isEvenOrOdd(10));
 console.log(ans); 
 