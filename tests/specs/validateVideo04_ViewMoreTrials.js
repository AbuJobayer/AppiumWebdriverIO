import Homescreen from '../pageobjects/pomHomescreen';
import latestRacingVideosHub from '../pageobjects/pomVideo_LatestRacingVideoHub';
import VideoPlayer_VideoHub from '../pageobjects/pomVideoPlayer_VideoHub';
import ViewMoreTrialsTab from '../pageobjects/pomVideo_ViewMoreTrials';


describe('VALIDATE 33: Testing the View More Trials', function() {
    
    //Ignore Update    
    it('Ignore update', function() {
        Homescreen.ignoreUpdate();
    });
        

    //Click on the Video Hub from the Homescreen
    it('Click on the Video Hub from the Homescreen', function() {
        Homescreen.clickVideoHubLink();
    });

    //Move up the Header
    it('Move up the Header', function(){
        latestRacingVideosHub.moveUpLatestRacingHeader();
    });

    //Click on the Trials Tab
    it('Click on the Trials Tab', function(){
        latestRacingVideosHub.clickTrialsTab();
    });
    
    //Click on the View More Trials Button
    it('Click on the View More Trials Button', function(){
        latestRacingVideosHub.click_videoHub_ViewMoreLatestRacingVideos();
    });

/*
*****  VALIDATE: VIEW MORE TRIALS VIDEO  *****
*/


    //Validate the Menu Header  showing as - Race Replays
    it('Validate the Menu Header  showing as - Race Replays', function() {
        ViewMoreTrialsTab.waitFor_viewMoreTrialsTab_MenuHeader();
        ViewMoreTrialsTab.check_viewMoreTrialsTab_MenuHeader();
    });

    //Validate the - Race Replays Tab Exist
    it('Validate the - Race Replays Tab Exist', function() {
        ViewMoreTrialsTab.waitFor_viewMoreTrialsTab_RaceReplaysTab();
        ViewMoreTrialsTab.check_viewMoreTrialsTab_RaceReplaysTab();
    });

    //Validate the - Stewards Tab Exist
    it('Validate the - Stewards Tab Exist', function() {
        ViewMoreTrialsTab.waitFor_viewMoreTrialsTab_StewardsTab();
        ViewMoreTrialsTab.check_viewMoreTrialsTab_StewardsTab();
    });

    //Validate the - Trials Tab Exist
    it('Validate the - Trials Tab Exist', function() {
        ViewMoreTrialsTab.waitFor_viewMoreTrialsTab_TrialsTab();
        ViewMoreTrialsTab.check_viewMoreTrialsTab_TrialsTab();
    });


    //Validate the - Post Race Interview Tab Exist
    it('Validate the - Post Race Interview Tab Exist', function() {
        ViewMoreTrialsTab.waitFor_viewMoreTrialsTab_PostRaceInterview();
        ViewMoreTrialsTab.check_viewMoreTrialsTab_PostRaceInterview();
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
    
    //Validate Video screen is existing
    it('Validate Video screen is existing', function() {
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

    //Click on the - Share Button
    it('Click on the - Share Button', function() {
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

    //Click on the Back Button
    it('Click on the Back Button', function() {
        ViewMoreTrialsTab.clickBackButton();
    });

});