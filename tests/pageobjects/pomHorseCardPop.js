import Page from './page'

class HorseCardPop extends Page{

/*
****  XPATH FOR HORSE CARD POPUP - NAVIGATION  ****
*/
    //Xpath for BB Tag
    get bbButtonTopRight() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView");}

    //Xpath for Done Button for BB Tag
    get bbTag_DoneButton() {return browser.element(" //android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for Owner Dropdown button
    get ownerDropdownButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[11]/android.view.ViewGroup/android.widget.TextView[3]");}

    //Xpath for Career Dropdown button
    get careerDropdownButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.Button/android.view.ViewGroup/android.widget.TextView[4]");}

    //Xpath for Race Runner toggle button ON
    get raceRunnerToggleON() {return browser.element("android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[13]/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for Race Runner toggle button OFF
    get raceRunnerToggleOFF() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[13]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for 1st Race dropdown button
    get firstRaceDropdown() {return browser.element("//android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[2]");}

    //Xpath for Close button
    get closeButton() {return browser.element("//android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]");}



    /*
    ****  XPATH FOR HORSE CARD POPUP - OVERVIEW  ****
    */

    //Xpath for Horse Card - Jersey
    get horseCard_Jersey() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.Button/android.view.ViewGroup");}

    //Xpath for Horse Card - Horse Name
    get horseCard_HorseName() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.Button/android.widget.TextView[1]");}

    //Xpath for Horse Card - Trainer Name");}

    get horseCard_TrainerName() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.Button/android.widget.TextView[2]");}
  
    //Xpath for Horse Card - Jockey Name
    get horseCard_JockeyName() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.Button/android.widget.TextView[4]");}

    //Xpath for Horse Card - Breed
    get horseCard_Breed() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[1]");}

    //Xpath for Horse Card - Weight
    get horseCard_Weight() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.TextView[1]");}

    //Xpath for Horse Card - Age
    get horseCard_Age() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[3]/android.widget.TextView[1]");}

    //Xpath for Horse Card - Sex
    get horseCard_Sex() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.TextView[1]");}

    //Xpath for Horse Card - Colour
    get horseCard_Colour() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[5]/android.widget.TextView[1]");}



    //Xpath for Horse Card - Last 5
    get horseCard_Last5() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[6]/android.widget.TextView[1]");}

    //Xpath for Horse Card - Win
    get horseCard_Win() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[7]/android.widget.TextView[1]");}

    //Xpath for Horse Card - Place
    get horseCard_Place() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[8]/android.widget.TextView[1]");}

    //Xpath for Horse Card - Prize
    get horseCard_Prize() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[9]/android.widget.TextView[1]");}


    /*
    ****  XPATH FOR HORSE CARD POPUP - CAREER  ****
    */

    //Xpath for Horse Card - Career - Track
    get horseCard_Career_Track() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView[1]");}

    //Xpath for Horse Card - Career - Distance
    get horseCard_Career_Distance() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[1]");}

    //Xpath for Horse Card - Career - Track Distance
    get horseCard_Career_TrackDistance() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView[1]");}

    //Xpath for Horse Card - Career - Jockey
    get horseCard_Career_Jockey() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]");}

    //Xpath for Horse Card - Career - Firm
    get horseCard_Career_Firm() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.TextView[1]");}

    //Xpath for Horse Card - Career - Good
    get horseCard_Career_Good() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[6]/android.widget.TextView[1]");}

    //Xpath for Horse Card - Career - Soft
    get horseCard_Career_Soft() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[7]/android.widget.TextView[1]");}

    //Xpath for Horse Card - Career - Heavy
    get horseCard_Career_Heavy() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[8]/android.widget.TextView[1]");}

    //Xpath for Horse Card - Career - Synth
    get horseCard_Career_Synth() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[9]/android.widget.TextView[1]");}

    //Xpath for Horse Card - Career - 1st up
    get horseCard_Career_1stUp() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[10]/android.widget.TextView[1]");}

    //Xpath for Horse Card - Career - 2nd up
    get horseCard_Career_2ndUp() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[11]/android.widget.TextView[1]");}


/*
    ****  XPATH FOR HORSE CARD POPUP - Race contains  ****
*/

    //Xpath for Horse Card - Race - Race No
    get horseCard_Race_No() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[1]");}

    //Xpath for Horse Card - Race - Race Date
    get horseCard_Race_Date() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[2]");}

    //Xpath for Horse Card - Race - Location Code
    get horseCard_Race_LocationCode() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[3]");}

    //Xpath for Horse Card - Race - Track Distance
    get horseCard_Race_TrackDistance() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[4]");}

    //Xpath for Horse Card - Race - Replay Button
    get horseCard_Race_ReplayButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup");}

    //Xpath for Horse Card - Race Card - Track Name
    get horseCard_RaceCard_TrackName() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup");}

    //Xpath for Horse Card - Race Card - Class
    get horseCard_RaceCard_Class() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]");}

    //Xpath for Horse Card - Race Card - Prize
    get horseCard_RaceCard_Prize() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]");}

    //Xpath for Horse Card - Race Card - Condition
    get horseCard_RaceCard_Condition() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]");}

