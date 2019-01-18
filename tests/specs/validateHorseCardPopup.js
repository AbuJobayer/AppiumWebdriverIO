import Homescreen from '../pageobjects/pomHomescreen';
// import MeetingAllPage_HeaderRaceList from '../pageobjects/pomMeetingAll_HeaderRaceList';
import MeetingOnePage from '../pageobjects/pomMeetingOne';
import HorseCardPop from '../pageobjects/pomHorseCardPop';
import RacingHub from '../pageobjects/pomRacingHub';
// import MeetingOnePage from '../pageobjects/pomMeetingOne'


	describe('VALIDATE 01: Test Horse Popup card - Overview', function() {
        
		it('Ignore update', function() {
			//Ignore Update
			Homescreen.ignoreUpdate();
		});

		//Select Homescreen Menu - Racing Hub
		it('Select Homescreen Menu - Racing Hub', function() {
			Homescreen.click_menuBar_RacingHub();
		});

		//Click on Racing Hub - 2nd Race from the list
		it('Click on Racing Hub - 2nd Race from the list', function() {
			RacingHub.click_racingHub_2ndRace();
		});	

        it('Click on the 1st Horse Tile from the Horse list', function() {
			//Click on the 1st Horse Tile from the Horse list
			MeetingOnePage.clickFirstHorseTile();
        });


/*
***  VALIDATE HORSE POPUP CARD - OVERVIEW  ***
*/

        //Validate Horse popup card contain Jersey Thumbimage
        it('Validate Horse popup card contain Jersey Thumbimage', function() {
            HorseCardPop.waitFor_horseCard_Jersey();
            HorseCardPop.check_horseCard_Jersey();
        });

        //Validate Horse popup card contain Horse name
        it('Validate Horse popup card contain Horse name', function() {
            HorseCardPop.waitFor_horseCard_HorseName();
            HorseCardPop.check_horseCard_HorseName();
        });

        //Validate Horse popup card contain Trainer name
        it('Validate Horse popup card contain Trainer name', function() {
            HorseCardPop.waitFor_horseCard_TrainerName();
            HorseCardPop.check_horseCard_TrainerName();
        });

        //Validate Horse popup card contain Jockey name
        it('Validate Horse popup card contain Jockey name', function() {
            HorseCardPop.waitFor_horseCard_JockeyName();
            HorseCardPop.check_horseCard_JockeyName();
        });

        //Validate Horse popup card contain Breed Tag
        it('Validate Horse popup card contain Breed Tag', function() {
            HorseCardPop.waitFor_horseCard_Breed();
            HorseCardPop.check_horseCard_Breed();
        });

        //Validate Horse popup card contain Weight Tag
        it('Validate Horse popup card contain Weight Tag', function() {
            HorseCardPop.waitFor_horseCard_Weight();
            HorseCardPop.check_horseCard_Weight();
        });

        //Validate Horse popup card contain Age Tag
        it('Validate Horse popup card contain Age Tag', function() {
            HorseCardPop.check_horseCard_Age();
        });        

        //Validate Horse popup card contain Sex Tag
        it('Validate Horse popup card contain Sex Tag', function() {
            HorseCardPop.check_horseCard_Sex();
        });    

        //Validate Horse popup card contain Colour Tag
        it('Validate Horse popup card contain Colour Tag', function() {
            HorseCardPop.check_horseCard_Colour();
        }); 

        //Validate Horse popup card contain Last 5 Tag
        it('Validate Horse popup card contain Last 5 Tag', function() {
            HorseCardPop.check_horseCard_Last5();
        });   

        //Validate Horse popup card contain Win % Tag
        it('Validate Horse popup card contain Win % Tag', function() {
            HorseCardPop.check_horseCard_Win();
        });   

        //Validate Horse popup card contain Place % Tag
        it('Validate Horse popup card contain Place % Tag', function() {
            HorseCardPop.check_horseCard_Place();
        });

        //Validate Horse popup card contain Prize Tag
        it('Validate Horse popup card contain Prize Tag', function() {
            HorseCardPop.check_horseCard_Prize();
        }); 

        it('Open the Career dropdown content', function() {
			//Open the Career dropdown content
			HorseCardPop.clickCareerDropdownButton();
        });

    });


/*
***  VALIDATE HORSE POPUP CARD - CAREER  ***
*/
describe('VALIDATE 02: Test Horse Popup card - Career', function() {

        //Validate Horse popup card - Career contain Track Tag
        it('Validate Horse popup card - Career contain Track Tag', function() {
            HorseCardPop.waitFor_horseCard_Career_Track();
            HorseCardPop.check_horseCard_Career_Track();
        });  

        //Validate Horse popup card - Career contain Distance Tag
        it('Validate Horse popup card - Career contain Distance Tag', function() {
            HorseCardPop.check_horseCard_Career_Distance();
        }); 

        //Validate Horse popup card - Career contain Track/Dist Tag
        it('Validate Horse popup card - Career contain Track/Dist Tag', function() {
            HorseCardPop.check_horseCard_Career_TrackDistance();
        }); 

        //Validate Horse popup card - Career contain Jockey Tag
        it('Validate Horse popup card - Career contain Jockey Tag', function() {
            HorseCardPop.check_horseCard_Career_Jockey();
        }); 

        //Validate Horse popup card - Career contain Firm Tag
        it('Validate Horse popup card - Career contain Firm Tag', function() {
            HorseCardPop.check_horseCard_Career_Firm();
        }); 

        //Validate Horse popup card - Career contain Good Tag
        it('Validate Horse popup card - Career contain Good Tag', function() {
            HorseCardPop.check_horseCard_Career_Good();
        }); 

        //Validate Horse popup card - Career contain Soft Tag
        it('Validate Horse popup card - Career contain Soft Tag', function() {
            HorseCardPop.check_horseCard_Career_Soft();
        }); 

        //Validate Horse popup card - Career contain Heavy Tag
        it('Validate Horse popup card - Career contain Heavy Tag', function() {
            HorseCardPop.check_horseCard_Career_Heavy();
        }); 

        //Validate Horse popup card - Career contain Synth Tag
        it('Validate Horse popup card - Career contain Synth Tag', function() {
            HorseCardPop.check_horseCard_Career_Synth();
        }); 

        //Validate Horse popup card - Career contain 1st up Tag
        it('Validate Horse popup card - Career contain 1st up Tag', function() {
          
            HorseCardPop.check_horseCard_Career_1stUp();
        }); 

        //Validate Horse popup card - Career contain 2nd up Tag
        it('Validate Horse popup card - Career contain 2nd up Tag', function() {
            
            HorseCardPop.check_horseCard_Career_2ndUp();
        }); 

        it('Close the Career dropdown content', function() {
			//Close the Career dropdown content
			HorseCardPop.clickCareerDropdownButton();
        });
});
/*
***  VALIDATE HORSE POPUP CARD - HORSE LIST  ***
*/

