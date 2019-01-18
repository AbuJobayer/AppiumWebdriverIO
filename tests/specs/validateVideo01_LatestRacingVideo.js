import Homescreen from '../pageobjects/pomHomescreen';
import latestRacingVideosHub from '../pageobjects/pomVideo_LatestRacingVideoHub';
import VideoPlayer_VideoHub from '../pageobjects/pomVideoPlayer_VideoHub'




describe('VALIDATE 23: Testing the Latest Racing Videos - Race Replays Tab', function() {
    
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


/*
*****   TEST SCENARIOS FOR VIDEO HUB LATEST RACING VIDEO - RACE REPLAYS TAB  *****
*/

    //Validate Race Replay Tab - 1st Video Content is existing
        it('Validate Race Replay Tab - 1st Video Content is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoContent();
        latestRacingVideosHub.check_videoHub_1stVideoContent();
    }); 

    //Validate Race Replay Tab - 1st Video Thumbimage is existing
    it('Validate Race Replay Tab - 1st Video Thumbimage is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoThumbImage();
        latestRacingVideosHub.check_videoHub_1stVideoThumbImage();
    }); 

    //Validate Race Replay Tab - 1st Video Title is existing
    it('Validate Race Replay Tab - 1st Video Title is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoTitle();
        latestRacingVideosHub.check_videoHub_1stVideoTitle();
    }); 

    //Validate Race Replay Tab - 1st Video Date is existing
    it('Validate Race Replay Tab - 1st Video Date is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoDate();
        latestRacingVideosHub.check_videoHub_1stVideoDate();
    });

    //Validate Race Replay Tab - View More Race Replays Button is existing
    it('Validate Race Replay Tab - View More Race Replays Button is existing', function() {
        latestRacingVideosHub.waitFor_ViewMore_RaceReplays();
        latestRacingVideosHub.check_ViewMore_RaceReplays();
    });

    //Click on the 1st content from the Race Replay Tab
    it('Click on the 1st content from the Race Replay Tab', function() {
        latestRacingVideosHub.click1stVideoContent();
    });

    //Validate Video Player -  Menu Header is Proper for - Race Replay Tab
    it('Validate Video Player -  Menu Header is Proper for - Race Replay Tab', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_HeaderMenu_LatestRacingVideo();
        VideoPlayer_VideoHub.check_videoPlayer_HeaderMenu_LatestRacingVideo();
    });   

    //Validate Video Player - Video screen is existing
    it('Validate Video Player - Video screen is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_Screen();
        VideoPlayer_VideoHub.check_videoPlayer_Screen();
    }); 

    //Validate Video Player - Content Title is existing
    it('Validate Video Player - Content Title is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_ContentTitle();
        VideoPlayer_VideoHub.check_videoPlayer_ContentTitle();
    });

    //Validate Video Player - Content Date is existing
    it('Validate Video Player - Content Date is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_ContentDate();
        VideoPlayer_VideoHub.check_videoPlayer_ContentDate();
    });

    //Validate Video Player - Share Button is existing
    it('Validate Video Player - Share Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_ShareButton();
        VideoPlayer_VideoHub.check_videoPlayer_ShareButton();
    });

    //Click on the Video Player - Share Button
    it('Click on the Video Player - Share Button', function() {
        VideoPlayer_VideoHub.click_videoPlayer_ShareButton();
    });

    //Validate Video Player Twitter Button is existing
    it('Validate Video Player Twitter Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_TwitterButton();
        VideoPlayer_VideoHub.check_videoPlayer_TwitterButton();
    });

    //Validate Video Player - Facebook Button is existing
    it('Validate Video Player - Facebook Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_FacebookButton();
        VideoPlayer_VideoHub.check_videoPlayer_FacebookButton();
    });

    //Validate Video Player - Email Button is existing
    it('Validate Video Player - Email Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_EmailButton();
        VideoPlayer_VideoHub.check_videoPlayer_EmailButton();
    });

    //Go Back to the Video Hub screen
    it('Go Back to the Video Hub screen', function() {
            VideoPlayer_VideoHub.clickBackButton();
        });
    });



/*
*****   TEST SCENARIOS FOR VIDEO HUB LATEST RACING VIDEO - STEWARDS TAB    *****
*/

