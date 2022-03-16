//server se kabhi b resolve hi aayega usmee error rahega to batayega but vo reject nhi aayga

const students=[
    {name: 'John Doe', age:37},
    {name: 'Jane Doe', age:27}
];

function createStudent(student){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            students.push(student);
            const error= false;
            if(error){
                reject('ERROR STATUS');
            }else{
                resolve();
            }
        },2000);
    });
}

function getStudent(){
//    Display All the Students
    let output= "";
    students.forEach(function(student){
        output += `
            ${student.name},
            ${student.age}`;
    });
    document.body.innerHTML = output;
}
createStudent({name:'Jimmy Doe', age:17})
    .then(function(){
        getStudent();
})
    .catch(function(err){
        console.error(err);
})