import Page from './page'

class NewsHub extends Page{

/*
XPATH FOR NEWSHUB - CONTENTS
*/
    //Xpath for News Hub  - Carousel Content
    get newsHub_CarouselContent() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.widget.Button/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView");}

    //Xpath for News Hub  - 1st Content from the list
    get newsHub_List_1stContent() {return browser.element("//android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.Button[1]");}

    //Y Axis for News Hub  - 1st Content from the list
    get Y_Axis_newsHub_List_1stContent(){return browser.getLocation('//android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.Button[1]', 'y');}

    //Xpath for News Hub  - Article - Share Button
    get newsHub_Article_ShareButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button");}

    //Xpath for News Hub  - Article - Share Close Button
    get newsHub_Article_ShareCloseButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button[4]");}




/*
LOCATORS FOR NEWSHUB - RACING NEWS TABS
*/
    //Accessibility Id for News Hub - Racing news - Latest Tab
    get newsHub_LatestTab() {return browser.element("~Latest");}

    //Accessibility Id for News Hub - Racing news - Hong Kong Tab
    get newsHub_AllStarMileTab() {return browser.element("~All Star Mile");}

    //Accessibility Id for News Hub - Racing news - News Video Tab
    get newsHub_NewsVideoTab() {return browser.element("~News Video");}

    //X Axis for Racing news - News Video Tab
    get X_Axis_newsHub_NewsVideoTab(){return browser.getLocation('~News Video', 'x');}


    //Accessibility Id for News Hub - Racing news - Tips Tab
    get newsHub_TipsTab() {return browser.element("~Tips");}

    //Accessibility Id for News Hub - Racing news - International Tab
    get newsHub_InternationalTab() {return browser.element("~International");}

    //Accessibility Id for News Hub - Racing news - Breeding Tab
    get newsHub_BreedingTab() {return browser.element("~Breeding");}

    //Xpath for News Hub - Racing news - 1st content
    get newsHub_RacingNews_1stContent() {return browser.element("//android.view.ViewGroup[3]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]");}



/*
XPATH FOR NEWSHUB - FEATURED NEWS TABS
*/
    //Accessibility Id for News Hub - Featured news - Spring Carnival Tab
    get newsHub_SpringCarnivalTab() {return browser.element("~Spring Carnival");}

    //Accessibility Id for News Hub - Featured news - Feature Videos Tab
    get newsHub_FeatureVideosTab() {return browser.element("~Feature Videos");}

    //Accessibility Id for News Hub - Featured news - Opinion Tab
    get newsHub_OpinionTab() {return browser.element("~Opinion");}

    //Xpath for Featured news - 1st Content from the list
    get newsHub_FeaturedNews_1stContent() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]");}



    open(){
        super.open('path');
    }

    //Difine all the methods

/*
METHODS FOR NAVIGATION - NEWSHUB - CONTENTS
*/
    //Open on the Newshub - 1st conent from the list
    click_newsHub_List_1stContent(){
        this.newsHub_List_1stContent.waitForExist();
        this.newsHub_List_1stContent.click();
    }

    //Move up the Newshub - 1st conent from the list
    move_newsHub_List_1stContent_Up(){
        this.newsHub_List_1stContent.waitForExist();
        this.newsHub_List_1stContent.pause(5000);

        browser.touchAction('//android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.Button[1]', ['longPress', {action: 'moveTo', x: 0, y: (this.Y_Axis_newsHub_List_1stContent-1200)}, 'release']);
        }
  

/*
METHODS FOR NAVIGATION - NEWSHUB - RACING NEWS TABS
*/

    //Open the Racing News - Latest Tab
    open_newsHub_LatestTab(){
        this.newsHub_LatestTab.waitForExist();
        this.newsHub_LatestTab.click();
    }

    //Open the Racing News - 1st Content from the list
    open_newsHub_RacingNews_1stContent(){
        this.newsHub_RacingNews_1stContent.waitForExist();
        this.newsHub_RacingNews_1stContent.click();

    }

    //Open the Racing News - All Star Mile Tab
    open_newsHub_AllStarMileTab(){
        this.newsHub_AllStarMileTab.waitForExist();
        this.newsHub_AllStarMileTab.click();
    }

    //Open the Racing News - News Video Tab
    open_newsHub_NewsVideoTab(){
        this.newsHub_NewsVideoTab.waitForExist();
        this.newsHub_NewsVideoTab.click();
    }

    //Move Left the Racing News - News Video Tab
    move_newsHub_NewsVideoTab_Left(){
        this.newsHub_NewsVideoTab.waitForExist();
        this.newsHub_NewsVideoTab.pause(5000);

        browser.touchAction('~News Video', ['longPress', {action: 'moveTo', x: (this.X_Axis_newsHub_NewsVideoTab-90), y: 0}, 'release']);

        }

    //Open the Racing News - Tips Tab
    open_newsHub_TipsTab(){
        this.newsHub_TipsTab.waitForExist();
        this.newsHub_TipsTab.click();
    }

    //Open the Racing News - International Tab
    open_newsHub_InternationalTab(){
        this.newsHub_InternationalTab.waitForExist();
        this.newsHub_InternationalTab.click();
    }

    //Open the Racing News - Breeding Tab
    open_newsHub_BreedingTab(){
        this.newsHub_BreedingTab.waitForExist();
        this.newsHub_BreedingTab.click();
    }    


