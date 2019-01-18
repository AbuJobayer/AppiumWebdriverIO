import Page from './page'
//import expect from 'Chai'

class JockeyOverviewForm extends Page{

  

    //Accessibility ID for Upcoming Races Tab
    get upcomingRacesTab() {return browser.element("~Upcoming Races");}

    //Xpath for Stats Tab
    get statsTab() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView");}

    //Accessibility ID for News & Articles Tab
    get newsArticleTab() {return browser.element("~News & Videos");}

    //Accessibility ID for Form Tab
    get formTab() {return browser.element("~Form");}

    //Xpath for Back Button
    get backButton() {return browser.element("//android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView");}

    /* 
     *****  ALL THE LOCATORS FOR THE VALIDATION  *****
    */

    /* 
     *****  LOCATORS FOR JOCKEY OVERVIEW (TOP)  *****
    */

    //Xpath for thumb image
    get jockeyThumbImage() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView");}

   //Xpath for Jockey Name
   get jockeyName() {return browser.element("//android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView");}

   //Xpath for Most rides for
   get mostRideForTag() {return browser.element("");}

   //Xpath for First ride
   get firstRideTag() {return browser.element("");}

   //Xpath for Base
   get baseTag() {return browser.element("");}

   //Text content for Base tag
   get baseContent() {return browser.getText("");}


    //Xpath for Career Starts
    get careerStartsTag() {return browser.element("");}

    //Content for Career Starts
    get careerStartsTagContent() {return browser.getText("");}

    //Xpath for Career Wins
    get careerWinsTag() {return browser.element("");}

    //Xpath for G1/2/3 Wins
    get G123WinsTag() {return browser.element("");}

    //Xpath for Prize
    get prizeTag() {return browser.element("");}

    //Xpath for Win %
    get winsTag() {return browser.element("");}

    //Xpath for Place %
    get placeTag() {return browser.element("");}

    //Xpath for Recent Win%
    get recentWinTag() {return browser.element("");}


    /* 
     *****  LOCATORS FOR JOCKEY FORM TAB  *****
    */

   //Y Axis for Form Tab
   get Y_Axis_FormTab(){return browser.getLocation('~Form', 'y');}


    //Xpath for Form - Full Replay Button
    get jockeyFormTab_FullReplayButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button[2]/android.view.ViewGroup");}

    //Xpath for Form - Stewards Button
    get jockeyFormTab_StewardsButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button[3]/android.view.ViewGroup");}

    //Xpath for Form - Last 400 Button
    get jockeyFormTab_Last400Button() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button[4]/android.view.ViewGroup");}

    //Xpath for Form - Race 1st Row
    get form_RaceFirstRow() {return browser.element("");}

    //Xpath for Form - Jockey No
    get form_JockeyNo() {return browser.element("");}

    //Xpath for Form - Meeting Date
    get form_MeetingDate() {return browser.element("");}

    //Xpath for Form - Meeting Location Code
    get form_MeetingLocationCode() {return browser.element("");}

    //Xpath for Form - Track Distance
    get form_TrackDistance() {return browser.element("");}

    //Xpath for Form - Replay Button
    get form_ReplayButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.Button[1]");}

    //Xpath for Form - Race Dropdown Button
    get form_RaceDropdownButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button[2]/android.widget.TextView");}

    //Xpath for Form - 1st Race Track Name
    get form_FirstRace_TrackName() {return browser.element("");}

    //Xpath for Form - 1st Race Horse Name
    get form_FirstRace_HorseName () {return browser.element("");}

    //Xpath for Form - 1st Race Class
    get form_FirstRace_Class() {return browser.element("");}

    //Xpath for Form - 1st Race Prize
    get form_FirstRace_Prize() {return browser.element("");}

    //Xpath for Form - 1st Race Condition
    get form_FirstRace_Condition() {return browser.element("");}


    /* 
     *****  LOCATORS FOR UPCOMING RACES TAB  *****
    */

    //Xpath for Upcoming Races - 1st Race Button
    get upcomingTab_1stRaceButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.Button");}


    /* 
     *****  LOCATORS FOR NEWS & VIDEOS TAB  *****
    */

    //Xpath for News & Video - 1st Video
    get newsVideoTab_1stVideo() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.Button/android.view.ViewGroup[1]");}


    open(){
        super.open('path');
    }

    /* 
     *****  METHODS FOR VALIDATION JOCKEY OVERVIEW (TOP) *****
    */

// Check Jockey's thumbimage
waitForJockeyThumbImage() {
    this.jockeyThumbImage.waitForExist();
  }


// Check Jockey's name
waitForJockeyName() {
    if(!this.jockeyName.isVisible()){
      this.jockeyName.waitForVisible(5000);
    }
  }

  checkJockeyName(){
  expect(this.jockeyName.isExisting()).to.equal(true);
}

// Check Jockey's Most ride for tag
waitForMostRideForTag() {
    if(!this.mostRideForTag.isVisible()){
      this.mostRideForTag.waitForVisible(5000);
    }
  }

