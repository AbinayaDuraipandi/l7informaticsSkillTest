/// <reference types="cypress" />
import IframePage from '../support/PageObjects/IframePage'
import DragAndDropPage from '../support/PageObjects/DragAndDropPage';
import CommonActions from '../support/PageObjects/CommonActions';

const iframePage = new IframePage()
const dragAndDropPage = new DragAndDropPage()
const commonActions = new CommonActions()

describe('Herokuapp Test suite', function () {
    beforeEach(function () {
        cy.fixture('herokuappTestdata').then((herokuappTestdata) => {
            this.herokuappTestdata = herokuappTestdata
        })
    })

    it('Should verify Iframe functionality', function () {
        //To navigate to the url 
        cy.visit(Cypress.env("url") + 'iframe')
        //validation of page header
        commonActions.validatePageHeader(this.herokuappTestdata.Headers.Iframe)
        //entering the text to the iframe text editor
        iframePage.enterText(this.herokuappTestdata.IframePage.InputText)
        //formatting the text
        iframePage.formatText(this.herokuappTestdata.IframePage.formatType)
        //validating the format of the text
        iframePage.validateFormatedText(this.herokuappTestdata.IframePage.formatType, this.herokuappTestdata.IframePage.InputText)
    })

    it('Should verify Drag and Drop functionality', function () {
        //To navigate to the url 
        cy.visit(Cypress.env("url") + "drag_and_drop")
        //validation of page header
        commonActions.validatePageHeader(this.herokuappTestdata.Headers.DragAndDrop)
        //To assert text availabe in container1 before swapping
        dragAndDropPage.assertTextInContainer1('A')
        //To assert text availabe in container2 before swapping
        dragAndDropPage.assertTextInContainer2('B')
        //swapping the containers using drag and drop
        dragAndDropPage.dragAndDropElement()
        //To assert final text availabe in container1
        dragAndDropPage.assertTextInContainer1('B')
        //To assert final text availabe in container2
        dragAndDropPage.assertTextInContainer2('A')
    })
})