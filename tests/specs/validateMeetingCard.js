import Homescreen from '../pageobjects/pomHomescreen';
import MeetingAllPage_HeaderRaceList from '../pageobjects/pomMeetingAll_HeaderRaceList';
import MeetingAll_ExpertTipsOverview from '../pageobjects/pomMeetingAll_ExpertTipsOverview';
import MeetingAllPage_RunnerNewsVideo from '../pageobjects/pomMeetingAll_RunnerNewsVideo';
import RacingHub from '../pageobjects/pomRacingHub';
import MeetingOnePage from '../pageobjects/pomMeetingOne';


describe('VALIDATE 09: Test the Meeting All Card - Header', function() {
			
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

    //Validate Meeting All - Header - Date is existing
    it('Validate Meeting All - Header - Date is existing', function() {
        MeetingAllPage_HeaderRaceList.waitFor_meetingHeader_Date();
        MeetingAllPage_HeaderRaceList.check_meetingHeader_Date();
    }); 

    //Validate Meeting All - Header - Weather is existing
    it('Validate Meeting All - Header - Weather is existing', function() {
        MeetingAllPage_HeaderRaceList.waitFor_meetingHeader_Weather();
        MeetingAllPage_HeaderRaceList.check_meetingHeader_Weather();
    }); 

    //Validate Meeting All - Header - Track Condition is existing
    it('Validate Meeting All - Header - Track Condition is existing', function() {
        MeetingAllPage_HeaderRaceList.waitFor_meetingHeader_TrackCondition();
        MeetingAllPage_HeaderRaceList.check_meetingHeader_TrackCondition();
    });
});

describe('VALIDATE 10: Test the Meeting All Card - Race List Tab', function() {

    //Validate Meeting All - Race List - Race No is existing
    it('Validate Meeting All - Race List - Race No is existing', function() {
        MeetingAllPage_HeaderRaceList.waitFor_meetingRaceList_RaceNo();
        MeetingAllPage_HeaderRaceList.check_meetingRaceList_RaceNo();
    }); 

    //Validate Meeting All - Race List - Race Title is existing
    it('Validate Meeting All - Race List - Race Title is existing', function() {
        MeetingAllPage_HeaderRaceList.waitFor_meetingRaceList_RaceTitle();
        MeetingAllPage_HeaderRaceList.check_meetingRaceList_RaceTitle();
    });

    //Validate Meeting All - Race List - Race Content is existing
    it('Validate Meeting All - Race List - Race Content is existing', function() {
        MeetingAllPage_HeaderRaceList.waitFor_meetingRaceList_RaceContent();
        MeetingAllPage_HeaderRaceList.check_meetingRaceList_RaceContent();
    });

    //Validate Meeting All - Race List - Race Runner Toggle button is existing
    it('Validate Meeting All - Race List - Race Runner Toggle button is existing', function() {
        MeetingAllPage_HeaderRaceList.waitFor_meetingRaceList_RaceRunnerToggle();
        MeetingAllPage_HeaderRaceList.check_meetingRaceList_RaceRunnerToggle();
    });

    //Validate Meeting All - Race List - Race Status is existing
    it('Validate Meeting All - Race List - Race Status is existing', function() {
        MeetingAllPage_HeaderRaceList.waitFor_meetingRaceList_RaceStatus();
        MeetingAllPage_HeaderRaceList.check_meetingRaceList_RaceStatus();
    });

});

describe('VALIDATE 11: Test the Meeting All Card - Expert Tips Tab', function() {

    //Click on the Expert Tips Tab
    it('Click on the Expert Tips Tab', function() {
        MeetingAllPage_HeaderRaceList.clickExpertTipsTab();
    });

    //Validate Meeting All - Expert Tips - Featured Tips & Analysis is existing
    it('Validate Meeting All - Expert Tips - Featured Tips & Analysis is existing', function() {
        MeetingAll_ExpertTipsOverview.waitFor_meetingExpertTips_Header1();
        MeetingAll_ExpertTipsOverview.check_meetingExpertTips_Header1();
    });

    //Validate Meeting All - Expert Tips - 1st Content of Featured Tips & Analysis is existing
    it('Validate Meeting All - Expert Tips - 1st Content of Featured Tips & Analysis is existing', function() {
        MeetingAll_ExpertTipsOverview.waitFor_meetingExpertTips_1stContent();
        MeetingAll_ExpertTipsOverview.check_meetingExpertTips_1stContent();
    });

});


