import Homescreen from '../pageobjects/pomHomescreen';
import latestRacingVideosHub from '../pageobjects/pomVideo_LatestRacingVideoHub';
import VideoPlayer_VideoHub from '../pageobjects/pomVideoPlayer_VideoHub';
import ViewMorePostRaceInterviewsTab from '../pageobjects/pomVideo_ViewMorePostRaceInterviews';


describe('VALIDATE 34: Testing the View More Post Race Interviews', function() {
    
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

    //Click on the Post Race Interviews Tab
    it('Click on the Post Race Interviews Tab', function(){
        latestRacingVideosHub.clickPostRaceInterviewTab();
    });
    
    //Click on the View More Post Race Interviews Button
    it('Click on the View More Post Race Interviews Button', function(){
        latestRacingVideosHub.click_videoHub_ViewMoreLatestRacingVideos();
    });

/*
*****  VALIDATE: VIEW MORE POST RACE INTERVIEWS VIDEO  *****
*/


    //Validate the Menu Header  showing as - Race Replays
    it('Validate the Menu Header  showing as - Race Replays', function() {
        ViewMorePostRaceInterviewsTab.waitFor_viewMorePostRaceInterviewsTab_MenuHeader();
        ViewMorePostRaceInterviewsTab.check_viewMorePostRaceInterviewsTab_MenuHeader();
    });

    //Validate the - Race Replays Tab Exist
    it('Validate the - Race Replays Tab Exist', function() {
        ViewMorePostRaceInterviewsTab.waitFor_viewMorePostRaceInterviewsTab_RaceReplaysTab();
        ViewMorePostRaceInterviewsTab.check_viewMorePostRaceInterviewsTab_RaceReplaysTab();
    });

    //Validate the - Stewards Tab Exist
    it('Validate the - Stewards Tab Exist', function() {
        ViewMorePostRaceInterviewsTab.waitFor_viewMorePostRaceInterviewsTab_StewardsTab();
        ViewMorePostRaceInterviewsTab.check_viewMorePostRaceInterviewsTab_StewardsTab();
    });

    //Validate the - Trials Tab Exist
    it('Validate the - Trials Tab Exist', function() {
        ViewMorePostRaceInterviewsTab.waitFor_viewMorePostRaceInterviewsTab_TrialsTab();
        ViewMorePostRaceInterviewsTab.check_viewMorePostRaceInterviewsTab_TrialsTab();
    });


    //Validate the - Post Race Interview Tab Exist
    it('Validate the - Post Race Interview Tab Exist', function() {
        ViewMorePostRaceInterviewsTab.waitFor_viewMorePostRaceInterviewsTab_PostRaceInterview();
        ViewMorePostRaceInterviewsTab.check_viewMorePostRaceInterviewsTab_PostRaceInterview();
    });

    //Validate Post Race Interviews Tab - 1st Video Content is existing
    it('Validate Post Race Interviews Tab - 1st Video Content is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoContent();
        latestRacingVideosHub.check_videoHub_1stVideoContent();
    }); 

    //Validate Post Race Interviews Tab - 1st Video Thumbimage is existing
    it('Validate Post Race Interviews Tab - 1st Video Thumbimage is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoThumbImage();
        latestRacingVideosHub.check_videoHub_1stVideoThumbImage();
    }); 

    //Validate Post Race Interviews Tab - 1st Video Title is existing
    it('Validate Post Race Interviews Tab - 1st Video Title is existing', function() {
        latestRacingVideosHub.waitFor_videoHub_1stVideoTitle();
        latestRacingVideosHub.check_videoHub_1stVideoTitle();
    }); 

    //Validate Post Race Interviews Tab - 1st Video Date is existing
    it('Validate Post Race Interviews Tab - 1st Video Date is existing', function() {
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
        ViewMorePostRaceInterviewsTab.clickBackButton();
    });

});