describe('VALIDATE 24: Testing the Latest Racing Videos - Stewards Tab', function() {

    it('Select Stewards Tab', function() {
        //Select Stewards Tab
        latestRacingVideosHub.clickStewardsTab();
    });

    //Validate Stewards Tab - 1st Video Content is existing
    it('Validate Stewards Tab - 1st Video Content is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoContent();
        latestRacingVideosHub.check_videoHub_1stVideoContent();
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

    //Validate Stewards Tab - View More Stewards Videos Button is existing
    it('Validate Stewards Tab - View More Stewards Videos Button is existing', function() {
        latestRacingVideosHub.waitFor_ViewMore_Stewards();
        latestRacingVideosHub.check_ViewMore_Stewards();
    });   

    //Click on the 1st content from the Stewards Tab
    it('Click on the 1st content from the Stewards Tab', function() {
        latestRacingVideosHub.click1stVideoContent();
    });

    //Validate Video Player -  Menu Header is Proper for - Stewards Tab
    it('Validate Video Player -  Menu Header is Proper for - Stewards Tab', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_HeaderMenu_LatestRacingVideo();
        VideoPlayer_VideoHub.check_videoPlayer_HeaderMenu_LatestRacingVideo();
    });   

    //Validate Video Player - Video screen is existing
    it('Validate Video Player - Video screen is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_Screen();
        VideoPlayer_VideoHub.check_videoPlayer_Screen();
    }); 

    //Validate Video Player - Content Title is existing
    it('Validate Video Player - Content Title is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_ContentTitle();
        VideoPlayer_VideoHub.check_videoPlayer_ContentTitle();
    });

    //Validate Video Player - Content Date is existing
    it('Validate Video Player - Content Date is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_ContentDate();
        VideoPlayer_VideoHub.check_videoPlayer_ContentDate();
    });

    //Validate Video Player - Share Button is existing
    it('Validate Video Player - Share Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_ShareButton();
        VideoPlayer_VideoHub.check_videoPlayer_ShareButton();
    });

    //Click on the Video Player - Share Button
    it('Click on the Video Player - Share Button', function() {
        VideoPlayer_VideoHub.click_videoPlayer_ShareButton();
    });

    //Validate Video Player Twitter Button is existing
    it('Validate Video Player Twitter Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_TwitterButton();
        VideoPlayer_VideoHub.check_videoPlayer_TwitterButton();
    });

    //Validate Video Player - Facebook Button is existing
    it('Validate Video Player - Facebook Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_FacebookButton();
        VideoPlayer_VideoHub.check_videoPlayer_FacebookButton();
    });

    //Validate Video Player - Email Button is existing
    it('Validate Video Player - Email Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_EmailButton();
        VideoPlayer_VideoHub.check_videoPlayer_EmailButton();
    });

    //Go Back to the Video Hub screen
    it('Go Back to the Video Hub screen', function() {
            VideoPlayer_VideoHub.clickBackButton();
        });
    });


/*
*****   TEST SCENARIOS FOR VIDEO HUB LATEST RACING VIDEO - TRIALS TAB    *****
*/

describe('VALIDATE 25: Testing the Latest Racing Videos - Trials Tab', function() {

    it('Select Trials Tab', function() {
        //Select Trials Tab
        latestRacingVideosHub.clickTrialsTab();
    });

    //Validate Trials Tab - 1st Video Content is existing
    it('Validate Trials Tab - 1st Video Content is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoContent();
        latestRacingVideosHub.check_videoHub_1stVideoContent();
    }); 

    //Validate Trials Tab - 1st Video Thumbimage is existing
    it('Validate Trials Tab - 1st Video Thumbimage is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoThumbImage();
        latestRacingVideosHub.check_videoHub_1stVideoThumbImage();
    }); 

    //Validate Trials Tab - 1st Video Title is existing
    it('Validate Trials Tab - 1st Video Title is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoTitle();
        latestRacingVideosHub.check_videoHub_1stVideoTitle();
    }); 

    //Validate Trials Tab - 1st Video Date is existing
    it('Validate Trials Tab - 1st Video Date is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoDate();
        latestRacingVideosHub.check_videoHub_1stVideoDate();
    });

    //Validate Trials Tab - View More Trials Button is existing
    it('Validate Trials Tab - View More Trials Button is existing', function() {
        latestRacingVideosHub.waitFor_ViewMore_Trials();
        latestRacingVideosHub.check_ViewMore_Trials();
    });

    //Click on the 1st content from the Trials Tab
    it('Click on the 1st content from the Trials Tab', function() {
        latestRacingVideosHub.click1stVideoContent();
    });

    //Validate Video Player -  Menu Header is Proper for - Trials Tab
    it('Validate Video Player -  Menu Header is Proper for - Trials Tab', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_HeaderMenu_LatestRacingVideo();
        VideoPlayer_VideoHub.check_videoPlayer_HeaderMenu_LatestRacingVideo();
    });   

    //Validate Video Player - Video screen is existing
    it('Validate Video Player - Video screen is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_Screen();
        VideoPlayer_VideoHub.check_videoPlayer_Screen();
    }); 

    //Validate Video Player - Content Title is existing
    it('Validate Video Player - Content Title is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_ContentTitle();
        VideoPlayer_VideoHub.check_videoPlayer_ContentTitle();
    });

    //Validate Video Player - Content Date is existing
    it('Validate Video Player - Content Date is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_ContentDate();
        VideoPlayer_VideoHub.check_videoPlayer_ContentDate();
    });

    //Validate Video Player - Share Button is existing
    it('Validate Video Player - Share Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_ShareButton();
        VideoPlayer_VideoHub.check_videoPlayer_ShareButton();
    });

    //Click on the Video Player - Share Button
    it('Click on the Video Player - Share Button', function() {
        VideoPlayer_VideoHub.click_videoPlayer_ShareButton();
    });

    //Validate Video Player Twitter Button is existing
    it('Validate Video Player Twitter Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_TwitterButton();
        VideoPlayer_VideoHub.check_videoPlayer_TwitterButton();
    });

    //Validate Video Player - Facebook Button is existing
    it('Validate Video Player - Facebook Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_FacebookButton();
        VideoPlayer_VideoHub.check_videoPlayer_FacebookButton();
    });

    //Validate Video Player - Email Button is existing
    it('Validate Video Player - Email Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_EmailButton();
        VideoPlayer_VideoHub.check_videoPlayer_EmailButton();
    });

    //Go Back to the Video Hub screen
    it('Go Back to the Video Hub screen', function() {
            VideoPlayer_VideoHub.clickBackButton();
        });

});



