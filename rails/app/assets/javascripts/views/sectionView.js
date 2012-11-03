//= require views/view
//= require models/section

function SectionView (privates, model) {
  privates = privates || {};
  var sectionView = Object.new(View(privates, model));

  // Overrides
  var oldCreateElement = sectionView.createElement;
  sectionView.createElement = function (tag) {
    var model = this.model();
    var headerHTML = "<h1 class='Header'>" + model.header + "</h1>";
    var contentHTML = "<div class='Content'>" + model.content + "</div>";
    var container = oldCreateElement.apply(this, tag || ["section"]);
    container.append(headerHTML + contentHTML);
    container.addClass("SectionView Section");
    return container;
  }

  sectionView.toString = function () {
    return "SectionView";
  }

  return sectionView;
};