//= require models/button
//= require views/view
//= require_self

function ButtonView (privates, model) {
  privates = privates || {};
  var buttonView = Object.new(View(privates, model));

  // Overrides
  var oldCreateElement = buttonView.createElement;
  buttonView.createElement = function (tag) {
    var interiorHTML = "<div class='ButtonInterior Label'>" + this.model.label + "</div>";
    var highlightHTML = "<div class='ButtonHighlight'></div>";
    var button = oldCreateElement.apply(this, [tag]);
    button.append(highlightHTML + interiorHTML);
    button.addClass("Button");
  };

  buttonView.toString = function () {
    return "ButtonView";
  }
};