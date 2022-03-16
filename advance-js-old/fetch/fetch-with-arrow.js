document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getApi);


function getText() {
    fetch('data.txt')
        .then(response => response.text())
        .then(data => document.getElementById("output").innerHTML = data);
}
function getJson() {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            let output = "<ul>";
            posts.forEach(post => output += `<li>${post.title}</li>`);
            output += "</ul>";
            document.getElementById("output").innerHTML = output;
        });
}
function getApi() {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            let output = "<ul>";
            data.results.forEach(user => output += `<li>${user.name.title} ${user.name.first} ${user.name.last} </li>`)
            output += "</ul>";
            document.getElementById("output").innerHTML = output;
        })
        .catch(err => console.warn(err));
}