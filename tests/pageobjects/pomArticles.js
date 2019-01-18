import Page from './page'

class ArticlesPage extends Page{

/*
XPATH FOR NEWSHUB CONTENT
*/

    //Xpath for News Hub - Carousel Content
    get newsHub_CarouselContent() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.widget.Button/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView");}

    //Xpath for News Hub - Carousel Content
    get newsHub_2ndArticle() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.Button[2]");}

    //Y Axis for Featured News & Video Section
    get Y_Axis_newsHub_2ndArticle(){return browser.getLocation('//android.widget.ScrollView/android.view.ViewGroup/android.widget.Button[2]', 'y');}


    

/*
XPATH FOR ARTICLE CONTENT
*/

    //Xpath for Article - Heading
    get newsHub_Article_Heading() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]");}

    //Xpath for Article - Hero Image
    get newsHub_Article_HeroImage() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup");}

    //Xpath for Article - Twitter Icon
    get newsHub_Article_Twitter() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button[1]");}
    
    //Xpath for Article - Facebook Icon
    get newsHub_Article_Facebook() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button[2]");}
 
    //Xpath for Article - Email Icon
    get newsHub_Article_Email() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button[3]");}
 
    //Xpath for Article - Share Button
    get newsHub_Article_ShareButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button");}
 
    //Xpath for Article - Close Button
    get newsHub_Article_CloseButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button[4]/android.widget.TextView");}
 
    //Xpath for Article - Close Button
    get newsHub_Article_BackButton() {return browser.element("//android.widget.Button/android.view.ViewGroup/android.widget.ImageView");}
 

    open(){
        super.open('path');
    }

//Difine all the methods

/*
METHODS FOR NAVIGATION - NEWSHUB
*/

    //Click on the Newhub - Carousel
    open_newsHub_CarouselContent(){
        this.newsHub_CarouselContent.waitForExist();
        this.newsHub_CarouselContent.click();
    }

    //Move up the News Hub - 2nd Article
    move_newsHub_2ndArticle_Up(){
        this.newsHub_2ndArticle.waitForExist();
        this.newsHub_2ndArticle.pause(5000);

        browser.touchAction('//android.widget.ScrollView/android.view.ViewGroup/android.widget.Button[2]', ['longPress', {action: 'moveTo', x: 0, y: (this.Y_Axis_newsHub_2ndArticle-1000)}, 'release']);
        }

/*
METHODS FOR NAVIGATION - NEWSHUB - ARTICLE
*/

    //Click on the Article - Share Button
    click_newsHub_Article_ShareButton(){
        this.newsHub_Article_ShareButton.waitForExist();
        this.newsHub_Article_ShareButton.click();
    }

    //Click on the Article - Close Button
    click_newsHub_Article_CloseButton(){
        this.newsHub_Article_CloseButton.waitForExist();
        this.newsHub_Article_CloseButton.click();
    }

    //Click on the Article - Back Button
    click_newsHub_Article_BackButton(){
        this.newsHub_Article_BackButton.waitForExist();
        this.newsHub_Article_BackButton.click();
    }


/*
METHODS FOR VALIDATION - NEWSHUB - ARTICLE
*/

    // Check Article - Heading
    waitFor_newsHub_Article_Heading() {
        this.newsHub_Article_Heading.waitForExist();
    }

    //Check for Article - Hero Image
    waitFor_newsHub_Article_HeroImage() {
        if(!this.newsHub_Article_HeroImage.isVisible()){
        this.newsHub_Article_HeroImage.waitForVisible(5000);
        }
    }

    check_newsHub_Article_HeroImage(){
        expect(this.newsHub_Article_HeroImage.isExisting()).to.equal(true);
    }

    //Check for Article - Twitter
    waitFor_newsHub_Article_Twitter() {
        this.newsHub_Article_Twitter.waitForExist();
    }

    //Check for Article - Facebook
    check_newsHub_Article_Facebook(){
        expect(this.newsHub_Article_Facebook.isExisting()).to.equal(true);
    }

    //Check for Article - Email
    check_newsHub_Article_Email(){
        expect(this.newsHub_Article_Email.isExisting()).to.equal(true);
    }


}

export default new ArticlesPage();