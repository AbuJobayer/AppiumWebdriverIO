import Homescreen from '../pageobjects/pomHomescreen';

import VideoPopup from '../pageobjects/pomVideoPopup';

	describe('NAVIGATION 01: Testing the Live Vision', function() {
		

		it('Ignore update', function() {
			//Ignore Update
			Homescreen.ignoreUpdate();
		});

        it('Click on the Watch Live Button', function() {
			//Click on the Watch Live Button
			VideoPopup.clikWatchLiveButton();
		});

		it('Minimize the Live Video', function() {
			//Minimize the Live Video
			VideoPopup.clickMinimizeButton();
		});

		it('Close the Live video', function() {
			//Close the Live video
			VideoPopup.clickCloseButton();
        });

	});

