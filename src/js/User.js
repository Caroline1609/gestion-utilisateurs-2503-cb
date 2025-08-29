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
        this.firstname = _firstname;
        this.email = _email;
        this.role = _role;
    }

    isValidate(){

        let checkValidate = new Validate();

        checkValidate.checkFirstname(this.firstname);
        checkValidate.checkEmail(this.email);
        checkValidate.checkSelect(this.role)


    }


}
