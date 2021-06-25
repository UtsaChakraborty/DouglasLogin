// NewUserRegister_Page.js created with Cypress
//

class NewUserRegister_Page {
    
    getNewUserRegistrationForm(){
    return cy.get('.login-page--register');
    }

    getGender(){
       // return cy.get('.dropdown__input');
        return cy.get('#registrationForm > div.row > div:nth-child(1) > div > div > div > div.dropdown__select > ul');
        //return cy.get('#registrationForm > div.row > div:nth-child(1) > div > div > div > div.dropdown__select > ul > li:nth-child(1) > button')
        //return cy.get('#registrationForm > div.row > div:nth-child(1) > div > div > div > div.dropdown__select > ul > li:nth-child(2) > button')
    }

    getgenderdropdown(){
        return cy.get('#registrationForm > div.row > div:nth-child(1) > div > div > div > div.dropdown__value > input');
    }

    getGenderMale(){
               
        return cy.get('#registrationForm > div.row > div:nth-child(1) > div > div > div > div.dropdown__select > ul > li:nth-child(1) > button')
        
     }
    
    getGenderFemale(){
             
       return cy.get('#registrationForm > div.row > div:nth-child(1) > div > div > div > div.dropdown__select > ul > li:nth-child(2) > button')
     }
    getFirstName(){
        //return cy.get(':nth-child(2) > .input__container > .input__inner-wrapper > .input__input');
        return cy.get('.row > :nth-child(2) > .input__container > .input__inner-wrapper > .input__input');
    }           

    getLastName(){
        return cy.get('.row > :nth-child(3) > .input__container > .input__inner-wrapper > .input__input');
    }

    getDOB(){
        return cy.get(':nth-child(4) > .input__container > .input__inner-wrapper > .input__input');
    }
    getEmail(){
        return cy.get(':nth-child(5) > .input__container > .input__inner-wrapper > .input__input');
    }

    getPassword(){
        return cy.get(':nth-child(6) > .input__container > .input__inner-wrapper > .input__input');
    }

    getRegisterButton(){
        return cy.get(':nth-child(8) > .button',{timeout : 10000});
    }

}
export default NewUserRegister_Page