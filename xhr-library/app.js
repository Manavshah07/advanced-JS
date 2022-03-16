

const http = new slHTTP();

// http.get('https://jsonplaceholder.typicode.com/posts',function(err,data){
//    if(err){
//        console.log(err);
//    }else{
//        console.log(data);
//    }
// });



//http.get('https://jsonplaceholder.typicode.com/posts/101',function(err,data){
//    if(err){
//        console.log(err);
//    }else{
//        console.log(JSON.parse(data));
//    }
//});


//Create Some Data

const data ={
    userId:17,
    title:'Welcome to Asynch JS',
    body:'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    
}


// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,response){
//    if(err){
//        console.warn(err);
//    }else{
//        console.log(JSON.parse(response));
//    }
// });


//http.put('https://jsonplaceholder.typicode.com/posts/3',data,function(err,response){
//    if(err){
//        console.warn(err);
//    }else{
//        console.log(JSON.parse(response));
//    }
//});


// http.delete('https://jsonplaceholder.typicode.com/posts/6',function(err,response){
//     if(err){
//         console.warn(err);
//     }else{
//         console.log(response);
//     }
// });


