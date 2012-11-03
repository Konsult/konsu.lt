//= require models/app
//= require views/view
//= require_self
function AppView (privates, model) {
  privates = privates || {};
  var appView = Object.new(View(privates, model));

  // Overrides
  var oldCreateElement = appView.createElement;
  appView.createElement = function (tag) {
    // Add each page.
    var pageViews = [];
    var pages= this.model().pages;
    for (var i = 0; i < pages.length; i++)
      pageViews[i] = pages[i].view().el()[0];

    var view = oldCreateElement.apply(this, [tag]);
    view.append(pageViews);
    view.addClass("app");
    return view;
  }

  appView.toString = function () {
    return "AppView";
  }

  return appView;
};