//= require models/page
//= require views/view
//= require_self

function PageView (privates, model) {
  privates = privates || {};
  var pageView = Object.new(View(privates, model));

  // Overrides
  var oldCreateElement = pageView.createElement;
  pageView.createElement = function (tag) {
    return oldCreateElement.apply(this, [tag]).addClass("PageView");
  };

  pageView.toString = function () {
    return "PageView";
  }

  return pageView;
};