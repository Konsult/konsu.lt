//= require models/model
//= require_self
function Section (privates) {
  privates = privates || {};
  var section = Object.new(Model(privates));

  // Overrides
  section.viewClass = "SectionView";

  section.toString = function () {
    return "Section " + (this.header ? this.header : " ") + this.id;
  }

  // Public

  section.id = null; // string
  section.header = ""; // string
  section.content = ""; // raw HTML
  return section;
};