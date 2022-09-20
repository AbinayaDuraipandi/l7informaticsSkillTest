const commonElements = require("../PageElements/CommonElements")

class CommonActions {

    /**
     * This method is to validate the header of the current page. 
     * validateTextOfAnElement is a custom command to verify the partial text of the element
     * @param header - the header of the page to validate
     */
    validatePageHeader(header) {
        cy.validateTextOfAnElement(commonElements.PAGE_HEADER,header)
    }

}
export default CommonActions