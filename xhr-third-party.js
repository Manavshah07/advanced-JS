document.getElementById('btnUser').addEventListener('click',getUser);
document.getElementById('btnUsers').addEventListener('click',getUsers);

function getUser(){
    const xhr=new XMLHttpRequest();
    xhr.open('GET',`https://randomuser.me/api`,true);
    xhr.onload=function(){
        if(this.status == 200){
            const user=JSON.parse(this.responseText);
            let output=`
                <ul>
                    <li>Name: ${user.results[0].name.title}</li>
                    <li>latitude: ${user.results[0].location.coordinates.latitude}</li>
                    <li><img src="${user.results[0].picture.thumbnail}"></li>
                </ul>
        `;
        document.getElementById('user').innerHTML = output;
        }
        
    }
    xhr.send();
}

function getUsers(){
    const xhr=new XMLHttpRequest();
    let count=document.getElementById('count').value;
    console.log(count);
    xhr.open('GET',`https://randomuser.me/api/?results=${count}`,true);
    xhr.onload=function(){
        if(this.status == 200){
            const users= JSON.parse(this.responseText);
            let output="";
            users.results.forEach(function(user){
                output+=`
                    <ul>
                        <li>Name: ${user.name.title}</li>
                        <li>Gender: ${user.name.gender}</li>
                        <li><img src="${user.picture.thumbnail}"></li>
                    </ul>
                 `;       
                });
                document.getElementById('users').innerHTML=output;
        }
    }
    xhr.send();
}