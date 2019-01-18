import Homescreen from '../pageobjects/pomHomescreen';
import RacingHub_Home from '../pageobjects/pomRacingHub_Home'



	describe('NAVIGATION 10: Testing the Racing Hub - Home page', function() {

		
		it('Ignore update', function() {
			//Ignore Update
			Homescreen.ignoreUpdate();
		});

		//Open Homescreen Menu - Racing Hub
		it('Select Homescreen Menu - Racing Hub', function() {
			Homescreen.click_menuBar_RacingHub();
        });

		//Open Racing Hub Home - Latest Results Tab
		it('Open Racing Hub Home - Latest Results Tab', function() {
			RacingHub_Home.click_racingHub_Home_LatestResultsTab();
        });
        
		//Open 1st Race from Latest Results Tab
		it('Open 1st Race from Latest Results Tab', function() {
			RacingHub_Home.click_racingHub_Home_1stRace();
        });

		//Go back to Racing Hub Home from Latest Post Race
		it('Go back to Racing Hub Home from Latest Post Race', function() {
			Homescreen.click_menuBar_RacingHub();
        });

		//Open Racing Hub Home - Next To Jump Tab
		it('Open Racing Hub Home - Next To Jump Tab', function() {
			RacingHub_Home.click_racingHub_Home_NextToJumpTab();
        });
        
		//Open 1st Race from Next To Jump Tab
		it('Open 1st Race from Next To Jump Tab', function() {
			RacingHub_Home.click_racingHub_Home_1stRace();
        });

		//Go back to Racing Hub Home from Upcoming race
		it('Go back to Racing Hub Home from Upcoming race', function() {
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

		//Go back to Racing Hub Home from Yesterday Meeting
		it('Go back to Racing Hub Home from Yesterday Meeting', function() {
			Homescreen.click_menuBar_RacingHub();
        });

		//Click Racing Hub - Race Meetings - Today Tab
		it('Click Racing Hub - Race Meetings - Today Tab', function() {
            RacingHub_Home.click_racingHub_RaceMeetings_TodayTab();
        });        

		//Open 1st Meeting from Race Meetings - Today Tab
		it('Open 1st Meeting from Race Meetings - Today Tab', function() {
            RacingHub_Home.click_racingHub_RaceMeetings_1stMeeting();
        });   

		//Go back to Racing Hub Home from Today Meeting
		it('Go back to Racing Hub Home from Today Meeting', function() {
			Homescreen.click_menuBar_RacingHub();
        });

		//Click Racing Hub - Race Meetings - Tomorrow Tab
		it('Click Racing Hub - Race Meetings - Tomorrow Tab', function() {
            RacingHub_Home.click_racingHub_RaceMeetings_TomorrowTab();
        });        

		//Open 1st Meeting from Race Meetings - Tomorrow Tab
		it('Open 1st Meeting from Race Meetings - Tomorrow Tab', function() {
            RacingHub_Home.click_racingHub_RaceMeetings_1stMeeting();
        });   

		//Go back to Racing Hub Home from Tomorrow Meeting
		it('Go back to Racing Hub Home from Tomorrow Meeting', function() {
			Homescreen.click_menuBar_RacingHub();
        });

		//Move the Today Tab Up
		it('Move the Today Tab Up', function() {
			RacingHub_Home.move_racingHub_RaceMeetings_TodayTab_Up();
			browser.pause(3000);
		});
		
		//Click the Racing Hub - Tips & Analysis - 1st Article
		it('Click the Racing Hub - Tips & Analysis - 1st Article', function() {
			RacingHub_Home.click_racingHub_TipsAnalysis_1stArticle();
        });		

		//Go back to Racing Hub Home from Tips & Analysis - 1st Article
		it('Go back to Racing Hub Home from Tips & Analysis - 1st Article', function() {
			Homescreen.click_menuBar_RacingHub();
		});


		//Move Tips & Analysis - 1st Article UP
		it('Move Tips & Analysis - 1st Article UP', function() {
			RacingHub_Home.move_racingHub_TipsAnalysis_1stArticle_Up();
		});

		//Click the Racing Hub - Recomemded Blackbookers - 1st Article
		it('Click the Racing Hub - Recomemded Blackbookers - 1st Article', function() {
			RacingHub_Home.click_racingHub_RecommendedBlackbookers_1stArticle();
        });

		//Go back to Racing Hub Home from Recomemded Blackbookers - 1st Article
		it('Go back to Racing Hub Home from Recomemded Blackbookers - 1st Article', function() {
			Homescreen.click_menuBar_RacingHub();
		});

		//Move the Racing Hub screen UP
		it('Move the Racing Hub screen UP', function() {
			browser.pause(3000);
			browser.touchAction([
				{action: 'press', x:  600, y: 2000}, { action: 'moveTo', x: 600, y: 1500 }, 'release'
			])
			browser.pause(10000);
		});
	
		//Click the Racing Hub - Upcoming Feature Meeting - 1st Meeting
		it('Click the Racing Hub - Upcoming Feature Meeting - 1st Meeting', function() {
			RacingHub_Home.click_racingHub_UpComingFeature_1stMeeting_RacedayButton();

        });

		//Go back to Racing Hub Home from 1st Meeting
		it('Go back to Racing Hub Home from 1st Meeting', function() {
			Homescreen.click_menuBar_RacingHub();
			browser.pause(5000);
		});

    });