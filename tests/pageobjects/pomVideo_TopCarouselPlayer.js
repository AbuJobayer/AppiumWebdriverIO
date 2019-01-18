import Page from './page'

class TopCarouselVideoPlayer extends Page{

    //Xpath for Top carousel Video
    get topCarouselVideo() {return browser.element("//android.widget.HorizontalScrollView[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ImageView");}

    //Xpath for Back button
    get backButton() {return browser.element("//android.widget.Button/android.view.ViewGroup/android.widget.ImageView");}



    open(){
        super.open('path');
    }

   clickTopCarouselVideo(){
    this.topCarouselVideo.waitForExist();
    this.topCarouselVideo.pause(3000);
    this.topCarouselVideo.click();
   }

   clickBackButton(){
    this.backButton.waitForExist();
    this.backButton.click();
}

}

export default new TopCarouselVideoPlayer();