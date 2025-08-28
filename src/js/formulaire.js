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
    const isSelectValid = checkSelect(role.value);

    if (isFirstnameValid || isEmailValid || isSelectValid) {
        console.log("valider");
        console.log(firstname.value);
        console.log(email.value);
        console.log(role.value);
    } else {
        console.log("erreur");
        console.log(firstname.value);
        console.log(email.value);
        console.log(role.value);
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

/**
 * Valide un email
 * 3 caractères minimum, uniquement des lettres (et tirets au besoin)
 * @param {string} _email Le prénom à valider
 * @returns {Boolean} VRAI si valide, FAUX sinon
 */
function checkEmail(_email){
    let regexEmail = /^[\w\.-]+@[\w]+\.[a-z]+$/;
    _email = _email.trim();

    return regexEmail.test(_email);

}

/**
 * Vérifier d'un select a bien était remplie
 * 3 caractères minimum, uniquement des lettres (et tirets au besoin)
 * @param {_select} _select Le prénom à valider
 * @returns {Boolean} VRAI si valide, FAUX sinon
 */
function checkSelect(_select){
    return _select !== ""; 
}
