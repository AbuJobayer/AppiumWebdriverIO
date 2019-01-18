import Homescreen from '../pageobjects/pomHomescreen';
import MeetingSpecificRace_HeaderForm from '../pageobjects/pomMeetingSpecific_HeaderForm';
import MeetingSpecificRace_RaceOverview from '../pageobjects/pomMeetingSpecific_RaceOverview';
import MeetingSpecificRace_ExpertTips from '../pageobjects/pomMeetingSpecific_ExpertTips';
import MeetingSpecificRace_NewsVideo from '../pageobjects/pomMeetingSpecific_NewsVideo';
import RacingHub from '../pageobjects/pomRacingHub';


describe('VALIDATE 15: Test the Meeting Specific Race - Header', function() {
			
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

    //Validate Meeting Specific Race Header - Track Distance
    it('Validate Meeting Specific Race Header - Track Distance', function() {
        MeetingSpecificRace_HeaderForm.waitFor_raceMeetingHeader_TrackDistance();
        MeetingSpecificRace_HeaderForm.check_raceMeetingHeader_TrackDistance();
    });

    //Validate Meeting Specific Race Header - Weather
    it('Validate Meeting Specific Race Header - Weather', function() {
        MeetingSpecificRace_HeaderForm.waitFor_raceMeetingHeader_Weather();
        MeetingSpecificRace_HeaderForm.check_raceMeetingHeader_Weather();
    });

    //Validate Meeting Specific Race Header - Condition
    it('Validate Meeting Specific Race Header - Condition', function() {
        MeetingSpecificRace_HeaderForm.waitFor_raceMeetingHeader_Condition();
        MeetingSpecificRace_HeaderForm.check_raceMeetingHeader_Condition();
    });

    //Validate Meeting Specific Race Header - Time
    it('Validate Meeting Specific Race Header - Time', function() {
        MeetingSpecificRace_HeaderForm.waitFor_raceMeetingHeader_Time();
        MeetingSpecificRace_HeaderForm.check_raceMeetingHeader_Time();
    });

    //Validate Meeting Specific Race Header - Race Code
    it('Validate Meeting Specific Race Header - Race Code', function() {
        MeetingSpecificRace_HeaderForm.waitFor_raceMeetingHeader_RaceCode();
        MeetingSpecificRace_HeaderForm.check_raceMeetingHeader_RaceCode();
    });

}); 


describe('VALIDATE 16: Test the Meeting Specific Race - Form Tab', function() {
		
    //Validate Meeting Specific Race Form Tab - Jersey Image
    it('Validate Meeting Specific Race Form - Jersey Image', function() {
        MeetingSpecificRace_HeaderForm.waitFor_raceMeetingForm_Jersey();
        MeetingSpecificRace_HeaderForm.check_raceMeetingForm_Jersey();
    });

    //Validate Meeting Specific Race Form Tab - Horse Information
    it('Validate Meeting Specific Race Form - Horse Information', function() {
        MeetingSpecificRace_HeaderForm.waitFor_raceMeetingForm_Horse();
        MeetingSpecificRace_HeaderForm.check_raceMeetingForm_Horse();
    });

    //Validate Meeting Specific Race Form Tab - Trainer Name
    it('Validate Meeting Specific Race Form - Trainer Name', function() {
        MeetingSpecificRace_HeaderForm.waitFor_raceMeetingForm_Trainer();
        MeetingSpecificRace_HeaderForm.check_raceMeetingForm_Trainer();
    });

    //Validate Meeting Specific Race Form Tab - Jockey Name
    it('Validate Meeting Specific Race Form - Jockey Name', function() {
        MeetingSpecificRace_HeaderForm.waitFor_raceMeetingForm_Jockey();
        MeetingSpecificRace_HeaderForm.check_raceMeetingForm_Jockey();
    });

    //Validate Meeting Specific Race Form Tab - BB Tag
    it('Validate Meeting Specific Race Form - BB Tag', function() {
        MeetingSpecificRace_HeaderForm.waitFor_raceMeetingForm_BBTag();
        MeetingSpecificRace_HeaderForm.check_raceMeetingForm_BBTag();
    });

});

