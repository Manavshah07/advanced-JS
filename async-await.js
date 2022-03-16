//async function myFunction(){
//    setTimeout(() => "Hello",1000);
//}

//async function myFunction(){
//    const promise = new Promise((reslove,reject) => {
//      setTimeout(() => resolve("hello"),2000)  
//    });
//    
//    console.log(promise);
//    promise.then(data=>console.log(data));
//    const res = await promise;
//    return res;
//}

//async function myFunction(){
//    const promise= new Promise((resolve,reject) => {
//        setTimeout(() => resolve("Hello"),2000);
//    });
//    
//    const error = true;
//    if(!error){
//        const res = await promise;
//        return res;
//    }else{
//       throw new Error("Error");
//        await.promise.reject(new Error("Something went wrong"));
//    }
//}

//myFunction()
//.then(data=>console.log(data))
//.catch(err => console.log(err));

function timepass(){
    getUsers()
    .then(data => console.log(data))
    .catch(err => console.log(err));
    
    console.log("Following code");
}

async function getUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
//    console.log(res);
    const data = await res.json();
//    console.log(data);
    return data;
}

timepass();