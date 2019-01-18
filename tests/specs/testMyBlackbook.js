import Homescreen from '../pageobjects/pomHomescreen';
import MeetingAllPage_HeaderRaceList from '../pageobjects/pomMeetingAll_HeaderRaceList';
import LoginScreen from '../pageobjects/pomLoginScreen';
import RacingHub_Home from '../pageobjects/pomRacingHub_Home';
import Blackbook from '../pageobjects/pomBlackbook';
import HorseProfileOverviewForm from '../pageobjects/pomHorseProfileOverviewForm'


	describe('NAVIGATION 12: Testing the My Blackbook - Form Racing Profile', function() {
		
		it('Ignore update', function() {
			//Ignore Update
			Homescreen.ignoreUpdate();
        });
        

        it('Open the Login Screen from Homepage', function() {
            //Click on the Newslink from the Homescreen
            Homescreen.click_menuBar_Profile();
        });
    
        it('Add email address', function() {
            //Add email address
            LoginScreen.inputEmailAddress();
            
        });
    
        it('Add Password', function() {
            //Add email address
            LoginScreen.inputPassword();
        });
    
        it('Click on the Login Button', function() {
            //Click on the Login Button
            browser.pause(5000);
            LoginScreen.clickOnLoginButton();
        });

		//Open Homescreen Menu - Racing Hub
		it('Select Homescreen Menu - Racing Hub', function() {
			Homescreen.click_menuBar_RacingHub();
        }); 

		//Move Racing Hub - View More button Up
		it('Move Racing Hub - View More button Up', function() {
            RacingHub_Home.move_racingHub_Home_ViewMoreButton_Up();
            browser.pause(3000);
        });

		//Click Racing Hub - Race Meetings - Tomorrow Tab
		it('Click Racing Hub - Race Meetings - Tomorrow Tab', function() {
            RacingHub_Home.click_racingHub_RaceMeetings_TomorrowTab();
        });        

		//Open 1st Meeting from Race Meetings - Tomorrow Tab
		it('Open 1st Meeting from Race Meetings - Tomorrow Tab', function() {
            RacingHub_Home.click_racingHub_RaceMeetings_1stMeeting();
        });  

        it('Turn ON Race Runners Toggle', function() {
			//Turn ON Race Runners Toggle
            MeetingAllPage_HeaderRaceList.clickRaceRunnerToggleON();
        });

        it('Click the 1st Blackbook Tag from the Race List Tab', function() {
			//Click the 1st Blackbook Tag from the Race List Tab
            MeetingAllPage_HeaderRaceList.click_meetingRaceList_1stBlackbookTag();
        });

        it('Click the Add Note button from the Confirmation screen', function() {
			//Click the Add Note button from the Confirmation screen
            Blackbook.click_blackBookConfirmation_AddNoteButton();
        });

        it('Adding text in the Blackbook note field', function() {
			//Adding text in the Blackbook note field
            Blackbook.input_blackBookNote_TextField();
        });

        it('Saving note by click on the Save button', function() {
            //Saving note by click on the Save button
            browser.pause(3000);
            Blackbook.click_blackBookNote_SaveNoteButton();
        });

        it('Closing note by click on the Close button', function() {
			//losing note by click on the Close button
            Blackbook.click_blackBookNote_CloseButton();
        });

        it('Click on the User Profile', function() {
            //Click on the User Profile
            Homescreen.click_menuBar_Profile();
        });

        it('Open the 1st Horse from the Accepted List', function() {
            //Open the 1st Horse from the Accepted List
            Blackbook.click_myBlackbookAcceptedList_1stHorse();
        });

        it('Go back to Previous screen', function() {
			//Go back to Previous screen
			HorseProfileOverviewForm.clickBackButton();
		});

        it('Open the 1st Note from the Accepted List', function() {
            //Open the 1st Note from the Accepted List
            Blackbook.click_myBlackbookAcceptedList_1stNote();
        });

		//Move the Edit Button to Right
		it('Move the Edit Button to Right', function() {
			browser.pause(3000);
			browser.touchAction([
				{action: 'press', x:  1200, y: 500}, { action: 'moveTo', x: 927, y: 500 }, 'release'
			])
			browser.pause(3000);
		});


        // it('Move the Edit button to left', function() {
        //     //Move the Edit button to left
        //     Blackbook.move_blackBookNote_EditButton_Left();
        // });

        it('Delete the Note from the Blackbook', function() {
            //Delete the Note from the Blackbook
            Blackbook.click_blackBookNote_DeleteButton();
        });

        it('Closing note by click on the Close button', function() {
			//losing note by click on the Close button
            Blackbook.click_blackBookNote_CloseButton();
        });

        it('Open the 1st Race from the Accepted List', function() {
            //Open the 1st Race from the Accepted List
            Blackbook.click_myBlackbookAcceptedList_1stRace();
        });

		//Click on - Racing Hub
		it('Click on - Racing Hub', function() {
			Homescreen.click_menuBar_RacingHub();
        });

		//Click on - Racing Hub to go the Home screen
		it('Click on - Racing Hub to go the Racing Hub Home screen', function() {
			Homescreen.click_menuBar_RacingHub();
        });

		//Move the Racing Hub screen down
		it('Move the Racing Hub screen down', function() {
			browser.pause(3000);
			browser.touchAction([
				{action: 'press', x:  600, y: 400}, { action: 'moveTo', x: 600, y: 600 }, 'release'
			])
			browser.pause(3000);
        });
        
		//Open 1st Meeting from Race Meetings - Tomorrow Tab
		it('Open 1st Meeting from Race Meetings - Tomorrow Tab', function() {
            RacingHub_Home.click_racingHub_Home_MyBlackbookTab();
        });  

        it('Select the 1st Horse from the My Blackbook Tab', function() {
            //Select the 1st Horse from the My Blackbook Tab
            Blackbook.click_racingHub_MyBlackbook_1stHorse();
        });

		//Click the Blackbook tag from the Horse Profile
		it('Click the Blackbook tag from the Horse Card', function() {
            HorseProfileOverviewForm.clickBBTag();
        });  
        
        it('Select the Remove Blackbook Button', function() {
            //Select the Remove Blackbook Button
            Blackbook.click_blackBookConfirmation_RemoveBlackbookButton();
        });

        it('Select the Yes Button to confirmaing Remove from Blackbook', function() {
            //Select the Yes Button to confirmaing Remove from Blackbook
            Blackbook.click_blackBookConfirmation_RemoveBlackbook_YesButton();
        });

		//Click on - Racing Hub to go the Home screen
		it('Click on - Racing Hub to go the Racing Hub Home screen', function() {
            Homescreen.click_menuBar_RacingHub();
            browser.pause(5000);
        });
        
	
	});
