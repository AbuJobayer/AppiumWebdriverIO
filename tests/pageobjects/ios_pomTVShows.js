import Page from './page';

class TVShows extends Page {

/*
XPATH FOR RACING HUB
*/

    //Xpath for the TV Shows - 1st Show
    get TVShows_1stShow() { return browser.element("//XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]");}

    //Xpath for the TV Shows - 1st Video
    get TVShows_1stVideo() { return browser.element("//XCUIElementTypeOther[2]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]");}

    //Xpath for the TV Shows - Back Button
    get TVShows_BackButton() { return browser.element("//XCUIElementTypeButton[@name='header-back']");}

    //Xpath for the TV Shows - Highlights Tab
    get TVShows_HighlightsTab() { return browser.element("//XCUIElementTypeOther[3]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]");}

    //Xpath for the TV Shows - Episodes Tab
    get TVShows_EpisodesTab() { return browser.element("//XCUIElementTypeOther[3]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]");}

    //Xpath for the TV Shows - Menu
    get TVShows_Menu() { return browser.element('(//XCUIElementTypeOther[@name="TV Shows r"])[4]');}

    //Xpath for the TV Shows - Menu - Video Hub
    get TVShows_Menu_VideoHub() { return browser.element('(//XCUIElementTypeOther[@name="Video Hub"])[2]');}



// Meethods for the Navigation Test


    open(){
        super.open('path');
    }


    // Click on the 1st TV Show
    click_TVShows_1stShow(){
        this.TVShows_1stShow.waitForExist();
        this.TVShows_1stShow.click();
    }

    // Click on the 1st video from the list
    click_TVShows_1stVideo(){
        this.TVShows_1stVideo.waitForExist();
        this.TVShows_1stVideo.click();
    }

    // Click on the Highlights Tab
    click_TVShows_HighlightsTab(){
        this.TVShows_HighlightsTab.waitForExist();
        this.TVShows_HighlightsTab.click();
    }

    // Click on the Back button
    click_TVShows_BackButton(){
        this.TVShows_BackButton.waitForExist();
        this.TVShows_BackButton.click();
    }

    // Click on the Menu
    click_TVShows_Menu(){
        this.TVShows_Menu.waitForExist();
        this.TVShows_Menu.click();
    }

    // Click on the Menu - Video Hub
    click_TVShows_Menu_VideoHub(){
        this.TVShows_Menu_VideoHub.waitForExist();
        this.TVShows_Menu_VideoHub.click();
    }





}

export default new TVShows();