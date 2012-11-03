//= require models/model
//= require_self
function Button (privates) {
  privates = privates || {};
  var button = Object.new(Model(privates));

  // Overrides
  button.viewClass = "ButtonView";

  button.toString = function () {
    return "Button " + this.label;
  }

  // Public
  button.label = ""; // string
  button.on = false; // bool
  button.hover = false; // bool
  button.active = false; // bool

  return button;
};