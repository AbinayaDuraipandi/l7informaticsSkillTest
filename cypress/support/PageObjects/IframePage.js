import * as IframePageElements from '../PageElements/IframePageElements'

class IframePage {

   /**
     * This method is to enter the text in the iframe Test editor
     * @param text - the text to enter in the iframe Test editor
     */
   enterText(text) {
      cy.get(IframePageElements.IFRAME).within(function ($iframe) {
         const frame = $iframe.contents().find(IframePageElements.TEXTBOX)
         cy.wrap(frame).children('p').clear()
         cy.wrap(frame).type(text).should('have.text', text)
      })
   }

   /**
     * This method clicks the type of the format from the Format menu
     * @param formatType - the format type used to format the text
     */
   formatText(formatType) {
      cy.get(IframePageElements.IFRAME).within(function ($iframe) {
         const frame = $iframe.contents().find(IframePageElements.TEXTBOX)
         cy.wrap(frame).type('{selectall}')
      })
      cy.get(IframePageElements.FORMAT).contains('Format').click()
      cy.get(IframePageElements.FORMAT_TYPE).contains(formatType).click()
   }


   /**
     * This method is to validate whether the text formatted correctly
     * and this is developed only for format types Bold, Italic and Underline
     * @param formatedType - the type of format used to format the text
     * @param text - the text in the iframe text editor
     */
    validateFormatedText(formatedType,text){
      let locator
      switch(formatedType) {
          case 'Bold':
              locator= IframePageElements.FORMAT_BOLD 
              break;
          case 'Italic':
              locator= IframePageElements.FORMAT_ITALIC
              break;
          case 'Underline':
              locator= IframePageElements.FORMAT_UNDERLINE
              break;
          
      }
      cy.get(IframePageElements.IFRAME).within(function($iframe){
          const frame = $iframe.contents().find(locator)
          cy.wrap(frame).should('be.visible').and('contain',text)
      })
  }
}

export default IframePage;