describe('VALIDATE 12: Test the Meeting All Card - Overview Tab', function() {

    //Click on the Overview Tab
    it('Click on the Overview Tab', function() {
        MeetingAllPage_HeaderRaceList.clickOverviewTab();
    });

    //Validate Meeting All - Overview - Track Information is existing
    it('Validate Meeting All - Overview - Track Information is existing', function() {
        MeetingAll_ExpertTipsOverview.waitFor_meetingOverview_TrackInformation();
        MeetingAll_ExpertTipsOverview.check_meetingOverview_TrackInformation();
    });

    //Validate Meeting All - Overview - Scratching is existing
    it('Validate Meeting All - Overview - Scratching is existing', function() {
        MeetingAll_ExpertTipsOverview.waitFor_meetingOverview_Scratchings();
        MeetingAll_ExpertTipsOverview.check_meetingOverview_Scratchings();
    });

    //Validate Meeting All - Overview - Weather is existing
    it('Validate Meeting All - Overview - Weather is existing', function() {
        MeetingAll_ExpertTipsOverview.waitFor_meetingOverview_Weather();
        MeetingAll_ExpertTipsOverview.check_meetingOverview_Weather();
    });

    //Validate Meeting All - Overview - Track Image is existing
    it('Validate Meeting All - Overview - Track Image is existing', function() {
        MeetingAll_ExpertTipsOverview.waitFor_meetingOverview_TrackImage();
        MeetingAll_ExpertTipsOverview.check_meetingOverview_TrackImage();
    });

});

describe('VALIDATE 13: Test the Meeting All Card - Runners Tab', function() {

    //Click on the Runners Tab
    it('Click on the Runners Tab', function() {
        MeetingAllPage_HeaderRaceList.clickRunnerTab();
    });

    //Validate Meeting All - Runners - Silk Image is existing
    it('Validate Meeting All - Runners - Silk Image is existing', function() {
        MeetingAllPage_RunnerNewsVideo.waitFor_meetingRunners_SilkImage();
        MeetingAllPage_RunnerNewsVideo.check_meetingRunners_SilkImage();
    });

    //Validate Meeting All - Runners - Horse Info is existing
    it('Validate Meeting All - Runners - Horse Info is existing', function() {
        MeetingAllPage_RunnerNewsVideo.waitFor_meetingRunners_HorseInfo();
        MeetingAllPage_RunnerNewsVideo.check_meetingRunners_HorseInfo();
    });
    
    //Validate Meeting All - Runners - Trainer is existing
    it('Validate Meeting All - Runners - Trainer is existing', function() {
        MeetingAllPage_RunnerNewsVideo.waitFor_meetingRunners_Trainer();
        MeetingAllPage_RunnerNewsVideo.check_meetingRunners_Trainer();
    });

    //Validate Meeting All - Runners - Jockey is existing
    it('Validate Meeting All - Runners - Jockey is existing', function() {
        MeetingAllPage_RunnerNewsVideo.waitFor_meetingRunners_Jockey();
        MeetingAllPage_RunnerNewsVideo.check_meetingRunners_Jockey();
    });

    //Validate Meeting All - Runners - BB Tag is existing
    it('Validate Meeting All - Runners - BB Tag is existing', function() {
        MeetingAllPage_RunnerNewsVideo.waitFor_meetingRunners_BBTag();
        MeetingAllPage_RunnerNewsVideo.check_meetingRunners_BBTag();
    });

    //Validate Meeting All - Runners - Race No is existing
    it('Validate Meeting All - Runners - Race No  is existing', function() {
        MeetingAllPage_RunnerNewsVideo.waitFor_meetingRunners_RaceNo();
        MeetingAllPage_RunnerNewsVideo.check_meetingRunners_RaceNo();
    });

    //Validate Meeting All - Runners - Location Code is existing
    it('Validate Meeting All - Runners - Location Code  is existing', function() {
        MeetingAllPage_RunnerNewsVideo.waitFor_meetingRunners_LocationCode();
        MeetingAllPage_RunnerNewsVideo.check_meetingRunners_LocationCode();
    });

    //Validate Meeting All - Runners - Track Distance is existing
    it('Validate Meeting All - Runners - Track Distance is existing', function() {
        MeetingAllPage_RunnerNewsVideo.waitFor_meetingRunners_TrackDistance();
        MeetingAllPage_RunnerNewsVideo.check_meetingRunners_TrackDistance();
    });

    //Validate Meeting All - Runners - Race Time is existing
    it('Validate Meeting All - Runners - Race Time is existing', function() {
        MeetingAllPage_RunnerNewsVideo.waitFor_meetingRunners_RaceTime();
        MeetingAllPage_RunnerNewsVideo.check_meetingRunners_RaceTime();
    });

    //Validate Meeting All - Runners - Jockey Weight is existing
    it('Validate Meeting All - Runners - Jockey Weight is existing', function() {
        MeetingAllPage_RunnerNewsVideo.waitFor_meetingRunners_JockeyWeight();
        MeetingAllPage_RunnerNewsVideo.check_meetingRunners_JockeyWeight();
    });

    //Validate Meeting All - Runners - Arrow Button is existing
    it('Validate Meeting All - Runners - Arrow Button is existing', function() {
        MeetingAllPage_RunnerNewsVideo.waitFor_meetingRunners_ArrowButton();
        MeetingAllPage_RunnerNewsVideo.check_meetingRunners_ArrowButton();
    });
});

