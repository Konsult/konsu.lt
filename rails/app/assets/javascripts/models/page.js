//= require models/model
//= require_self
function Page (privates) {
  privates = privates || {};
  var page = Object.new(Model(privates));

  // Overrides
  page.viewClass = "PageView";

  page.toString = function () {
    return "Page " + this.name;
  }

  // Public
  page.name = ""; // string
  page.path = ""; // url relative to root excluding /
  return page;
};