  checkMostRideForTag(){
  expect(this.mostRideForTag.isExisting()).to.equal(true);
}


// Check Jockey's First ride for tag
waitForFirstRideTag() {
    if(!this.firstRideTag.isVisible()){
      this.firstRideTag.waitForVisible(5000);
    }
  }

  checkFirstRideTag(){
  expect(this.firstRideTag.isExisting()).to.equal(true);
}


// Check Jockey's Base
waitForBaseTag() {
    if(!this.baseTag.isVisible()){
      this.baseTag.waitForVisible(5000);
    }
  }

  checkBaseTag(){
      expect(this.baseContent).to.equal('Base');
}

// Check Jockey's Career Starts
waitForCareerStartsTag() {
    if(!this.careerStartsTag.isVisible()){
      this.careerStartsTag.waitForVisible(5000);
    }
  }

  checkCareerStartsTag(){
      expect(this.careerStartsTagContent).to.equal('Career Starts');
}

// Check Jockey's Career Wins Tag
waitForCareerWinsTag() {
    if(!this.careerWinsTag.isVisible()){
      this.careerWinsTag.waitForVisible(5000);
    }
  }

  checkCareerWinsTag(){
      const careerWinsTagContent = this.careerWinsTag.getText();
      expect(careerWinsTagContent).to.equal('Career Wins');
}

// Check Jockey's G1/2/3 Wins Tag
waitForG123WinsTag() {
    if(!this.G123WinsTag.isVisible()){
      this.G123WinsTag.waitForVisible(5000);
    }
  }

  checkG123WinsTag(){
      const G123WinsTagContent = this.G123WinsTag.getText();
      expect(G123WinsTagContent).to.equal('G1 Wins');
}

// Check Jockey's Prize Tag
waitForPrizeTag() {
    if(!this.prizeTag.isVisible()){
      this.prizeTag.waitForVisible(5000);
    }
  }
  checkPrizeTag(){
      const prizeTagContent = this.prizeTag.getText();
      expect(prizeTagContent).to.equal('Prize');
}

// Check Jockey's Wins Tag
waitForWinsTag() {
    if(!this.winsTag.isVisible()){
      this.winsTag.waitForVisible(5000);
    }
  }

  checkWinsTag(){
      const winsTagContent = this.winsTag.getText();
      expect(winsTagContent).to.equal('Win %');
}

// Check Jockey's Place Tag
waitForPlaceTag() {
    if(!this.placeTag.isVisible()){
      this.placeTag.waitForVisible(5000);
    }
  }

  checkPlaceTag(){
      const placeTagContent = this.placeTag.getText();
      expect(placeTagContent).to.equal('Place %');
}

// Check Jockey's Place Tag
waitForRecentWinTag() {
    if(!this.recentWinTag.isVisible()){
      this.recentWinTag.waitForVisible(5000);
    }
  }

  checkRecentWinTag(){
      const recentWinTagContent = this.recentWinTag.getText();
      expect(recentWinTagContent).to.equal('Recent Win %');
}

    /* 
     *****  METHODS FOR VALIDATION JOCKEY - FORM TAB *****
    */

    // Check Jockey - Form - 1st Row
    waitFor_form_RaceFirstRow() {
        this.form_RaceFirstRow.waitForExist();
        }


    check_form_RaceFirstRow(){
    expect(this.form_RaceFirstRow.isExisting()).to.equal(true);
    }

    // Check Jockey - Form - 1st Race - Jockey No
    waitFor_form_JockeyNo() {
        this.form_JockeyNo.waitForExist();
    }

    check_form_JockeyNo(){
    expect(this.form_JockeyNo.isExisting()).to.equal(true);
    }

    // Check Jockey - Form - 1st Race - Meeting Date
    waitFor_form_MeetingDate() {
        if(!this.form_MeetingDate.isVisible()){
        this.form_MeetingDate.waitForVisible(5000);
        }
    }
    check_form_MeetingDate(){
    expect(this.form_MeetingDate.isExisting()).to.equal(true);
    }

    // Check Jockey - Form - 1st Race - Meeting Location Code
    waitFor_form_MeetingLocationCode() {
        if(!this.form_MeetingLocationCode.isVisible()){
        this.form_MeetingLocationCode.waitForVisible(5000);
        }
    }
    
    check_form_MeetingLocationCode(){
    expect(this.form_MeetingLocationCode.isExisting()).to.equal(true);
    }

    // Check Jockey - Form - 1st Race - Track Distance
    waitFor_form_TrackDistance() {
        if(!this.form_TrackDistance.isVisible()){
        this.form_TrackDistance.waitForVisible(5000);
        }
    }
    
    check_form_TrackDistance(){
    expect(this.form_TrackDistance.isExisting()).to.equal(true);
    }

    // Check Jockey - Form - 1st Race - Replay Button
    waitFor_form_ReplayButton() {
        if(!this.form_ReplayButton.isVisible()){
        this.form_ReplayButton.waitForVisible(5000);
        }
    }
    
    check_form_ReplayButton(){
    expect(this.form_ReplayButton.isExisting()).to.equal(true);
    }

