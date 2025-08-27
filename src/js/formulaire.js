const firstname = document.getElementById('firstname');
const email = document.getElementById('email');
const role = document.getElementById('role');
const add = document.getElementById('add');
const formUser = document.getElementById('formUser');
const resultat = document.getElementById('resultat');

formUser.addEventListener('submit', addUser);

function addUser(event) {
    event.preventDefault();

    const isFirstnameValid = checkFirstname(firstname.value);
    const isEmailValid = checkEmail(email.value);

    if (isFirstnameValid || isEmailValid ) {
        console.log("valider");
    } else {
        console.log("erreur");
        console.log(email.value)
    }
}

/**
 * Valide un prénom
 * 3 caractères minimum, uniquement des lettres (et tirets au besoin)
 * @param {string} _firstname Le prénom à valider
 * @returns {Boolean} VRAI si valide, FAUX sinon
 */
function checkFirstname(_firstname) {

    let regexFirstname = new RegExp('^[A-Za-zÀ-ÖØ-öø-ÿ]{3,}([-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$');
    _firstname = _firstname.trim();

    return regexFirstname.test(_firstname);
}

function checkEmail(_email){
    let regexEmail = /^[\w\.-]+@[\w]+\.[a-z]+$/;
    _email = _email.trim();

    return regexEmail.test(_email);

}