/*
*****   TEST SCENARIOS FOR VIDEO HUB LATEST RACING VIDEO - POST RACE INTERVIEW TAB    *****
*/

describe('VALIDATE 26: Testing the Latest Racing Videos - Post Race Interview Tab', function() {

    //Select Post Race Interview Tab
    it('Select Post Race Interview Tab', function() {

        latestRacingVideosHub.clickPostRaceInterviewTab();
    });

    //Validate Post Race Interview Tab - 1st Video Content is existing
    it('Validate Post Race Interview Tab - 1st Video Content is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoContent();
        latestRacingVideosHub.check_videoHub_1stVideoContent();
    }); 

    //VValidate Post Race Interview Tab - 1st Video Thumbimage is existing
    it('Validate Post Race Interview Tab - 1st Video Thumbimage is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoThumbImage();
        latestRacingVideosHub.check_videoHub_1stVideoThumbImage();
    }); 

    //Validate Post Race Interview Tab - 1st Video Title is existing
    it('Validate Post Race Interview Tab - 1st Video Title is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoTitle();
        latestRacingVideosHub.check_videoHub_1stVideoTitle();
    }); 

    //Validate Post Race Interview Tab - 1st Video Date is existing
    it('Validate Post Race Interview Tab - 1st Video Date is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoDate();
        latestRacingVideosHub.check_videoHub_1stVideoDate();
    });

    //Validate Post Race Interview Tab - View More Post Race Interviews Button is existing
    it('Validate Post Race Interview Tab - View More Post Race Interviews Button is existing', function() {
        latestRacingVideosHub.waitFor_ViewMore_PostRaceInterviews();
        latestRacingVideosHub.check_ViewMore_PostRaceInterviews();
    });

    //Click on the 1st content from the Post Race Interview Tab
    it('Click on the 1st content from the Post Race Interview Tab', function() {
        latestRacingVideosHub.click1stVideoContent();
    });

    //Validate Video Player -  Menu Header is Proper for - Post Race Interview Tab
    it('Validate Video Player -  Menu Header is Proper for - Post Race Interview Tab', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_HeaderMenu_LatestRacingVideo();
        VideoPlayer_VideoHub.check_videoPlayer_HeaderMenu_LatestRacingVideo();
    });   

    //Validate Video Player - Video screen is existing
    it('Validate Video Player - Video screen is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_Screen();
        VideoPlayer_VideoHub.check_videoPlayer_Screen();
    }); 

    //Validate Video Player - Content Title is existing
    it('Validate Video Player - Content Title is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_ContentTitle();
        VideoPlayer_VideoHub.check_videoPlayer_ContentTitle();
    });

    //Validate Video Player - Content Date is existing
    it('Validate Video Player - Content Date is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_ContentDate();
        VideoPlayer_VideoHub.check_videoPlayer_ContentDate();
    });

    //Validate Video Player - Share Button is existing
    it('Validate Video Player - Share Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_ShareButton();
        VideoPlayer_VideoHub.check_videoPlayer_ShareButton();
    });

    //Click on the Video Player - Share Button
    it('Click on the Video Player - Share Button', function() {
        VideoPlayer_VideoHub.click_videoPlayer_ShareButton();
    });

    //Validate Video Player Twitter Button is existing
    it('Validate Video Player Twitter Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_TwitterButton();
        VideoPlayer_VideoHub.check_videoPlayer_TwitterButton();
    });

    //Validate Video Player - Facebook Button is existing
    it('Validate Video Player - Facebook Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_FacebookButton();
        VideoPlayer_VideoHub.check_videoPlayer_FacebookButton();
    });

    //Validate Video Player - Email Button is existing
    it('Validate Video Player - Email Button is existing', function() {
        VideoPlayer_VideoHub.waitFor_videoPlayer_EmailButton();
        VideoPlayer_VideoHub.check_videoPlayer_EmailButton();
    });

    //Go Back to the Video Hub screen
    it('Go Back to the Video Hub screen', function() {
            VideoPlayer_VideoHub.clickBackButton();
        });


    //Click on the Back button from the Video Hub
    it('Click on the Back button from the Video Hub', function() {
        latestRacingVideosHub.clickBackButton();
    });

 

});

