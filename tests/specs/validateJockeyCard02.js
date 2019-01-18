import Homescreen from '../pageobjects/pomHomescreen';
import JockeyOverviewForm from '../pageobjects/pomJockeyOverviewForm';







	/*
	*****   TEST SCENARIOS FOR JOCKEY CARD - FORM TAB   *****
	*/

	describe('VALIDATE 08: Test the contents of Jockey Card - Form Tab', function() {

		//Ignore Update
		it('Ignore update', function() {
			Homescreen.ignoreUpdate();
		});
		
		//Click on the Trainer Card Link from the Homescreen
		it('Click on the Jockey Link from the Homescreen', function() {
			Homescreen.clickJockeyCardLink()
        });


		//Validate Jockey - Form Tab - 1st Row - Jockey No is Visible
		it('Validate Jockey - Form Tab - 1st Row - Jockey No is Visible', function() {
			JockeyOverviewForm.waitFor_form_JockeyNo();
		});

		//Validate Jockey - Form Tab - 1st Row - Meeting Date is Visible
		it('Validate Jockey - Form Tab - 1st Row - Meeting Date is Visible', function() {
			JockeyOverviewForm.check_form_MeetingDate();
		});
	
		//Validate Jockey - Form Tab - 1st Row - Meeting Location Code is Visible
		it('Validate Jockey - Form Tab - 1st Row - Meeting Location Code is Visible', function() {
			JockeyOverviewForm.check_form_MeetingLocationCode();
		});

		//Validate Jockey - Form Tab - 1st Row - Track Distance is Visible
		it('Validate Jockey - Form Tab - 1st Row - Track Distance is Visible', function() {
			JockeyOverviewForm.check_form_TrackDistance();
		});

		//Validate Jockey - Form Tab - 1st Row - Replay Button is Visible
		it('Validate Jockey - Form Tab - 1st Row - Replay Button is Visible', function() {

			JockeyOverviewForm.check_form_ReplayButton();
		});

		it('Click on the Race Dropdown Button from the Form tab', function() {
			//Open the 1st race details from the Form tab
			JockeyOverviewForm.click_form_RaceDropdownButton();
        });

		//Validate Jockey - Form Tab - 1st Row - Track name available
		it('Validate Jockey - Form Tab - 1st Row - Track name available', function() {
			JockeyOverviewForm.check_form_FirstRace_TrackName();
		});

		//Validate Jockey - Form Tab - 1st Row - Horse name available
		it('Validate Jockey - Form Tab - 1st Row - Horse name available', function() {
			JockeyOverviewForm.check_form_FirstRace_HorseName();
		});

		//Validate Jockey - Form Tab - 1st Row - Class available
		it('Validate Jockey - Form Tab - 1st Row - Class available', function() {
			JockeyOverviewForm.check_form_FirstRace_Class();
		});

		//Validate Jockey - Form Tab - 1st Row - Prize available
		it('Validate Jockey - Form Tab - 1st Row - Prize available', function() {
			JockeyOverviewForm.check_form_FirstRace_Prize();
		});


		//Validate Jockey - Form Tab - 1st Row - Condition available
		it('Validate Jockey - Form Tab - 1st Row - Condition available', function() {
			JockeyOverviewForm.check_form_FirstRace_Condition();
		});





		/*
        it('Open the Upcoming Races Tab', function() {
			//Open the Upcoming Races Tab
			JockeyOverviewForm.clickUpcomingRacesTab();
        });

        it('Open the Stats Tab', function() {
			//Open the Stats Tab
			JockeyOverviewForm.clickStatsTab();
        });
        

        it('Open the 1st race details from the Form tab', function() {
			//Open the 1st race details from the Form tab
			JockeyOverviewForm.click1stRaceDropdownButton();
        });

        it('Close the 1st race details from the Form tab', function() {
			//Close the 1st race details from the Form tab
			JockeyOverviewForm.click1stRaceDropdownButton();
		});
		
		it('Open the News & Articles Tab', function() {
			//Open the News & Articles Tab
			JockeyOverviewForm.clickNewsArticleTab();
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

        it('Click the back Button', function() {
			//Click the back Button
			JockeyOverviewForm.clickBackButton();
        });

        */

	});