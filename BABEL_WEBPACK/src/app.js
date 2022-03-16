// import {student, sayHello} from './lib';
import * as object from './lib';
const person = require('./old-export');
import stud from './latest';

let someVar = 10;
someVar += 105;
console.log(object.student);

console.log(someVar);

object.sayHello("Isha");

async function getPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}

getPosts()
.then(data=>console.log(data))
.catch(err=>console.log(err));

person.greet();
console.log(stud);
