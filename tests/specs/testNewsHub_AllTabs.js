import Homescreen from '../pageobjects/pomHomescreen';
import NewsHub from '../pageobjects/pomNewsHub';
import VideoPopup from '../pageobjects/pomVideoPopup';


	describe('NAVIGATION 09: Testing News Hub - Racing News Tabs', function() {
		

		it('Ignore update', function() {
			//Ignore Update
			Homescreen.ignoreUpdate();
		});

		//Click on the Menubar - News Hub Button
		it('Click on the Menubar - News Hub Button', function() {
			Homescreen.click_menuBar_NewsHub();
		});

		//Move Up - News hub - 1st Content from the list
		it('Move Up - News hub - 1st Content from the list', function() {
			NewsHub.move_newsHub_List_1stContent_Up();
			browser.pause(3000);
		});

		it('Get Page Source', function() {
			VideoPopup.get_AppPageSource();
			browser.pause(3000);
		});

		//Open the Racing News - All Star Mile Tab
		it('Open the Racing News - All Star Mile Tab', function() {
			NewsHub.open_newsHub_AllStarMileTab();
		});

		//Open the All Star Mile Tab - 1st Article from the list
		it('Open the All Star Mile Tab - 1st Article from the list', function() {
			NewsHub.open_newsHub_RacingNews_1stContent();
			
		});

		it('Get Page Source', function() {
			VideoPopup.get_AppPageSource();
			browser.pause(3000);
		});

		//Move the All Star Mile Article up
		it('Move the All Star Mile Article up', function() {
			browser.pause(3000);
			browser.touchAction([
				{action: 'press', x:  600, y: 1550}, { action: 'moveTo', x: 600, y: 1450 }, 'release'
			])
			browser.pause(3000);
		});

		//Go back to News Hub Home from All Star Mile Article
		it('Go back to News Hub Home from All Star Mile Article', function() {
			Homescreen.click_menuBar_NewsHub();
		});

		//Open the Racing News - Latest Tab
		it('Open the Racing News - Latest Tab', function() {
			NewsHub.open_newsHub_LatestTab();
		});

		//Open the Latest Tab - 1st Article from the list
		it('Open the Latest Tab - 1st Article from the list', function() {
			NewsHub.open_newsHub_RacingNews_1stContent();
			browser.pause(3000);
		});

		//Move the Latest News Article up
		it('Move the Latest News Article up', function() {
			browser.pause(3000);
			browser.touchAction([
				{action: 'press', x:  600, y: 1550}, { action: 'moveTo', x: 600, y: 1450 }, 'release'
			])
			browser.pause(3000);
		});

		//Go back to News Hub Home screen from Latest Article
		it('Go back to News Hub Home screen from Latest Article', function() {
			Homescreen.click_menuBar_NewsHub();
		});

		//Open the Racing News - News Video Tab
		it('Open the Racing News - News Video Tab', function() {
			NewsHub.open_newsHub_NewsVideoTab();
		});

		//Open the News Video Tab - 1st Video from the list
		it('Open the News Video Tab - 1st Video from the list', function() {
			NewsHub.open_newsHub_RacingNews_1stContent();
			browser.pause(3000);
		});

		//Go back to the Previous screen from News Video
		it('Go back to the Previous screen from News Video', function() {
			VideoPopup.goback_MobileApp();
			browser.pause(3000);
		  });		

		//Open the Racing News - Tips Tab
		it('Open the Racing News - Tips Tab', function() {
			NewsHub.open_newsHub_TipsTab();
		});

		//Open the Tips Tab - 1st Article from the list
		it('Open the Tips Tab - 1st Article from the list', function() {
			NewsHub.open_newsHub_RacingNews_1stContent();
		});

		//Move the Tips Article up
		it('Move the Tips Article up', function() {
			browser.pause(3000);
			browser.touchAction([
				{action: 'press', x:  600, y: 1550}, { action: 'moveTo', x: 600, y: 1450 }, 'release'
			])
			browser.pause(3000);
		});

		//Go back to News Hub Home screen from Tips Article
		it('Go back to News Hub Home screen from Latest Article', function() {
			Homescreen.click_menuBar_NewsHub();
		});

		//Open the Racing News - International Tab
		it('Open the Racing News - International Tab', function() {
			NewsHub.open_newsHub_InternationalTab();
		});

		//Open the International Tab - 1st Article from the list
		it('Open the International Tab - 1st Article from the list', function() {
			NewsHub.open_newsHub_RacingNews_1stContent();
		});

		//Move the International Article up
		it('Move the International Article up', function() {
			browser.pause(3000);
			browser.touchAction([
				{action: 'press', x:  600, y: 1550}, { action: 'moveTo', x: 600, y: 1450 }, 'release'
			])
			browser.pause(3000);
		});

		//Go back to the News Hub Home screen from International Article
		it('Go back to News Hub Home screen from Latest Article', function() {
			Homescreen.click_menuBar_NewsHub();
		});

		//Open the Racing News - Breeding Tab
		it('Open the Racing News - Breeding Tab', function() {
			NewsHub.open_newsHub_BreedingTab();
		});

		//Open the Breeding Tab - 1st Article from the list
		it('Open the Breeding Tab - 1st Article from the list', function() {
			NewsHub.open_newsHub_RacingNews_1stContent();
			browser.pause(3000);
		});

		//Move the Breeding Article up
		it('Move the Breeding Article up', function() {
			browser.pause(3000);
			browser.touchAction([
				{action: 'press', x:  600, y: 1550}, { action: 'moveTo', x: 600, y: 1450 }, 'release'
			])
			browser.pause(3000);
		});

		//Go back to the News Hub Home screen from Breeding Article
		it('Go back to News Hub Home screen from Latest Article', function() {
			Homescreen.click_menuBar_NewsHub();
			browser.pause(3000)
		});
 
	});



	describe('NAVIGATION 09: Testing News Hub - Featured News Tabs', function() {

		//Move the screen up more
		it('Move the screen up further more', function() {
			browser.pause(3000);
			browser.touchAction([
				{action: 'press', x:  600, y: 1550}, { action: 'moveTo', x: 600, y: 1450 }, 'release'
			])
			browser.pause(3000);
			browser.touchAction([
				{action: 'press', x:  500, y: 1550}, { action: 'moveTo', x: 500, y: 1450 }, 'release'
			])
			browser.pause(3000);
		});

		it('Get Page Source', function() {
			browser.pause(3000);
			VideoPopup.get_AppPageSource();
		});

		//Open the Featured News - Featufred Video Tab
		it('Open the Featured News - Featufred Video Tab', function() {
			NewsHub.open_newsHub_FeatureVideosTab();
		});

		//Open the 1st Video from the Featufred Video Tab
		it('Open the 1st Video from the Featufred Video Tab', function() {
			NewsHub.open_newsHub_FeaturedNews_1stContent();
		});

		//Go back to the Previous screen from Featufred Video
		it('Go back to the Previous screen from Featufred Video', function() {
			VideoPopup.goback_MobileApp();
			browser.pause(3000);
		  });	

		//Open the Featured News - Spring Carnival Tab
		it('Open the Featured News - Spring Carnival Tab', function() {
			NewsHub.open_newsHub_SpringCarnivalTab();
		});

		//Open the 1st article from the Spring Carnival Tab
		it('Open the 1st article from the Spring Carnival Tab', function() {
			NewsHub.open_newsHub_FeaturedNews_1stContent();
		});

		//Move the Spring Carnival Article up
		it('Move the Spring Carnival Article up', function() {
			browser.pause(3000);
			browser.touchAction([
				{action: 'press', x:  600, y: 1550}, { action: 'moveTo', x: 600, y: 1450 }, 'release'
			])
			browser.pause(3000);
		});

		//Go back to News Hub Home screen from the Spring Carnival Article
		it('Go back to News Hub Home screen from the Spring Carnival Article', function() {
			browser.pause(3000);
			Homescreen.click_menuBar_NewsHub();
		});

		//Open the Featured News - Opinion Tab
		it('Open the Featured News - Opinion Tab', function() {
			NewsHub.open_newsHub_OpinionTab();
		});

		//Open the 1st article from the Opinion Tab
		it('Open the 1st article from the Opinion Tab', function() {
			NewsHub.open_newsHub_FeaturedNews_1stContent();
		});

		//Move the Opinion Article up
		it('Move the Opinion Article up', function() {
			browser.pause(3000);
			browser.touchAction([
				{action: 'press', x:  600, y: 1550}, { action: 'moveTo', x: 600, y: 1450 }, 'release'
			])
			browser.pause(3000);
		});

		//Go back to News Hub Home screen from the Opinion Article
		it('Go back to News Hub Home screen from the Opinion Article', function() {
			browser.pause(3000);
			Homescreen.click_menuBar_NewsHub();
		});



	});