// describe('VALIDATE 03: Test Horse Popup card - Horse List', function() {

//         //Validate Horse popup card - Race List contain Race No
//         it('Validate Horse popup card - Race List contain Race No', function() {
//             HorseCardPop.waitFor_horseCard_Race_No();
//             HorseCardPop.check_horseCard_Race_No();
//         });

//         //Validate Horse popup card - Race List contain Race Date
//         it('Validate Horse popup card - Race List contain Race Date', function() {
//             HorseCardPop.waitFor_horseCard_Race_Date();
//             HorseCardPop.check_horseCard_Race_Date();
//         });

//         //Validate Horse popup card - Race List contain Location Code
//         it('Validate Horse popup card - Race List contain Location code', function() {
//             HorseCardPop.waitFor_horseCard_Race_LocationCode();
//             HorseCardPop.check_horseCard_Race_LocationCode();
//         });

//         //Validate Horse popup card - Race List contain Track distance
//         it('Validate Horse popup card - Race List contain Track distance', function() {
//             HorseCardPop.waitFor_horseCard_Race_TrackDistance();
//             HorseCardPop.check_horseCard_Race_TrackDistance();
//         });

//         //Validate Horse popup card - Race List contain Replay Button
//         it('Validate Horse popup card - Race List contain Replay button', function() {
//             HorseCardPop.waitFor_horseCard_Race_TrackDistance();
//             HorseCardPop.check_horseCard_Race_TrackDistance();
//         });

//     }); 

/*
***  VALIDATION - HORSE CARD - RACE LIST CONTENT
*/

    // describe('VALIDATE 04: Test Horse Popup card - Horse List Internal content', function() {


    //     it('Open 1st race from by Dropdown button', function() {
	// 		//Open 1st race from by Dropdown button
	// 		HorseCardPop.clickFirstRaceDropdownButton();
    //     });

    //     it('Move the Header Up', function() {
	// 		//Move the Header Up
	// 		HorseCardPop.moveUP_horseCard_RaceCard_TrackName();
    //     });

    //     //Validate Horse popup card - Race List contain Track name
    //     it('Validate Horse popup card - Race List contain Track name', function() {
    //         HorseCardPop.waitFor_horseCard_RaceCard_TrackName();
    //         HorseCardPop.check_horseCard_RaceCard_TrackName();
    //     });

    //     //Validate Horse popup card - Race List contain Class
    //     it('Validate Horse popup card - Race List contain Class', function() {
    //         HorseCardPop.waitFor_horseCard_RaceCard_Class();
    //         HorseCardPop.check_horseCard_RaceCard_Class();
    //     });

    //     //Validate Horse popup card - Race List contain Condition
    //     it('Validate Horse popup card - Race List contain Condition', function() {
    //         HorseCardPop.waitFor_horseCard_RaceCard_Condition();
    //         HorseCardPop.check_horseCard_RaceCard_Condition();
    //     });

    //     //Validate Horse popup card - Race List contain Jockey
    //     it('Validate Horse popup card - Race List contain Jockey', function() {
    //         HorseCardPop.waitFor_horseCard_RaceCard_Jockey();
    //         HorseCardPop.check_horseCard_RaceCard_Jockey();
    //     });

    //     //Validate Horse popup card - Race List contain Weight
    //     it('Validate Horse popup card - Race List contain Weight', function() {
    //         HorseCardPop.waitFor_horseCard_RaceCard_Weight();
    //         HorseCardPop.check_horseCard_RaceCard_Weight();
    //     });

    //     //Validate Horse popup card - Race List contain Barrier
    //     it('Validate Horse popup card - Race List contain Barrier', function() {
    //         HorseCardPop.waitFor_horseCard_RaceCard_Barrier();
    //         HorseCardPop.check_horseCard_RaceCard_Barrier();
    //     });

    //     it('Close the 1st race Dropdown button', function() {
	// 		//Close the 1st race Dropdown button
	// 		HorseCardPop.clickFirstRaceDropdownButton();
    //     });

    //     it('Close the Horse Profile Popup', function() {
	// 		//Close the Horse Profile Popup
	// 		HorseCardPop.clickCloseButton();
    //     });

    //     it('Go back to Home screen', function() {
	// 		//CGo back to Home screen
	// 		MeetingOnePage.clickBackButton();
    //     });

    // });