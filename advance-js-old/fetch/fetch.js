document.getElementById("button1").addEventListener("click",getText);
document.getElementById("button2").addEventListener("click",getJson);
document.getElementById("button3").addEventListener("click",getApi);


function getText(){
    fetch('data.txt')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById("output").innerHTML = data;
    });
}
function getJson(){
    fetch('posts.json')
    .then(function(response){
        return response.json();
    })
    .then(function(posts){
        console.log(posts);
        let output = "<ul>";
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        output+="</ul>";
        document.getElementById("output").innerHTML = output;
    });
}
function getApi(){
    fetch('https://randomuser.e/api/?results=10')
    .then(function(response){
        if(!response.ok){
            throw new Error(response.status);
        }
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let output = "<ul>";
        data.results.forEach(function(user){
            output += `<li>${user.name.title} ${user.name.first} ${user.name.last} </li>`;
        });
        output+="</ul>";
        document.getElementById("output").innerHTML = output;
    })
    .catch(function(err){
        console.warn(err);
    });
}