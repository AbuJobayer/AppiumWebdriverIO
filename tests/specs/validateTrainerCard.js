import Homescreen from '../pageobjects/pomHomescreen';
import TrainerCardPageOverviewForm from '../pageobjects/pomTrainerCardOverviewForm';
import TrainerCardUpcomingRacesHorses from '../pageobjects/pomTrainerCardUpcomingRacesHorses';



	describe('VALIDATE 20: Test the Trainer Card - Overview', function() {
	
		it('Ignore update', function() {
			//Ignore Update
			Homescreen.ignoreUpdate();
		});
		

	/*
    ***  VALIDATE TRAINER CARD - OVERVIEW  ***
    */

		it('Click on the Trainer Card Link from the Homescreen', function() {
			//Click on the Trainer Card Link from the Homescreen
			Homescreen.clickTrainerCardLink();
        });

 		//Validate Trainer card -  Thumbimage is existing
         it('Validate Trainer card -  Thumbimage is existing', function() {
			TrainerCardPageOverviewForm.waitFor_trainer_Overview_TrainerImage();
			TrainerCardPageOverviewForm.check_trainer_Overview_TrainerImage();
        });
        
 		//Validate Trainer card -  First Winner is existing
         it('Validate Trainer card -  First Winner is existing', function() {
			TrainerCardPageOverviewForm.waitFor_trainer_Overview_FirstWinner();
			TrainerCardPageOverviewForm.check_trainer_Overview_FirstWinner();
        });        

 		//Validate Trainer card -  Based is existing
         it('Validate Trainer card -  Based is existing', function() {
			TrainerCardPageOverviewForm.waitFor_trainer_Overview_Based();
			TrainerCardPageOverviewForm.check_trainer_Overview_Based();
        });    

 		//Validate Trainer card -  Career Starts is existing
         it('Validate Trainer card -  Career Starts is existing', function() {
			TrainerCardPageOverviewForm.waitFor_trainer_Overview_CareerStarts();
			TrainerCardPageOverviewForm.check_trainer_Overview_CareerStarts();
        });  

 		//Validate Trainer card -  Career Wins is existing
         it('Validate Trainer card -  Career Wins is existing', function() {
			TrainerCardPageOverviewForm.waitFor_trainer_Overview_CareerWins();
			TrainerCardPageOverviewForm.check_trainer_Overview_CareerWins();
        });  

 		//Validate Trainer card -  Career Placed is existing
         it('Validate Trainer card -  Career Placed is existing', function() {
			TrainerCardPageOverviewForm.waitFor_trainer_Overview_CareerPlaced();
			TrainerCardPageOverviewForm.check_trainer_Overview_CareerPlaced();
		});
		
	});

    /*
    ***  VALIDATE TRAINER CARD - FORM TAB  ***
    */	

	describe('VALIDATE 21: Test the Trainer Card - Form Tab', function() {

 		//Validate Trainer card - Form - Race No is existing
         it('Validate Trainer card - Form - Race No is existing', function() {
			TrainerCardPageOverviewForm.waitFor_trainer_Form_RaceNo();
			TrainerCardPageOverviewForm.check_trainer_Form_RaceNo();
        });  

 		//Validate Trainer card - Form - Race Date is existing
         it('Validate Trainer card - Form - Race Date is existing', function() {
			TrainerCardPageOverviewForm.waitFor_trainer_Form_Date();
			TrainerCardPageOverviewForm.check_trainer_Form_Date();
        });  

 		//Validate Trainer card - Form - Location Code is existing
         it('Validate Trainer card - Form - Location Code is existing', function() {
			TrainerCardPageOverviewForm.waitFor_trainer_Form_LocationCode();
			TrainerCardPageOverviewForm.check_trainer_Form_LocationCode();
        }); 

 		//Validate Trainer card - Form - Track Distance is existing
         it('Validate Trainer card - Form - Track Distance is existing', function() {
			TrainerCardPageOverviewForm.waitFor_trainer_Form_Distance();
			TrainerCardPageOverviewForm.check_trainer_Form_Distance();
        }); 

 		//Validate Trainer card - Form - Replay Button is existing
         it('Validate Trainer card - Form - Replay Button is existing', function() {
			TrainerCardPageOverviewForm.waitFor_trainer_Form_ReplayButton();
			TrainerCardPageOverviewForm.check_trainer_Form_ReplayButton();
        }); 

		//Open the first race details from the Form Tab
        it('Open the first race details from the Form Tab', function() {
			TrainerCardPageOverviewForm.click1stRaceDropdownButton();
		});
		
		//Move the Form header Up
        it('Move the Form header Up', function() {
			TrainerCardPageOverviewForm.moveUp_TrainerForm_TrackName();
		});

 		//Validate Trainer card - Form - Track name is existing
         it('Validate Trainer card - Form - Track name is existing', function() {
			TrainerCardPageOverviewForm.waitFor_trainer_Form_TrackName();
			TrainerCardPageOverviewForm.check_trainer_Form_TrackName();
        }); 

 		//Validate Trainer card - Form - Horse name is existing
         it('Validate Trainer card - Form - Horse name is existing', function() {
			TrainerCardPageOverviewForm.waitFor_trainer_Form_HorseName();
			TrainerCardPageOverviewForm.check_trainer_Form_HorseName();
        }); 

 		//Validate Trainer card - Form - Class is existing
         it('Validate Trainer card - Form - Class is existing', function() {
			TrainerCardPageOverviewForm.waitFor_trainer_Form_Class();
			TrainerCardPageOverviewForm.check_trainer_Form_Class();
        }); 

 		//Validate Trainer card - Form - Prize is existing
         it('Validate Trainer card - Form - Prize is existing', function() {
			TrainerCardPageOverviewForm.waitFor_trainer_Form_Prize();
			TrainerCardPageOverviewForm.check_trainer_Form_Prize();
		}); 
		
 		//Validate Trainer card - Form - Condition is existing
         it('Validate Trainer card - Form - Condition is existing', function() {
			TrainerCardPageOverviewForm.waitFor_trainer_Form_Condition();
			TrainerCardPageOverviewForm.check_trainer_Form_Condition();
		}); 

 		//Validate Trainer card - Form - Jockey is existing
         it('Validate Trainer card - Form - Jockey is existing', function() {
			TrainerCardPageOverviewForm.waitFor_trainer_Form_Jockey();
			TrainerCardPageOverviewForm.check_trainer_Form_Jockey();
		});

 		//Validate Trainer card - Form - Weight is existing
         it('Validate Trainer card - Form - Weight is existing', function() {
			TrainerCardPageOverviewForm.waitFor_trainer_Form_Weight();
			TrainerCardPageOverviewForm.check_trainer_Form_Weight();
		});

 		//Validate Trainer card - Form - Barrier is existing
         it('Validate Trainer card - Form - Barrier is existing', function() {
			TrainerCardPageOverviewForm.waitFor_trainer_Form_Barrier();
			TrainerCardPageOverviewForm.check_trainer_Form_Barrier();
		});

		//Close the race details from the Form Tab
        it('Close the race details from the Form Tab', function() {
			TrainerCardPageOverviewForm.close1stRaceDropdownButton();
        });

	});
	

	describe('VALIDATE 22: Test the Trainer Card - Horses Tab', function() {

		//Open the Horses Tab'
        it('Open the Horses Tab', function() {
			TrainerCardPageOverviewForm.clickHorsesTab();
        });

		//Validate Trainer card - Horses - Jersey image is existing
		it('Validate Trainer card - Form - Race No is existing', function() {
			TrainerCardUpcomingRacesHorses.waitFor_trainer_Horses_image();
			TrainerCardUpcomingRacesHorses.check_trainer_Horses_image();
	   }); 


	   	//Validate Trainer card - Horses - Horse Name is existing
		it('Validate Trainer card - Form - Horse Name is existing', function() {
			TrainerCardUpcomingRacesHorses.waitFor_trainer_Horses_HorseName();
			TrainerCardUpcomingRacesHorses.check_trainer_Horses_HorseName();
	   });

	   	//Validate Trainer card - Horses - Last Race is existing
		   it('Validate Trainer card - Form - Last Race is existing', function() {
			TrainerCardUpcomingRacesHorses.waitFor_trainer_Horses_LastRace();
			TrainerCardUpcomingRacesHorses.check_trainer_Horses_LastRace();
	   }); 

	   	//Validate Trainer card - Horses - Last Race is existing
		   it('Validate Trainer card - Form - Last Race is existing', function() {
			TrainerCardUpcomingRacesHorses.waitFor_trainer_Horses_LastRace();
			TrainerCardUpcomingRacesHorses.check_trainer_Horses_LastRace();
	   }); 

	   	//Validate Trainer card - Horses - Age is existing
		   it('Validate Trainer card - Form - Age is existing', function() {
			TrainerCardUpcomingRacesHorses.waitFor_trainer_Horses_HorseAge();
			TrainerCardUpcomingRacesHorses.check_trainer_Horses_HorseAge();
	   });

	   	//Validate Trainer card - Horses - Sex is existing
		   it('Validate Trainer card - Form - Sex is existing', function() {
			TrainerCardUpcomingRacesHorses.waitFor_trainer_Horses_Sex();
			TrainerCardUpcomingRacesHorses.check_trainer_Horses_Sex();
	   });

	   	//Validate Trainer card - Horses - Rating is existing
		   it('Validate Trainer card - Form - Rating is existing', function() {
			TrainerCardUpcomingRacesHorses.waitFor_trainer_Horses_Rating();
			TrainerCardUpcomingRacesHorses.check_trainer_Horses_Rating();
	   });

	   	//Validate Trainer card - Horses - Prize is existing
		   it('Validate Trainer card - Form - Prize is existing', function() {
			TrainerCardUpcomingRacesHorses.waitFor_trainer_Horses_Prize();
			TrainerCardUpcomingRacesHorses.check_trainer_Horses_Prize();
	   });

	   	//Validate Trainer card - Horses - BB Tag is existing
		   it('Validate Trainer card - Form - BB Tag is existing', function() {
			TrainerCardUpcomingRacesHorses.waitFor_trainer_Horses_BBTag();
			TrainerCardUpcomingRacesHorses.check_trainer_Horses_BBTag();
	   });


	   it('Click back button to go to the Home screen', function() {
		//Close the Live video
		TrainerCardPageOverviewForm.clickBackButton();
		});

	}); 