    //Xpath for Horse Card - Race Card - Jockey
    get horseCard_RaceCard_Jockey() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[6]");}

    //Xpath for Horse Card - Race Card - Weight
    get horseCard_RaceCard_Weight() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[7]");}

    //Xpath for Horse Card - Race Card - Barrier
    get horseCard_RaceCard_Barrier() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[8]");}

    //X and Y Axis for Race List - Track name
    get X_Location_horseCard_RaceCard_TrackName(){return browser.getLocation('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup', 'x');}
    get Y_Location_horseCard_RaceCard_TrackName(){return browser.getLocation('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup', 'y');}

/*
*****  METHODS FOR NAVIGATION  *****
*/

    open(){
        super.open('path');
    }


    //Move the Race list - Track name UP
    moveUP_horseCard_RaceCard_TrackName(){

        this.horseCard_RaceCard_TrackName.waitForExist();
        this.horseCard_RaceCard_TrackName.pause(3000);

        browser.touchAction('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup', ['longPress',
            { action: 'moveTo', x: 0, y: (this.Y_Location_horseCard_RaceCard_TrackName-900)}, 'release'
        ])
        }


    //Click the BB Button at top right corner
    clickBB_ButtonTopRight(){
        this.bbButtonTopRight.waitForExist();
        this.bbButtonTopRight.click();
        }

    //Click the Done button for BB Tag
    click_bbTag_DoneButton(){
        this.bbTag_DoneButton.waitForExist();
        this.bbTag_DoneButton.click();
        }


    //Click the Owner Dropdown button
    clickOwnerDropdownButton(){
        this.ownerDropdownButton.waitForExist();
        this.ownerDropdownButton.click();
        }

    //Click the Career Dropdown button
    clickCareerDropdownButton(){
        this.careerDropdownButton.waitForExist();
        this.careerDropdownButton.click();
        }

    //Click the Race Runner Toggle button ON
    clickRaceRunnerToggleON(){
        this.raceRunnerToggleON.waitForExist();
        this.raceRunnerToggleON.click();
        }

    //Click the Race Runner Toggle button OFF
    clickRaceRunnerToggleOFF(){
        this.raceRunnerToggleOFF.waitForExist();
        this.raceRunnerToggleOFF.click();
        }
    
    //Click the 1st Race Dropdown button
    clickFirstRaceDropdownButton(){
        this.firstRaceDropdown.waitForExist();
        this.firstRaceDropdown.click();
        }

    //Click the Close button
    clickCloseButton(){
        this.closeButton.waitForExist();
        this.closeButton.click();
        }


/*
*****  METHODS FOR VALIDATION - HORSE CARD POPUP - OVERVIEW  *****
*/

