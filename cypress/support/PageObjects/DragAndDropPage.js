import * as DragAndDropPageElements from '../PageElements/DragAndDropPageElements'

class DragAndDropPage {

  /** 
   * This method is to validate text present in container 1
   * validateTextOfAnElement is a custom command to verify the partial text of the element
   * @param text text that should be available in container1
   */
  assertTextInContainer1(text) {
    cy.validateTextOfAnElement(DragAndDropPageElements.ABOX, text)
  }

  /** 
   * This method is to validate text present in container 2
   * validateTextOfAnElement is a custom command to verify the partial text of the element
   * @param text text that should be available in container 2
   */
  assertTextInContainer2(text) {
    cy.validateTextOfAnElement(DragAndDropPageElements.BBOX, text)
  }

  /**
   * Drag 'A' and drop it in 'B'
   */
  dragAndDropElement() {
    const dataTransfer = new DataTransfer();
    cy.get(DragAndDropPageElements.ABOX).trigger('dragstart', {
      dataTransfer
    })
    cy.get(DragAndDropPageElements.BBOX).trigger('drop', {
      dataTransfer
    })
  }
}

export default DragAndDropPage