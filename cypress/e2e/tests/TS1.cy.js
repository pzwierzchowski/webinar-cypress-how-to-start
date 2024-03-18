import NewsletterPage from "../page-objects/newsletterPage";
import MainPage from "../page-objects/mainPage"


describe('TS1 - Check newsletter flow', () => {
    beforeEach(() => {
        const mainPage = new MainPage();
        mainPage.visitPage();
        mainPage.clickNewsletterButton();
        cy.url({ timeout: 10000 }).should('eq', (Cypress.config().baseUrl + '/ciekawostki/'))
        })
    
    it('should subscribe to the newsletter with first option', function () {
        const newsletterPageq = new NewsletterPage();
        newsletterPageq.fillFirstNameField();
        newsletterPageq.fillFirstEmailField();
        newsletterPageq.clickFirstSubmitButton();
        newsletterPageq.checkTextAfterSubmit();
    });
   
    it('should subscribe to the newsletter with second option', function () {
        const newsletterPage = new NewsletterPage();
        newsletterPage.fillSecondNameField();
        newsletterPage.fillSecondEmailField();
        newsletterPage.clickSecondSubmitButton();
        newsletterPage.checkTextAfterSubmit();
    });
});