    // Check Horse Card - Jersey
    waitFor_horseCard_Jersey() {
        if(!this.horseCard_Jersey.isVisible()){
        this.horseCard_Jersey.waitForVisible(5000);
        }
    }
    check_horseCard_Jersey(){
    expect(this.horseCard_Jersey.isExisting()).to.equal(true);
    }

    // Check Horse Card - Horse name
    waitFor_horseCard_HorseName() {
        if(!this.horseCard_HorseName.isVisible()){
        this.horseCard_HorseName.waitForVisible(5000);
        }
    }
    check_horseCard_HorseName(){
    expect(this.horseCard_HorseName.isExisting()).to.equal(true);
    }

    // Check Horse Card - Trainer name
    waitFor_horseCard_TrainerName() {
        if(!this.horseCard_TrainerName.isVisible()){
        this.horseCard_TrainerName.waitForVisible(5000);
        }
    }
    check_horseCard_TrainerName(){
    expect(this.horseCard_TrainerName.isExisting()).to.equal(true);
    }

    // Check Horse Card - Jockey name
    waitFor_horseCard_JockeyName() {
        if(!this.horseCard_JockeyName.isVisible()){
        this.horseCard_JockeyName.waitForVisible(5000);
        }
    }
    check_horseCard_JockeyName(){
    expect(this.horseCard_JockeyName.isExisting()).to.equal(true);
    }

    // Check Horse Card - Breed
    waitFor_horseCard_Breed() {
        if(!this.horseCard_Breed.isVisible()){
        this.horseCard_Breed.waitForVisible(5000);
        }
    }
    check_horseCard_Breed(){
    expect(this.horseCard_JockeyName.isExisting()).to.equal(true);
    }

    // Check Horse Card - Weight
    waitFor_horseCard_Weight() {
        if(!this.horseCard_Weight.isVisible()){
        this.horseCard_Weight.waitForVisible(5000);
        }
    }
    check_horseCard_Weight(){
        const Content_horseCard_Weight = this.horseCard_Weight.getText();
        expect(Content_horseCard_Weight).to.equal('Weight');
    }

    // Check Horse Card - Age
    waitFor_horseCard_Age() {
        if(!this.horseCard_Age.isVisible()){
        this.horseCard_Age.waitForVisible(5000);
        }
    }
    check_horseCard_Age(){
        const Content_horseCard_Age = this.horseCard_Age.getText();
        expect(Content_horseCard_Age).to.equal('Age');
    }

    // Check Horse Card - Sex
    waitFor_horseCard_Sex() {
        if(!this.horseCard_Sex.isVisible()){
        this.horseCard_Sex.waitForVisible(5000);
        }
    }
    check_horseCard_Sex(){
        const Content_horseCard_Sex = this.horseCard_Sex.getText();
        expect(Content_horseCard_Sex).to.equal('Sex');
    }

    // Check Horse Card - Colour
    waitFor_horseCard_Colour() {
        if(!this.horseCard_Colour.isVisible()){
        this.horseCard_Colour.waitForVisible(5000);
        }
    }
    check_horseCard_Colour(){
        const Content_horseCard_Colour = this.horseCard_Colour.getText();
        expect(Content_horseCard_Colour).to.equal('Colour');
    }

    // Check Horse Card - Last 5
    waitFor_horseCard_Last5() {
        if(!this.horseCard_Last5.isVisible()){
        this.horseCard_Last5.waitForVisible(5000);
        }
    }
    check_horseCard_Last5(){
        const Content_horseCard_Last5 = this.horseCard_Last5.getText();
        expect(Content_horseCard_Last5).to.equal('Last 5');
    }

    // Check Horse Card - Win
    waitFor_horseCard_Win() {
        if(!this.horseCard_Win.isVisible()){
        this.horseCard_Win.waitForVisible(5000);
        }
    }
    check_horseCard_Win(){
        const Content_horseCard_Win = this.horseCard_Win.getText();
        expect(Content_horseCard_Win).to.equal('Win %');
    }

