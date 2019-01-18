import Page from './page'

class ArticlesPage extends Page{

    //Xpath for Latest Tab
    get newsHub_LatestTab() {return browser.element("//XCUIElementTypeOther[@name='Latest']");}

    //Xpath for News Video Tab
    get newsHub_NewsVideoTab() {return browser.element("//XCUIElementTypeOther[@name='News Video']");}

    //Xpath for SA Racing Tab
    get newsHub_SARacingTab() {return browser.element("//XCUIElementTypeOther[@name='SA Racing']");}

    //Xpath for SA Racing Tab
    get newsHub_InternationalTab() {return browser.element("//XCUIElementTypeOther[@name='International']");}

    //Xpath for Top Carousel Screen Tab
    get newsHub_TopCarouselScreen() {return browser.element("//XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]");}    

    //Xpath for News Share Button
    get newsHub_ShareButton() {return browser.element("//XCUIElementTypeOther[@name='']/XCUIElementTypeOther[@name='']");}    

    //Xpath for Close Button
    get newsHub_CloseButton() {return browser.element("//XCUIElementTypeOther[@name='h']/XCUIElementTypeOther[@name='h']");}   
    
    //Xpath for Back Button 1
    get newsHub_BackButton1() {return browser.element("//XCUIElementTypeOther/XCUIElementTypeButton[@name='header-back']");}   
    
    //Xpath for Back Button 2
    get newsHub_BackButton2() {return browser.element("//XCUIElementTypeButton[@name='header-back']");} 


    
    open(){
        super.open('path');
    }

    //Difine all the methods


    //Open the Latest News Tab
    open_newsHub_LatestTab(){
        this.newsHub_LatestTab.waitForExist();
        this.newsHub_LatestTab.click();
    }

    //Open the News Video Tab
    open_newsHub_NewsVideoTab(){
        this.newsHub_NewsVideoTab.waitForExist();
        this.newsHub_NewsVideoTab.click();
    }

    //Open the SA Racing Tab
    open_newsHub_SARacingTab(){
        this.newsHub_SARacingTab.waitForExist();
        this.newsHub_SARacingTab.click();
    }

    //Open the Internaional Tab
    open_newsHub_InternationalTab(){
        this.newsHub_InternationalTab.waitForExist();
        this.newsHub_InternationalTab.click();
    }

    //Click on the Top Carousel screen
    click_newsHub_TopCarouselScreen(){
        this.newsHub_TopCarouselScreen.waitForExist();
        this.newsHub_TopCarouselScreen.click();
    }

    //Click on the Share Button
    click_newsHub_ShareButton(){
        this.newsHub_ShareButton.waitForExist();
        this.newsHub_ShareButton.click();
    }

    //Click on the Close Button
    click_newsHub_CloseButton(){
        this.newsHub_CloseButton.waitForExist();
        this.newsHub_CloseButton.click();
    }

    //Back to News Hub
    click_newsHub_BackButton1(){
        this.newsHub_BackButton1.waitForExist();
        this.newsHub_BackButton1.click();
    }

    //Back to Home Screen
    click_newsHub_BackButton2(){
        this.newsHub_BackButton2.waitForExist();
        this.newsHub_BackButton2.click();
    }

}

export default new ArticlesPage();