/*
METHODS FOR NAVIGATION - NEWSHUB - FEATURED NEWS TABS
*/

    //Open the Featured News - Spring Carnival Tab
    open_newsHub_SpringCarnivalTab(){
        this.newsHub_SpringCarnivalTab.waitForExist();
        this.newsHub_SpringCarnivalTab.click();
    }

    //Open the Featured News - Featured Videos Tab
    open_newsHub_FeatureVideosTab(){
        this.newsHub_FeatureVideosTab.waitForExist();
        this.newsHub_FeatureVideosTab.click();
    }

    //Open the Featured News - Opinion Tab
    open_newsHub_OpinionTab(){
        this.newsHub_OpinionTab.waitForExist();
        this.newsHub_OpinionTab.click();
    }

    //Open the Featured News - 1st Content from the list
    open_newsHub_FeaturedNews_1stContent(){
        this.newsHub_FeaturedNews_1stContent.waitForExist();
        this.newsHub_FeaturedNews_1stContent.click();
    }



/*
METHODS FOR NAVIGATION - NEWSHUB - CAROUSEL SCREEN
*/
    //Swipe the Carousel screen left
    swipe_CarouselScreen_Left(){
        this.newsHub_CarouselContent.waitForExist();
        this.newsHub_CarouselContent.swipeLeft(1000);
        this.newsHub_CarouselContent.pause(3000);
        this.newsHub_CarouselContent.swipeLeft(1000);
    }

    //Swipe the Carousel screen Right
    swipe_CarouselScreen_Right(){
        this.newsHub_CarouselContent.waitForExist();
        this.newsHub_CarouselContent.swipeRight(1000);
    }

    //Open the Newshub - Carousel screen Content
    open_newsHub_CarouselContent(){
        this.newsHub_CarouselContent.waitForExist();
        this.newsHub_CarouselContent.click();
    }


/*
METHODS FOR NAVIGATION - NEWSHUB - ARTICLE CONTENTS
*/

    //Open the Article - Share Button
    open_newsHub_Article_ShareButton(){
        this.newsHub_Article_ShareButton.waitForExist();
        this.newsHub_Article_ShareButton.click();
    }

    //Close the Article - Share Button
    close_newsHub_Article_ShareCloseButton(){
        this.newsHub_Article_ShareCloseButton.waitForExist();
        this.newsHub_Article_ShareCloseButton.click();
    }


/*
METHODS FOR VALIDATION - NEWSHUB - ALL TABS
*/

    // Check News Hub - Racing News - Latest Tab
    waitFor_newsHub_LatestTab() {
        this.newsHub_LatestTab.waitForExist();
    }

    //Check News Hub - Racing News - All Star Mile Tab
    waitFor_newsHub_AllStarMileTab() {
        if(!this.newsHub_AllStarMileTab.isVisible()){
        this.newsHub_AllStarMileTab.waitForVisible(5000);
        }
    }

    check_newsHub_AllStarMileTab(){
        expect(this.newsHub_AllStarMileTab.isExisting()).to.equal(true);
    }

    //Check News Hub - Racing News - News Video Tab
    check_newsHub_NewsVideoTab(){
        expect(this.newsHub_NewsVideoTab.isExisting()).to.equal(true);
    }

    //Check News Hub - Racing News - News Video Tab 
    check_newsHub_TipsTab(){
        expect(this.newsHub_TipsTab.isExisting()).to.equal(true);
    }

    //Check News Hub - Racing News - International Tab 
    check_newsHub_InternationalTab(){
        expect(this.newsHub_InternationalTab.isExisting()).to.equal(true);
    }   

    //Check News Hub - Racing News - Breeding Tab 
    check_newsHub_BreedingTab(){
        expect(this.newsHub_BreedingTab.isExisting()).to.equal(true);
    }   

    //Check News Hub - Featured News - Featured Video Tab 
    check_newsHub_FeatureVideosTab(){
        expect(this.newsHub_FeatureVideosTab.isExisting()).to.equal(true);
    }   

    //Check News Hub - Featured News - Opinion Tab 
    check_newsHub_OpinionTab(){
        expect(this.newsHub_OpinionTab.isExisting()).to.equal(true);
    } 



}

export default new NewsHub();