    // Check Horse Card - Place
    waitFor_horseCard_Place() {
        if(!this.horseCard_Place.isVisible()){
        this.horseCard_Place.waitForVisible(5000);
        }
    }
    check_horseCard_Place(){
        const Content_horseCard_Place = this.horseCard_Place.getText();
        expect(Content_horseCard_Place).to.equal('Place %');
    }

    // Check Horse Card - Prize
    waitFor_horseCard_Prize() {
        if(!this.horseCard_Prize.isVisible()){
        this.horseCard_Prize.waitForVisible(5000);
        }
    }
    check_horseCard_Prize(){
        const Content_horseCard_Prize = this.horseCard_Prize.getText();
        expect(Content_horseCard_Prize).to.equal('Prize');
    }


/*
*****  METHODS FOR VALIDATION - HORSE CARD POPUP - CAREER  *****
*/

    // Check Horse Card - Career - Track
    waitFor_horseCard_Career_Track() {
        if(!this.horseCard_Career_Track.isVisible()){
        this.horseCard_Career_Track.waitForVisible(5000);
        }
    }
    check_horseCard_Career_Track(){
        const Content_horseCard_Career_Track = this.horseCard_Career_Track.getText();
        expect(Content_horseCard_Career_Track).to.equal('Track');
    }

    // Check Horse Card - Career - Distance
    waitFor_horseCard_Career_Distance() {
        if(!this.horseCard_Career_Distance.isVisible()){
        this.horseCard_Career_Distance.waitForVisible(5000);
        }
    }
    check_horseCard_Career_Distance(){
        const Content_horseCard_Career_Distance = this.horseCard_Career_Distance.getText();
        expect(Content_horseCard_Career_Distance).to.equal('Distance');
    }

        // Check Horse Card - Career - Track Distance
        waitFor_horseCard_Career_TrackDistance() {
            if(!this.horseCard_Career_TrackDistance.isVisible()){
            this.horseCard_Career_TrackDistance.waitForVisible(5000);
            }
        }
        check_horseCard_Career_TrackDistance(){
            const Content_horseCard_Career_TrackDistance = this.horseCard_Career_TrackDistance.getText();
            expect(Content_horseCard_Career_TrackDistance).to.equal('Track/Dist');
        }

        // Check Horse Card - Career - Track Distance
        waitFor_horseCard_Career_TrackDistance() {
            if(!this.horseCard_Career_TrackDistance.isVisible()){
            this.horseCard_Career_TrackDistance.waitForVisible(5000);
            }
        }
        check_horseCard_Career_TrackDistance(){
            const Content_horseCard_Career_TrackDistance = this.horseCard_Career_TrackDistance.getText();
            expect(Content_horseCard_Career_TrackDistance).to.equal('Track/Dist');
        }

        // Check Horse Card - Career - Jockey
        waitFor_horseCard_Career_Jockey() {
            if(!this.horseCard_Career_Jockey.isVisible()){
            this.horseCard_Career_Jockey.waitForVisible(5000);
            }
        }
        check_horseCard_Career_Jockey(){
            const Content_horseCard_Career_Jockey = this.horseCard_Career_Jockey.getText();
            expect(Content_horseCard_Career_Jockey).to.equal('Jockey');
        }

        // Check Horse Card - Career - Firm
        waitFor_horseCard_Career_Firm() {
            if(!this.horseCard_Career_Firm.isVisible()){
            this.horseCard_Career_Firm.waitForVisible(5000);
            }
        }
        check_horseCard_Career_Firm(){
            const Content_horseCard_Career_Firm = this.horseCard_Career_Firm.getText();
            expect(Content_horseCard_Career_Firm).to.equal('Firm');
        }

        // Check Horse Card - Career - Firm
        waitFor_horseCard_Career_Firm() {
            if(!this.horseCard_Career_Firm.isVisible()){
            this.horseCard_Career_Firm.waitForVisible(5000);
            }
        }
        check_horseCard_Career_Firm(){
            const Content_horseCard_Career_Firm = this.horseCard_Career_Firm.getText();
            expect(Content_horseCard_Career_Firm).to.equal('Firm');
        }

