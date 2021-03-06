const posts = [
    {title:'post one', body:'This is post one'},
    {title:'post two', body:'This is post two'},
];

function createPost(post){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject("Error: Something went wrong");
            }
        },2000)
    });
}

function getPosts(){
    setTimeout(function(){
        let output = "";
        posts.forEach(function(post){
            output += `${post.title}`;
        });
        document.write(output);
    },1000);
   
}


createPost({title:'post three', body:'This is post three'})
.then(getPosts)
.catch(function(err){
    console.error(err);
})






