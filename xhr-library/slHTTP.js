function slHTTP(){
    this.http = new XMLHttpRequest();
    this.state=0;
}

slHTTP.prototype.get = function(url,callback){ //idr se jo b functions aayega data ya functions vo prototype ke through milega
    this.http.open('GET',url,true);
    
    //this is done for binding this with self because in 
    
    let self = this;
    this.http.onload = function(){
        
        // here this will be the for this function
        if(self.http.status === 200){
            callback(null,self.http.responseText);
        }else{
            callback('Error : '+self.http.status);
        }
    }
    this.http.send();
}

/**
HTTP:
 * 200: GET REQUEST 
 * 201: Resource Created
*/
//POST & PUT are almost same

slHTTP.prototype.post = function(url,data,callback){
    this.http.open('POST',url,true);
    this.http.setRequestHeader('Content-type','application/json');
    
    let self = this;
    
    this.http.onload = function(){
        if(self.http.status === 200 || self.http.status === 201){
            callback(null, self.http.responseText);
        }else{
            callback('Error : '+self.http.status);
        }
    }
    this.http.send(JSON.stringify(data)); //ye mera js object ko json me convert krega
}

//call back is the fun which is calling from app.js

slHTTP.prototype.put = function(url,data,callback){
    this.http.open('PUT',url,true);
    this.http.setRequestHeader('Content-type','application/json');
    
    let self = this;
    
    this.http.onload = function(){
        if(self.http.status === 200 || self.http.status === 201){
            callback(null,self.http.responseText);
        }else{
            callback('Error : '+self.http.status);
        }
    }
    this.http.send(JSON.stringify(data));
}

slHTTP.prototype.delete = function(url,callback){
    this.http.open('DELETE',url,true);
    
    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null,'Deleted ....');
        }else{
            callback('Error : '+self.http.status);
        }
    }
    this.http.send();
}
