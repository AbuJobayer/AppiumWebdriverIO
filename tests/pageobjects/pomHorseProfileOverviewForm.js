import Page from './page'

class HorseProfileOverviewForm extends Page{

    /*
    ***  XPATH FOR NAVIGATION ***
    */


    //Xpath for Owners Dropdown Button
    get ownersDropdownButton() {return browser.element("//android.view.ViewGroup[10]/android.widget.Button/android.view.ViewGroup");}

    //Xpath for Owners Dropdown Button
    get careerDropdownButton() {return browser.element("//android.view.ViewGroup[11]/android.widget.Button/android.view.ViewGroup");}

    //Xpath for Upcoming Races Tab
    get upcomingRacesTab() {return browser.element("~Upcoming Races");}

    //Xpath for BB Tag inside Upcoming Races Tab
    get upcomingRacesBBTag() {return browser.element("//android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button");}

    //Xpath for States Tab
    get statsTab() {return browser.element("");}

    //Xpath for News & Articles Tab
    get newsTab() {return browser.element("~News & Videos");}

    //Xpath for Form Tab
    get formTab() {return browser.element("~Form");}

    //Xpath for 1st Race dropdown button
    get firstRaceDropdownButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button");}

    //Xpath for 1st Race dropdown button
    get firstRaceDropdownButton2() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.Button");}


    //Xpath for BB Tag
    get BBTag() {return browser.element("//android.view.ViewGroup[1]/android.view.ViewGroup[3]/android.widget.Button");}

    //Xpath for Back Button
    get backButton() {return browser.element("//android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]");}

    //Xpath for Horse Profile's Tabs header and X Axis Location and Y Axis Location
    get horseProfile_TabsHeader() {return browser.element("");} 
    get horseProfile_X_Location_TabHeader(){return browser.getLocation('', 'x');}
    get horseProfile_Y_Location_TabHeader(){return browser.getLocation('', 'y');}


 /*
    ***  XPATH FOR HORSE PROFILE - OVERVIEW (TOP) ***
 */

   //Xpath for Jersey
   get horseProfile_Overview_Jersey() {return browser.element("//android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView");}

    //Xpath for Horse name
    get horseProfile_Overview_HorseName() {return browser.element("//android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[1]");}

    //Xpath for Trainer name
    get horseProfile_Overview_TrainerName() {return browser.element("//android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[3]");}

    //Xpath for Breed
    get horseProfile_Overview_Breed() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[2]");}

    //Xpath for Foaled
    get horseProfile_Overview_Foaled() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.TextView[1]");}

    //Xpath for Age
    get horseProfile_Overview_Age() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[3]/android.widget.TextView[1]");}

    //Xpath for Sex
    get horseProfile_Overview_Sex() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.TextView[1]");}

    //Xpath for Colour
    get horseProfile_Overview_Colour() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[5]/android.widget.TextView[1]");}

    //Xpath for Last 5
    get horseProfile_Overview_Last5() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[6]/android.widget.TextView[1]");}

    //Xpath for Rating
    get horseProfile_Overview_Rating() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[7]/android.widget.TextView[1]");}

    //Xpath for G 1/2/3 Wins
    get horseProfile_Overview_G123Wins() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[8]/android.widget.TextView[1]");}

    //Xpath for Prize
    get horseProfile_Overview_Prize() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[9]/android.widget.TextView[1]");}

    //Xpath for Owner Content
    get horseProfile_Overview_OwnerContent() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[10]/android.widget.Button/android.view.ViewGroup/android.widget.TextView[2]");}


 /*
    ***  XPATH FOR HORSE PROFILE - CAREER CONTENT ***
 */

    //Xpath for Career - This Sseason
    get horseProfile_Career_ThisSeason() {return browser.element("//android.view.ViewGroup[11]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView[1]");}

    //Xpath for Career - GRP Listed
    get horseProfile_Career_GRPListed() {return browser.element("//android.view.ViewGroup[11]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[1]");}

