//JavaScript is Functional Programing Language
//In JavaScript Functons are first class citizen
//In JS functions caan be return from a function can be passed as an argument to another function
function someFunction(){
    //computation
    return function(x){
        return 10;
    }
}
//debouncing concept
function anotherFunction(f1){
    f1();
    console.log("Called f1");
    
}
function hello(){
    console.log("hello");
    
}
anotherFunction(hello);
