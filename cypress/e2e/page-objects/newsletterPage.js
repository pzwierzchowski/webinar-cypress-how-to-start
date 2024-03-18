
import { faker } from '@faker-js/faker';
const nameField = 'input[aria-label="name"]'
const emailField = 'input[aria-label="email"]'
const submitButton = 'button[type="submit"]'
const successInfo = 'div[class="ml-form-successContent"]'

class NewsletterPage {

    fillFirstNameField(){
        cy.get(nameField).eq(0).type(faker.person.firstName());
    }

    fillFirstEmailField(){
        cy.get(emailField).eq(0).type(faker.internet.email());
    }

    clickFirstSubmitButton(){
        cy.get(submitButton).eq(0).click();
    }

    checkTextAfterSubmit(){
        cy.get(successInfo).contains('Pierwszy mail do Ciebie jest już w drodze!').should('be.visible')
    }

    fillSecondNameField(){
        cy.get(nameField).eq(1).type(faker.person.firstName());
    }

    fillSecondEmailField(){
        cy.get(emailField).eq(1).type(faker.internet.email());
    }

    clickSecondSubmitButton(){
        cy.get(submitButton).eq(1).click();
    }
}

export default NewsletterPage;
