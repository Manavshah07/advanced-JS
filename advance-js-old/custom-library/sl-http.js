function slHTTP() {
    this.http = new XMLHttpRequest();
}

//make an http get request
slHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function () {
        if (self.http.status == 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }
    this.http.send();
}
/**
 * HTTP:
 * 200: get request
 * 201: resource created
 */
//make ahttp post request

slHTTP.prototype.post = function(url,data,callback){
    this.http.open('POST',url, true);
    this.http.setRequestHeader('Content-type','application/json');
    let self = this;
    this.http.onload = function(){
        if (self.http.status == 200 || self.http.status == 201) {
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }
    this.http.send(JSON.stringify(data));
}

//make an http put request
slHTTP.prototype.put = function(url,data,callback){
    this.http.open('PUT',url,true);
    this.http.setRequestHeader('Content-type','application/json');
    let self = this;
    this.http.onload = function(){
        if (self.http.status == 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }
    this.http.send(JSON.stringify(data));
}

//make an http delete request
slHTTP.prototype.delete = function(url,callback){
    this.http.open('DELETE',url,true);
    let self = this;
    this.http.onload = function(){
        if (self.http.status == 200 || self.http.status == 201) {
            callback(null, "RECORD DELETED");
        } else {
            callback('Error: ' + self.http.status);
        }
    }
    this.http.send();
}
