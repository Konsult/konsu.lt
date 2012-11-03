function View (privates, model) {
  privates = privates || {};
  var view = {};

  // Private
  privates.element = null; // JQuery element
  privates.model = model; // Model

  // Public
  view.model = function () { return privates.model; };

  view.el = function () {
    if (!privates.element && privates.model)
      privates.element = this.createElement();
    return privates.element;
  }; // JQuery element
  
  view.createElement = function (tag) {
    tag = tag || "div";
    return $("<" + tag + ">");
  };

  view.toString = function () {
    return "View";
  }

  return view;
};
