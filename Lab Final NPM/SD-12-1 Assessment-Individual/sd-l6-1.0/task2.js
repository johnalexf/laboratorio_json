// Task 2: listUsers()


export function listUsers(){
    fetch('http://localhost:3000/users').then(response => response.json()).then(data => console.log(data))
    //fetch(getServerURL() + "/users/6").then(response => response.json()).then(data => console.log(data))

}
