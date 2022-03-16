// ** NORMAL WAY OF WRITING **

// const sayHello = function({
//     console.log("Hello");
// })

// ** ARROW WAY OF WRITING **

// const sayHello = () =>{
//     console.log("Hello");
// }

// ** ARROW WAY OF WRITING **

/*if the fucntion body has only one line no need of { also*/

// const sayHello = () => console.log("hello");

// ** NORMAL WAY OF WRITING **

// const sayHello = function(){
//     return "hello";
// }

// ** ARROW WAY OF WRITING **

// const sayHello = () => "hello";

// ** NORMAL WAY OF WRITING **

// const sayHello = function(){
//     return {msg: "hrllo"};
// }

// ** ARROW WAY OF WRITING **

// const sayHello = ()=>({msg:"Hellloee"});

// ** NORMAL WAY OF WRITING **

// const sayHello = function(name){
//     console.log("Hello" + name);
// }

// ** ARROW WAY OF WRITING **

// const sayHello = (name) => console.log("Hello "+ name);

/*single element also doesnt require ()*/

// const sayHello = name => console.log("Hello "+name);

// const sayHello = (firstName,lastName) => console.log("Helllow" + firstName + lastName);

const user = ['prem', 'saurav', 'sneha', 'manav'];

/**
 * The map() creates a new array with the results of calling a function for every array element
 
 *It is similar to forEach but the difference is it returns a single value for every element in array so that it is stored in anew array 
 */

// ** NORMAL WAY OF WRITING **
// const nameLength = user.map(function (user) {
//     return user.length;
// })

// ** ARROW WAY OF WRITING **
 
/*SHORTER WAY*/

// const nameLength = user.map((user) => {
//     return user.length;
// })

/*EVEN SHORTER*/

const nameLength = user.map(user => user.length);
console.log(nameLength);