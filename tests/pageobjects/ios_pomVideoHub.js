import Page from './page';

class VideoHub extends Page {

/*
XPATH FOR VIDEO HUB
*/

    //Xpath for the Video Hub - Back Button
    get VideoHub_BackButton() { return browser.element("//XCUIElementTypeButton[@name='header-back']");}

    //Xpath for the Video Hub - Race Replays Tab
    get VideoHub_RaceReplayTab() { return browser.element('//XCUIElementTypeOther[@name="Race Replays"]');}

    //Xpath for the Video Hub - Stewards Tab
    get VideoHub_StewardsTab() { return browser.element("//XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]");}

    //Xpath for the Video Hub - Trials Tab
    get VideoHub_TrialsTab() { return browser.element('//XCUIElementTypeOther[@name="Trials"]');}

    //Xpath for the Video Hub - Post Race Interviews Tab
    get VideoHub_PostRaceInterviewsTab() { return browser.element('//XCUIElementTypeOther[@name="Post Race Interviews"]');}

    //Xpath for the Video Hub - Top Carousel Video
    get VideoHub_CarouselVideo() { return browser.element("//XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]");}

    //Xpath for the Video Hub - Top Carousel Video
    get VideoHub_1stRaceFromList() { return browser.element("//XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[2]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]");}






/*
XPATH FOR FEATURED 
*/    

    //Xpath for the Feature - Share Button
    get VideoHub_ShareButton() { return browser.element('(//XCUIElementTypeOther[@name=""])[3]');}

    //Xpath for the Feature - Share Button
    get VideoHub_ShareButton() { return browser.element('(//XCUIElementTypeOther[@name=""])[3]');}

    //Xpath for the Feature - Close Button
    get VideoHub_CloseButton() { return browser.element('//XCUIElementTypeOther[@name="h"]');}

    //Xpath for the Feature - Back Button
    get VideoHub_BackButton() { return browser.element('//XCUIElementTypeButton[@name="header-back"]');}





// Meethods for the Navigation Test - Video Hub


    open(){
        super.open('path');
    }

    // Click on the Stewards Tab
    click_VideoHub_StewardsTab(){
        this.VideoHub_StewardsTab.waitForExist();
        this.VideoHub_StewardsTab.click();
    }

    // Click on the Trials Tab
    click_VideoHub_TrialsTab(){
        this.VideoHub_TrialsTab.waitForExist();
        this.VideoHub_TrialsTab.click();
    }

    // Click on the Post Race Interviews Tab
    click_VideoHub_PostRaceInterviewsTab(){
        this.VideoHub_PostRaceInterviewsTab.waitForExist();
        this.VideoHub_PostRaceInterviewsTab.click();
    }   

    // Click on the Back Button
    click_VideoHub_BackButton(){
        this.VideoHub_BackButton.waitForExist();
        this.VideoHub_BackButton.click();
    }

    // Click on the Top Carousel Video
    click_VideoHub_CarouselVideo(){
        this.VideoHub_CarouselVideo.waitForExist();
        this.VideoHub_CarouselVideo.click();
    }

    // Click on the 1st Video from the Tab
    click_VideoHub_1stRaceFromList(){
        this.VideoHub_1stRaceFromList.waitForExist();
        this.VideoHub_1stRaceFromList.click();
    }


/*
METHODS _ NAVIGATION - FEATURED
*/
    // Click on the Share Button
    click_VideoHub_ShareButton(){
        this.VideoHub_ShareButton.waitForExist();
        this.VideoHub_ShareButton.click();
    }

    // Click on the Close Button
    click_VideoHub_CloseButton(){
        this.VideoHub_CloseButton.waitForExist();
        this.VideoHub_CloseButton.click();
    }

    // Click on the Back Button
    click_VideoHub_BackButton(){
        this.VideoHub_BackButton.waitForExist();
        this.VideoHub_BackButton.click();
    }


}

export default new VideoHub();