import Homescreen from '../pageobjects/pomHomescreen';
import latestRacingVideosHub from '../pageobjects/pomVideo_LatestRacingVideoHub';
import VideoPlayer_VideoHub from '../pageobjects/pomVideoPlayer_VideoHub'
import RaceReplayChannel_VideoPlayer from '../pageobjects/pomVideo_RaceReplaysChannel'



describe('VALIDATE 27: Testing the View More Race Replays - Full Replays Tab', function() {
    
    //Ignore Update    
    it('Ignore update', function() {
        Homescreen.ignoreUpdate();
    });
        

    //Click on the Video Hub from the Homescreen
    it('Click on the Video Hub Link from the Homescreen', function() {
        Homescreen.clickVideoHubLink();
    });

    //Move up the Header
    it('Move up the Header', function(){
        latestRacingVideosHub.moveUpLatestRacingHeader();
    });

    //Click on the View More Race Replay Button
    it('Click on the View More Race Replay Button', function(){
        latestRacingVideosHub.click_videoHub_ViewMoreLatestRacingVideos();
    });



/*
*****  VALIDATE: TEST SCENARIOS FOR - FULL REPLAYS TAB  *****
*/

    //Validate Race Replay Channel - Full Replays Tab is existing
    it('Validate Race Replay Channel - Full Replays Tab is existing', function() {
        RaceReplayChannel_VideoPlayer.waitFor_raceReplayChannel_FullReplaysTab();
        RaceReplayChannel_VideoPlayer.check_raceReplayChannel_FullReplaysTab();
    });

    //Validate Full Replay Tab - 1st Video Content is existing
    it('Validate Full Replay Tab - 1st Video Content is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoContent();
        latestRacingVideosHub.check_videoHub_1stVideoContent();
    }); 

    //Validate Full Replay Tab - 1st Video Thumbimage is existing
    it('Validate Full Replay Tab - 1st Video Thumbimage is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoThumbImage();
        latestRacingVideosHub.check_videoHub_1stVideoThumbImage();
    }); 

    //Validate Full Replay Tab - 1st Video Title is existing
    it('Validate Full Replay Tab - 1st Video Title is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoTitle();
        latestRacingVideosHub.check_videoHub_1stVideoTitle();
    }); 

    //Validate Full Replay Tab - 1st Video Date is existing
    it('Validate Full Replay Tab - 1st Video Date is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoDate();
        latestRacingVideosHub.check_videoHub_1stVideoDate();
    });
    
    //Validate Full Replay Tab - Video screen is existing
    it('Validate Full Replay Tab - Video screen is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_Screen();
        VideoPlayer_VideoHub.check_videoPlayer_Screen();
    }); 

    //Validate Race Replay Channel Tab - Content Title is existing
    it('Validate Race Replay Channel Tab - Content Title is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_ContentTitle();
        VideoPlayer_VideoHub.check_videoPlayer_ContentTitle();
    });

    //Validate Race Replay Channel Tab - Content Date is existing
    it('Validate Race Replay Channel Tab - Content Date is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_ContentDate();
        VideoPlayer_VideoHub.check_videoPlayer_ContentDate();
    });

    //Validate Race Replay Channel Tab - Share Button is existing
    it('Validate Race Replay Channel Tab - Share Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_ShareButton();
        VideoPlayer_VideoHub.check_videoPlayer_ShareButton();
    });

    //Click on the Race Replay Channel Tab - Share Button
    it('Click on the Race Replay Channel Tab - Share Button', function() {
        VideoPlayer_VideoHub.click_videoPlayer_ShareButton();
    });

    //Validate Twitter Button is existing
    it('Validate Twitter Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_TwitterButton();
        VideoPlayer_VideoHub.check_videoPlayer_TwitterButton();
    });

    //Validate Facebook Button is existing
    it('Validate Facebook Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_FacebookButton();
        VideoPlayer_VideoHub.check_videoPlayer_FacebookButton();
    });

    //Validate Email Button is existing
    it('Validate Email Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_EmailButton();
        VideoPlayer_VideoHub.check_videoPlayer_EmailButton();
    });
});

/*
*****  VALIDATE: TEST SCENARIOS FOR - LAST 400 TAB  *****
*/
describe('VALIDATE 28: Testing the View More Race Replays - Last 400 Tab', function() {

    //Validate Race Replay Channel - Last 400 Tab is existing
    it('Validate Race Replay Channel - Last 400 Tab is existing', function() {
        RaceReplayChannel_VideoPlayer.waitFor_raceReplayChannel_Last400Tab();
        RaceReplayChannel_VideoPlayer.check_raceReplayChannel_Last400Tab();
    });

    //Click on the - Last 400 Tab
    it('Click on the - Last 400 Tab', function() {
        RaceReplayChannel_VideoPlayer.click_raceReplayChannel_Last400Tab();
    });

    //Click on 1st Video content from - Last 400 Tab
    it('Click on 1st Video content from - Last 400 Tab', function() {
        latestRacingVideosHub.click1stVideoContent();
    }); 

    //Validate Last 400 Tab - 1st Video Thumbimage is existing
    it('Validate Last 400 Tab - 1st Video Thumbimage is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoThumbImage();
        latestRacingVideosHub.check_videoHub_1stVideoThumbImage();
    }); 

    //Validate Last 400 Tab - 1st Video Title is existing
    it('Validate Last 400 Tab - 1st Video Title is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoTitle();
        latestRacingVideosHub.check_videoHub_1stVideoTitle();
    }); 

    //Validate Last 400 Tab - 1st Video Date is existing
    it('Validate Last 400 Tab - 1st Video Date is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoDate();
        latestRacingVideosHub.check_videoHub_1stVideoDate();
    });
});

