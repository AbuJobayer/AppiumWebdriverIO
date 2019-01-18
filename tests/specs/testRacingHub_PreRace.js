import Homescreen from '../pageobjects/pomHomescreen';
import RacingHub_Home from '../pageobjects/pomRacingHub_Home';
import MeetingAllPage_HeaderRaceList from '../pageobjects/pomMeetingAll_HeaderRaceList';
import MeetingOnePage from '../pageobjects/pomMeetingOne';
import VideoPopup from '../pageobjects/pomVideoPopup.js'



	describe('NAVIGATION 13: Testing the Racing Hub - Pre-Race Meeting & Individual Race', function() {

		
		it('Ignore update', function() {
			//Ignore Update
			Homescreen.ignoreUpdate();
		});

		//Open Homescreen Menu - Racing Hub
		it('Select Homescreen Menu - Racing Hub', function() {
			Homescreen.click_menuBar_RacingHub();
        });

		//Move Racing Hub - View More button Up
		it('Move Racing Hub - View More button Up', function() {
            RacingHub_Home.move_racingHub_Home_ViewMoreButton_Up();
            browser.pause(3000);
        });

		//Click Racing Hub - Race Meetings - Tomorrow Tab
		it('Click Racing Hub - Race Meetings - Tomorrow Tab', function() {
            RacingHub_Home.click_racingHub_RaceMeetings_TomorrowTab();
        });        

		//Open 1st Meeting from Race Meetings - Tomorrow Tab
		it('Open 1st Meeting from Race Meetings - Tomorrow Tab', function() {
            RacingHub_Home.click_racingHub_RaceMeetings_1stMeeting();
            browser.pause(3000);
        });   

		it('Click on the Expert Tips Tab', function() {
			//Click on the Expert Tips Tab
			MeetingAllPage_HeaderRaceList.clickExpertTipsTab();
		});

		it('Click on the Overview Tab', function() {
			//Click on the Overview Tab
			MeetingAllPage_HeaderRaceList.clickOverviewTab();
		});

		it('Click on the Runners Tab', function() {
			//Click on the Runners Tab
			MeetingAllPage_HeaderRaceList.clickRunnerTab();
        });
        
		it('Open the Runners Tab - 1st Horse Card', function() {
			//Open the Runners Tab - 1st Horse Card
			MeetingAllPage_HeaderRaceList.click_meetingAll_Runners_1stHorse();
        });       

        it('Go back to previous screen from Horse Card', function() {
            //Go back to previous screen from Horse Card
            VideoPopup.goback_MobileApp();
            });

		it('Click on the Race List Tab', function() {
			//Click on the Race List Tab
			MeetingAllPage_HeaderRaceList.clickRaceListTab();
            });

        it('Click on the 1st Race tile from the list', function() {
            //Click on the 1st Race tile from the list
            MeetingAllPage_HeaderRaceList.clickFirstRaceTile();
            browser.pause(3000);
		});
		
        it('Click on the Form Tab - 1st Horse from the List', function() {
			//Click on the Form Tab - 1st Horse from the List
			MeetingOnePage.clickFirstHorseTile();
        });

        it('Go back to Form tab from Horse Card', function() {
            //Go back to Form tab from Horse Card
            VideoPopup.goback_MobileApp();
            });

        it('Click on the Expert Tips Tab', function() {
            //Click on the Expert Tips Tab
            MeetingOnePage.click_expertTipsTab();
        });

        it('Click on the Expert Tips Tab - 1st Horse', function() {
            //Click on the Expert Tips Tab - 1st Horse
            MeetingOnePage.click_expertTips_1stHorse();
        });

        it('Go back to Expert Tips tab from Horse Card', function() {
            //Go back to Expert Tips tab from Horse Card
            VideoPopup.goback_MobileApp();
            });

        it('Click on the Race Overview Tab', function() {
            //Click on the Race Overview Tab
            MeetingOnePage.clickRaceOverviewTab();
        });

        it('Click on the Meeting Header - All Button', function() {
            //Click on the Meeting Header - All Button
            MeetingAllPage_HeaderRaceList.click_meetinhHeader_AllButton();
        });

        it('Turn ON Race Runners Toggle', function() {
            //Turn ON Race Runners Toggle
            MeetingAllPage_HeaderRaceList.clickRaceRunnerToggleON();
		});
		
        it('Open the Meeting All - Race List - 1st Horse from the list', function() {
            //TOpen the Meeting All - Race List - 1st Horse from the list
			MeetingAllPage_HeaderRaceList.click_meetingAll_RaceList_1stHrose();
			browser.pause(3000);
		});

        it('Go back to Race List screen from Horse Card', function() {
            //Go back to Race List screen from Horse Card
            VideoPopup.goback_MobileApp();
            });

        it('Turn OFF Race Runners Toggle', function() {
            //Turn OFF Race Runners Toggle
            MeetingAllPage_HeaderRaceList.clickRaceRunnerToggleOFF();
        });

		//Go back to Racing Hub Home
		it('Go back to Racing Hub Home', function() {
			Homescreen.click_menuBar_RacingHub();
        });

	

    });