import Homescreen from '../pageobjects/pomHomescreen';
import HorseProfileOverviewForm from '../pageobjects/pomHorseProfileOverviewForm';
import VideoPopup from '../pageobjects/pomVideoPopup';
import Searchscreen from '../pageobjects/pomSearchScreen';
import LoginScreen from '../pageobjects/pomLoginScreen';


	describe('NAVIGATION 02: Testing the Horse Profile', function() {
	

		it('Ignore update', function() {
			//Ignore Update
			Homescreen.ignoreUpdate();
		});

		//Go to Racing Profile
		it('Go Back to Homescreen', function() {
			Homescreen.click_menuBar_Profile();
		});

		//Refresh the page
		it('Refresh the page', function() {
			VideoPopup.refreshUI();
		});		

		// it('Click on the Login tab', function() {
		// 	//Click on the Login tab
		// 	LoginScreen.clickOnLoginTab();
		// });
	
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

		//Go to Racing Profile
		it('Go Back to Homescreen', function() {
			Homescreen.click_menuBar_Homescreen();
		});
		
		//Click on the Search Button
		it('Click on the Search Button', function(){
			Homescreen.click_homescreen_SearchButton();
		});

		//Refresh the page
		it('Refresh the page', function() {
			VideoPopup.refreshUI();
		});

		//Input the Horse in Search field
		it('Input the Horse in Search field', function(){
			Searchscreen.input_HorseSearch();
		});

		//Select the Horse from the list
		it('Select the Horse from the list', function(){
			Searchscreen.click_searchScreen_3rdResultRow();
		});

        it('Open the Owners drop down list', function() { 
			//Open the Owners drop down list
			HorseProfileOverviewForm.clickOwnersDropdownButton();
        });

        it('Close the Owners drop down list', function() {
			//Close the Owners drop down list
			HorseProfileOverviewForm.clickOwnersDropdownButton2();
        });

        it('Open the Career drop down list', function() {
			//Open the Career drop down list
			HorseProfileOverviewForm.clickCareerDropdownButton();
        });

        it('Close the Career drop down list', function() {
			//Close the Career drop down list
			HorseProfileOverviewForm.clickCareerDropdownButton();
        });

        it('Click on the Upcoming Races Tab', function() {
			//Click on the Upcoming Races Tab
			HorseProfileOverviewForm.clickUpcomingRacesTab();
        });

        it('Open the News & Articles Tab', function() {
			//Open the News & Articles Tab
			HorseProfileOverviewForm.clickNewsArticleTab();
        });

        it('Open the Form Tab', function() {
			//Open the Form Tab
			HorseProfileOverviewForm.clickFormTab();
        });

        it('Open the 1st race drop down', function() {
			//Open the 1st race drop down
			HorseProfileOverviewForm.click1stRaceDopdownButton();
        });

        it('Close the 1st race drop down', function() {
			//Close the 1st race drop down
			HorseProfileOverviewForm.close1stRaceDopdownButton();
        });

        it('Click on the BB tag', function() {
			//Click on the BB tag
			HorseProfileOverviewForm.clickBBTag();
		});		

        it('Click on Done Button', function() {
			//Click on Done Button
			VideoPopup.clickDoneButton();
		});

        it('Click on the BB tag agian', function() {
			//Click on the BB tag
			HorseProfileOverviewForm.clickBBTag();
		});

        it('Click on Remove Blackbook Confirmation Button', function() {
			//Click on Done Button
			VideoPopup.click_removeBlackbookButton();
		});		

        it('Click on Yes Button', function() {
			//Click on Done Button
			VideoPopup.click_yesButton();
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
        
        it('Go back to Homescreen', function() {
			//Go back to Homescreen
			HorseProfileOverviewForm.clickBackButton();
		});

    });