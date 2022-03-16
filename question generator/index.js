document.getElementById('button').addEventListener('click',onloaddata);

function onloaddata(){
    const xhr=new XMLHttpRequest();
//    console.log('READYSTATE',xhr.readyState);
    xhr.open('GET','student.json',true);
//    console.log('READYSTATE',xhr.readyState);
    
    
    xhr.onload = function(){
        if(this.status === 200){
        const student = JSON.parse(this.responseText);
//        console.log(java);
        let output=`
            <ul>
                    <li>ID: ${student.id}</li>
                    <li>NAME: ${student.name}</li>
                    <li>COMPANY: ${student.company}</li>
                    <li>PHONE: ${student.phone}</li>
                </ul>
        `;
            document.getElementById('button').innerHTML=student.output;
        }
    }
    xhr.send();
}