let users = []

function notifyUserAdded() {
    let alert = document.getElementById('alert-success');
    alert.classList.remove('alert');
    alert.classList.add('alert-success');

    setTimeout(() => {
        alert.classList.remove('alert-success');
        alert.classList.add('alert');
    }, 2000);
    // Here 2000 means 2000 milisecond

}



function notifyUserExist() {
    let alert = document.getElementById('alert-danger');
    alert.classList.remove('alert');
    alert.classList.add('alert-danger');


    setTimeout(() => {
        alert.classList.remove('alert-danger');
        alert.classList.add('alert');
    }, 2000);
    // Here 2000 means 2000 milisecond
}



function addUser(userInput) {
    let checkUser = users.filter((currentUser) => {
        return currentUser.email == userInput.email;
    })
    if (checkUser.length == 0) {
        users.push(userInput);
        notifyUserAdded();
    }
    else {
        notifyUserExist();
    }

}



function displyUsers() {
    let usercart = document.getElementById('users');
    usercart.innerHTML = " ";
    users.map((x) => {
        let userdiv = document.createElement('div')
        userdiv.classList.add('user');
        let namepara = document.createElement('p');
        namepara.innerText = x.name;
        let emailpara = document.createElement('p');
        emailpara.innerText = x.email;

        usercart.appendChild(userdiv);
        userdiv.appendChild(namepara);
        userdiv.appendChild(emailpara);
    })

}
function add() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    let userInput = {
        name: name.value,
        email: email.value
    }

    addUser(userInput)
    displyUsers();
    console.log(users);
}