//= require_tree .
//= require_self
var app = (function () {
  var that = Object.new(Model());
  that.pages = [homePage, aboutPage, demoPage]; // array<Page>
  that.selectedPage = 0; // index in app.pages

  // Overrides
  that.viewClass = "AppView";

  that.toString = function () {
    return "app";
  }

  return that;
}());