        // Check Horse Card - Career - Good
        waitFor_horseCard_Career_Good() {
            if(!this.horseCard_Career_Good.isVisible()){
            this.horseCard_Career_Good.waitForVisible(5000);
            }
        }
        check_horseCard_Career_Good(){
            const Content_horseCard_Career_Good = this.horseCard_Career_Good.getText();
            expect(Content_horseCard_Career_Good).to.equal('Good');
        }

        // Check Horse Card - Career - Soft
        waitFor_horseCard_Career_Soft() {
            if(!this.horseCard_Career_Soft.isVisible()){
            this.horseCard_Career_Soft.waitForVisible(5000);
            }
        }
        check_horseCard_Career_Soft(){
            const Content_horseCard_Career_Soft = this.horseCard_Career_Soft.getText();
            expect(Content_horseCard_Career_Soft).to.equal('Soft');
        }

        // Check Horse Card - Career - Heavy
        waitFor_horseCard_Career_Heavy() {
            if(!this.horseCard_Career_Heavy.isVisible()){
            this.horseCard_Career_Heavy.waitForVisible(5000);
            }
        }
        check_horseCard_Career_Heavy(){
            const Content_horseCard_Career_Heavy = this.horseCard_Career_Heavy.getText();
            expect(Content_horseCard_Career_Heavy).to.equal('Heavy');
        }

        // Check Horse Card - Career - Synth
        waitFor_horseCard_Career_Synth() {
            if(!this.horseCard_Career_Synth.isVisible()){
            this.horseCard_Career_Synth.waitForVisible(5000);
            }
        }
        check_horseCard_Career_Synth(){
            const Content_horseCard_Career_Synth = this.horseCard_Career_Synth.getText();
            expect(Content_horseCard_Career_Synth).to.equal('Synth');
        }

        // Check Horse Card - Career - 1st Up
        waitFor_horseCard_Career_1stUp() {
            if(!this.horseCard_Career_1stUp.isVisible()){
            this.horseCard_Career_1stUp.waitForVisible(5000);
            }
        }
        check_horseCard_Career_1stUp(){
            const Content_horseCard_Career_1stUp = this.horseCard_Career_1stUp.getText();
            expect(Content_horseCard_Career_1stUp).to.equal('1st Up');
        }

        // Check Horse Card - Career - 2nd Up
        waitFor_horseCard_Career_2ndUp() {
            if(!this.horseCard_Career_2ndUp.isVisible()){
            this.horseCard_Career_2ndUp.waitForVisible(5000);
            }
        }
        check_horseCard_Career_2ndUp(){
            const Content_horseCard_Career_2ndUp = this.horseCard_Career_2ndUp.getText();
            expect(Content_horseCard_Career_2ndUp).to.equal('2nd Up');
        }

/*
****   METHODS FOR VALIDATION - HORSE CARD - RACE LIST  ****
*/

        // Check Horse Card - Race Card - Race No
        waitFor_horseCard_Race_No() {
            if(!this.horseCard_Race_No.isVisible()){
            this.horseCard_Race_No.waitForVisible(5000);
            }
        }
        check_horseCard_Race_No(){
        expect(this.horseCard_Race_No.isExisting()).to.equal(true);
        }

        // Check Horse Card - Race Card - Race Date
        waitFor_horseCard_Race_Date() {
            if(!this.horseCard_Race_Date.isVisible()){
            this.horseCard_Race_Date.waitForVisible(5000);
            }
        }
        check_horseCard_Race_Date(){
        expect(this.horseCard_Race_Date.isExisting()).to.equal(true);
        }

        // Check Horse Card - Race Card - Location code
        waitFor_horseCard_Race_LocationCode() {
            if(!this.horseCard_Race_LocationCode.isVisible()){
            this.horseCard_Race_LocationCode.waitForVisible(5000);
            }
        }
        check_horseCard_Race_LocationCode(){
        expect(this.horseCard_Race_LocationCode.isExisting()).to.equal(true);
        }

