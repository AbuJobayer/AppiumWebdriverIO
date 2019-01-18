import Homescreen from '../pageobjects/pomHomescreen';
import HorseProfileOverviewForm from '../pageobjects/pomHorseProfileOverviewForm';


describe('VALIDATE 05: Test the contents of Horse Profile - Form Tab', function() {

    //Ignore Update
    it('Ignore update', function() {
        Homescreen.ignoreUpdate();
    });
		
		it('Click on the Horse Card Link from the Homescreen', function() {
			//Click on the Horse Card Link from the Homescreen
			Homescreen.clickHorseCardLink();
        });

        //Validate Race No available
        it('Validate Race No available', function() {
            HorseProfileOverviewForm.waitFor_horseProfile_Form_RaceNo();
        });

        //Validate Race Date available
        it('Validate Race Date available', function() {
            HorseProfileOverviewForm.check_horseProfile_Form_RaceDate(); 
        });

        //Validate Race Location code available
        it('Validate Race Location code available', function() {
            HorseProfileOverviewForm.check_horseProfile_Form_LocationCode(); 
        });

        //Validate Race Track distance available
        it('Validate Race Track distance available', function() {
            HorseProfileOverviewForm.check_horseProfile_Form_TrackDistance(); 
        });

        //Move the Tab Header Up
        it('Move the Tab Header Up', function() {
            HorseProfileOverviewForm.move_horseProfile_TabsHeader();
        });

        //Click on the 1st Race Dropdown Button
        it('Click on the 1st Race Dropdown Button', function() {
            HorseProfileOverviewForm.click1stRaceDopdownButton();
        });

        //Validate Form - 1st Race - Class available
        it('Validate Form - 1st Race - Class available', function() {
            HorseProfileOverviewForm.check_horseProfile_Form_Class(); 
        });

        //Validate Form - 1st Race - Prize available
        it('Validate Form - 1st Race - Prize available', function() {
            HorseProfileOverviewForm.check_horseProfile_Form_Prize(); 
        });

        //Validate Form - 1st Race - Condition available
        it('Validate Form - 1st Race - Condition available', function() {
            HorseProfileOverviewForm.check_horseProfile_Form_Condition(); 
        });        

    });