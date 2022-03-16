const http = new slHTTP();

//get all post
// http.get('https://jsonplaceholder.typicode.com/posts',function(err,post){
//     if(err){
//         console.error(err);
//     }else{
//         console.log(post);
//     }
// });

//get a single post
// http.get('https://jsonplaceholder.typicode.com/posts/1',function(err,post){
//     if(err){
//         console.error(err);
//     }else{
//         console.log(post);
//     }
// });

// create data
const data = {
    title: "AJAX IS THE CONCEPT",
    body: "SOME THING ABOUT AJAX",
    userOd: 1004
};

//create a new post
// http.post('https://jsonplaceholder.typicode.com/posts',data , function(err,post){
//     if(err){
//         console.error(err);
//     }else{
//         console.log(post);
//     }
// });

// http.put('https://jsonplaceholder.typicode.com/posts/1',data , function(err,post){
//      if(err){
//         console.error(err);
//     }else{
//         console.log(post);
//     }
// });

http.delete('https://jsonplaceholder.typicode.com/posts/1' , function(err,data){
     if(err){
        console.error(err);
    }else{
        console.log(data);
    }
});
