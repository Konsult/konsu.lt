App.NavContainer = Em.View.extend({
  templateName: ["navbar"],
  classNames: ["NavContainer"],
  indicator: null,

  // Settable properties
  selectedIndex: 0,

  didInsertElement: function () {
    var indicator = this.$().children("#indicator")
    this.set("indicator", indicator);

    var selectedButton = this._selectedButton();
    if (selectedButton)
      selectedButton.set("on", false);
    
    // Trigger indicator and button setup without changing the index.
    // We need to do this because some actions only take effect
    // after the element is inserted into the DOM.
    this.indexChanged();

    // Show the indicator after it's moved into place for the 1st page.
    var transitionEnd = M.prefixed("transitionEnd");
    if (transitionEnd) {
      indicator.one(M.prefixed("transitionEnd"), function () {
        indicator.css("opacity", 1);
      });
    } else
      indicator.css("opacity", 1);
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
    if (!button)
      return;

    var buttonCenter = button.offset().left + button.width() / 2;
    var pageCenter = $(window).width() / 2;
    this.get("indicator").css(M.prefixed("transform"), "translateX(" + Math.round(buttonCenter - pageCenter) + "px)");
  },

  buttonAtIndex: function (index) {
    var button = this.$().find(".NavButton")[index];
    if (button)
      return button.view();
    return null;
  },

  _selectedButton: function () {
    return this.buttonAtIndex(this.get("selectedIndex"));
  }
});