        // Check Horse Card - Race Card - Track distance
        waitFor_horseCard_Race_TrackDistance() {
            if(!this.horseCard_Race_TrackDistance.isVisible()){
            this.horseCard_Race_LocationCode.waitForVisible(5000);
            }
        }
        check_horseCard_Race_TrackDistance(){
        expect(this.horseCard_Race_TrackDistance.isExisting()).to.equal(true);
        }

        // Check Horse Card - Race Card - Replay Button
        waitFor_horseCard_Race_ReplayButton() {
            if(!this.horseCard_Race_ReplayButton.isVisible()){
            this.horseCard_Race_ReplayButton.waitForVisible(5000);
            }
        }
        check_horseCard_Race_ReplayButton(){
        expect(this.horseCard_Race_ReplayButton.isExisting()).to.equal(true);
        }

        // Check Horse Card - Race Card - Track name
        waitFor_horseCard_RaceCard_TrackName() {
            if(!this.horseCard_RaceCard_TrackName.isVisible()){
            this.horseCard_RaceCard_TrackName.waitForVisible(5000);
            }
        }
        check_horseCard_RaceCard_TrackName(){
        expect(this.horseCard_RaceCard_TrackName.isExisting()).to.equal(true);
        }

        // Check Horse Card - Race Card - Class
        waitFor_horseCard_RaceCard_Class() {
            if(!this.horseCard_RaceCard_Class.isVisible()){
            this.horseCard_RaceCard_Class.waitForVisible(5000);
            }
        }
        check_horseCard_RaceCard_Class(){
        expect(this.horseCard_RaceCard_Class.isExisting()).to.equal(true);
        }

        // Check Horse Card - Race Card - Prize
        waitFor_horseCard_RaceCard_Prize() {
            if(!this.horseCard_RaceCard_Prize.isVisible()){
            this.horseCard_RaceCard_Prize.waitForVisible(5000);
            }
        }
        check_horseCard_RaceCard_Prize(){
        expect(this.horseCard_RaceCard_Prize.isExisting()).to.equal(true);
        }

        // Check Horse Card - Race Card - Condition
        waitFor_horseCard_RaceCard_Condition() {
            if(!this.horseCard_RaceCard_Condition.isVisible()){
            this.horseCard_RaceCard_Condition.waitForVisible(5000);
            }
        }
        check_horseCard_RaceCard_Condition(){
        expect(this.horseCard_RaceCard_Condition.isExisting()).to.equal(true);
        }

        // Check Horse Card - Race Card - Jockey
        waitFor_horseCard_RaceCard_Jockey() {
            if(!this.horseCard_RaceCard_Jockey.isVisible()){
            this.horseCard_RaceCard_Jockey.waitForVisible(5000);
            }
        }
        check_horseCard_RaceCard_Jockey(){
        expect(this.horseCard_RaceCard_Jockey.isExisting()).to.equal(true);
        }

        // Check Horse Card - Race Card - Weight
        waitFor_horseCard_RaceCard_Weight() {
            if(!this.horseCard_RaceCard_Weight.isVisible()){
            this.horseCard_RaceCard_Weight.waitForVisible(5000);
            }
        }
        check_horseCard_RaceCard_Weight(){
        expect(this.horseCard_RaceCard_Weight.isExisting()).to.equal(true);
        }

        // Check Horse Card - Race Card - Barrier
        waitFor_horseCard_RaceCard_Barrier() {
            if(!this.horseCard_RaceCard_Barrier.isVisible()){
            this.horseCard_RaceCard_Barrier.waitForVisible(5000);
            }
        }
        check_horseCard_RaceCard_Barrier(){
        expect(this.horseCard_RaceCard_Barrier.isExisting()).to.equal(true);
        }



}

export default new HorseCardPop();