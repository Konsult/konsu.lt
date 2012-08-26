App.NavButtonView = App.ButtonView.extend({
  classNames: ["NavButton"],
  color: "None",
  on: false,
  index: -1,
  clickHandler: null, // function that takes in the button object.

  click: function (e) {
    this._super(e);
    if (this.get("clickHandler"))
      this.get("clickHandler")(this);
  },

   mouseEnter: function (e) {
    App.get("navContainer").moveIndicatorToButton(this);
  },
  mouseLeave: function (e) {
    App.get("navContainer").moveIndicatorToSelected();
  },
  touchStart: function (e) {
    this.mouseEnter(e);
  },
  touchEnd: function (e) {
    this.mouseLeave(e);
  },
  touchCancel: function (e) {
    this.touchEnd(e);
  }
});