    //Xpath for Career - Jump
    get horseProfile_Career_Jumps() {return browser.element("//android.view.ViewGroup[11]/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView[1]");}

    //Xpath for Career - Synth
    get horseProfile_Career_Synth() {return browser.element("//android.view.ViewGroup[11]/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]");}

    //Xpath for Career - Firm
    get horseProfile_Career_Firm() {return browser.element("//android.view.ViewGroup[11]/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.TextView[1]");}

    //Xpath for Career - Good
    get horseProfile_Career_Good() {return browser.element("//android.view.ViewGroup[11]/android.view.ViewGroup/android.view.ViewGroup[6]/android.widget.TextView[1]");}

    //Xpath for Career - Soft
    get horseProfile_Career_Soft() {return browser.element("//android.view.ViewGroup[11]/android.view.ViewGroup/android.view.ViewGroup[7]/android.widget.TextView[1]");}

    //Xpath for Career - Heavy
    get horseProfile_Career_Heavy() {return browser.element("//android.view.ViewGroup[11]/android.view.ViewGroup/android.view.ViewGroup[8]/android.widget.TextView[1]");}

    //Xpath for Career - 1st up
    get horseProfile_Career_1stUp() {return browser.element("//android.view.ViewGroup[11]/android.view.ViewGroup/android.view.ViewGroup[9]/android.widget.TextView[1]");}

    //Xpath for Career - 2nd up
    get horseProfile_Career_2ndUp() {return browser.element("//android.view.ViewGroup[11]/android.view.ViewGroup/android.view.ViewGroup[10]/android.widget.TextView[1]");}

    //Xpath for Career - 3rd up
    get horseProfile_Career_3rdUp() {return browser.element("//android.view.ViewGroup[11]/android.view.ViewGroup/android.view.ViewGroup[11]/android.widget.TextView[1]");}


 /*
    ***  XPATH FOR HORSE PROFILE - FORM TAB ***
 */

    //Xpath for Form - Race no
    get horseProfile_Form_RaceNo() {return browser.element("//android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]");}

    //Xpath for Form - Race date
    get horseProfile_Form_RaceDate() {return browser.element("//android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]");}

    //Xpath for Form - Location Code
    get horseProfile_Form_LocationCode() {return browser.element("//android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[3]");}

    //Xpath for Form - Track Distance
    get horseProfile_Form_TrackDistance() {return browser.element("//android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[4]");}

    //Xpath for Form - Form - Dropdown Button
    get horseProfile_Form_DropdownButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button[2]");}
 
    //Xpath for Form - Form - Class
    get horseProfile_Form_Class() {return browser.element("//android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.widget.TextView[1]");}
 
    //Xpath for Form - Form - Prize
    get horseProfile_Form_Prize() {return browser.element("//android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.TextView[1]");}
 
    //Xpath for Form - Form - Condition
    get horseProfile_Form_Condition() {return browser.element("//android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.widget.TextView[1]");}
 





    open(){
        super.open('path');
    }

/*
    ***  DEFINE ALL THE METHODS ***
*/

/*
    *** METHODS FOR VALIDATION HORSE PROFILE - OVERVIEW ***
*/

    // Check Horse Profile - Jersey
    waitFor_horseProfile_Overview_Jersey() {
        this.horseProfile_Overview_Jersey.waitForExist();
    }

    check_horseProfile_Overview_Jersey(){
        expect(this.horseProfile_Overview_Jersey.isExisting()).to.equal(true);
        }

    // Check Horse Profile - Horse name
    waitFor_horseProfile_Overview_HorseName() {
        if(!this.horseProfile_Overview_HorseName.isVisible()){
        this.horseProfile_Overview_HorseName.waitForVisible(5000);
        }
    }
    check_horseProfile_Overview_HorseName(){
        expect(this.horseProfile_Overview_HorseName.isExisting()).to.equal(true);
        }

