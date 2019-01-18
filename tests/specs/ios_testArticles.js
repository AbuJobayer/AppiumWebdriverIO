import Homescreen from '../pageobjects/ios_pomHomescreen';
import ArticlesPage from '../pageobjects/ios_pomArticle';
//import VideoPopup from '../pageobjects/ios_pomVideoPopup';

	describe('IOS NAVIGATION 01: Testing the Artcles', function() {
		
		/*
		it('Close update window', function() {
			Homescreen.closeHockeyPopup();
		})
		*/
		

		it('Open the Newslink from the Homescreen', function() {
			//Click on the Newslink from the Homescreen
			Homescreen.clickNewsLink();
		});

		//Open News Video tab from the News Hub
		it('Open News Video tab from the News Hub', function() {
			ArticlesPage.open_newsHub_NewsVideoTab();
		});
		
		//Open SA Racing tab from the News Hub
		it('Open SA Racing tab from the News Hub', function() {
			ArticlesPage.open_newsHub_SARacingTab();
		});

		//Open International tab from the News Hub
		it('Open International tab from the News Hub', function() {
			ArticlesPage.open_newsHub_InternationalTab();
		});

		//Open Latest tab from the News Hub
		it('Open Latest tab from the News Hub', function() {
			ArticlesPage.open_newsHub_LatestTab();
		});
		
		//Click on the Top Carousel Screen
		it('Click on the Top Carousel Screen', function() {
			ArticlesPage.click_newsHub_TopCarouselScreen();
		});

		//Click on the Share button
		it('Click on the Share button', function() {
			ArticlesPage.click_newsHub_ShareButton();
		});

		//Close the Share link
		it('Close the Share link', function() {
			ArticlesPage.click_newsHub_CloseButton();
		});

		//Go back to the News Hub Screen
		it('Go back to the News Hub Screen', function() {
			ArticlesPage.click_newsHub_BackButton1();
		});

		//Go back to the Home Screen
		it('Go back to the Home Screen', function() {
			ArticlesPage.click_newsHub_BackButton2();
		});

		
	});
