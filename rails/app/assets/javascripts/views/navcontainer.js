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
  },

  clickedButton: function (button) {
    var selected = App.navContainer._selectedButton();
    if (button === selected)
      return;

    selected.set("on", false);
    var container = App.get("navContainer");
    var index = button.get("index");
    container.set("selectedIndex", index);
  },

  indexChanged: function () {
    this.moveIndicatorToSelected();
    this._selectedButton().set("on", true);
  }.observes("selectedIndex"),

  moveIndicatorToSelected: function () {
    var button = this._selectedButton().$();
    var buttonCenter = button.offset().left + button.width() / 2;
    var pageCenter = $(window).width() / 2;
    this.get("indicator").css(M.prefixed("transform"), "translateX(" + Math.round(buttonCenter - pageCenter) + "px)");
  },

  _selectedButton: function () {
    var button = this.$().find(".NavButton")[this.get("selectedIndex")];
    if (button)
      return button.view();
    return null;
  }
});