document.getElementById('button1').addEventListener('click', loadUser);
document.getElementById('button2').addEventListener('click', loadUsers);

function displayUsers(users, id) {
    let output = "";
    users.results.forEach(function(user){
        output += `
            <ul>
                <li>Name: ${user.name.title} ${user.name.first} ${user.name.last} </li>
                <li>Gender: ${user.gender}</li>
                <li>Email: ${user.email}</li>
                <li>Age: ${user.cell}</li>
                <li><img src="${user.picture.thumbnail}"></li>
            </ul>
        `;
    });
    document.getElementById(id).innerHTML = output;
}

function processXHR(url, elementID){
    const xhr =  new XMLHttpRequest();
    
    xhr.open('GET', url, true);
    
    xhr.onload = function () {
        if(this.status == 200){
            const user = JSON.parse(this.responseText);
            displayUsers(user, elementID);
        }
    }
    xhr.send();
}

function loadUser(){
    processXHR('https://randomuser.me/api/', 'user');
}

function loadUsers() {
    var numberOfUsers = document.getElementById("count").value;
    if(numberOfUsers == "" || numberOfUsers <= 0){
        numberOfUsers = 5;
    }
    processXHR('https://randomuser.me/api/?results='+numberOfUsers , 'users')
}