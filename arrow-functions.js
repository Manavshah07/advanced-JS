//const sayHello = function(){
//    console.log("hello");
//}

//const sayHello = () => {
//    console.log("hello");
//}

const sayHello = () => console.log("Hello");

//const returnHello = function(){
//    return "Returned Hello"
//}

const returnHello = ()=> "Returned Hello";

/*
    RETURN AN OBJECT
*/

//const returnObject = function(){
//    return {name: "John Doe", age:17}
//}

const returnObject = () => ({name: "JOhn Doe", age:17});

/*
    FUNCTION WITH ARGUMENTS
*/

//const sayWelcome = function(fullName){
//    console.log("WELCOME" + fullName);
//}

const sayWelcome = fullName => console.log("WELCOME" + fullName);

//const printWelcome= function(firstName,lastName){
//    console.log(`Welcome ${firstName} ${lastName}`);
//}continue

const printWelcome = (firstName,lastName) => console.log(`Welcome ${firstName} ${lastName}`);

const delayedMsg = setTimeout(() => console.log("hello world after 2 secs"),2000);

const names = ['Harry','Potter','John','Doe'];
//const namesLength = names.map(function(name){
//    return name.length;
//});

const namesLength = names.map(name => name.length)

console.log(namesLength);

//sayHello();
//
//console.log(returnHello());
//
//console.log(returnObject());
//
//sayWelcome("Jimmy Doe");
//
//printWelcome("Jane","Doe");