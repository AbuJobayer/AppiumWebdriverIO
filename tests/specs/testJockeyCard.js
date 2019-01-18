import Homescreen from '../pageobjects/pomHomescreen';
import VideoPopup from '../pageobjects/pomVideoPopup';
import JockeyOverviewForm from '../pageobjects/pomJockeyOverviewForm';
import Searchscreen from '../pageobjects/pomSearchScreen';
import LoginScreen from '../pageobjects/pomLoginScreen';
import MeetingOnePage from '../pageobjects/pomMeetingOne';

	describe('NAVIGATION 03: Testing the Jockey Card', function() {
	
		it('Ignore update', function() {
			//Ignore Update
			Homescreen.ignoreUpdate();
		});
		
		//Click on the Search Button
		it('Click on the Search Button', function(){
			Homescreen.click_homescreen_SearchButton();
		});

		//Get the App XML source
		it('Get the App XML source 1', function(){
			VideoPopup.get_AppPageSource();
		});	

		//Input the Jockey in Search field
		it('Input the Jockey in Search field', function(){
			Searchscreen.input_JockeySearch();
			browser.pause(8000);
		});

		//Select the Jockey from the list
		it('Select the Jockey from the list', function(){
			Searchscreen.click_searchScreen_1stResultRow();
		});

		//Get the App XML source
		it('Get the App XML source 2', function(){
			VideoPopup.get_AppPageSource();
		});	

        it('Open the Upcoming Races Tab', function() {
			//Open the Upcoming Races Tab
			JockeyOverviewForm.clickUpcomingRacesTab();
		});
		
        it('Open the 1st race from Upcoming Races Tab', function() {
			//Open the 1st race from Upcoming Races Tab
			JockeyOverviewForm.click_upcomingTab_1stRaceButton();
			browser.pause(5000);
		});

		it('Go back to Previous screen', function() {
			//Go back to Previous screen
			MeetingOnePage.clickBackButton();
        });

        it('Open the Form Tab', function() {
			//Open the Form Tab
			JockeyOverviewForm.clickFormTab();
		});
		
		//Open the 1st race details from the Form tab
		it('Click on the Replay Button from the First race', function() {
			JockeyOverviewForm.click_form_ReplayButton();
		});

		//Click on the Login Or Signup Link
        it('Click on the Login Or Signup Link', function() {
			LoginScreen.click_loginSignupLink();
		});

		//Click on the Login tab
		it('Click on the Login tab', function() {
			LoginScreen.clickOnLoginTab();
		});

		//Get the App XML source
		it('Get the App XML source 2', function(){
			VideoPopup.get_AppPageSource();
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

		//Go Back to Homescreen
		it('Go Back to Homescreen', function() {
			Homescreen.click_menuBar_Homescreen();
		});

		it('Click on the Replay Button from the First race', function() {
			//Open the 1st race details from the Form tab
			JockeyOverviewForm.click_form_ReplayButton();
		});

		it('Go back to the Previous screen 1', function() {
			//Go back to the Previous screen 1
			browser.pause(5000);
			VideoPopup.goback_MobileApp();
		});

		//Open the 1st race details from the Form tab
        it('Open the 1st race details from the Form tab', function() {	
			JockeyOverviewForm.click_form_RaceDropdownButton();
		});

		//Move the Form Tab Up
		it('Move the Form Tab Up', function() {
			browser.pause(5000);
			JockeyOverviewForm.move_FormTab_Up();
		});

		//Click on the Full Replay Button
        it('Click on the Full Replay Button', function() {
			JockeyOverviewForm.click_jockeyFormTab_FullReplayButton();
		});

		it('Go back to the Previous screen 2', function() {
			//Go back to the Previous screen 2
			browser.pause(5000);
			VideoPopup.goback_MobileApp();
		});

		//Click on the Stewards Button
        it('Click on the Stewards Button', function() {
			JockeyOverviewForm.click_jockeyFormTab_StewardsButton();
		});

		//Go back to the Previous screen 3
		it('Go back to the Previous screen 3', function() {
			browser.pause(5000);
			VideoPopup.goback_MobileApp();
		});

		//Click on the Last 400 Button
        it('Click on the Last 400 Button', function() {
			JockeyOverviewForm.click_jockeyFormTab_Last400Button();
		});

		//Go back to the Previous screen 4
		it('Go back to the Previous screen 4', function() {
			browser.pause(5000);
			VideoPopup.goback_MobileApp();
		});

        it('Close the 1st race details from the Form tab', function() {
			//Close the 1st race details from the Form tab
			JockeyOverviewForm.click_form_RaceDropdownButton();
		});
		
		it('Open the News & Articles Tab', function() {
			//Open the News & Articles Tab
			JockeyOverviewForm.clickNewsArticleTab();
		});

		//Get the App XML source
		it('Get the App XML source 1', function(){
			VideoPopup.get_AppPageSource();
		});	
		
		//Open the 1st Video from the list
		it('Open the 1st Video from the list', function() {
			JockeyOverviewForm.click_newsVideoTab_1stVideo();
		});


		it('Go back to the Previous screen 5', function() {
			//Go back to the Previous screen 5
			browser.pause(5000);
			JockeyOverviewForm.goback_MobileApp();
		});

        it('Click on the Watch Live Button', function() {
			//Click on the Watch Live Button
			VideoPopup.clikWatchLiveButton();
		});

		it('Minimize the Live Video', function() {
			//Minimize the Live Video
			VideoPopup.clickMinimizeButton();
		});

		it('Close the Live video', function() {
			//Close the Live video
			VideoPopup.clickCloseButton();
        });

    });