import Page from './page'

class VideoPlayer_VideoHub extends Page{

/*
***  XPATH FOR NAVIGATION - VIDEO PLAYER  ***
*/
    //Xpath for Back button
    get backButton() {return browser.element("//android.widget.Button/android.view.ViewGroup/android.widget.ImageView");}


/*
***  XPATH FOR VALIDATION - VIDEO PLAYER ***
*/

    //Xpath for Video Player - Header Menu content
    get videoPlayer_HeaderMenu() {return browser.element("//android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[1]");}

    //Xpath for Video Player - Video Screen
    get videoPlayer_Screen() {return browser.element("//android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout");}

    //Xpath for Video Player - Content Title
    get videoPlayer_ContentTitle() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]");}

    //Xpath for Video Player - Content Date
    get videoPlayer_ContentDate() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]");}

    //Xpath for Video Player - Share Button
    get videoPlayer_ShareButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]");}

    //Xpath for Video Player - Twitter Button
    get videoPlayer_TwitterButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView");}

    //Xpath for Video Player - Facebook Button
    get videoPlayer_FacebookButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView");}

    //Xpath for Video Player - Email Button
    get videoPlayer_EmailButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView");}







/*
***  METHODS FOR NAVIGATION - VIDEO PLAYER  ***
*/

    open(){
        super.open('path');
    }

    //Click on the back button
    clickBackButton(){
        this.backButton.waitForExist();
        this.backButton.click();
    }


    //Click on the Share button
    click_videoPlayer_ShareButton(){
        this.videoPlayer_ShareButton.waitForExist();
        this.videoPlayer_ShareButton.click();
    }

/*
***  METHODS FOR VALIDATION - VIDEO PLAYER - GENERIC ***
*/

    // Check Video Player - Screen
    waitFor_videoPlayer_Screen() {
        if(!this.videoPlayer_Screen.isVisible()){
        this.videoPlayer_Screen.waitForVisible(5000);
        }
    }
    check_videoPlayer_Screen(){
    expect(this.videoPlayer_Screen.isExisting()).to.equal(true);
    }

    // Check Video Player - Content Title
    waitFor_videoPlayer_ContentTitle() {
        if(!this.videoPlayer_ContentTitle.isVisible()){
        this.videoPlayer_ContentTitle.waitForVisible(5000);
        }
    }
    check_videoPlayer_ContentTitle(){
    expect(this.videoPlayer_ContentTitle.isExisting()).to.equal(true);
    }

    // Check Video Player - Content Date
    waitFor_videoPlayer_ContentDate() {
        if(!this.videoPlayer_ContentDate.isVisible()){
        this.videoPlayer_ContentDate.waitForVisible(5000);
        }
    }
    check_videoPlayer_ContentDate(){
    expect(this.videoPlayer_ContentDate.isExisting()).to.equal(true);
    }

    // Check Video Player - Share Button
    waitFor_videoPlayer_ShareButton() {
        if(!this.videoPlayer_ShareButton.isVisible()){
        this.videoPlayer_ShareButton.waitForVisible(5000);
        }
    }
    check_videoPlayer_ShareButton(){
    expect(this.videoPlayer_ShareButton.isExisting()).to.equal(true);
    }

    // Check Video Player - Twitter Button
    waitFor_videoPlayer_TwitterButton() {
        if(!this.videoPlayer_TwitterButton.isVisible()){
        this.videoPlayer_TwitterButton.waitForVisible(5000);
        }
    }
    check_videoPlayer_TwitterButton(){
    expect(this.videoPlayer_TwitterButton.isExisting()).to.equal(true);
    }

    // Check Video Player - Facebook Button
    waitFor_videoPlayer_FacebookButton() {
        if(!this.videoPlayer_FacebookButton.isVisible()){
        this.videoPlayer_FacebookButton.waitForVisible(5000);
        }
    }
    check_videoPlayer_FacebookButton(){
    expect(this.videoPlayer_TwitterButton.isExisting()).to.equal(true);
    }

    // Check Video Player - Email Button
    waitFor_videoPlayer_EmailButton() {
        if(!this.videoPlayer_EmailButton.isVisible()){
        this.videoPlayer_EmailButton.waitForVisible(5000);
        }
    }
    check_videoPlayer_EmailButton(){
    expect(this.videoPlayer_EmailButton.isExisting()).to.equal(true);
    }

/*
***  METHODS FOR VALIDATION - VIDEO PLAYER - LATEST RACING VIDEOS ***
*/
    // Check Video Player - Header Menu Title
    waitFor_videoPlayer_HeaderMenu_LatestRacingVideo() {
        if(!this.videoPlayer_HeaderMenu.isVisible()){
        this.videoPlayer_HeaderMenu.waitForVisible(5000);
        }
    }
    check_videoPlayer_HeaderMenu_LatestRacingVideo(){
        const Content_videoPlayer_HeaderMenu_LatestRacingVideo = this.videoPlayer_HeaderMenu.getText();
        expect(Content_videoPlayer_HeaderMenu_LatestRacingVideo).to.equal('Race Replays');
    }


}

export default new VideoPlayer_VideoHub();