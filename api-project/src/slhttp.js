class slHTTP{
    get(url){
        return new Promise((resolve,reject) => {
            fetch(url)
                .then(res => {
                if(!res.ok)
                    throw new Error(res.status);
                return res.json();
            })
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }
    
    post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url, {
                method:'POST',
                headers :{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if(!response.ok)
                    throw new Error(response.status);
                return response.json();
            })
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }
    
    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url, {
                method:'PUT',
                headers :{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if(!response.ok)
                    throw new Error(response.status);
                return response.json();
            })
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }
    
   delete(url){
        return new Promise((resolve,reject)=>{
            fetch(url, {
                method:'DELETE',
            })
            .then(response => {
                if(!response.ok)
                    throw new Error(response.status);
                return response.json();
            })
            .then(data => resolve("RESOURCE DELETED"))
            .catch(err => reject(err));
        });
    }
}

const http = new slHTTP();
export default http;