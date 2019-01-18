import Page from './page';

class HorseCard extends Page {

/*
XPATH FOR RACING HUB
*/

    //Xpath for the Next To Jump Button
    get HorseCard_CloseButton() { return browser.element("//XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]");}



// Meethods for the Navigation Test


    open(){
        super.open('path');
    }


    // Click on the Latest Results Tab
    click_HorseCard_CloseButton(){
        this.HorseCard_CloseButton.waitForExist();
        this.HorseCard_CloseButton.click();
    }




}

export default new HorseCard();