describe('VALIDATE 14: Test the Meeting All Card - News & Video Tab', function() {

    it('Click on the Overview Tab', function() {
        //Click on the Overview Tab
        MeetingAllPage_HeaderRaceList.clickOverviewTab();
    });

    //Move the Tab Header to Left
    it('Move the Tab Header to Left', function() {
        MeetingAllPage_RunnerNewsVideo.move_TabsHeaderLeft();
    });

    //Click on the Meeting All Page - News & Video Tab
    it('Click on the Meeting All Page - News & Video Tab', function() {
        MeetingAllPage_RunnerNewsVideo.clickNewsVideoTab();
    });

    //Validate Meeting All - News & Video - First Content
    it('Validate Meeting All - News & Video - First Content', function() {
        MeetingAllPage_RunnerNewsVideo.waitFor_meetingNewsVideo_FirstContent();
        MeetingAllPage_RunnerNewsVideo.check_meetingNewsVideo_FirstContent();
    });

    //Validate Meeting All - News & Video - Content Thumbimage
    it('Validate Meeting All - News & Video - Content Thumbimage', function() {
        MeetingAllPage_RunnerNewsVideo.waitFor_meetingNewsVideo_ContentThumbImage();
        MeetingAllPage_RunnerNewsVideo.check_meetingNewsVideo_ContentThumbImage();
    });

    //Validate Meeting All - News & Video - Content Title
    it('Validate Meeting All - News & Video - Content Title', function() {
        MeetingAllPage_RunnerNewsVideo.waitFor_meetingNewsVideo_ContentTitle();
        MeetingAllPage_RunnerNewsVideo.check_meetingNewsVideo_ContentTitle();
    });

    //Validate Meeting All - News & Video - Content Date
    it('Validate Meeting All - News & Video - Content Date', function() {
        MeetingAllPage_RunnerNewsVideo.waitFor_meetingNewsVideo_ContentDate();
        MeetingAllPage_RunnerNewsVideo.check_meetingNewsVideo_ContentDate();
    });


});