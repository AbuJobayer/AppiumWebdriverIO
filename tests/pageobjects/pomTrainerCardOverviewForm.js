import Page from './page'

class TrainerCardPageOverviewForm extends Page{
/*
***  XPATH FOR NAVIGATION CONTENT ***
*/
    //Xpath for Upcoming Races Tab
    get upcomingRacesTab() {return browser.element("~Upcoming Races");}

    //Xpath for BB Tag inside Upcoming Rraces
    get upcomingRacesBBTag() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]");}

    //Xpath for Horses Tab
    get horsesTab() {return browser.element("~Horses");}

    //Xpath for BB Tag inside Horses tab
    get horsesBBTag() {return browser.element("//android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button");}

    //Xpath for Stats Tab
    get statsTab() {return browser.element("");}

    //Xpath for Form Tab
    get fromTab() {return browser.element("~Form");}

    //Xpath for News & Article Tab
    get newsArticleTab() {return browser.element("~News & Videos");}
   
    //Xpath for 1st race dropdown button
    get firstRaceDropdownButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button/android.widget.TextView");}

    //Xpath for Link to open race
    get openRaceLink() {return browser.element("//android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button[1]/android.view.ViewGroup/android.widget.TextView[2]");}





    //Xpath for 1st race dropdown button Close
    get firstRaceDropdownButton2() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView");}


    //Xpath for BB Tag
    get BBTag() {return browser.element("//android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView");}

    //Xpath for Back Button
    get backButton() {return browser.element("//android.view.ViewGroup/android.view.ViewGroup/android.widget.Button");}

/*
***  XPATH FOR TRAINER CARD - OVERVIEW CONTENT ***
*/

    //Xpath for Trainer Card - Image
    get trainer_Overview_TrainerImage() {return browser.element("//android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView");}

    //Xpath for Trainer Card - First Winner
    get trainer_Overview_FirstWinner() {return browser.element("//android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[1]");}

    //Xpath for Trainer Card - Based
    get trainer_Overview_Based() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView[1]");}

    //Xpath for Trainer Card - Career Starts
    get trainer_Overview_CareerStarts() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[1]");}

    //Xpath for Trainer Card - Career Wins
    get trainer_Overview_CareerWins() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView[1]");}

    //Xpath for Trainer Card - Career Placed
    get trainer_Overview_CareerPlaced() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]");}

    //Xpath for Trainer Card - G1/2/3 Wins
    get trainer_Overview_G123Wins() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.TextView[1]");}

    //Xpath for Trainer Card - Prize
    get trainer_Overview_Prize() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[6]/android.widget.TextView[1]");}

    //Xpath for Trainer Card - Win %
    get trainer_Overview_Win() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[7]/android.widget.TextView[1]");}

    //Xpath for Trainer Card - Place
    get trainer_Overview_Place() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[8]/android.widget.TextView[1]");}

    //Xpath for Trainer Card - Recent Wins
    get trainer_Overview_RecentWin() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[9]/android.widget.TextView[1]");}


/*
***  XPATH FOR TRAINER CARD - FORM TAB CONTENT ***
*/

    //Xpath for Trainer Card - Form - Race No
    get trainer_Form_RaceNo() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[1]");}

    //Xpath for Trainer Card - Form - Race Date
    get trainer_Form_Date() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[2]");}

    //Xpath for Trainer Card - Form - Location Code
    get trainer_Form_LocationCode() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[3]");}

    //Xpath for Trainer Card - Form - Track Distance
    get trainer_Form_Distance() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[4]");}

    //Xpath for Trainer Card - Form - Replay Button
    get trainer_Form_ReplayButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup");}

    //Xpath for Trainer Card - Form - Track name
    get trainer_Form_TrackName() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup");}

    //Xpath for Trainer Card - Form - Horse name
    get trainer_Form_HorseName() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]");}

    //Xpath for Trainer Card - Form - Class
    get trainer_Form_Class() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]");}

    //Xpath for Trainer Card - Form - Prize
    get trainer_Form_Prize() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]");}

    //Xpath for Trainer Card - Form - Condition
    get trainer_Form_Condition() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[6]");}

    //Xpath for Trainer Card - Form - Jockey
    get trainer_Form_Jockey() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[7]");}

    //Xpath for Trainer Card - Form - Weight
    get trainer_Form_Weight() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[8]");}

    //Xpath for Trainer Card - Form - Barrier
    get trainer_Form_Barrier() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[9]");}

    //Get the Y axis of Track name Header
    get yAxisTrackName(){return browser.getLocation('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup', 'y');}


