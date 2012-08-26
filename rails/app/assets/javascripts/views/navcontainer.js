App.NavContainer = Em.View.extend({
  templateName: ["navbar"],
  classNames: ["NavContainer"],
  indicator: null,

  // Settable properties
  selectedIndex: -1,

  didInsertElement: function () {
    this.set("indicator", this.$().children("#indicator"));
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
    this.moveIndicatorToSelected();
  }.observes("selectedIndex"),

  moveIndicatorToButton: function (navButtonView) {
    this.moveIndicator(navButtonView.$());
  },

  moveIndicatorToSelected: function () {
    this.moveIndicator($(this.$().find(".NavButton")[this.get("selectedIndex")]), 0.05);
  },

  moveIndicator: function (button, delay) {
    var buttonCenter = button.offset().left + button.width() / 2;
    var pageCenter = $(window).width() / 2;
    var indicator = this.get("indicator");
    indicator.css(M.prefixed("transform"), "translateX(" + (buttonCenter - pageCenter) + "px)");
    indicator.css(M.prefixed("transitionDelay"), delay ? delay + "s" : "0s");
  },
});