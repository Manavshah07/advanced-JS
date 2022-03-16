class slHTTP {
    //Make a GET Request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }
                return res.json();
            })
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }

    //Make a POST request
    post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: 'POST',
                headers:{
                    'Content-type': "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => {
                if(!res.ok){
                    throw new Error(res.status);
                }
                return res.json();
            })
            .then(data=>resolve(data))
            .catch(err=>reject(err));
        });
    }

    //Make a PUT request
    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: 'PUT',
                headers:{
                    'Content-type': "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => {
                if(!res.ok){
                    throw new Error(res.status);
                }
                return res.json();
            })
            .then(data=>resolve(data))
            .catch(err=>reject(err));
        });
    }

    //Make a DELETE request
    delete(url){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: 'DELETE',
                headers:{
                    'Content-type': "application/json"
                }
            })
            .then(res => {
                if(!res.ok){
                    throw new Error(res.status);
                }
                return res.json();
            })
            //removed data because API doesnt needs data for deleting annor it returns the deleted item
            .then(() => resolve("resource deleted"))
            .catch(err=>reject(err));
        });
    }

}
