App.NavContainer = Em.View.extend({
  templateName: ["navbar"],
  classNames: ["NavContainer"],
  indicator: null,

  // Settable properties
  selectedIndex: -1,

  didInsertElement: function () {
    var indicator = this.$().children("#indicator")
    this.set("indicator", indicator);

    var selectedButton = this._selectedButton();
    if (selectedButton)
      selectedButton.set("on", false);
    this.set("selectedIndex", 0);
    // Show the indicator after it's moved into place for the 1st page.
    indicator.one(M.prefixed("transitionEnd"), function () {
      indicator.css("opacity", 1);
    });

    var that = this;
    this.$().children("#buttonContainer").on("mouseleave touchleave touchend touchcancel", function (e) {
      that.moveIndicatorToSelected();
    });
  },

  clickedButton: function (button) {
    App.navContainer._selectedButton().set("on", false);
    var container = App.get("navContainer");
    var index = button.get("index");
    container.set("selectedIndex", index);
  },

  indexChanged: function () {
    this.moveIndicatorToSelected();
    this._selectedButton().set("on", true);
  }.observes("selectedIndex"),

  moveIndicatorToButton: function (navButtonView) {
    this._moveIndicator(navButtonView.$());
  },

  moveIndicatorToSelected: function () {
    this._moveIndicator(this._selectedButton().$(), 0.15);
  },

  // Privates

  _moveIndicator: function (button, delay) {
    var buttonCenter = button.offset().left + button.width() / 2;
    var pageCenter = $(window).width() / 2;
    var indicator = this.get("indicator");
    indicator.css(M.prefixed("transform"), "translateX(" + Math.round(buttonCenter - pageCenter) + "px)");
    indicator.css(M.prefixed("transitionDelay"), delay ? delay + "s" : "0s");
  },

  _selectedButton: function () {
    var button = this.$().find(".NavButton")[this.get("selectedIndex")];
    if (button)
      return button.view();
    return null;
  }
});