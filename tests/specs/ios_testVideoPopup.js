import VideoPopup from '../pageobjects/ios_pomVideoPopup';


	describe('IOS NAVIGATION 05: Testing the Pop up Live Video from Home Screen', function() {
		
		/*
		it('Close update window', function() {
			Homescreen.closeHockeyPopup();
		})
		*/
		
        //Open the Watch Live Video from Homescreen
		it('Open the Watch Live Video from Homescreen', function() {
			VideoPopup.clikWatchLiveButton();
		});

        //Minimize the Live Video from Homescreen
		it('Minimize the Live Video from Homescreen', function() {
			VideoPopup.clickMinimizeButton();
		});

        //Close the Live Video from Homescreen
		it('Close the Live Video from Homescreen', function() {
			VideoPopup.clickCloseButton();
		});




	});