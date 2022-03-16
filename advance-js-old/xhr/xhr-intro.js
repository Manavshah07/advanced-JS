// jab records insert karna ho -POST and jab chahiye(request) - tab get. IF you want something (get). and jab dalna ho tab POST. 
document.getElementById('button').addEventListener('click',loadData);

function loadData(){
    //console.log("clicked);
    
    //create a xhr obj
    const xhr=new XMLHttpRequest();
    
    //OPEN THE CONNECTION TO REMOTE USING XHR
    /*
    SYNTAX
        open(method,url[, async[,username[,password]]]) //here brackets means from that its optional
    */
    console.log('READYSTATE' ,xhr.readyState);
    
    /*
    ready state
    0-request not initialized
    1-server connection established
    2-request recieved
    3-server processing the request
    4-request finished and response is ready
//    */
    xhr.open('GET','data.txt',true);
//      open(method,url,async)
//      method the type of request : GET or POST
//      url means the server file location
//      async means true(asynchronous) or false(synchronous)

    console.log('READYSTATE',   xhr.readyState);
    xhr.onload=function(){
        console.log('READYSTATE in onload',xhr.readyState); //onLoad me vo status checkkrta h
        //console.log("hello world);
        
        /*
        HTTP status
        200-OK
        404-not found
        403-forbidden access
        419-unauthorized access
        */
        if(this.status === 200){
            //console.log(this.responseText);
            document.getElementById('#output').innerHTML=this.responseText; 
        }
    }
//    
    //CAN BE USED TO SHOW SPINNERS/LOADERS
    xhr.onprogress=function(){   //button pe click kiya to vo spineer dikhata hena uske liye use kiya h
        console.log("ready state in progress",this.readyState); 
    }
    
    xhr.onreadystatechange = function(){
        console.log("ready state changed",this.readyState);
        if(this.status === 200 & this.readyState=== 4){
            document.getElementById('output').innerHTML=this.responseText;
        }
    }
    
    //SEND THE REQUEST
    xhr.send();
}