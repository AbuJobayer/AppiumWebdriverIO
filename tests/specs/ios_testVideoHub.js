import Homescreen from '../pageobjects/ios_pomHomescreen';
import TVShows from '../pageobjects/ios_pomTVShows';
import VideoHub from '../pageobjects/ios_pomVideoHub';


	describe('IOS NAVIGATION 04: Testing the Video Hub', function() {
		
		/*
		it('Close update window', function() {
			Homescreen.closeHockeyPopup();
		})
		*/
		
        //Open the TV Shows from the Homescreen
		it('Open the TV Shows from the Homescreen', function() {
			Homescreen.click_Homescreen_TVShows();
		});

        //Click on the Menu
		it('Click on the Menu', function() {
			TVShows.click_TVShows_Menu();
        });
        
        //Select the Video Hub from the Menu
		it('Select the Video Hub from the Menu', function() {
			TVShows.click_TVShows_Menu_VideoHub();
		});

/*
VIDEO HUB SECTION
*/		


        //Click on the Top Carousel Video
		it('Click on the Top Carousel Video', function() {
			VideoHub.click_VideoHub_CarouselVideo();
		});		

/*
FEATURED VIDEO SECTION
*/

        //Featured Video - Click on the Share Button
		it('Featured Video - Click on the Share Button', function() {
			VideoHub.click_VideoHub_ShareButton();
		});	

        //Featured Video - Close the Share option
		it('Featured Video - Close the Share option', function() {
			VideoHub.click_VideoHub_CloseButton();
		});	
		
        //Featured Video - Go back to Video Hub Screen
		it('Featured Video - Go back to Video Hub Screen', function() {
			VideoHub.click_VideoHub_BackButton();
		});			

/*
VIDEO HUB SECTION
*/
        //Race Replay Tab - Click on the 1st Video
		it('Race Replay Tab - Click on the 1st Video', function() {
			VideoHub.click_VideoHub_1stRaceFromList();
        });

        //Race Replay - Go back to Video Hub Screen
		it('Race Replay - Go back to Video Hub Screen', function() {
			VideoHub.click_VideoHub_BackButton();
		});	

        //Select the Stewards Tab
		it('Select the Stewards Tab', function() {
			VideoHub.click_VideoHub_StewardsTab();
		});
		
		//Stewards Tab - Click on the 1st Video
		it('Stewards Tab - Click on the 1st Video', function() {
			VideoHub.click_VideoHub_1stRaceFromList();
		});

		//Race Replay - Go back to Video Hub Screen
		it('Race Replay - Go back to Video Hub Screen', function() {
			VideoHub.click_VideoHub_BackButton();
		});	

        //Select the Trials Tab
		it('Select the Trials Tab', function() {
			VideoHub.click_VideoHub_TrialsTab();
		});
		
		//Trials Tab - Click on the 1st Video
		it('Trials Tab - Click on the 1st Video', function() {
			VideoHub.click_VideoHub_1stRaceFromList();
		});

		//Race Replay - Go back to Video Hub Screen
		it('Race Replay - Go back to Video Hub Screen', function() {
			VideoHub.click_VideoHub_BackButton();
		});

		//Select the Post Race Interview Tab
		it('Select the Post Race Interview Tab', function() {
			VideoHub.click_VideoHub_PostRaceInterviewsTab();
		});

		//Post Race Interview Tab - Click on the 1st Video
		it('Post Race Interview Tab - Click on the 1st Video', function() {
			VideoHub.click_VideoHub_1stRaceFromList();
		});

		//Race Replay - Go back to Video Hub Screen
		it('Race Replay - Go back to Video Hub Screen', function() {
			VideoHub.click_VideoHub_BackButton();
		});

        //Click on the Back Button
		it('Click on the Back Button', function() {
			VideoHub.click_VideoHub_BackButton();
		});


	});