/*
***  METHODS FOR NAVIGATION ***
*/

    open(){
        super.open('path');
    }

    //Define all the methods

    //Click the Upcoming Races Tab
    clickUpcomingRacesTab(){
        this.upcomingRacesTab.waitForExist();
        this.upcomingRacesTab.click();
    }

    //Click the BB Tag
    clickBBTag_UpcomingRacesTab(){
        this.upcomingRacesBBTag.waitForExist();
        this.upcomingRacesBBTag.click();
    }

    //Click the Horses Tab
    clickHorsesTab(){
        this.horsesTab.waitForExist();
        this.horsesTab.click();
    }

     //Click the BB Tag
     clickBBTag_HorsesTab(){
        this.horsesBBTag.waitForExist();
        this.horsesBBTag.click();
    }

    //Click the Stats Tab
    clickStatsTab(){
        this.statsTab.waitForExist();
        this.statsTab.click();
    }
   
     //Click the Forms Tab
     clickFormTab(){
        this.fromTab.waitForExist();
        this.fromTab.click();
    }

     //Click the News & Article Tab
     clickNewsArticleTab(){
        this.newsArticleTab.waitForExist();
        this.newsArticleTab.click();
    }

     //Click 1st race dropdown button
     click1stRaceDropdownButton(){
        this.firstRaceDropdownButton.waitForExist();
        this.firstRaceDropdownButton.click();
    }

     //Open the race details
     clickopenRaceLink(){
        this.openRaceLink.waitForExist();
        this.openRaceLink.click();
    }

    //Close 1st race dropdown button
    close1stRaceDropdownButton(){
        this.firstRaceDropdownButton2.waitForExist();
        this.firstRaceDropdownButton2.click();
    }

    //Click BB Tag
    clickBBTag(){
        this.BBTag.waitForExist();
        this.BBTag.click();
    }

    //Click Back Button
    clickBackButton(){
        this.backButton.waitForExist();
        this.backButton.click();
    }

