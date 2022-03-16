const students = [
    {name: 'jane Doe',age: 27},
    {name: 'john doe',age: 40}
];

//function createStudent(student){
////    create a new student in a database named as students
//    setTimeout(function(){
//        students.push(student);
//    },2000);
//}
//
//function getStudent(){
////    display all the students
//    let output="";
//    students.forEach(function(student){
//        output+= `${student.name}`;
//    });
//    document.body.innerHTML = output;
//}
//createStudent({name: 'jimmy doe',age:17});
//getStudent();

//Dependent code ko call krne ke liye callbacks use hota h


//create student

function createStudent(student,callback){
    setTimeout(function(){
        students.push(student);
    },2000)
}
function getStudent(){
//    display all the students
    let output="";
    students.forEach(function(student){
        output+= `${student.name}`;
    });
    document.body.innerHTML = output;
}


createStudent({name: 'Jimmy Doe', age: '12'},getStudent);

const xhr=new XMLHttpRequest();
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





