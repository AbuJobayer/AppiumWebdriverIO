import Page from './page';

class RacingHub extends Page {

/*
XPATH FOR RACING HUB
*/

    //Xpath for the Next To Jump Button
    get RacingHub_NextToJump() { return browser.element("(//XCUIElementTypeOther[@name='Next To Jump'])");}

    //Xpath for the Latest Results Button
    get RacingHub_LatestResultsTab() { return browser.element("(//XCUIElementTypeOther[@name='Latest Results'])");}

    //Xpath for the 2nd Race from the list
    get RacingHub_2ndRace() { return browser.element("//XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]");}


/*
XPATH FOR MEETING ONE
*/

    //Xpath for the Result Tab
    get RacingHub_ResultTab() { return browser.element("//XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]");}

    //Xpath for the Stewards Report Tab
    get RacingHub_StewardsReport() { return browser.element("//XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]");}

    //Xpath for the News & Video Tab
    get RacingHub_NewsVideo() { return browser.element("//XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]");}

    //Xpath for the Race Overview Tab
    get RacingHub_RaceOverview() { return browser.element("//XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[4]");}

    //Xpath for the Race ALL Tab
    get RacingHub_AllTab() { return browser.element("(//XCUIElementTypeOther[@name='ALL'])");}

    //Xpath for the 2nd Horse card from the list
    get RacingHub_2ndHorseCard() { return browser.element("//XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]");}  



/*
XPATH FOR MEETING ALL
*/   

    //Xpath for the Race List Tab
    get RacingHub_RaceListTab() { return browser.element("//XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]");}    

    //Xpath for the Expert Tips Tab
    get RacingHub_ExpertTipsTab() { return browser.element("//XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]");}   

    //Xpath for the Overview Tab
    get RacingHub_OverviewTab() { return browser.element("//XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]");}

    //Xpath for the Runners Tab
    get RacingHub_RunnersTab() { return browser.element("//XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[4]");}   


    //Xpath for Back Button
    get RacingHub_BackButton() {return browser.element("//XCUIElementTypeButton[@name='header-back']");}




// Meethods for the Navigation Test


    open(){
        super.open('path');
    }


    // Click on the Latest Results Tab
    click_RacingHub_LatestResultsTab(){
        this.RacingHub_LatestResultsTab.waitForExist();
        this.RacingHub_LatestResultsTab.click();
    }

    // Click on the Next to Jump Tab
    click_RacingHub_NextToJump(){
        this.RacingHub_NextToJump.waitForExist();
        this.RacingHub_NextToJump.click();
    }

    // Click on the 2nd Race from the list
    click_RacingHub_2ndRace(){
        this.RacingHub_2ndRace.waitForExist();
        this.RacingHub_2ndRace.click();
    }

    // Click on the Results Tab
    click_RacingHub_ResultTab(){
        this.RacingHub_ResultTab.waitForExist();
        this.RacingHub_ResultTab.click();
    }

    // Click on the Stewards Tab
    click_RacingHub_StewardsReport(){
        this.RacingHub_StewardsReport.waitForExist();
        this.RacingHub_StewardsReport.click();
    }

    // Click on the News & Video Tab
    click_RacingHub_NewsVideo(){
        this.RacingHub_NewsVideo.waitForExist();
        this.RacingHub_NewsVideo.click();
    }

    // Click on the Race Overview Tab
    click_RacingHub_RaceOverview(){
        this.RacingHub_RaceOverview.waitForExist();
        this.RacingHub_RaceOverview.click();
    }


    // Click on the 2nd Horse Card
    click_RacingHub_2ndHorseCard(){
        this.RacingHub_2ndHorseCard.waitForExist();
        this.RacingHub_2ndHorseCard.click();        
    }

    // Click on the ALL Button
    click_RacingHub_AllTab(){
        this.RacingHub_AllTab.waitForExist();
        this.RacingHub_AllTab.click();
    }

    // Click on the Expert Tips Tab
    click_RacingHub_ExpertTipsTab(){
        this.RacingHub_ExpertTipsTab.waitForExist();
        this.RacingHub_ExpertTipsTab.click();
    }

    // Click on the Overview Tab
    click_RacingHub_OverviewTab(){
        this.RacingHub_OverviewTab.waitForExist();
        this.RacingHub_OverviewTab.click();
    }    

    // Click on the Runners Tab
    click_RacingHub_RunnersTab(){
        this.RacingHub_RunnersTab.waitForExist();
        this.RacingHub_RunnersTab.click();
    }  

    // Click on the Back Button
    click_RacingHub_BackButton(){
        this.RacingHub_BackButton.waitForExist();
        this.RacingHub_BackButton.click();
    } 


}

export default new RacingHub();