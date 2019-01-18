import Homescreen from '../pageobjects/pomHomescreen';
import VideoPopup from '../pageobjects/pomVideoPopup';
import TrainerCardPageOverviewForm from '../pageobjects/pomTrainerCardOverviewForm';
import Searchscreen from '../pageobjects/pomSearchScreen';
import LoginScreen from '../pageobjects/pomLoginScreen';
import MeetingOnePage from '../pageobjects/pomMeetingOne';


	describe('NAVIGATION 08: Testing the Trainer Card', function() {
	
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

		//Input the Trainer in Search field
		it('Input the Trainer in Search field', function(){
			Searchscreen.input_TrainerSearch();
			browser.pause(8000);
		});

		//Select the Trainer from the list
		it('Select the Trainer from the list', function(){
			Searchscreen.click_searchScreen_1stResultRow();
		});

		//Get the App XML source
		it('Get the App XML source 2', function(){
			VideoPopup.get_AppPageSource();
		});	

        it('Open the Upcoming Races Tab', function() {
			//Open the Upcoming Races Tab
			TrainerCardPageOverviewForm.clickUpcomingRacesTab();
        });


        it('Open the Horses Tab', function() {
			//Open the Horses Tab'
			TrainerCardPageOverviewForm.clickHorsesTab();
        });

        it('Select the BB Tag', function() {
			//Select the BB Tag
			TrainerCardPageOverviewForm.clickBBTag_HorsesTab();
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

        it('Select the BB Tag again', function() {
			//Select the BB Tag again
			TrainerCardPageOverviewForm.clickBBTag_HorsesTab();
		});

        it('Click on Done Button', function() {
			//Click on Done Button
			VideoPopup.clickDoneButton();
		});

        it('Open the News & Article Tab', function() {
			//Open the News & Article Tab
			TrainerCardPageOverviewForm.clickNewsArticleTab();
		});		

        it('Open the Form Tab', function() {
			//Open the Form Tab
			TrainerCardPageOverviewForm.clickFormTab();
        });

        it('Open the first race details from the Form Tab', function() {
			//Open the first race details from the Form Tab
			TrainerCardPageOverviewForm.click1stRaceDropdownButton();
		});
		
        it('Open the race details', function() {
			//OOpen the race details
			TrainerCardPageOverviewForm.clickopenRaceLink();
		});
		
		it('Go back to Previous screen', function() {
			//Go back to Previous screen
			MeetingOnePage.clickBackButton();
        });

        // it('Close the race details from the Form Tab', function() {
		// 	//Close the race details from the Form Tab
		// 	TrainerCardPageOverviewForm.close1stRaceDropdownButton();
        // });

        // it('Close the race details from the Form Tab', function() {
		// 	//Close the race details from the Form Tab
		// 	TrainerCardPageOverviewForm.click1stRaceDropdownButton();
        // });

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

        // it('Click back button to go to the Home screen', function() {
		// 	//Close the Live video
		// 	TrainerCardPageOverviewForm.clickBackButton();
        // });

    });