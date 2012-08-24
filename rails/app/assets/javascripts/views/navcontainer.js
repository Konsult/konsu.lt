App.NavContainer = Em.View.extend({
  templateName: ["navbar"],
  classNames: ["NavContainer"],
  selectedIndex: -1,

  didInsertElement: function () {
    this.set("selectedIndex", 0);
    // TODO: Add neccessary placement calculations here.
  },

  clickedButton: function (button) {
    var container = App.get("navContainer");
    var index = button.get("index");
    container.set("selectedIndex", index);
  },

  indexChanged: function () {
    // Slide the selector to the selected button
  }.observes("selectedIndex"),

});