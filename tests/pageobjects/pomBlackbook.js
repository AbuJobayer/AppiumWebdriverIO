import Page from './page'

class Blackbook extends Page{

    //Xpath for Login Tab
    get loginTab() {return browser.element("~Go to Log in");}

    // Xpath for Add Note Button from Confirmation prompt
    get blackBookConfirmation_AddNoteButton() {return browser.element("//android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.LinearLayout/android.widget.TextView");}

    // Xpath for Blackbook Text Field
    get blackBookNote_TextField() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText");}

    // Xpath for Add Note Button from Note Text Field
    get blackBookNote_AddNoteButton() {return browser.element("//android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button");}

    // Xpath for Save Note Button from Note Text Field
    get blackBookNote_SaveNoteButton() {return browser.element("//android.widget.TextView[@text= 'Save note']");}

    // Xpath for Save Note Button from Note Text Field
    get blackBookNote_CloseButton() {return browser.element("//android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.Button/android.widget.TextView");}

    // Xpath for Edit Note Button from Note Text Field
    get blackBookNote_EditButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button/android.widget.TextView");}


    //X Axis for Edit Note Button from Note Text Field
    get X_Axis_blackBookNote_EditButton(){return browser.getLocation('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button/android.widget.TextView', 'x');}

    // Xpath for Delete Note Button from Note Text Field
    get blackBookNote_DeleteButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView");}


    // Xpath for 1st Horse from the Accepted List
    get myBlackbookAcceptedList_1stHorse() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.Button[1]");}

    // Xpath for 1st Note from the Accepted List
    get myBlackbookAcceptedList_1stNote() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.Button[2]");}

    // Xpath for 1st Race from the Accepted List
    get myBlackbookAcceptedList_1stRace() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.Button[3]");}


    // Xpath for 1st Race from the Accepted List
    get racingHub_MyBlackbook_1stHorse() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.Button[1]");}

    // Xpath for Remove Blackbook Button from Confirmation prompt
    get blackBookConfirmation_RemoveBlackbookButton() {return browser.element("//android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[1]");}

    // Xpath for Remove Blackbook - YES Button from Confirmation prompt
    get blackBookConfirmation_RemoveBlackbook_YesButton() {return browser.element("//android.widget.LinearLayout[2]/android.widget.Button[1]");}





     open(){
        super.open('path');
    }


    //Click the Login Or Signup Link
    click_loginSignupLink(){
        this.loginSignupLink.waitForExist();
        this.loginSignupLink.click();
        }

    //Click the Add Note Button from Confirmation prompt
    click_blackBookConfirmation_AddNoteButton(){
        this.blackBookConfirmation_AddNoteButton.waitForExist();
        this.blackBookConfirmation_AddNoteButton.click();
        }

    //Input text in Blackbook note
    input_blackBookNote_TextField(){
        this.blackBookNote_TextField.waitForExist();
        this.blackBookNote_TextField.click();
        this.blackBookNote_TextField.keys('Testing');
    }
 
    //Click the Save Note Button from Blackbook Text
    click_blackBookNote_SaveNoteButton(){
        this.blackBookNote_SaveNoteButton.waitForExist();
        this.blackBookNote_SaveNoteButton.click();
        }

    //Click the Close Button
    click_blackBookNote_CloseButton(){
        this.blackBookNote_CloseButton.waitForExist();
        this.blackBookNote_CloseButton.click();
        }

    // Move the Edit Button to the LEFT
    move_blackBookNote_EditButton_Left(){
        this.blackBookNote_EditButton.waitForExist();
        this.blackBookNote_EditButton.pause(3000);

        browser.touchAction('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button/android.widget.TextView', 
        ['longPress', {action: 'moveTo', x: (this.X_Axis_blackBookNote_EditButton-273), y: 0}, 'release'
        ])
    }

    //Click the 1st Horse from the Accepted List
    click_myBlackbookAcceptedList_1stHorse(){
        this.myBlackbookAcceptedList_1stHorse.waitForExist();
        this.myBlackbookAcceptedList_1stHorse.click();
        }

    //Click the 1st Note from the Accepted List
    click_myBlackbookAcceptedList_1stNote(){
        this.myBlackbookAcceptedList_1stNote.waitForExist();
        this.myBlackbookAcceptedList_1stNote.click();
        }

    //Click the 1st Race from the Accepted List
    click_myBlackbookAcceptedList_1stRace(){
        this.myBlackbookAcceptedList_1stRace.waitForExist();
        this.myBlackbookAcceptedList_1stRace.click();
        }

    //Click the Delete Button from Blackbook Text
    click_blackBookNote_DeleteButton(){
        this.blackBookNote_DeleteButton.waitForExist();
        this.blackBookNote_DeleteButton.click();
        }

    //Click the 1st Horse from the My Blackbook tab
    click_racingHub_MyBlackbook_1stHorse(){
        this.racingHub_MyBlackbook_1stHorse.waitForExist();
        this.racingHub_MyBlackbook_1stHorse.click();
        }

    //Click the Remove Form Blackbook Button
    click_blackBookConfirmation_RemoveBlackbookButton(){
        this.blackBookConfirmation_RemoveBlackbookButton.waitForExist();
        this.blackBookConfirmation_RemoveBlackbookButton.click();
        }

    //Click the YES Button to confirm Remove Form Blackbook
    click_blackBookConfirmation_RemoveBlackbook_YesButton(){
        this.blackBookConfirmation_RemoveBlackbook_YesButton.waitForExist();
        this.blackBookConfirmation_RemoveBlackbook_YesButton.click();
        }




}

export default new Blackbook();