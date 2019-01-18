import Page from './page';

class Searchscreen extends Page {
/*
XPATH OF - CONTENT
*/

    //Xpath for the Searchscreen - Entry Field
    get searchScreen_EntryField() { return browser.element("~Start typing to search");}

    //Xpath for the Searchscreen - 1st Row of search result
    get searchScreen_3rdResultRow() { return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]");}

    //Xpath for the Searchscreen - 1st Row of search result
    get searchScreen_1stResultRow() { return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]");}


    open(){
        super.open('path');
    }



/*
METHODS FOR SEARCH
*/

    //Input Horse name in Searchfield
    input_HorseSearch(){
        this.searchScreen_EntryField.click();
        this.searchScreen_EntryField.keys('Black');
        browser.pause(5000);
        // this.searchScreen_3rdResultRow.waitForExist();
        // this.searchScreen_3rdResultRow.click();
    }


    input_JockeySearch(){
        // this.searchScreen_EntryField.waitForExist();
        this.searchScreen_EntryField.click();
        this.searchScreen_EntryField.keys('James Winks');
        browser.pause(8000);
    }

    input_TrainerSearch(){
        // this.searchScreen_EntryField.waitForExist();
        this.searchScreen_EntryField.click();
        this.searchScreen_EntryField.keys('James Cummings');
        browser.pause(8000);
    }

    // Click on the 3rd row of search result
    click_searchScreen_3rdResultRow(){
        this.searchScreen_3rdResultRow.waitForExist();
        this.searchScreen_3rdResultRow.click();
    }

    // Click on the 1st row of search result
    click_searchScreen_1stResultRow(){
        this.searchScreen_1stResultRow.waitForExist();
        this.searchScreen_1stResultRow.click();
    }


}


export default new Searchscreen();