describe('VALIDATE 17: Test the Meeting Specific Race - Expert Tips Tab', function() {
    
    //Click on Meeting Specific - Expert Tips Tab
    it('Click on Meeting Specific - Race Overview Tab', function() {
        MeetingSpecificRace_ExpertTips.click_raceMeetingExpertTipTab();
        
    });    

    //Validate Meeting Specific Race - Expert Tips Tab - First Content
    it('Validate Meeting Specific Race - Expert Tips Tab - First Content', function() {
        MeetingSpecificRace_ExpertTips.waitFor_raceMeetingExpertTip_FirstContent();
        MeetingSpecificRace_ExpertTips.check_raceMeetingExpertTip_FirstContent();
    });

    //Validate Meeting Specific Race - Expert Tips Tab - Content Image
    it('Validate Meeting Specific Race - Expert Tips Tab - Content Image', function() {
        MeetingSpecificRace_ExpertTips.waitFor_raceMeetingExpertTip_ContentImage();
        MeetingSpecificRace_ExpertTips.check_raceMeetingExpertTip_ContentImage();
    });

    //Validate Meeting Specific Race - Expert Tips Tab - Content Title
    it('Validate Meeting Specific Race - Expert Tips Tab - Content Title', function() {
        MeetingSpecificRace_ExpertTips.waitFor_raceMeetingExpertTip_ContentTitle();
        MeetingSpecificRace_ExpertTips.check_raceMeetingExpertTip_ContentTitle();
    });

    //Validate Meeting Specific Race - Expert Tips Tab - Content Date
    it('Validate Meeting Specific Race - Expert Tips Tab - Content Date', function() {
        MeetingSpecificRace_ExpertTips.waitFor_raceMeetingExpertTip_ContentDate();
        MeetingSpecificRace_ExpertTips.check_raceMeetingExpertTip_ContentDate();
    });

    });


describe('VALIDATE 18: Test the Meeting Specific Race - Race Overview Tab', function() {
    
    //Click on Meeting Specific - Race Overview Tab
    it('Click on Meeting Specific - Race Overview Tab', function() {
        MeetingSpecificRace_RaceOverview.click_raceMeeting_RaceOverview();
        
    });    

    //Validate Meeting Specific Race - Race Overview Tab - Race Condition
    it('Validate Meeting Specific Race - Race Overview Tab - Race Condition', function() {
        MeetingSpecificRace_RaceOverview.waitFor_raceMeetingOverview_RaceCondition();
        MeetingSpecificRace_RaceOverview.check_raceMeetingOverview_RaceCondition();
    });

    //Validate Meeting Specific Race - Race Overview Tab - Gear Changes
    it('Validate Meeting Specific Race - Race Overview Tab - Gear Changes', function() {
        MeetingSpecificRace_RaceOverview.waitFor_raceMeetingOverview_GearChanges();
        MeetingSpecificRace_RaceOverview.check_raceMeetingOverview_GearChanges();
    });

    //Validate Meeting Specific Race - Race Overview Tab - Track Information
    it('Validate Meeting Specific Race - Race Overview Tab - Track Information', function() {
        MeetingSpecificRace_RaceOverview.waitFor_raceMeetingOverview_TrackInformation();
        MeetingSpecificRace_RaceOverview.check_raceMeetingOverview_TrackInformation();
    });



});



describe('VALIDATE 19: Test the Meeting Specific Race - News & Video Tab', function() {
    
        //Click on Meeting Specific - Race Overview Tab
        it('Click on Meeting Specific - News & Video Tab', function() {
            MeetingSpecificRace_NewsVideo.click_raceMeeting_RaceOverview();
        });

    //Move the Header to Left
    it('Move the Header to Left', function() {
        MeetingSpecificRace_NewsVideo.move_raceOverviewTabLeft();
    }); 

    //Click on Meeting Specific - News & Video Tab
    it('Click on Meeting Specific - News & Video Tab', function() {
        MeetingSpecificRace_NewsVideo.click_raceMeetingNewsVideoTab();
    });

    //Validate Meeting Specific Race - News & Video Tab - First Content
    it('Validate Meeting Specific Race - News & Video Tab - First Content', function() {
        MeetingSpecificRace_NewsVideo.waitFor_raceMeetingNewsVideo_FirstContent();
        MeetingSpecificRace_NewsVideo.check_raceMeetingNewsVideo_FirstContent();
    });

    //Validate Meeting Specific Race - News & Video Tab - Content Image
    it('Validate Meeting Specific Race - News & Video Tab - Content Image', function() {
        MeetingSpecificRace_NewsVideo.waitFor_raceMeetingNewsVideo_ContentImage();
        MeetingSpecificRace_NewsVideo.check_raceMeetingNewsVideo_ContentImage();
    });

    //Validate Meeting Specific Race - News & Video Tab - Content Title
    it('Validate Meeting Specific Race - News & Video Tab - Content Title', function() {
        MeetingSpecificRace_NewsVideo.waitFor_raceMeetingNewsVideo_ContentTitle();
        MeetingSpecificRace_NewsVideo.check_raceMeetingNewsVideo_ContentTitle();
    });

    //Validate Meeting Specific Race - News & Video Tab - Content Date
    it('Validate Meeting Specific Race - News & Video Tab - Content Date', function() {
        MeetingSpecificRace_NewsVideo.waitFor_raceMeetingNewsVideo_ContentDate();
        MeetingSpecificRace_NewsVideo.check_raceMeetingNewsVideo_ContentDate();
    });

    //Click on the Back Button
    it('Click on the Back Button', function() {
        MeetingSpecificRace_RaceOverview.clickBackButton();
    });
});