import Homescreen from '../pageobjects/pomHomescreen';



describe('NAVIGATION 10: Testing the Homescreen - Menubar content', function() {
   /* 
    it('Ignore update', function() {
        //Ignore Update
        Homescreen.ignoreUpdate();
    });
    */

    //Click on the Menubar - Racing Hub Button
    it('Click on the Menubar - Racing Hub Button', function() {
        Homescreen.click_menuBar_RacingHub();
    });

    //Click on the Menubar - Home Button
    it('Click on the Menubar - Home Button', function() {
        Homescreen.click_menuBar_Homescreen();
    });

    //Click on the Menubar - Video Hub Button
    it('Click on the Menubar - Video Hub Button', function() {
        Homescreen.click_menuBar_VideoHub();
    });

    //Click on the Menubar - News Hub Button
    it('Click on the Menubar - News Hub Button', function() {
        Homescreen.click_menuBar_NewsHub();
    });

    //Click on the Menubar - Profile or Login Button
    it('Click on the Menubar - Profile or Login Button', function() {
        Homescreen.click_menuBar_Profile();
    });




});