// TestSuite.js created with Cypress
//  
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

//Importing the classes with Reusable methods 
import ExistingUserLogin_Page from '../../support/ExistingUserLogin_Page';
import NewUserRegister_Page from '../../support/NewUserRegister_Page';

//Correct set of input Data 
const correctfixtures = [
    
    {
        "name": "CorrectDetailsFor_newuser",
        "context": "1"
    }
]
//Incorrect set of input Data 
const incorrectfixtures = [
    
    {
        "name": "ExistingEmailFor_newuser",
        "context": "1"
    },/*
    {
        "name": "ExistingFirstNameLastNameFor_newuser",
        "context": "2"
    },*/
    {
        "name": "IncorrectDOBFor_newuser",
        "context": "2"
    }
]

//This Test suite will have all the test cases regarding Doulas login for an existing user
describe('Test for Login scenarios of a New User', function() {
    
    //Object Creation for PageObject Page Class and assigning it to a constant variable   
    const newUserRegister_Page=new NewUserRegister_Page();  
    const existingUserLogin_Page=new ExistingUserLogin_Page();  
    

    //loop through the fixtues having correct set of data
    correctfixtures.forEach((cfixture) => {
    
        describe(cfixture.context, () => {

            //Mostly used for Setup Part
            before(function() {
                // runs once before all tests in the it block
                cy.visit("https://www.douglas.de/de/login");
                //Handle cookies
                existingUserLogin_Page.getcookie().click()
                //menioning explicit wait for reading the screen during fast execution
                cy.wait(2000)
                cy.log("Douglas.de page is launched successfully")

                cy.fixture(cfixture.name).then(function(data){
                this.data=data ;
                })

            })
          

            it('Visits the Douglas Page and register as a new User with correct set of data', function() {
                
                //Clicking on the gender drop down
                
                newUserRegister_Page.getgenderdropdown().then(($genderdropdown)=>{
                    
                    //Selecting the Gender of the new User
                    newUserRegister_Page.getgenderdropdown().click()
                        
                    if(this.data.Gender==='Frau'){

                    newUserRegister_Page.getGenderFemale().click() 
                    cy.log('Frau selected')                        
                    }
                    if(this.data.Gender==='Herr'){
                
                       // newUserRegister_Page.getgenderdropdown().click()
                        newUserRegister_Page.getGenderMale().click()
                        cy.log('Herr selected')                        
                        }
                })
            
            //First Name
            //newUserRegister_Page.getFirstName().type(this.data.FirstName)
            newUserRegister_Page.getFirstName().type(this.data.FirstName)
            //cy.get('.row > :nth-child(2) > .input__container > .input__inner-wrapper > .input__input').type('Utsa')

            //Last Name
            newUserRegister_Page.getLastName().type(this.data.LastName)

            //enter Date Of Birth
            newUserRegister_Page.getDOB().type(this.data.DOB);
                        
            //enter email id
            newUserRegister_Page.getEmail().type(this.data.Email);
            //cy.log(this.data.Comment)
            //if input error occurs stop the flow

            //menioning explicit wait for reading the screen during fast execution
            cy.wait(1000);
            

            //enter password
            newUserRegister_Page.getPassword().type(this.data.Password,{ log: false })
            cy.wait(1000);

            //Click on Login button
            newUserRegister_Page.getRegisterButton().click()

            existingUserLogin_Page.getAccountHeader().log('Registration successful')
            
                
            })

        })

    })
        //if input error occurs handle the error and notify user
        incorrectfixtures.forEach((ifixture) => {
    
            describe(ifixture.context, () => {
    
                //Mostly used for Setup Part
                before(function() {
                    // runs once before all tests in the it block
                    cy.visit("https://www.douglas.de/de/login");
                    //Handle cookies
                    existingUserLogin_Page.getcookie().click()
                    //menioning explicit wait for reading the screen during fast execution
                    cy.wait(2000)
                    cy.log("Douglas.de page is launched successfully")
    
                    cy.fixture(ifixture.name).then(function(data){
                    this.data=data ;
                    })
    
                })
                  
                it('Visits the Douglas Page and register as a new User with incorrect set of data', function() {
            
                    //Clicking on the gender drop down
                    
                    newUserRegister_Page.getgenderdropdown().then(($genderdropdown)=>{
                        
                        //Selecting the Gender of the new User
                        newUserRegister_Page.getgenderdropdown().click()
                            
                        if(this.data.Gender==='Frau'){

                        newUserRegister_Page.getGenderFemale().click() 
                        cy.log('Frau selected')                        
                        }
                        if(this.data.Gender==='Herr'){
                    
                            // newUserRegister_Page.getgenderdropdown().click()
                            newUserRegister_Page.getGenderMale().click()
                            cy.log('Herr selected')                        
                            }
                    })
                
                //First Name
                //newUserRegister_Page.getFirstName().type(this.data.FirstName)
                newUserRegister_Page.getFirstName().type(this.data.FirstName)
                //cy.get('.row > :nth-child(2) > .input__container > .input__inner-wrapper > .input__input').type('Utsa')

                //Last Name
                newUserRegister_Page.getLastName().type(this.data.LastName)

                //enter Date Of Birth
                newUserRegister_Page.getDOB().type(this.data.DOB);
                            
                //enter email id
                newUserRegister_Page.getEmail().type(this.data.Email);
                //cy.log(this.data.Comment)
                //if input error occurs stop the flow

                //menioning explicit wait for reading the screen during fast execution
                cy.wait(1000);
                
                //enter password
                newUserRegister_Page.getPassword().type(this.data.Password,{ log: false })
                cy.wait(1000);

                //Click on Login button
                newUserRegister_Page.getRegisterButton().click()

                cy.wait(4000)

                //if input error occurs handle the error and notify user 
                
                newUserRegister_Page.getNewUserRegistrationForm().then(($form)=>{
                            
                    if($form.text().includes('Bitte überprüfe deine Angaben')){
                        cy.log(this.data.Comment)

                    }
                    if($form.text().includes('Du musst mindestens 16 Jahre alt sein.')){
                        cy.log(this.data.Comment)

                    }
                    if($form.text().includes('* Pflichtfeld')){
                        cy.log(this.data.Comment)

                    }  
                    if($form.text().includes('Die E-Mail-Adresse ist bereits registriert.')){
                        cy.log(this.data.Comment)
                    }        
                    
                })
                        
            })
        })
    })
})

