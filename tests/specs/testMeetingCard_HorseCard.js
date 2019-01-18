import Homescreen from '../pageobjects/pomHomescreen';
import VideoPopup from '../pageobjects/pomVideoPopup';
import MeetingAllPage_HeaderRaceList from '../pageobjects/pomMeetingAll_HeaderRaceList';
import MeetingOnePage from '../pageobjects/pomMeetingOne';
import HorseCardPop from '../pageobjects/pomHorseCardPop';
import RacingHub from '../pageobjects/pomRacingHub';


	describe('NAVIGATION 06: Testing the Meeting Card and the Horse Popup card', function() {

		
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
		
		//Click on the All Tab
		it('Click on the All Tab', function() {
			MeetingOnePage.click_meetingOne_AllButton();
		});		

		it('Click on the Expert Tips Tab', function() {
			//Click on the Expert Tips Tab
			MeetingAllPage_HeaderRaceList.clickExpertTipsTab();
		});

		it('Click on the Overview Tab', function() {
			//Click on the Overview Tab
			MeetingAllPage_HeaderRaceList.clickOverviewTab();
		});

		it('Move the Tab header to Left', function() {
			//Move the Tab header to Left
			MeetingAllPage_HeaderRaceList.move_TabsHeaderLeft();
		});

		it('Click on the Runners Tab', function() {
			//Click on the Runners Tab
			MeetingAllPage_HeaderRaceList.clickRunnerTab();
		});

		//Click on the News & Video Tab
		it('Click on the News & Video Tab', function() {
			MeetingAllPage_HeaderRaceList.clickNewsVideoTab();
		});

		it('Click on the Race List Tab', function() {
			//Click on the Race List Tab
			MeetingAllPage_HeaderRaceList.clickRaceListTab();
			});

        it('Turn ON Race Runners Toggle', function() {
			//Turn ON Race Runners Toggle
			MeetingAllPage_HeaderRaceList.clickRaceRunnerToggleON();
        });

        it('Turn OFF Race Runners Toggle', function() {
			//Turn OFF Race Runners Toggle
			MeetingAllPage_HeaderRaceList.clickRaceRunnerToggleOFF();
        });

        it('Click on the 1st Race tile from the list', function() {
			//Click on the 1st Race tile from the list
			MeetingAllPage_HeaderRaceList.clickFirstRaceTile();
		});

		it('Click the Stewards Tab', function() {
			//Click the Stewards Tab
			MeetingOnePage.clickStewardsReportTab();
		});

		it('Click on the News & Video tab', function() {
			//Click on the News & Video tab
			MeetingOnePage.clickNews_VideoTab();
        });

        it('Move Tab header right', function() {
			//Move Tab header right
			MeetingOnePage.move_TabsHeaderRight();
		});


        it('Click on the Race Overview tab', function() {
			//Click on the Race Overview tab
			MeetingOnePage.clickRaceOverviewTab();
        });

        it('Click on the Form tab', function() {
			//Click on the Form tab
			MeetingOnePage.clickFormTab();
        });

        it('Click on the 1st BB Button from the Horse list', function() {
			//Click on the 1st BB Button from the Horse list
			MeetingOnePage.clickInsideBBButton();
        });

        it('Click on the 1st Horse Tile from the Horse list', function() {
			//Click on the 1st Horse Tile from the Horse list
			MeetingOnePage.clickFirstHorseTile();
        });

        it('Click on the BB Button from the Top rigght corner', function() {
			//Click on the BB Button from the Top rigght corner
			HorseCardPop.clickBB_ButtonTopRight();
		});
		
        it('Click on Done Button', function() {
			//Click on Done Button
			HorseCardPop.click_bbTag_DoneButton();
		});

        it('Open the Owners dropdown content', function() {
			//Open the Owners dropdown content
			HorseCardPop.clickOwnerDropdownButton();
        });

        it('Close the Owners dropdown content', function() {
			//Close the Owners dropdown content
			HorseCardPop.clickOwnerDropdownButton();
        });

        it('Open the Career dropdown content', function() {
			//Open the Career dropdown content
			HorseCardPop.clickCareerDropdownButton();
        });

        it('Close the Career dropdown content', function() {
			//Close the Career dropdown content
			HorseCardPop.clickCareerDropdownButton();
        });

        it('Turn ON BestBets', function() {
			//Turn ON BestBets
			HorseCardPop.clickRaceRunnerToggleON();
        });

        it('Turn OFF BestBets', function() {
			//Turn OFF BestBets
			HorseCardPop.clickRaceRunnerToggleOFF();
        });

        it('Open 1st race from by Dropdown button', function() {
			//Open 1st race from by Dropdown button
			HorseCardPop.clickFirstRaceDropdownButton();
        });


        it('Close the Horse Profile Popup', function() {
			//Close the Horse Profile Popup
			HorseCardPop.clickCloseButton();
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

        it('Go back to Home screen', function() {
			//CGo back to Home screen
			MeetingOnePage.clickBackButton();
        });

    });