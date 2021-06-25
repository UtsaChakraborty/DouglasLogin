class ExistingUserLogin_Page {
    
  /*  getUserName() {
        return cy.get('#reg_username');
    }
    */
    //cy.get('.login-page--login')
    getExistingUserLoginForm(){
        return cy.get('#loginForm');
    }
    
    getcookie() {
        return cy.get('.uc-overlay__buttons > .button__primary',{timeout:20000});
    }   
    getEmail(){
        return cy.get('.login__email > .input__inner-wrapper > .input__input');
    }
    getPassword(){
        return cy.get('.login__password > .input__inner-wrapper > .input__input');
    }
    getLoginUserName(){
        return cy.get('#username');
    }
    getLoginButton() {
        return cy.get('#loginForm > .button__primary');
    }

    getAccountHeader(){
        return cy.get('.account-overview-head',{timeout:10000});
        
    }
    getInputError_Pw(){
        return cy.get('.input__error');
    }

    getInputError_EM(){
        return cy.get('.alert');
    }
}
    export default ExistingUserLogin_Page