    // Check Jockey - Form - 1st Race - Dropdown Button
    waitFor_form_RaceDropdownButton() {
        if(!this.form_RaceDropdownButton.isVisible()){
        this.form_RaceDropdownButton.waitForVisible(5000);
        }
    }
    
    check_form_RaceDropdownButton(){
    expect(this.form_RaceDropdownButton.isExisting()).to.equal(true);
    }

    // Check Jockey - Form - 1st Race - Track name
    waitFor_form_FirstRace_TrackName() {
        if(!this.form_FirstRace_TrackName.isVisible()){
        this.form_FirstRace_TrackName.waitForVisible(5000);
        }
    }
    check_form_FirstRace_TrackName(){
    expect(this.form_RaceDropdownButton.isExisting()).to.equal(true);
    }

    // Check Jockey - Form - 1st Race - Horse name
    waitFor_form_FirstRace_HorseName() {
        if(!this.form_FirstRace_HorseName.isVisible()){
        this.form_FirstRace_HorseName.waitForVisible(5000);
        }
    }
    check_form_FirstRace_HorseName(){
    expect(this.form_FirstRace_HorseName.isExisting()).to.equal(true);
    }

    // Check Jockey - Form - 1st Race - Class
    waitFor_form_FirstRace_Class() {
        if(!this.form_FirstRace_Class.isVisible()){
        this.form_FirstRace_Class.waitForVisible(5000);
        }
    }
    check_form_FirstRace_Class(){
    expect(this.form_FirstRace_Class.isExisting()).to.equal(true);
    }

    // Check Jockey - Form - 1st Race - Prize
    waitFor_form_FirstRace_Prize() {
        if(!this.form_FirstRace_Prize.isVisible()){
        this.form_FirstRace_Prize.waitForVisible(5000);
        }
    }
    check_form_FirstRace_Prize(){
    expect(this.form_FirstRace_Prize.isExisting()).to.equal(true);
    }

    // Check Jockey - Form - 1st Race - Condition
    waitFor_form_FirstRace_Condition() {
        if(!this.form_FirstRace_Condition.isVisible()){
        this.form_FirstRace_Condition.waitForVisible(5000);
        }
    }
    check_form_FirstRace_Condition(){
    expect(this.form_FirstRace_Condition.isExisting()).to.equal(true);
    }



    /* 
     *****  ALL THE METHODS FOR NAVIGATION *****
    */

    //Click the Upcoming Races Tab
    clickUpcomingRacesTab(){
        this.upcomingRacesTab.waitForExist();
        this.upcomingRacesTab.click();
    }

    //Click the Stats Tab
    clickStatsTab(){
        this.statsTab.waitForExist();
        this.statsTab.click();
    }

    //Click the News & Articles Tab
    clickNewsArticleTab(){
        this.newsArticleTab.waitForExist();
        this.newsArticleTab.click();
    }

    //Click the Form Tab
    clickFormTab(){
        // this.formTab.waitForExist();
        this.formTab.click();
     }

    //Click 1st Race dropdown button
    click_form_RaceDropdownButton(){
        this.form_RaceDropdownButton.click();
    }

    //Click BB Tag
    clickBBTag(){
        this.BBTab.waitForExist();
        this.BBTab.click();
    }

    //Click Back Button
    clickBackButton(){
        this.backButton.waitForExist();
        this.backButton.click();
    }

    //Click the Replay Button from 1st race
    click_form_ReplayButton(){
        this.form_ReplayButton.waitForExist();
        this.form_ReplayButton.click();
    }

//    //Refresh the Page
//    get_AppPageSource(){
//     browser.source();
//    }

   //Go back from mobile
   goback_MobileApp(){
    browser.back();
}

    // Move up the screen by Form Tab
    move_FormTab_Up(){
        this.formTab.waitForExist();
        browser.touchAction('~Form', ['longPress', {action: 'moveTo', x: 0, y: (this.Y_Axis_FormTab-400)}, 'release']);
        }

    //Click the Full Replay Button from 1st race
    click_jockeyFormTab_FullReplayButton(){
        this.jockeyFormTab_FullReplayButton.waitForExist();
        this.jockeyFormTab_FullReplayButton.click();
    }

    //Click the Stewards Button from 1st race
    click_jockeyFormTab_StewardsButton(){
        this.jockeyFormTab_StewardsButton.waitForExist();
        this.jockeyFormTab_StewardsButton.click();
    }

    //Click the Last 400 Button from 1st race
    click_jockeyFormTab_Last400Button(){
        this.jockeyFormTab_Last400Button.waitForExist();
        this.jockeyFormTab_Last400Button.click();
    }

    //Click on the Upcoing Races Tab - 1st Race
    click_upcomingTab_1stRaceButton(){
        this.upcomingTab_1stRaceButton.waitForExist();
        this.upcomingTab_1stRaceButton.click();
    }

    //Click on the News & Videos Tab - 1st Video
    click_newsVideoTab_1stVideo(){
        this.newsVideoTab_1stVideo.waitForExist();
        this.newsVideoTab_1stVideo.click();
    }


    
}


export default new JockeyOverviewForm();