    // Check Horse Profile - Trainer name
    waitFor_horseProfile_Overview_TrainerName() {
        if(!this.horseProfile_Overview_TrainerName.isVisible()){
        this.horseProfile_Overview_TrainerName.waitForVisible(5000);
        }
    }
    check_horseProfile_Overview_TrainerName(){
        expect(this.horseProfile_Overview_TrainerName.isExisting()).to.equal(true);
        }

    // Check Horse Profile - Breed
    waitFor_horseProfile_Overview_Breed() {
        if(!this.horseProfile_Overview_Breed.isVisible()){
        this.horseProfile_Overview_Breed.waitForVisible(5000);
        }
    }
    check_horseProfile_Overview_Breed(){
        expect(this.horseProfile_Overview_Breed.isExisting()).to.equal(true);
        }

    // Check Horse Profile - Foaled
    waitFor_horseProfile_Overview_Foaled() {
        if(!this.horseProfile_Overview_Foaled.isVisible()){
        this.horseProfile_Overview_Foaled.waitForVisible(5000);
        }
    }
    check_horseProfile_Overview_Foaled(){
        const Content_horseProfile_Overview_Foaled = this.horseProfile_Overview_Foaled.getText();
        expect(Content_horseProfile_Overview_Foaled).to.equal('Foaled');
    }

    // Check Horse Profile - Age
    waitFor_horseProfile_Overview_Age() {
        if(!this.horseProfile_Overview_Age.isVisible()){
        this.horseProfile_Overview_Age.waitForVisible(5000);
        }
    }
    check_horseProfile_Overview_Age(){
        const Content_horseProfile_Overview_Age = this.horseProfile_Overview_Age.getText();
        expect(Content_horseProfile_Overview_Age).to.equal('Age');
    }

    // Check Horse Profile - Sex
    waitFor_horseProfile_Overview_Sex() {
        if(!this.horseProfile_Overview_Sex.isVisible()){
        this.horseProfile_Overview_Sex.waitForVisible(5000);
        }
    }
    check_horseProfile_Overview_Sex(){
        const Content_horseProfile_Overview_Sex = this.horseProfile_Overview_Sex.getText();
        expect(Content_horseProfile_Overview_Sex).to.equal('Sex');
    }

    // Check Horse Profile - Colour
    waitFor_horseProfile_Overview_Colour() {
        if(!this.horseProfile_Overview_Colour.isVisible()){
        this.horseProfile_Overview_Colour.waitForVisible(5000);
        }
    }
    check_horseProfile_Overview_Colour(){
        const Content_horseProfile_Overview_Colour = this.horseProfile_Overview_Colour.getText();
        expect(Content_horseProfile_Overview_Colour).to.equal('Colour');
    }

    // Check Horse Profile - Last 5
    waitFor_horseProfile_Overview_Last5() {
        if(!this.horseProfile_Overview_Last5.isVisible()){
        this.horseProfile_Overview_Last5.waitForVisible(5000);
        }
    }
    check_horseProfile_Overview_Last5(){
        const Content_horseProfile_Overview_Last5 = this.horseProfile_Overview_Last5.getText();
        expect(Content_horseProfile_Overview_Last5).to.equal('Last 5');
    }

    // Check Horse Profile - Rating
    waitFor_horseProfile_Overview_Rating() {
        if(!this.horseProfile_Overview_Rating.isVisible()){
        this.horseProfile_Overview_Rating.waitForVisible(5000);
        }
    }
    check_horseProfile_Overview_Rating(){
        const Content_horseProfile_Overview_Rating = this.horseProfile_Overview_Rating.getText();
        expect(Content_horseProfile_Overview_Rating).to.equal('Rating');
    }

    // Check Horse Profile - Rating
    waitFor_horseProfile_Overview_Rating() {
        if(!this.horseProfile_Overview_Rating.isVisible()){
        this.horseProfile_Overview_Rating.waitForVisible(5000);
        }
    }
    check_horseProfile_Overview_Rating(){
        const Content_horseProfile_Overview_Rating = this.horseProfile_Overview_Rating.getText();
        expect(Content_horseProfile_Overview_Rating).to.equal('Rating');
    }

