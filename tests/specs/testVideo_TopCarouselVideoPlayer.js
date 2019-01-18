import Homescreen from '../pageobjects/pomHomescreen';
import VideoPlayer_VideoHub from '../pageobjects/pomVideoPlayer_VideoHub';
import TopCarouselVideoPlayer from '../pageobjects/pomVideo_TopCarouselPlayer';
import latestRacingVideosHub from '../pageobjects/pomVideo_LatestRacingVideoHub';

describe('NAVIGATION 07: Testing the Top Carousel Video Player', function() {
    
    it('Ignore update', function() {
        //Ignore Update
        Homescreen.ignoreUpdate();
    });
        
    it('Click on the Video Hub Link from the Homescreen', function() {
        //Click on the Newslink from the Homescreen
        Homescreen.clickVideoHubLink();
    });

    it('Click on the Top Carousel video', function() {
        //Click on the Top Carousel video
        TopCarouselVideoPlayer.clickTopCarouselVideo();
    });

    it('Click on the Back button from the Video Player', function() {
        //Click on the Back button from the Video Player
        VideoPlayer_VideoHub.clickBackButton();
    });
/*
    it('Click on the Back button from the Video Hub', function() {
        //Click on the Back button from the Video Hub
        latestRacingVideosHub.clickBackButton();
    });
*/
});