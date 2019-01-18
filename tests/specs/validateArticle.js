import Homescreen from '../pageobjects/pomHomescreen';
import ArticlesPage from '../pageobjects/pomArticles';
import VideoPopup from '../pageobjects/pomVideoPopup';
import NewsHub from '../pageobjects/pomNewsHub'

	describe('VALIDATE 35: Testing the News Hub & Article', function() {

		it('Ignore update', function() {
			//Ignore Update
			Homescreen.ignoreUpdate();
		});

		//Click on the Menubar - News Hub Button
		it('Click on the Menubar - News Hub Button', function() {
			Homescreen.click_menuBar_NewsHub();
		});

		//Get the Page source
		it('Get the Page source', function() {
			VideoPopup.get_AppPageSource();
		});		

		//Click on the News Hub	- Carousel
		it('Click on the News Hub - Carousel', function() {
			ArticlesPage.open_newsHub_CarouselContent();
        });
        
		//Check the Article - Heading exist
		it('Check the Article - Heading exist', function() {
			ArticlesPage.waitFor_newsHub_Article_Heading();
        });

    	//Check the Article - Hero Image exist
		it('Check the Article - Hero Image exist', function() {
            ArticlesPage.waitFor_newsHub_Article_HeroImage();
        });    

		//Click on the Article - Share Button
		it('Click on the Article - Share Button', function() {
			ArticlesPage.click_newsHub_Article_ShareButton();
        });
        
    	//Check the Article - Twitter Icon exist
		it('Check the Article - Twitter Icon exist', function() {
			ArticlesPage.waitFor_newsHub_Article_Twitter();
        });

    	//Check the Article - Facebook Icon exist
		it('Check the Article - Twitter Icon exist', function() {
			ArticlesPage.check_newsHub_Article_Facebook();
		});
		
    	//Check the Article - Email Icon exist
		it('Check the Article - Twitter Icon exist', function() {
			ArticlesPage.check_newsHub_Article_Email();
        });  	
        
		//Click on the Article - Close Button
		it('Click on the Article - Close Button', function() {
			ArticlesPage.click_newsHub_Article_CloseButton();
		});	

		//Go back to News Hub Screen
		it('Go back to News Hub Screen', function() {
			Homescreen.click_menuBar_NewsHub();
		});
			

		//Move up the News Hub - 2nd Article
		it('Move up the News Hub - 2nd Article', function() {
			ArticlesPage.move_newsHub_2ndArticle_Up();
			browser.pause(5000);
		});

    	//Check News Hub - Racing News - Latest Tab Existing
		it('Check News Hub - Racing News - Latest Tab Existing', function() {
			NewsHub.waitFor_newsHub_LatestTab();
		});
		
    	//Check News Hub - Racing News - All Star Mile Tab Existing
		it('Check News Hub - Racing News - All Star Mile Tab Existing', function() {
			NewsHub.check_newsHub_AllStarMileTab();
		});

    	//Check News Hub - Racing News - News Video Tab Existing
		it('Check News Hub - Racing News - News Video Tab Existing', function() {
			NewsHub.check_newsHub_NewsVideoTab();
		});

    	//Check News Hub - Racing News - Tips Tab Existing
		it('Check News Hub - Racing News - Tips Tab Existing', function() {
			NewsHub.check_newsHub_TipsTab();
		});

    	//Check News Hub - Racing News - International Tab Existing
		it('Check News Hub - Racing News - International Tab Existing', function() {
			NewsHub.check_newsHub_InternationalTab();
		});

    	//Move News Hub - Racing News - News & Video Tab Left
		it('Move News Hub - Racing News - News & Video Tab Left', function() {
			NewsHub.move_newsHub_NewsVideoTab_Left();
		});

    	//Check News Hub - Racing News - Breeding Tab Existing
		it('Check News Hub - Racing News - International Tab Existing', function() {
			NewsHub.check_newsHub_BreedingTab();
		});

		//Move the News Hub screen - Up
		it('Move the News Hub screen - Up', function() {
			browser.touchAction([
				{action: 'press', x:  600, y: 2000}, { action: 'moveTo', x: 600, y: 1900 }, 'release'
			])
			browser.pause(6000);
		});			

    	//Check News Hub - Featured News - Featured Video Tab Existing
		it('Check News Hub - Featured News - Featured Video Tab Existing', function() {
			NewsHub.check_newsHub_FeatureVideosTab();
		});

    	//Check News Hub - Featured News - Opinion Tab Existing
		it('Check News Hub - Featured News - Opinion Tab Existing', function() {
			NewsHub.check_newsHub_OpinionTab();
		});

	
	});