    // Check Horse Profile - G1/2/3 Wins
    waitFor_horseProfile_Overview_G123Wins() {
        if(!this.horseProfile_Overview_G123Wins.isVisible()){
        this.horseProfile_Overview_G123Wins.waitForVisible(5000);
        }
    }
    check_horseProfile_Overview_G123Wins(){
        const Content_horseProfile_Overview_G123Wins = this.horseProfile_Overview_G123Wins.getText();
        expect(Content_horseProfile_Overview_G123Wins).to.equal('G1 Wins');
    }

    // Check Horse Profile - Prize
    waitFor_horseProfile_Overview_Prize() {
        if(!this.horseProfile_Overview_Prize.isVisible()){
        this.horseProfile_Overview_Prize.waitForVisible(5000);
        }
    }
    check_horseProfile_Overview_Prize(){
        const Content_horseProfile_Overview_Prize = this.horseProfile_Overview_Prize.getText();
        expect(Content_horseProfile_Overview_Prize).to.equal('Prize');
    }

    // Check Horse Profile - Owner Content
    waitFor_horseProfile_Overview_OwnerContent() {
        this.horseProfile_Overview_OwnerContent.waitForExist();
    }

    check_horseProfile_Overview_OwnerContent(){
        expect(this.horseProfile_Overview_OwnerContent.isExisting()).to.equal(true);
        }

/*
    *** METHODS FOR VALIDATION HORSE PROFILE - OVERVIEW - CAREER CONTENTS ***
*/

    // Check Horse Profile - Career - This Season
    waitFor_horseProfile_Career_ThisSeason() {
        this.horseProfile_Career_ThisSeason.waitForExist();
        }
    
    check_horseProfile_Career_ThisSeason(){
        const Content_horseProfile_Career_ThisSeason = this.horseProfile_Career_ThisSeason.getText();
        expect(Content_horseProfile_Career_ThisSeason).to.equal('This Season');
    }

    // Check Horse Profile - Career - GRP & Listed
    waitFor_horseProfile_Career_GRPListed() {
        if(!this.horseProfile_Career_GRPListed.isVisible()){
        this.horseProfile_Career_GRPListed.waitForVisible(5000);
        }
    }
    check_horseProfile_Career_GRPListed(){
        const Content_horseProfile_Career_GRPListed = this.horseProfile_Career_GRPListed.getText();
        expect(Content_horseProfile_Career_GRPListed).to.equal('GRP & Listed');
    }

    // Check Horse Profile - Career - Jumps
    waitFor_horseProfile_Career_Jumps() {
        if(!this.horseProfile_Career_Jumps.isVisible()){
        this.horseProfile_Career_Jumps.waitForVisible(5000);
        }
    }
    check_horseProfile_Career_Jumps(){
        const Content_horseProfile_Career_Jumps = this.horseProfile_Career_Jumps.getText();
        expect(Content_horseProfile_Career_Jumps).to.equal('Jumps');
    }

    // Check Horse Profile - Career - Synth
    waitFor_horseProfile_Career_Synth() {
        if(!this.horseProfile_Career_Synth.isVisible()){
        this.horseProfile_Career_Synth.waitForVisible(5000);
        }
    }
    check_horseProfile_Career_Synth(){
        const Content_horseProfile_Career_Synth = this.horseProfile_Career_Synth.getText();
        expect(Content_horseProfile_Career_Synth).to.equal('Synth');
    }

    // Check Horse Profile - Career - Firm
    waitFor_horseProfile_Career_Firm() {
        if(!this.horseProfile_Career_Firm.isVisible()){
        this.horseProfile_Career_Firm.waitForVisible(5000);
        }
    }
    check_horseProfile_Career_Firm(){
        const Content_horseProfile_Career_Firm = this.horseProfile_Career_Firm.getText();
        expect(Content_horseProfile_Career_Firm).to.equal('Firm');
    }

