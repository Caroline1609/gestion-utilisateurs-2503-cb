import { Validate } from "./Validate.js"; 

/**
 * Représente un utilisateur
 * @author Caroline <cabiehler@example.com>
 * @version 1.0
 */
export class User
{
    /**
     * 
     * @param {*} _firstname Le prenom de l'utilisateur.
     * @param {*} _email L'email de l'utilisateur
     * @param {*} _role Le role administratif de l'utilisateur
     */

    constructor(_firstname, _email, _role ){
        this._firstname = _firstname;
        this.email = _email;
        this.role = _role;
    }

    isValidate(){
        let checkname = new Validate();
        checkname.checkFirstname(this._firstname);

        let checkMail = new Validate();
        checkMail.checkEmail(this.email);


    }


}
