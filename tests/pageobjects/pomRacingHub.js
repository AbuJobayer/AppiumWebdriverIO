import Page from './page'

class RacingHub extends Page{

    //Xpath for Racing Hub - Next To Jump Tab
    get racingHub_NextToJumpTab() {return browser.element("~Next to Jump");}

    //Xpath for Racing Hub - Latest Result Tab
    get racingHub_LatestResultTab() {return browser.element("~Latest Results");}

    //Xpath for Racing Hub - 1st Race from The list
    get racingHub_1stRace() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.Button");}

    //Xpath for Racing Hub - 2nd Race from The list
    get racingHub_2ndRace() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button");}

    //Xpath for Racing Hub - Menu
    get racingHub_Menu() {return browser.element("~Dropdown menu Racing Hub");}

    //Xpath for Racing Hub Menu - Racing Hub
    get racingHub_MenuRacingHub() {return browser.element("~Go to Racing Hub");}

    //Xpath for Racing Hub Menu - Todays Racing
    get racingHub_MenuTodaysRacing() {return browser.element("~Go to Today's Racing");}

    //Xpath for Racing Hub Menu - Home
    get racingHub_MenuHome() {return browser.element("//android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup[3]");}





    open(){
        super.open('path');
    }

    //Click the Racing Hub - Next To Jump Tab
    click_racingHub_NextToJumpTab(){
        this.racingHub_NextToJumpTab.waitForExist();
        this.racingHub_NextToJumpTab.click();
        }

    //Click the Racing Hub - Latest Result Tab
    click_racingHub_LatestResultTab(){
        this.racingHub_LatestResultTab.waitForExist();
        this.racingHub_LatestResultTab.click();
        }

    //Click the Racing Hub - 1st Race from the list
    click_racingHub_1stRace(){
        this.racingHub_1stRace.waitForExist();
        this.racingHub_1stRace.click();
        }

    //Click the Racing Hub - 2nd Race from the list
    click_racingHub_2ndRace(){
        this.racingHub_2ndRace.waitForExist();
        this.racingHub_2ndRace.click();
        }

    //Click the Racing Hub - Menu
    click_racingHub_Menu(){
        this.racingHub_Menu.waitForExist();
        this.racingHub_Menu.click();
        }

    //Click the Racing Hub Menu - Racing Hub
    click_racingHub_MenuRacingHub(){
        this.racingHub_MenuRacingHub.waitForExist();
        this.racingHub_MenuRacingHub.click();
        }

    //Click the Racing Hub Menu - Todays Racing
    click_racingHub_MenuTodaysRacing(){
        this.racingHub_MenuTodaysRacing.waitForExist();
        this.racingHub_MenuTodaysRacing.click();
        }

    //Click the Racing Hub Menu - Home
    click_racingHub_MenuHome(){
        this.racingHub_MenuHome.waitForExist();
        this.racingHub_MenuHome.click();
        }




}

export default new RacingHub();