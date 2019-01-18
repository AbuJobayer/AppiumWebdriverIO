import Page from './page'

class TrainerCardUpcomingRacesHorses extends Page{
/*
***  XPATH FOR - TRAINER CARD - UPCOMING RACES ***
*/



/*
***  XPATH FOR - TRAINER CARD - HORSES ***
*/


    //Xpath for  Trainer Card - Horses - Jersey Image
    get trainer_Horses_image() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]");}

    //Xpath for  Trainer Card - Horses - Horse name
    get trainer_Horses_HorseName() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for  Trainer Card - Horses - Last race
    get trainer_Horses_LastRace() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]");}

    //Xpath for  Trainer Card - Horses - Age
    get trainer_Horses_HorseAge() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[1]");}

    //Xpath for  Trainer Card - Horses - Sex
    get trainer_Horses_Sex() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[3]");}

    //Xpath for  Trainer Card - Horses - Rating
    get trainer_Horses_Rating() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[5]");}

    //Xpath for  Trainer Card - Horses - Prize
    get trainer_Horses_Prize() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[7]");}

    //Xpath for BB Tag inside Horses tab
    get trainer_Horses_BBTag() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]");}



/*
***  METHODS FOR VALIDATE - TRAINER CARD - HORSES TAB  ***
*/

    open(){
        super.open('path');
    }

    //Define all the methods

    // Check Trainer Card - Horses - Jersey Image
    waitFor_trainer_Horses_image() {
        if(!this.trainer_Horses_image.isVisible()){
        this.trainer_Horses_image.waitForVisible(5000);
        }
    }
    check_trainer_Horses_image(){
    expect(this.trainer_Horses_image.isExisting()).to.equal(true);
    }


    // Check Trainer Card - Horses - Horse Name
    waitFor_trainer_Horses_HorseName() {
        if(!this.trainer_Horses_HorseName.isVisible()){
        this.trainer_Horses_HorseName.waitForVisible(5000);
        }
    }
    check_trainer_Horses_HorseName(){
    expect(this.trainer_Horses_HorseName.isExisting()).to.equal(true);
    }

    // Check Trainer Card - Horses - Last Race
    waitFor_trainer_Horses_LastRace() {
        if(!this.trainer_Horses_LastRace.isVisible()){
        this.trainer_Horses_LastRace.waitForVisible(5000);
        }
    }
    check_trainer_Horses_LastRace(){
    expect(this.trainer_Horses_LastRace.isExisting()).to.equal(true);
    }

    // Check Trainer Card - Horses - Horse Age
    waitFor_trainer_Horses_HorseAge() {
        if(!this.trainer_Horses_HorseAge.isVisible()){
        this.trainer_Horses_HorseAge.waitForVisible(5000);
        }
    }
    check_trainer_Horses_HorseAge(){
        const Content_trainer_Horses_HorseAge = this.trainer_Horses_HorseAge.getText();
        expect(Content_trainer_Horses_HorseAge).to.equal('Age:');
    }

    // Check Trainer Card - Horses - Horse Sex
    waitFor_trainer_Horses_Sex() {
        if(!this.trainer_Horses_Sex.isVisible()){
        this.trainer_Horses_Sex.waitForVisible(5000);
        }
    }
    check_trainer_Horses_Sex(){
        const Content_trainer_Horses_Sex = this.trainer_Horses_Sex.getText();
        expect(Content_trainer_Horses_Sex).to.equal('Sex:');
    }

    // Check Trainer Card - Horses - Rating
    waitFor_trainer_Horses_Rating() {
        if(!this.trainer_Horses_Rating.isVisible()){
        this.trainer_Horses_Rating.waitForVisible(5000);
        }
    }
    check_trainer_Horses_Rating(){
        const Content_trainer_Horses_Rating = this.trainer_Horses_Rating.getText();
        expect(Content_trainer_Horses_Rating).to.equal('Rating:');
    }

    // Check Trainer Card - Horses - Prize
    waitFor_trainer_Horses_Prize() {
        if(!this.trainer_Horses_Prize.isVisible()){
        this.trainer_Horses_Prize.waitForVisible(5000);
        }
    }
    check_trainer_Horses_Prize(){
        const Content_trainer_Horses_Prize = this.trainer_Horses_Prize.getText();
        expect(Content_trainer_Horses_Prize).to.equal('Prize:');
    }

    // Check Trainer Card - Horses - BB Tag
    waitFor_trainer_Horses_BBTag() {
        if(!this.trainer_Horses_BBTag.isVisible()){
        this.trainer_Horses_BBTag.waitForVisible(5000);
        }
    }
    check_trainer_Horses_BBTag(){
    expect(this.trainer_Horses_BBTag.isExisting()).to.equal(true);
    }






}

export default new TrainerCardUpcomingRacesHorses();