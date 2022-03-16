
/*****
xhr-intro.html
******/
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>XHR INTRO</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="twelve comlumns">
                <button id="button">Click Me</button>
            </div>
            <div class="twelve column">
                <div id="output"></div>
            </div>
        </div>
    </div>
    <script src="xhr-intro.js"></script>
</body>
</html>

/*********
xhr-intro.js
************/
document.getElementById('button').addEventListener('click',loadData);

function loadData(){
    //console.log("Button Clicked");
    
//    create a xhr object
    const xhr=new XMLHttpRequest();
//    open connection to remote using xhr
//    syntax:
//    open(method,url,asyn,username,password);
    
    console.log('readystate: ',xhr.readyState);
    /*readystate
        0 request not intialized;
        1: server connection established
        2: request reicived
        3: server processing the request
        4: request finished and response is ready
    */
    xhr.open('GET','data.txt',true);
//    console.log("readystate",xhr.readyState);
    xhr.onload =function(){
        console.log("readystate in load",xhr.readyState);
        
        /*
            http state
            200: OK
            404: noe found
            403: forbidden access
            419: authenticaion error
        */
        console.log(this.status);
        if(this.status === 200){
            
//            console.log(xhr.responsetxt);
            document.getElementById('output').innerHTML = this.responseText;
        }
    }
//    can be used to show spinner and loader
    xhr.onprogress=function(){
        console.log("ready state in progress");
    }
    
//    xhr.onreadystatechange = function(){
//        console.log('ready state changed'+this.readyState);
//        if(this.status === 200 & this.readyState ===4 ){
//            document.getElementById('output').innerHTML = this.responseText;
//        }
//    }
//    send the request
    xhr.send();
}

/*********
xhr-json.html
*********/
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
    <title>XHR INTRO</title>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="six columns">
                <button id="btnStudent">Get Student</button>
            </div>
            <div class="six columns">
                <button id="btnStudents">Get Students</button>
            </div>
        </div>
        <div class="row">
            <div class="six columns">
                <h1>Student:</h1>
                <div class="" id="student"></div>
            </div>
            <div class="six columns">
                    <h1>Students:</h1>
                <div class="" id="students"></div>
            </div>
        </div>
    </div>
    <script src="xhr-json.js"></script>
</body>
</html>

/*******
xhr-json.js
********/
document.getElementById('btnStudent').addEventListener('click', getStudent);
document.getElementById('btnStudents').addEventListener('click', getStudents);

function getStudent() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'student-json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            //            console.log(this.responseText);
            const student = JSON.parse(this.responseText);
            //            console.log(this.responseText);
            let output = `
                <ul>
                    <li>ID: ${student.id}</li>
                    <li>ID: $[student.name]</li>
                    <li>ID: $[student.company]</li>
                    <li>ID: $[student.id]</li>
                </ul>
                `;
            let output = `<ul>
                    </ul>`;
            document.getElementById('student').innerHTML = output;
        }
    }
    xhr.send();
}
/******
xhr third party.html
**********/
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
    <title>XHR INTRO</title>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="six columns">
                <button id="btnUser">Get User</button>
            </div>
            <div class="six columns">
                <input type="number" id="count" value="5">
                <button id="btnUsers">Get Users</button>
            </div>
        </div>
        <div class="row">
            <div class="six columns">
                <h1>User:</h1>
                <div class="" id="user"></div>
            </div>
            <div class="six columns">
                    <h1>Users:</h1>
                <div class="" id="users"></div>
            </div>
        </div>
    </div>
    <script src="xhr-third-party.js"></script>
</body>
</html>
/******
xhr-third party.js
******/
document.getElementById('btnUser').addEventListener('click',getUser);
document.getElementById('btnUsers').addEventListener('click',getUsers);

function getUser(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET',`https://randomuser.me/api/i`,true);
    xhr.onload = function(){
        if(this.status == 200){
            const user = JSON.parse(this.responseText);
            let output = `
                <ul>
                    <li>Name: ${user.results[0].name.title}</li>
                    <li>Gender: ${user.results[0].name.gender}</li>
                    <li><img src="${user.results[0].picture.thumbnail}"></li>
                </ul>
            `;
            document.getElementById('user').innerHTML = output;
        }
    };
    xhr.send();
}

function getUsers(){
    const xhr = new XMLHttpRequest();
    let count = document.getElementById('count').value;
    console.log(count);
    xhr.open('GET',`https://randomuser.me/api/?results=${count}`,true);
    xhr.onload = function(){
        if(this.status == 200){
            const users = JSON.parse(this.responseText);
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
            document.getElementById('users').innerHTML = output;
        }
    };
    xhr.send();
}

/******
callback.html
*******/
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CALLBACKS</title>
</head>
<body>
    <script src="callbacks.js"></script>
</body>
</html>
/******
callback.js
******/
const students = [
    {name: 'jane Doe',age: 27},
    {name: 'John Doe',age: 37}
];

//function createStudent(student){
//    //create a new student in a database named as students
//    setTimeout(function(){
//        students.push(student);
//    },2000);
//}
//
//function getStudent(){
//    //display all the students
//    let output="";
//    students.forEach(function(student){
//        output+=`${student.a.name}`;
//    });
//    document.body.innerHTML = output;
//}

//create student 

function createStudent(student,callback){
    setTimeout(function(){
        students.push(student);
        callback();
    },2000);
}
function getStudent(){
    //display all the students
    let output="";
    students.forEach(function(student){
        output+=`${student.name}`;
    });
    document.body.innerHTML = output;
}


createStudent({name: 'jimmy Doe', age: '12'},getStudent);


const xhr =new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);

xhr.onload = function(){
    if(this.status === 200){
        const response = JSON.parse(this.responseText);
        console.log(response);
    }
}
xhr.send();


/*
DONE DELETE AFTER YOUR ARE DONE

*/