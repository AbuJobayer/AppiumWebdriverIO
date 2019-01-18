import Homescreen from '../pageobjects/pomHomescreen';
import JockeyOverviewForm from '../pageobjects/pomJockeyOverviewForm';



	/*
	*****   TEST SCENARIOS FOR JOCKEY CARD - OVERVIEW   *****
	*/

	describe('VALIDATE 07: Test the contents of Jockey Card - Overview', function() {

		//Ignore Update
		it('Ignore update', function() {
			Homescreen.ignoreUpdate();
		});
		
		//Click on the Trainer Card Link from the Homescreen
		it('Click on the Jockey Link from the Homescreen', function() {
			Homescreen.clickJockeyCardLink()
        });

		//Check if the Jockey's thumbimage is visible
        it('Validate Jockey Thumbimage is Visible', function() {
			JockeyOverviewForm.waitForJockeyThumbImage();
        });

		//Check if the Jockey's name is visible
		it('Validate Jockey Name is Visible', function() {	
			JockeyOverviewForm.checkJockeyName();
		});
	
		//Check if the Jockey's Most Ride for Tag is visible
		it('Validate Most Ride for Tag is Visible', function() {
			JockeyOverviewForm.checkMostRideForTag();
		});

		//Check if the Jockey's First Ride for Tag is visible
		it('Validate Jockey First Ride for Tag is Visible', function() {
			JockeyOverviewForm.checkFirstRideTag();
		});
		
		//Check if the Jockey's Base Tag is visible
		it('Validate Jockey Base Tag is Visible', function() {
			JockeyOverviewForm.checkBaseTag();
		});		

		//Check if the Jockey's Career starts Tag is visible
		it('Validate Jockey Career starts Tag is Visible', function() {
			JockeyOverviewForm.checkCareerStartsTag();
		});	

		//Check if the Jockey's Career wins Tag is visible
		it('Validate Jockey Career Wins Tag is Visible', function() {
			JockeyOverviewForm.checkCareerWinsTag();
		});	
/*
		//Check if the Jockey's G1/2/3 Wins Tag is visible
		it('Validate Jockey G1/2/3 Wins Tag is Visible', function() {
			JockeyOverviewForm.checkG123WinsTag();
		});	

		//Check if the Jockey's Prize Tag is visible
		it('Validate Jockey Prize Tag is Visible', function() {
			JockeyOverviewForm.checkPrizeTag();
		});	

		//Check if the Jockey's Wins Tag is visible
		it('Validate Jockey Wins Tag is Visible', function() {
			JockeyOverviewForm.checkWinsTag();
		});	

		//Check if the Jockey's Place Tag is visible
		it('Validate Jockey Place Tag is Visible', function() {
			JockeyOverviewForm.checkPlaceTag();
		});	

		//Check if the Jockey's Recent win Tag is visible
		it('Validate Jockey Recent win Tag is Visible', function() {
			JockeyOverviewForm.checkRecentWinTag();
		});	
*/
		/*
		***  Added more steps when the User profile will be created for BB Button ***
		*/

	});
	
