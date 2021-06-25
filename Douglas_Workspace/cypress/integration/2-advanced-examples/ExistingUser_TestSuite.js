// TestSuite.js created with Cypress
//  
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import ExistingUserLogin_Page from '../../support/ExistingUserLogin_Page';

//Correct set of input Data 
const correctfixtures = [
    
    {
        "name": "CorrectDetailsFor_existinguser",
        "context": "1"
    }
]
//Incorrect set of input Data 
const incorrectfixtures = [
    
    {
        "name": "IncorrectPasswordFor_existinguser",
        "context": "1"
    },
    {
        "name": "IncorrectUsernameFor_existinguser",
        "context": "2"
    }
]

//This Test suite will have all the test cases regarding Doulas login for an existing user
describe('Test for Login scenarios of an Existing User', function() {
    
    //Object Creation for PageObject Page Class and assigning it to a constant variable   
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
          

            it('Visits the Douglas Page and Login as an existing user with correct credentials', function() {
                
                //enter email id
                existingUserLogin_Page.getEmail().type(this.data.Email);
                //cy.log(this.data.Comment)
                //if input error occurs stop the flow

                //menioning explicit wait for reading the screen during fast execution
                cy.wait(1000);
                
                //enter password
                existingUserLogin_Page.getPassword().type(this.data.Password,{ log: false })
                cy.wait(1000);

                //Click on Login button
                existingUserLogin_Page.getLoginButton().click()

                existingUserLogin_Page.getAccountHeader().log(this.data.Comment)
                
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
                  
        
                    it('Visits the Douglas Page and Login as an existing user with different combination of incorrect credentials', function() {
                        
                        //enter email id
                        existingUserLogin_Page.getEmail().type(this.data.Email);
                        //cy.log(this.data.Comment)
                        //if input error occurs stop the flow
        
                        //menioning explicit wait for reading the screen during fast execution
                        cy.wait(1000);
                        
                        //enter password
                        existingUserLogin_Page.getPassword().type(this.data.Password,{ log: false })
                        cy.wait(1000);
        
                        //Click on Login button
                        existingUserLogin_Page.getLoginButton().click()
        
                        //if input error occurs handle the error and notify user 
                        
                        existingUserLogin_Page.getExistingUserLoginForm().then(($form)=>{
                        
                            if($form.text().includes('Dein Passwort muss mindestens 6 Zeichen enthalten.')){
                             cy.log(this.data.Comment)                               
                            }
                            if($form.text().includes('Bitte überprüfe deine Angaben'))
                            {
                                cy.log(this.data.Comment) 
                            }
                            if($form.text().includes('Falsche Zugangsdaten')){
                                cy.log(this.data.Comment) 
                            }
                        })
                        
                    })
                })
        })
    })
})

