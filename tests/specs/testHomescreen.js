import Homescreen from '../pageobjects/pomHomescreen';



	describe('NAVIGATION 11: Testing the Homescreen - Top Tabs and Carousel Screen', function() {
		
		it('Ignore update', function() {
			//Ignore Update
			Homescreen.ignoreUpdate();
		});


		//Click on the Homescreen - Latest Results Tab
		it('Click on the Homescreen - Latest Results Tab', function() {
			Homescreen.click_homescreen_LatestResultTab();
		});

		//Click on Latest Results Tab - 1st Race
		it('Click on Latest Results Tab - 1st Race', function() {
			Homescreen.click_homescreen_1stRace();
		});		
        
		//Go Back to Homescreen from Result Screen
		it('Go Back to Homescreen from Result Screen', function() {
			Homescreen.click_menuBar_Homescreen();
		});	    
    
		//Click on the Homescreen - Todays Meetings Tab
		it('Click on the Homescreen - Todays Meetings Tab', function() {
			Homescreen.click_homescreen_TodaysMeetingsTab();
		});

		//Click on Todays Meetings Tab - 1st Race
		it('Click on Todays Meetings Tab - 1st Race', function() {
			Homescreen.click_homescreen_1stRace();
        });

		//Go Back to Homescreen from Result Screen again
		it('Go Back to Homescreen from Result Screen again', function() {
			Homescreen.click_menuBar_Homescreen();
		});	 
        
		//Click on the Homescreen - Next To Jump Tab
		it('Click on the Homescreen - Next To Jump Tab', function() {
			Homescreen.click_homescreen_NextToJumpTab();
		});

		//Click on Next To Jump - 1st Race
		it('Click on Next To Jump - 1st Race', function() {
			Homescreen.click_homescreen_1stRace();
        });

		//Go Back to Homescreen
		it('Go Back to Homescreen', function() {
			Homescreen.click_menuBar_Homescreen();
		});	 

		//Click on the Homescreen - Tomorrows Meeting Tab
		it('Click on the Homescreen - Tomorrows Meeting Tab', function() {
			Homescreen.click_homescreen_TomorrowMeetingsTab();
		});

		//Click on Tomorrows Meeting - 1st Meeting
		it('Click on Tomorrows Meeting - 1st Meeting', function() {
			Homescreen.click_homescreen_1stRace();
		});

		//Go Back to Homescreen
		it('Go Back to Homescreen', function() {
			Homescreen.click_menuBar_Homescreen();
		});	

		//Swipe the Carousel Screen to Left Twice
		it('Swipe the Carousel Screen to Left Twice', function() {
			Homescreen.swipe_CarouselScreen_Left();
		});	
		
		//Swipe the Carousel Screen to Right
		it('Swipe the Carousel Screen to Right - With Screenshot', function() {
			Homescreen.swipe_CarouselScreen_Right();
		});	

		//Click on Homescreen - Carousel Screen
		it('Click on Homescreen - Carousel Screen', function() {
			Homescreen.click_homescreen_CarouselContent();
		});	

		//Go Back to Homescreen
		it('Go Back to Homescreen', function() {
			Homescreen.click_menuBar_Homescreen();
		});	 

		//Click on the Homescreen - Latest Results Tab
		it('Click on the Homescreen - Latest Results Tab', function() {
			Homescreen.click_homescreen_LatestResultTab();
		});

		//Go Back to Homescreen
		it('Go Back to Homescreen', function() {
			Homescreen.click_menuBar_Homescreen();
		});	

		//Click on the Homescreen - Racing & Tips Button
		it('Click on the Homescreen - Racing & Tips Button', function() {
			Homescreen.click_homescreen_RacingTipsButton();
		});

		//Go Back to Homescreen 2
		it('Go Back to Homescreen 2', function() {
			Homescreen.click_menuBar_Homescreen();
		});	

		//Click on the Homescreen - Race Replays Button
		it('Click on the Homescreen - Race Replays Button', function() {
			Homescreen.click_homescreen_RaceReplaysButton();
		});

		//Go Back to Homescreen 3
		it('Go Back to Homescreen 3', function() {
			Homescreen.click_menuBar_Homescreen();
		});	

		//Click on the Homescreen - Latest News Button
		it('Click on the Homescreen - Latest News Button', function() {
			Homescreen.click_homescreen_LatestNewsButton();
		});

		//Go Back to Homescreen 4
		it('Go Back to Homescreen 4', function() {
			Homescreen.click_menuBar_Homescreen();
		});	

		//Click on the Homescreen - TV Shows Button
		it('Click on the Homescreen - TV Shows Button', function() {
			Homescreen.click_homescreen_TVShowsButton();
		});

		//Go Back to Homescreen 5
		it('Go Back to Homescreen 5', function() {
			Homescreen.click_menuBar_Homescreen();
		});	

		//Click on the Homescreen - Race Results Button
		it('Click on the Homescreen - Race Results Button', function() {
			Homescreen.click_homescreen_RaceResultsButton();
		});

		//Go Back to Homescreen 6
		it('Go Back to Homescreen 6', function() {
			Homescreen.click_menuBar_Homescreen();
		});	

		//Click on the Homescreen - Next Race Timer
		it('Click on the Homescreen - Next Race Timer', function() {
			Homescreen.click_homescreen_NextRaceTimer();
		});

		//Go Back to Homescreen 7
		it('Go Back to Homescreen 7', function() {
			Homescreen.click_menuBar_Homescreen();
		});	

		//Move up the Home screen
			it('Move up the Home screen', function() {
			Homescreen.move_LatestNewsButton_Up();
		});	

		//Move up the Home screen
		it('Move up the Home screen again', function() {
			Homescreen.move_FeaturedNewsVideoSection_Up();
		});	

		//Turn ON and OFF the Racing Radio
		it('Turn ON and OFF the Racing Radio - With Screenshot', function() {
			Homescreen.clicks_Homescreen_RadioButton();
		});	

		

	
	});
