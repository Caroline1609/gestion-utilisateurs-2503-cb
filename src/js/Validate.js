/**
 * Contrôle de données
*/

export class Validate
{

    /**
     * Valide un prénom
     * 3 caractères minimum, uniquement des lettres (et tirets au besoin)
     * @param {string} _firstname Le prénom à valider
     * @returns {Boolean} VRAI si valide, FAUX sinon
     */
    checkFirstname(_firstname){

        let regexFirstname = new RegExp('^[A-Za-zÀ-ÖØ-öø-ÿ]{3,}([-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$');
        _firstname = _firstname.trim();

        if(!regexFirstname.test(_firstname)) {
            firstname.style.border = "solid red 2px" ;
            throw new Error('Le prénom n\'ai pas valide');
        }
    }

    /**
     * Valide un email
     * @param {string} _email L'email à valider
     * @returns {Boolean} VRAI si valide, FAUX sinon
     */
    checkEmail(_email){
        let regexEmail = /^[\w\.-]+@[\w]+\.[a-z]+$/;
        _email = _email.trim();

        if(!regexEmail.test(_email)) {
            email.style.border = "solid red 2px" ;
            throw new Error('L\'email n\'ai pas valide');

        }

    }

    /**
     * 
     * @param {string} _select Vérifie qu'une option a bien était selectionner
     */
    checkSelect(_role) {

        let _role = [administrateur, encadrant, usager, invite];

        
    }


}

