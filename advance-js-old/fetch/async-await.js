// async function myFunc() {
//     return 'hello';
// }

// const result = myFunc();
// console.log(result);


// async function myFunc() {
//     setTimeout(() => "Hello", 1000);
// }

// const result = myFunc();
// console.log(result);


// async function myFunc() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('hello'), 1000);
//     });
//     const result = await promise;
//     return result;
// }

// const result = myFunc();
// console.log(result);

// async function myFunc() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000);
//     });

//     const error = false;
//     if(!error){
//         const result = await promise;
//         return result;
//     }else{
//         await Promise.reject(new Error('something went wrong'));
//     }
// }

// myFunc()
// .then(result => console.log(result))
// .catch(err => console.error(err));


async function getUsers(){
    //await reponse of the fetch call
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    //to check the error check if status is okay if yes continue if no then throw a error and the catch while calling the function
    //only proceed once its resolved
    const data = await response.json();

    //only proceed once the second promise is resolved
    return data;
}
getUsers().then(users=>console.log(users));