/*
***  METHODS FOR VALIDATE TRAINER CARD - OVERVIEW ***
*/

    // Check Trainer Card - Trainer Imgae
    waitFor_trainer_Overview_TrainerImage() {
        if(!this.trainer_Overview_TrainerImage.isVisible()){
        this.trainer_Overview_TrainerImage.waitForVisible(5000);
        }
    }
    check_trainer_Overview_TrainerImage(){
    expect(this.trainer_Overview_TrainerImage.isExisting()).to.equal(true);
    }

    // Check Trainer Card - First Winner
    waitFor_trainer_Overview_FirstWinner() {
        if(!this.trainer_Overview_FirstWinner.isVisible()){
        this.trainer_Overview_FirstWinner.waitForVisible(5000);
        }
    }
    check_trainer_Overview_FirstWinner(){
        const Content_trainer_Overview_FirstWinner = this.trainer_Overview_FirstWinner.getText();
        expect(Content_trainer_Overview_FirstWinner).to.equal('First Winner');
    }

    // Check Trainer Card - Based
    waitFor_trainer_Overview_Based() {
        if(!this.trainer_Overview_Based.isVisible()){
        this.trainer_Overview_Based.waitForVisible(5000);
        }
    }
    check_trainer_Overview_Based(){
        const Content_trainer_Overview_Based = this.trainer_Overview_Based.getText();
        expect(Content_trainer_Overview_Based).to.equal('Based');
    }

    // Check Trainer Card - Career Starts
    waitFor_trainer_Overview_CareerStarts() {
        if(!this.trainer_Overview_CareerStarts.isVisible()){
        this.trainer_Overview_CareerStarts.waitForVisible(5000);
        }
    }
    check_trainer_Overview_CareerStarts(){
        const Content_trainer_Overview_CareerStarts = this.trainer_Overview_CareerStarts.getText();
        expect(Content_trainer_Overview_CareerStarts).to.equal('Career Starts');
    }

    // Check Trainer Card - Career Wins
    waitFor_trainer_Overview_CareerWins() {
        if(!this.trainer_Overview_CareerWins.isVisible()){
        this.trainer_Overview_CareerWins.waitForVisible(5000);
        }
    }
    check_trainer_Overview_CareerWins(){
        const Content_trainer_Overview_CareerWins = this.trainer_Overview_CareerWins.getText();
        expect(Content_trainer_Overview_CareerWins).to.equal('Career Wins');
    }

    // Check Trainer Card - Career Placed
    waitFor_trainer_Overview_CareerPlaced() {
        if(!this.trainer_Overview_CareerPlaced.isVisible()){
        this.trainer_Overview_CareerPlaced.waitForVisible(5000);
        }
    }
    check_trainer_Overview_CareerPlaced(){
        const Content_trainer_Overview_CareerPlaced = this.trainer_Overview_CareerPlaced.getText();
        expect(Content_trainer_Overview_CareerPlaced).to.equal('Career Placed');
    }

    // Check Trainer Card - G1/2/3 Wins
    waitFor_trainer_Overview_G123Wins() {
        if(!this.trainer_Overview_G123Wins.isVisible()){
        this.trainer_Overview_G123Wins.waitForVisible(5000);
        }
    }
    check_trainer_Overview_CareerStarts(){
        const Content_trainer_Overview_G123Wins = this.trainer_Overview_G123Wins.getText();
        expect(Content_trainer_Overview_G123Wins).to.equal('G1/2/3 Wins');
    }

    // Check Trainer Card - Prize
    waitFor_trainer_Overview_Prize() {
        if(!this.trainer_Overview_Prize.isVisible()){
        this.trainer_Overview_Prize.waitForVisible(5000);
        }
    }
    check_trainer_Overview_Prize(){
        const Content_trainer_Overview_Prize = this.trainer_Overview_Prize.getText();
        expect(Content_trainer_Overview_Prize).to.equal('Prize');
    }

    // Check Trainer Card - Win %
    waitFor_trainer_Overview_Win() {
        if(!this.trainer_Overview_Win.isVisible()){
        this.trainer_Overview_Win.waitForVisible(5000);
        }
    }
    check_trainer_Overview_Win(){
        const Content_trainer_Overview_Win = this.trainer_Overview_Win.getText();
        expect(Content_trainer_Overview_Win).to.equal('Win %');
    }

    // Check Trainer Card - Place %
    waitFor_trainer_Overview_Place() {
        if(!this.trainer_Overview_Place.isVisible()){
        this.trainer_Overview_Place.waitForVisible(5000);
        }
    }
    check_trainer_Overview_Place(){
        const Content_trainer_Overview_Place = this.trainer_Overview_Place.getText();
        expect(Content_trainer_Overview_Place).to.equal('Place %');
    }

    // Check Trainer Card - Recent Win %
    waitFor_trainer_Overview_RecentWin() {
        if(!this.trainer_Overview_RecentWin.isVisible()){
        this.trainer_Overview_RecentWin.waitForVisible(5000);
        }
    }
    check_trainer_Overview_RecentWin(){
        const Content_trainer_Overview_RecentWin = this.trainer_Overview_RecentWin.getText();
        expect(Content_trainer_Overview_RecentWin).to.equal('Recent Win %');
    }

