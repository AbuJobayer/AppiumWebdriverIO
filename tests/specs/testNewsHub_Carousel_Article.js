import Homescreen from '../pageobjects/pomHomescreen';
import NewsHub from '../pageobjects/pomNewsHub';
import VideoPopup from '../pageobjects/pomVideoPopup';


	describe('NAVIGATION 09: Testing News Hub - Carousel Screen and Article', function() {
		

		it('Ignore update', function() {
			//Ignore Update
			Homescreen.ignoreUpdate();
		});

		//Click on the Menubar - News Hub Button
		it('Click on the Menubar - News Hub Button', function() {
			Homescreen.click_menuBar_NewsHub();
		});

		//Swipe the News Hub - Carousel screen Left twice
		it('Swipe the News Hub - Carousel screen Left twice', function() {
			NewsHub.swipe_CarouselScreen_Left();
			browser.pause(3000);
		});

		//Swipe the News Hub - Carousel screen Right
		it('Swipe the News Hub - Carousel screen Right', function() {
			NewsHub.swipe_CarouselScreen_Right();
			browser.pause(3000);
		});

		//Open the News Hub - Carousel screen content
		it('Open the News Hub - Carousel screen content', function() {
			NewsHub.open_newsHub_CarouselContent();
		});

		it('Go back to the Previous screen 1', function() {
			//Go back to the Previous screen 3
			browser.pause(5000);
			VideoPopup.goback_MobileApp();
			browser.pause(5000);
		  });

		//Open the News Hub - 1st content from the list
		it('Open the News Hub - 1st content from the list', function() {
			NewsHub.click_newsHub_List_1stContent();
		});

		//Open the Article - Share Button
		it('Open the Article - Share Button', function() {
			NewsHub.open_newsHub_Article_ShareButton();
		});

		//Close the Article - Share Button
		it('Close the Article - Share Button', function() {
			NewsHub.close_newsHub_Article_ShareCloseButton();
			browser.pause(3000);

		});

		//Move the Article - Up
		it('Move the Article - Up', function() {
			browser.touchAction([
				{action: 'press', x:  600, y: 1550}, { action: 'moveTo', x: 600, y: 1450 }, 'release'
			])
			browser.pause(3000);
		});

		//Move the Article - Up more
		it('Move the Article - Up more', function() {

			browser.touchAction([
				{action: 'press', x:  500, y: 1500}, { action: 'moveTo', x: 500, y: 1400 }, 'release'
			])
			browser.pause(3000);
		});	

		//Move the Article - Up again
		it('Move the Article - Up again', function() {
			browser.touchAction([
				{action: 'press', x:  600, y: 1550}, { action: 'moveTo', x: 600, y: 1450 }, 'release'
			])
		});	

		//Go back to the News Hub Home
		it('Go back to the News Hub Home', function() {
			Homescreen.click_menuBar_NewsHub();
		});

 
	});