    // Check Horse Profile - Career - Good
    waitFor_horseProfile_Career_Good() {
        if(!this.horseProfile_Career_Good.isVisible()){
        this.horseProfile_Career_Good.waitForVisible(5000);
        }
    }
    check_horseProfile_Career_Good(){
        const Content_horseProfile_Career_Good = this.horseProfile_Career_Good.getText();
        expect(Content_horseProfile_Career_Good).to.equal('Good');
    }

    // Check Horse Profile - Career - Soft
    waitFor_horseProfile_Career_Soft() {
        if(!this.horseProfile_Career_Soft.isVisible()){
        this.horseProfile_Career_Soft.waitForVisible(5000);
        }
    }
    check_horseProfile_Career_Soft(){
        const Content_horseProfile_Career_Soft = this.horseProfile_Career_Soft.getText();
        expect(Content_horseProfile_Career_Soft).to.equal('Soft');
    }

    // Check Horse Profile - Career - Heavy
    waitFor_horseProfile_Career_Heavy() {
        if(!this.horseProfile_Career_Heavy.isVisible()){
        this.horseProfile_Career_Heavy.waitForVisible(5000);
        }
    }
    check_horseProfile_Career_Heavy(){
        const Content_horseProfile_Career_Heavy = this.horseProfile_Career_Heavy.getText();
        expect(Content_horseProfile_Career_Heavy).to.equal('Heavy');
    }

    // Check Horse Profile - Career - 1st Up
    waitFor_horseProfile_Career_1stUp() {
        if(!this.horseProfile_Career_1stUp.isVisible()){
        this.horseProfile_Career_1stUp.waitForVisible(5000);
        }
    }
    check_horseProfile_Career_1stUp(){
        const Content_horseProfile_Career_1stUp = this.horseProfile_Career_1stUp.getText();
        expect(Content_horseProfile_Career_1stUp).to.equal('1st Up');
    }


    // Check Horse Profile - Career - 2nd Up
    waitFor_horseProfile_Career_2ndUp() {
        if(!this.horseProfile_Career_2ndUp.isVisible()){
        this.horseProfile_Career_2ndUp.waitForVisible(5000);
        }
    }
    check_horseProfile_Career_2ndUp(){
        const Content_horseProfile_Career_2ndUp = this.horseProfile_Career_2ndUp.getText();
        expect(Content_horseProfile_Career_2ndUp).to.equal('2nd Up');
    }

    // Check Horse Profile - Career - 3rd Up
    waitFor_horseProfile_Career_3rdUp() {
        if(!this.horseProfile_Career_3rdUp.isVisible()){
        this.horseProfile_Career_3rdUp.waitForVisible(5000);
        }
    }
    check_horseProfile_Career_3rdUp(){
        const Content_horseProfile_Career_3rdUp = this.horseProfile_Career_3rdUp.getText();
        expect(Content_horseProfile_Career_3rdUp).to.equal('3rd Up');
    }


/*
    *** METHODS FOR VALIDATION HORSE PROFILE - FORM ***
*/

    // Check Horse Profile - Form - Race no
    waitFor_horseProfile_Form_RaceNo() {
        this.horseProfile_Form_RaceNo.waitForExist();
    }

    check_horseProfile_Form_RaceNo(){
        expect(this.horseProfile_Form_RaceNo.isExisting()).to.equal(true);
        }

    // Check Horse Profile - Form - Race date
    waitFor_horseProfile_Form_RaceDate() {
        if(!this.horseProfile_Form_RaceDate.isVisible()){
        this.horseProfile_Form_RaceDate.waitForVisible(5000);
        }
    }
    check_horseProfile_Form_RaceDate(){
        expect(this.horseProfile_Form_RaceDate.isExisting()).to.equal(true);
        }

    // Check Horse Profile - Form - Location Code
    waitFor_horseProfile_Form_LocationCode() {
        if(!this.horseProfile_Form_LocationCode.isVisible()){
        this.horseProfile_Form_LocationCode.waitForVisible(5000);
        }
    }
    check_horseProfile_Form_LocationCode(){
        expect(this.horseProfile_Form_LocationCode.isExisting()).to.equal(true);
        }

