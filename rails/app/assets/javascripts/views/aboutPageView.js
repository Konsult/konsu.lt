//= require models/aboutpage
//= require views/pageView
//= require views/personView
function AboutPageView (privates, model) {
  privates = privates || {};
  var aboutPageView = Object.new(PageView(privates, model));

  // Overrides
  var oldCreateElement = aboutPageView.createElement;
  aboutPageView.createElement = function (tag) {
    var peopleViews = [];
    var model = this.model();
    for (var i = 0; i < model.people.length; i++)
      peopleViews[i] = model.people[i].view().el()[0];

    var page = oldCreateElement.apply(this, [tag]);
    page.append(peopleViews);
    page.addClass("AboutPageView");

    return page;
  }

  aboutPageView.toString = function () {
    return "AboutPageView";
  }

  return aboutPageView;
}