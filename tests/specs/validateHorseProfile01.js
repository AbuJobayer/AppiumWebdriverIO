import Homescreen from '../pageobjects/pomHomescreen';
import HorseProfileOverviewForm from '../pageobjects/pomHorseProfileOverviewForm';


describe('VALIDATE 05: Test the contents of Horse Profile - Overview', function() {

    //Ignore Update
    it('Ignore update', function() {
        Homescreen.ignoreUpdate();
    });
		
		it('Click on the Horse Card Link from the Homescreen', function() {
			//Click on the Horse Card Link from the Homescreen
			Homescreen.clickHorseCardLink();
        });

/*
    *** VALIDATION TEST SCENARIOS - HORSE PROFILE - OVERVIEW ***
*/

		//Validate Jesrsey Thumbimage is available
        it('Validate Jesrsey Thumbimage is Visible', function() {
			HorseProfileOverviewForm.waitFor_horseProfile_Overview_Jersey();
        });

		//Validate Horse name is available
        it('Validate Horse name is available', function() {
			HorseProfileOverviewForm.check_horseProfile_Overview_HorseName();
        });

        //Validate Trainer name is available
        it('Validate Trainer name is available', function() {
            HorseProfileOverviewForm.check_horseProfile_Overview_TrainerName();
        });

        //Validate Breed is available
        it('Validate Breed is available', function() {
            HorseProfileOverviewForm.check_horseProfile_Overview_Breed();
        });

        //Validate Foaled is visible
        it('Validate Foaled is visible', function() {
            HorseProfileOverviewForm.check_horseProfile_Overview_Foaled();
        });

        //Validate Age is visible
        it('Validate Age is visible', function() {
            HorseProfileOverviewForm.check_horseProfile_Overview_Age();
        });

        //Validate Sex is visible
        it('Validate Sex is visible', function() {
            HorseProfileOverviewForm.check_horseProfile_Overview_Sex();
        });

        //Validate Colour is visible
        it('Validate Colour is visible', function() {
            HorseProfileOverviewForm.check_horseProfile_Overview_Colour();
        });

        //Validate Last 5 is visible
        it('Validate Last 5 is visible', function() {
            HorseProfileOverviewForm.check_horseProfile_Overview_Last5();
        });

        //Validate Rating is visible
        it('Validate Rating is visible', function() {
            HorseProfileOverviewForm.check_horseProfile_Overview_Rating();
        });

        //Validate G1 Wins is visible
        it('Validate G1 Wins is visible', function() {
            HorseProfileOverviewForm.check_horseProfile_Overview_G123Wins();
        });

        //Validate Prize is visible
        it('Validate Prize is visible', function() {
            HorseProfileOverviewForm.check_horseProfile_Overview_Prize();
        });
   
        //Open the Owner dropdown list
        it('Open the Owners drop down list', function() {
			HorseProfileOverviewForm.clickOwnersDropdownButton();
        });

        //Validate Owner dropdown opened
        it('Validate Owner dropdown opened', function() {
            HorseProfileOverviewForm.waitFor_horseProfile_Overview_OwnerContent();
        });

        //Close the Owners drop down list
        it('Close the Owners drop down list', function() {
			HorseProfileOverviewForm.clickOwnersDropdownButton();
        });

        //Open the Career drop down list
        it('Open the Career drop down list', function() {
			HorseProfileOverviewForm.clickCareerDropdownButton();
        });

        //Validate This season is visible
        it('Validate This season is visible', function() {
            HorseProfileOverviewForm.waitFor_horseProfile_Career_ThisSeason();
        });

        //Validate GRP & Listed is visible
        it('Validate GRP & Listed is visible', function() {
            HorseProfileOverviewForm.check_horseProfile_Career_GRPListed();
        });

        //Validate Jumps is visible
        it('Validate Jumps is visible', function() {
            HorseProfileOverviewForm.check_horseProfile_Career_Jumps();
        });

        //Validate Synth is visible
        it('Validate Synth is visible', function() {
            HorseProfileOverviewForm.check_horseProfile_Career_Synth();
        });

        //Validate Firm is visible
        it('Validate Firm is visible', function() {
            HorseProfileOverviewForm.check_horseProfile_Career_Firm();
        });

        //Validate Good is visible
        it('Validate Good is visible', function() {
            HorseProfileOverviewForm.check_horseProfile_Career_Good();
        });

        //Validate Soft is visible
        it('Validate Soft is visible', function() {
            HorseProfileOverviewForm.check_horseProfile_Career_Soft();
        });

        //Validate Heavy is visible
        it('Validate Heavy is visible', function() {
            HorseProfileOverviewForm.check_horseProfile_Career_Heavy();
        });

        //Validate 1st up is visible
        it('Validate 1st up is visible', function() {
            HorseProfileOverviewForm.check_horseProfile_Career_1stUp();
        });

        //Validate 2nd up is visible
        it('Validate 2nd up is visible', function() {
            HorseProfileOverviewForm.check_horseProfile_Career_2ndUp();
        });

        //Validate 3rd up is visible
        it('Validate 3rd up is visible', function() {
            HorseProfileOverviewForm.check_horseProfile_Career_3rdUp();
        });

        //Close the Career drop down list
        it('Close the Career drop down list', function() {
			HorseProfileOverviewForm.clickCareerDropdownButton();
        });


    });