/*
***  METHODS FOR VALIDATE TRAINER CARD - FORM ***
*/

    // Moving the Trainer - Form - Track Name header up
    moveUp_TrainerForm_TrackName(){
        this.trainer_Form_TrackName.waitForExist();
        this.trainer_Form_TrackName.pause(3000);
        browser.touchAction('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup', [
            'longPress',
            { action: 'moveTo', x: 0, y: (this.yAxisTrackName-550)},
            'release'
        ])
        }


    // Check Trainer Card - Form - Race No
    waitFor_trainer_Form_RaceNo() {
        if(!this.trainer_Form_RaceNo.isVisible()){
        this.trainer_Form_RaceNo.waitForVisible(5000);
        }
    }
    check_trainer_Form_RaceNo(){
    expect(this.trainer_Form_RaceNo.isExisting()).to.equal(true);
    }

    // Check Trainer Card - Form - Race Date
    waitFor_trainer_Form_Date() {
        if(!this.trainer_Form_Date.isVisible()){
        this.trainer_Form_Date.waitForVisible(5000);
        }
    }
    check_trainer_Form_Date(){
    expect(this.trainer_Form_Date.isExisting()).to.equal(true);
    }

    // Check Trainer Card - Form - Location Code
    waitFor_trainer_Form_LocationCode() {
        if(!this.trainer_Form_LocationCode.isVisible()){
        this.trainer_Form_LocationCode.waitForVisible(5000);
        }
    }
    check_trainer_Form_LocationCode(){
    expect(this.trainer_Form_LocationCode.isExisting()).to.equal(true);
    }

    // Check Trainer Card - Form - Track distance
    waitFor_trainer_Form_Distance() {
        if(!this.trainer_Form_Distance.isVisible()){
        this.trainer_Form_Distance.waitForVisible(5000);
        }
    }
    check_trainer_Form_Distance(){
    expect(this.trainer_Form_Distance.isExisting()).to.equal(true);
    }

    // Check Trainer Card - Form - Replay Button 
    waitFor_trainer_Form_ReplayButton() {
        if(!this.trainer_Form_ReplayButton.isVisible()){
        this.trainer_Form_ReplayButton.waitForVisible(5000);
        }
    }
    check_trainer_Form_ReplayButton(){
    expect(this.trainer_Form_ReplayButton.isExisting()).to.equal(true);
    }

    // Check Trainer Card - Form - Track name 
    waitFor_trainer_Form_TrackName() {
        if(!this.trainer_Form_TrackName.isVisible()){
        this.trainer_Form_TrackName.waitForVisible(5000);
        }
    }
    check_trainer_Form_TrackName(){
    expect(this.trainer_Form_TrackName.isExisting()).to.equal(true);
    }

    // Check Trainer Card - Form - Horse name 
    waitFor_trainer_Form_HorseName() {
        if(!this.trainer_Form_HorseName.isVisible()){
        this.trainer_Form_HorseName.waitForVisible(5000);
        }
    }
    check_trainer_Form_HorseName(){
    expect(this.trainer_Form_HorseName.isExisting()).to.equal(true);
    }

    // Check Trainer Card - Form - Class 
    waitFor_trainer_Form_Class() {
        if(!this.trainer_Form_Class.isVisible()){
        this.trainer_Form_Class.waitForVisible(5000);
        }
    }
    check_trainer_Form_Class(){
    expect(this.trainer_Form_Class.isExisting()).to.equal(true);
    }

    // Check Trainer Card - Form - Prize 
    waitFor_trainer_Form_Prize() {
        if(!this.trainer_Form_Prize.isVisible()){
        this.trainer_Form_Prize.waitForVisible(5000);
        }
    }
    check_trainer_Form_Prize(){
    expect(this.trainer_Form_Prize.isExisting()).to.equal(true);
    }

    // Check Trainer Card - Form - Condition 
    waitFor_trainer_Form_Condition() {
        if(!this.trainer_Form_Condition.isVisible()){
        this.trainer_Form_Condition.waitForVisible(5000);
        }
    }
    check_trainer_Form_Condition(){
    expect(this.trainer_Form_Condition.isExisting()).to.equal(true);
    }

    // Check Trainer Card - Form - Jockey 
    waitFor_trainer_Form_Jockey() {
        if(!this.trainer_Form_Jockey.isVisible()){
        this.trainer_Form_Jockey.waitForVisible(5000);
        }
    }
    check_trainer_Form_Jockey(){
    expect(this.trainer_Form_Jockey.isExisting()).to.equal(true);
    }

    // Check Trainer Card - Form - Weight 
    waitFor_trainer_Form_Weight() {
        if(!this.trainer_Form_Weight.isVisible()){
        this.trainer_Form_Jockey.waitForVisible(5000);
        }
    }
    check_trainer_Form_Weight(){
    expect(this.trainer_Form_Weight.isExisting()).to.equal(true);
    }

    // Check Trainer Card - Form - Barrier 
    waitFor_trainer_Form_Barrier() {
        if(!this.trainer_Form_Barrier.isVisible()){
        this.trainer_Form_Barrier.waitForVisible(5000);
        }
    }
    check_trainer_Form_Barrier(){
    expect(this.trainer_Form_Barrier.isExisting()).to.equal(true);
    }


}

export default new TrainerCardPageOverviewForm();