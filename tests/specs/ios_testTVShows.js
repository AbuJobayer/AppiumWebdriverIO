import Homescreen from '../pageobjects/ios_pomHomescreen';
import TVShows from '../pageobjects/ios_pomTVShows';



	describe('IOS NAVIGATION 03: Testing the TV Shows', function() {
		
		/*
		it('Close update window', function() {
			Homescreen.closeHockeyPopup();
		})
		*/
		
        //Open the TV Shows from the Homescreen
		it('Open the TV Shows from the Homescreen', function() {
			Homescreen.click_Homescreen_TVShows();
		});

        //Open the 1st TV Show
		it('Open the 1st TV Show', function() {
			TVShows.click_TVShows_1stShow();
        });
        
        //Run the 1st Video from the list
		it('Run the 1st Video from the list', function() {
			TVShows.click_TVShows_1stVideo();
		});

        //Click on the Back Button
		it('Click on the Back Button', function() {
			TVShows.click_TVShows_BackButton();
		});

		//Click on the Back Button Again
		it('Click on the Back Button again', function() {
			TVShows.click_TVShows_BackButton();
		});

        //Open the 1st TV Show
		it('Open the 1st TV Show', function() {
			TVShows.click_TVShows_1stShow();
        });
		
        //Click on the Highlights Tab
		it('Click on the Highlights Tab', function() {
			TVShows.click_TVShows_HighlightsTab();
		});		

        //Run the 1st Video from the list
		it('Run the 1st Video from the list', function() {
			TVShows.click_TVShows_1stVideo();
		});

        //Click on the Back Button
		it('Click on the Back Button', function() {
			TVShows.click_TVShows_BackButton();
		});
		
		//Click on the Back Button Again
		it('Click on the Back Button again', function() {
			TVShows.click_TVShows_BackButton();
		});


	});
