import Homescreen from '../pageobjects/pomHomescreen';
import RacingHub_Home from '../pageobjects/pomRacingHub_Home';
import MeetingAllPage_HeaderRaceList from '../pageobjects/pomMeetingAll_HeaderRaceList';
import MeetingOnePage from '../pageobjects/pomMeetingOne';
import LoginScreen from '../pageobjects/pomLoginScreen';
import VideoPopup from '../pageobjects/pomVideoPopup.js'



	describe('NAVIGATION 14: Testing the Racing Hub - Post-Race Meeting & Individual Race', function() {

		
		it('Ignore update', function() {
			//Ignore Update
			Homescreen.ignoreUpdate();
        });
        
		//Go to Racing Profile
		it('Go Back to Homescreen', function() {
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

		//Click Racing Hub - Race Meetings - Yesterday Tab
		it('Click Racing Hub - Race Meetings - Yesterday Tab', function() {
            RacingHub_Home.click_racingHub_RaceMeetings_YesterdayTab();
        });        

		//Open 1st Meeting from Race Meetings - Yesterday Tab
		it('Open 1st Meeting from Race Meetings - Yesterday Tab', function() {
            RacingHub_Home.click_racingHub_RaceMeetings_1stMeeting();

        });
        
        it('Click on the Race List - 1st Race from the list', function() {
            //Click on the Race List - 1st Race from the list
            MeetingAllPage_HeaderRaceList.clickFirstRaceTile();
            
        });
        
        it('Click on the Result Tab - 1st Horse from the List', function() {
            //Click on the Result Tab - 1st Horse from the List
            browser.pause(3000);
			MeetingOnePage.clickFirstHorseTile();
        });

        it('Go back to Result Screen from Horse Card', function() {
            //Go back to Result Screen from Horse Card
            browser.pause(3000);
            VideoPopup.goback_MobileApp();
            });

        it('Click on the Result Tab - Full Replay Button', function() {
            //Click on the Result Tab - Full Replay Button
            MeetingOnePage.click_meetingOne_ResultTab_FullReplayButton();
        });
    
        it('Go back to Result Screen from Full Replay', function() {
            //Go back to Result Screen from Full Replay
            browser.pause(3000);
            VideoPopup.goback_MobileApp();
            });

	

    });