/*
*****  VALIDATE: TEST SCENARIOS FOR - STEWARDS TAB  *****
*/
describe('VALIDATE 29: Testing the View More Race Replays - Stewards Tab', function() {

    //Validate Race Replay Channel - Stewards Tab is existing
    it('Validate Race Replay Channel - Stewards Tab is existing', function() {
        RaceReplayChannel_VideoPlayer.waitFor_raceReplayChannel_StewardsTab();
        RaceReplayChannel_VideoPlayer.check_raceReplayChannel_StewardsTab();
    });

    //Click on the - Stewards Tab
    it('Click on the - Stewards Tab', function() {
        RaceReplayChannel_VideoPlayer.click_raceReplayChannel_StewardsTab();
    });

    //Click on 1st Video content from - Stewards Tab
    it('Click on 1st Video content from - Stewards Tab', function() {
        latestRacingVideosHub.click1stVideoContent();
    }); 

    //Validate Stewards Tab - 1st Video Thumbimage is existing
    it('Validate Stewards Tab - 1st Video Thumbimage is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoThumbImage();
        latestRacingVideosHub.check_videoHub_1stVideoThumbImage();
    }); 

    //Validate Stewards Tab - 1st Video Title is existing
    it('Validate Stewards Tab - 1st Video Title is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoTitle();
        latestRacingVideosHub.check_videoHub_1stVideoTitle();
    }); 

    //Validate Stewards Tab - 1st Video Date is existing
    it('Validate Stewards Tab - 1st Video Date is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoDate();
        latestRacingVideosHub.check_videoHub_1stVideoDate();
    });
});


/*
*****  VALIDATE: TEST SCENARIOS FOR - DRONE VISION TAB  *****
*/

describe('VALIDATE 30: Testing the View More Race Replays - Drone Vision Tab', function() {

    //Validate Race Replay Channel - Drone Vision Tab is existing
    it('Validate Race Replay Channel - Drone Vision Tab is existing', function() {
        RaceReplayChannel_VideoPlayer.waitFor_raceReplayChannel_DroneVisionTab();
        RaceReplayChannel_VideoPlayer.check_raceReplayChannel_DroneVisionTab();
    });

    //Click on the - Drone Vision Tab
    it('Click on the - Drone Vision Tab', function() {
        RaceReplayChannel_VideoPlayer.click_raceReplayChannel_DroneVisionTab();
    });

    //Click on 1st Video content from - Drone Vision Tab
    it('Click on 1st Video content from - Drone Vision Tab', function() {
        latestRacingVideosHub.click1stVideoContent();
    }); 

    //Validate Drone Vision Tab - 1st Video Thumbimage is existing
    it('Validate Drone Vision Tab - 1st Video Thumbimage is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoThumbImage();
        latestRacingVideosHub.check_videoHub_1stVideoThumbImage();
    }); 

    //Validate Drone Vision Tab - 1st Video Title is existing
    it('Validate Drone Vision Tab - 1st Video Title is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoTitle();
        latestRacingVideosHub.check_videoHub_1stVideoTitle();
    }); 

    //Validate Drone Vision Tab - 1st Video Date is existing
    it('Validate Drone Vision Tab - 1st Video Date is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoDate();
        latestRacingVideosHub.check_videoHub_1stVideoDate();
    });
});


/*
*****  VALIDATE: TEST SCENARIOS FOR - INTERVIEWS TAB  *****
*/

describe('VALIDATE 31: Testing the View More Race Replays - Interviews Tab', function() {
    //Move the Tab to Left
    it('Move the Tab to Left', function() {
        RaceReplayChannel_VideoPlayer.move_StewardsTabsLeft();
    });

    //Validate Race Replay Channel - Interviews Tab is existing
    it('Validate Race Replay Channel - Interviews Tab is existing', function() {
        RaceReplayChannel_VideoPlayer.waitFor_raceReplayChannel_InterviewsTab();
        RaceReplayChannel_VideoPlayer.check_raceReplayChannel_InterviewsTab();
    });

    //Click on the - Interviews Tab
    it('Click on the - Interviews Tab', function() {
        RaceReplayChannel_VideoPlayer.click_raceReplayChannel_InterviewsTab();
    });

    //Click on 1st Video content from - Interviews Tab
    it('Click on 1st Video content from - Interviews Tab', function() {
        latestRacingVideosHub.click1stVideoContent();
    }); 

    //Validate Interviews Tab - 1st Video Thumbimage is existing
    it('Validate Interviews Tab - 1st Video Thumbimage is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoThumbImage();
        latestRacingVideosHub.check_videoHub_1stVideoThumbImage();
    }); 

    //Validate Interviews Tab - 1st Video Title is existing
    it('Validate Interviews Tab - 1st Video Title is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoTitle();
        latestRacingVideosHub.check_videoHub_1stVideoTitle();
    }); 

    //Validate Interviews Tab - 1st Video Date is existing
    it('Validate Interviews Tab - 1st Video Date is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoDate();
        latestRacingVideosHub.check_videoHub_1stVideoDate();
    });

    //Click on the Back Button
    it('Click on the Back Button', function() {
        RaceReplayChannel_VideoPlayer.clickBackButton();
    });

});
