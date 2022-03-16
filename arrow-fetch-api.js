document.getElementById('btnData').addEventListener('click', getData);
document.getElementById('btnJSON').addEventListener('click', getJSON);
document.getElementById('btnAPI').addEventListener('click', getAPI);

function getData() {
    fetch('data.txt')
        .then( (response) => {
            if (response.ok) {
                response.text() else {
                throw new Error(response.error);
            }
        })
        .then(function (data) {
            document.getElementById('divData').innerHTML = data;
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getJSON() {
    fetch('students.json')
        .then(function (response) {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(response.error);
            }
        })
        .then(function (data) {
            let output = "";
            data.forEach(function (student) {
                output += `
                <ul>
                    <li>${student.id}</li>
                    <li>${student.name}</li>
                    <li>${student.company}</li>
                    <li>${student.phone}</li>
                </ul>
            `;
            });
            document.getElementById('divJSON').innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getAPI() {
    fetch('https://randomuser.me/api/?results=3')
        .then(function (response) {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(response.error);
            }
        })
        .then(function (data) {
            let output = "";
            //        console.log(data);
            data.results.forEach(function (user) {
                output += `
                    <ul>
                        <li>Name: ${user.name.title} ${user.name.first} ${user.name.last}</li>
                        <li>Gender: ${user.name.gender}</li>
                        <li>Country: ${user.location.country}</li>
                        <li>Email: ${user.email}</li>
                        <li>Age: ${user.dob.age}</li>
                        <li><img src="${user.picture.thumbnail}"></li>
                    </ul>
                 `;
            });
            document.getElementById('divAPI').innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        });
}
