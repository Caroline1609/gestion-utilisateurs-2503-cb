import { User } from "./User.js";

const firstname = document.getElementById('firstname');
const email = document.getElementById('email');
const role = document.getElementById('role');
const add = document.getElementById('add');
const formUser = document.getElementById('formUser');
const resultat = document.getElementById('resultat');

formUser.addEventListener('submit', (event) => {

    event.preventDefault();

    let user = new User(firstname.value, email.value, role.value)


    try {
        user.isValidate()
        console.log(user)

    } catch (error) {
        
        console.log('ERREUR: ' + error);
    }
  
    

});
