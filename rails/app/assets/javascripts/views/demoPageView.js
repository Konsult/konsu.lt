//= require models/demopage
//= require views/pageView
//= require views/demoView
function DemoPageView (privates, model) {
  privates = privates || {};
  var demoPageView = Object.new(PageView(privates, model));

  // Overrides
  var oldCreateElement = demoPageView.createElement;
  demoPageView.createElement = function (tag) {
    var demoEls = [];
    var model = this.model();
    for (var i = 0; i < model.demos.length; i++)
      demoEls[i] = model.demos[i].view().el()[0];
    var page = oldCreateElement.apply(this, [tag]);
    page.append(demoEls).addClass("DemoPageView");
    return page;
  };

  demoPageView.toString = function () {
    return "DemoPageView";
  }

  return demoPageView;
}