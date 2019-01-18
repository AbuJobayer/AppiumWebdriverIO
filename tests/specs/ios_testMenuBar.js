import MenuBar from '../pageobjects/ios_pomMenuBar';


	describe('IOS NAVIGATION 06: Testing the Menu Bar from the Homescreen', function() {
		

        //Open the Racing Hub
		it('Open the Racing Hub', function() {
			MenuBar.click_menu_RacingButton();
		});

        //Open the Video Hub
		it('Open the Video Hub', function() {
			MenuBar.click_menu_VideoButton();
		});

        //Open the News Hub
		it('Open the News Hub', function() {
			MenuBar.click_menu_NewsButton();
		});

        //Open the Login screen
		it('Open the Login screen', function() {
			MenuBar.click_menu_LoginButton();
		});




	});