    // Check Horse Profile - Form - Location Code
    waitFor_horseProfile_Form_LocationCode() {
        if(!this.horseProfile_Form_LocationCode.isVisible()){
        this.horseProfile_Form_LocationCode.waitForVisible(5000);
        }
    }
    check_horseProfile_Form_LocationCode(){
        expect(this.horseProfile_Form_LocationCode.isExisting()).to.equal(true);
        }

    // Check Horse Profile - Form - Track Distance
    waitFor_horseProfile_Form_TrackDistance() {
        if(!this.horseProfile_Form_TrackDistance.isVisible()){
        this.horseProfile_Form_TrackDistance.waitForVisible(5000);
        }
    }
    check_horseProfile_Form_TrackDistance(){
        expect(this.horseProfile_Form_TrackDistance.isExisting()).to.equal(true);
        }

    // Check Horse Profile - Form - 1st Race - Class
    check_horseProfile_Form_Class(){
        expect(this.horseProfile_Form_Class.isExisting()).to.equal(true);
        }   

    // Check Horse Profile - Form - 1st Race - Prize
    check_horseProfile_Form_Prize(){
        expect(this.horseProfile_Form_Prize.isExisting()).to.equal(true);
        }

    // Check Horse Profile - Form - 1st Race - Condition
    check_horseProfile_Form_Condition(){
        expect(this.horseProfile_Form_Condition.isExisting()).to.equal(true);
        }






/*
    *** METHODS FOR NAVIGATION - HORSE PROFILE ***
*/

    // Moving the Tab header up
    move_horseProfile_TabsHeader(){
        browser.touchAction('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[12]/android.widget.HorizontalScrollView', ['longPress',
            { action: 'moveTo', x: 0, y: (this.horseProfile_Y_Location_TabHeader-500)}, 'release'
        ])
        }

    //Click the 1st Race - dropdown Button
    click_horseProfile_Form_DropdownButton(){
        this.horseProfile_Form_DropdownButton.click();
    }  
   

    //Click the owners dropdown Button
    clickOwnersDropdownButton(){
        this.ownersDropdownButton.waitForExist();
        this.ownersDropdownButton.click();
    }

    //Click the owners dropdown Button
    clickOwnersDropdownButton2(){
        this.ownersDropdownButton.click();
    }

   //Click the owners dropdown Button
   clickCareerDropdownButton(){
    //this.careerDropdownButton.waitForExist();
    this.careerDropdownButton.click();
    }

    //Click the Upcoming Races Tab
    clickUpcomingRacesTab(){
        //this.upcomingRacesTab.waitForExist();
        this.upcomingRacesTab.click();
    }

    //Click the BB Tag inside Upcoming Races Tab
    clickBBTag_UpcomingRacesTab(){
        this.upcomingRacesBBTag.waitForExist();
        this.upcomingRacesBBTag.click();
    }

    //Click on the Stats Tab
    clickStatsTab(){
       // this.statsTab.waitForExist();
        this.statsTab.click();
    }

    //Click on the News & Articles Tab
    clickNewsArticleTab(){
       // this.newsTab.waitForExist();
        this.newsTab.click();
    }

    //Click on the Form Tab
    clickFormTab(){
       // this.formTab.waitForExist();
        this.formTab.click();
    }

    //Click on the 1st Race from Form Tab
    click1stRaceDopdownButton(){
        //this.firstRaceDropdownButton.waitForExist();
        this.firstRaceDropdownButton.click();
    }

    //Close the 1st Race from Form Tab
    close1stRaceDopdownButton(){
       // this.firstRaceDropdownButton2.waitForExist();
        this.firstRaceDropdownButton2.click();
    }

    //Click on the BB Tag
    clickBBTag(){
        this.BBTag.waitForExist();
        this.BBTag.click();
    }

    //Click on the BB Tag
    clickBackButton(){
       // this.backButton.waitForExist();
        this.backButton.click();
    }
}


export default new HorseProfileOverviewForm();