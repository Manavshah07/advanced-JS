//Making an object of slhttp class to access its methods such as get ,post ,put ,delete
const http = new slHTTP;

// Calling GET

http.get('https://jsonplaceholder.typicode.com/posts/4')
.then(data =>console.log(data))
.catch(err => console.log(err));


const data = {
    title: "FETCH API IS THE NEW TREND",
    body: "Some jargons about fetch to make the topic difficult"
};

// Calling POST

// http.post('https://jsonplaceholder.typicode.com/posts',data)
// .then(data =>console.log(data))
// .catch(err => console.log(err));

// Calling PUT

// http.put('https://jsonplaceholder.typicode.com/posts/2',data)
// .then(data =>console.log(data))
// .catch(err => console.log(err));

// Calling DELETE
// (Does not require data for deleting as it dependends on the API )

// http.delete('https://jsonplaceholder.typicode.com/posts/2')
// .then(data =>console.log(data))
// .catch(err => console.log(err));