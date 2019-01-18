import Homescreen from '../pageobjects/ios_pomHomescreen';
import RacingHub from '../pageobjects/ios_pomRacingHub';
import HorseCard from '../pageobjects/ios_pomHorseCard';
//import VideoPopup from '../pageobjects/ios_pomVideoPopup';

	describe('IOS NAVIGATION 02: Testing the Racing Hub - Meeting - Horse Card', function() {
		
		/*
		it('Close update window', function() {
			Homescreen.closeHockeyPopup();
		})
		*/
		
		//Open on the Race Results from the Homescreen
		it('Open on the Race Results from the Homescreen', function() {
			Homescreen.click_Homescreen_RaceResult();
		});

		//Open on the Latest Result tab from the Racing Hub
		it('Open on the Latest Result tab from the Racing Hub', function() {
			RacingHub.click_RacingHub_LatestResultsTab();
		});
	
		//Open the 2nd Race from the List
		it('Open the 2nd Race from the List', function() {
			RacingHub.click_RacingHub_2ndRace();
		});
		
		//Open the Stewards Tab
		it('Open the Stewards Tab', function() {
			RacingHub.click_RacingHub_StewardsReport();
		});
		
		//Open the New & Video Tab
		it('Open the New & Video Tab', function() {
			RacingHub.click_RacingHub_NewsVideo();
		});

		//Open the Race Overview Tab
		it('Open the Race Overview Tab', function() {
			RacingHub.click_RacingHub_RaceOverview();
		});

		//Open the Results Tab
		it('Open the Results Tab', function() {
			RacingHub.click_RacingHub_ResultTab();
		});

		//Open the 2nd Race from the List of races
		it('Open the 2nd Race from the List of races', function() {
			RacingHub.click_RacingHub_2ndHorseCard();
		});

		//Open the 2nd Horsecard from from the list
		it('Open the 2nd Race from the List of races', function() {
			HorseCard.click_HorseCard_CloseButton();
		});			

		//Click on the All Tab
		it('Click on the All Tab', function() {
			RacingHub.click_RacingHub_AllTab();
		});

		//Open the Expert Tips Tab
		it('Open the Expert Tips Tab', function() {
			RacingHub.click_RacingHub_ExpertTipsTab();
		});

		//Open the Overview Tab
		it('Open the Overview Tab', function() {
			RacingHub.click_RacingHub_OverviewTab();
		});

		//Open the Runners Tab
		it('Open the Runners Tab', function() {
			RacingHub.click_RacingHub_RunnersTab();
		});

		//Click on the Back Button
		it('Click on the Back Button', function() {
			RacingHub.click_RacingHub_BackButton();
		});

		//Click on the Back Button
		it('Click on the Back Button', function() {
			RacingHub.click_RacingHub_BackButton();
		});


	});