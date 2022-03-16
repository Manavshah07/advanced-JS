document.getElementById('btnStudent').addEventListener('click',getStudent);
document.getElementById('btnStudents').addEventListener('click',getStudents);

function getStudent(){
    const xhr=new XMLHttpRequest();
    
    xhr.open('GET','student.json',true);
//      open(method,url,async)
//      method the type of request : GET or POST
//      url means the server file location
//      async means true(asynchronous) or false(synchronous)
    
    xhr.onload = function(){
        if(this.status === 200){
//            console.log(this.responseText);
            const student = JSON.parse(this.responseText);
            console.log(student);
            let output=`
                <ul>
                    <li>ID: ${student.id}</li>
                    <li>NAME: ${student.name}</li>
                    <li>COMPANY: ${student.company}</li>
                    <li>PHONE: ${student.phone}</li>
                </ul>
            `;
        document.getElementById('student').innerHTML=output;
        }
    }
    
    xhr.send();
}

function getStudents(){
    const xhr=new XMLHttpRequest();
    
    xhr.open('GET','students.json',true);
    
    xhr.onload = function(){
        if(this.status === 200){
//            console.log(this.responseText);
            const students = JSON.parse(this.responseText);
            console.log(students);
            let output="";
            students.forEach(function(student){
               console.log(students); 
                output +=`
                    <ul>
                        <li>ID: ${student.id}</li>
                        <li>NAME: ${student.name}</li>
                        <li>COMPANY: ${student.company}</li>
                        <li>PHONE: ${student.phone}</li>
                `;
            });
            document.getElementById('students').innerHTML=output;
        }
    }
    
    xhr.send();
}