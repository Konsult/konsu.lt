//= require models/page
//= require models/demo
//= require_self
var demoPage = (function () {
  var demoPage = Object.create(Page());

  // Overrides
  demoPage.name = "Demos";
  demoPage.path = "demos";
  demoPage.viewClass = "DemoPageView";

  demoPage.toString = function () {
    return "demoPage";
  }

  // Public
  demoPage.demos = []; // array<Demo>
  { // Add demos
    // Face Invaders
    var faceInvaders = Object.new(Demo(null, "Face Invaders"));
    faceInvaders.version = "Beta";
    faceInvaders.description = "It's a space invaders game where you shoot your Facebook friends! Contact us for access to the private beta.";
    faceInvaders.platforms = ["Safari", "Chrome", "iPad", "FireFox"];
    faceInvaders.thumbnail = "/images/sample/invaders.png";
    demoPage.demos[0] = faceInvaders;

    // Combination Dial
    var dial = Object.new(Demo(null, "Combination Dial"));
    dial.description = "This password entry UI concept is specifically designed for touch devices.";
    dial.platforms = ["iPhone", "iPad", "Safari", "Chrome"];
    dial.thumbnail = "/images/sample/dial.png";
    dial.url = "http://konsu.lt/demos/SafeBoxDial/";
    demoPage.demos[1] = dial;
  }

  return demoPage;
}());