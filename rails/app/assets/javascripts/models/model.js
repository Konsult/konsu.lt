function Model (privates) {
  privates = privates || {};
  var model = {};
  
  // Private
  privates.view = null; // this.viewClass
  
  // Public
  model.viewClass = "View";
  
  model.view = function () {
    if (!privates.view)
      privates.view = Object.new(window[this.viewClass](null, this));
    return privates.view;
  }; // model.viewClass

  model.toString = function () {
    return "Model";
  };

  return model;
};