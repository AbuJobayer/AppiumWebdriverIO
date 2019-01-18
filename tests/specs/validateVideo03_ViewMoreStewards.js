import Homescreen from '../pageobjects/pomHomescreen';
import latestRacingVideosHub from '../pageobjects/pomVideo_LatestRacingVideoHub';
import VideoPlayer_VideoHub from '../pageobjects/pomVideoPlayer_VideoHub';
import ViewMoreStewardsTab from '../pageobjects/pomVideo_ViewMoreStewards';


describe('VALIDATE 32: Testing the View More Stewards Video', function() {
    
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

    //Click on the Stewards Tab
    it('Click on the Stewards Tab', function(){
        latestRacingVideosHub.clickStewardsTab();
    });
    
    //Click on the View More Stewards Video Button
    it('Click on the View More Stewards Video Button', function(){
        latestRacingVideosHub.click_videoHub_ViewMoreLatestRacingVideos();
    });

/*
*****  VALIDATE: VIEW MORE STEWARDS VIDEO  *****
*/


    //Validate the Menu Header  showing as - Race Replays
    it('Validate the Menu Header  showing as - Race Replays', function() {
        ViewMoreStewardsTab.waitFor_viewMoreStewardsTab_MenuHeader();
        ViewMoreStewardsTab.check_viewMoreStewardsTab_MenuHeader();
    });

    //Validate the - Race Replays Tab Exist
    it('Validate the - Race Replays Tab Exist', function() {
        ViewMoreStewardsTab.waitFor_viewMoreStewardsTab_RaceReplaysTab();
        ViewMoreStewardsTab.check_viewMoreStewardsTab_RaceReplaysTab();
    });

    //Validate the - Stewards Tab Exist
    it('Validate the - Stewards Tab Exist', function() {
        ViewMoreStewardsTab.waitFor_viewMoreStewardsTab_StewardsTab();
        ViewMoreStewardsTab.check_viewMoreStewardsTab_StewardsTab();
    });

    //Validate the - Trials Tab Exist
    it('Validate the - Trials Tab Exist', function() {
        ViewMoreStewardsTab.waitFor_viewMoreStewardsTab_TrialsTab();
        ViewMoreStewardsTab.check_viewMoreStewardsTab_TrialsTab();
    });


    //Validate the - Post Race Interview Tab Exist
    it('Validate the - Post Race Interview Tab Exist', function() {
        ViewMoreStewardsTab.waitFor_viewMoreStewardsTab_PostRaceInterview();
        ViewMoreStewardsTab.check_viewMoreStewardsTab_PostRaceInterview();
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
        ViewMoreStewardsTab.clickBackButton();
    });

});