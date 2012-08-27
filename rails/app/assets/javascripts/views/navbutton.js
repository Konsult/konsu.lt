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

  stateChanged: function () {
    if (this.get("on"))
      this.$().addClass("On");
    else
      this.$().removeClass("On");
  }.observes("on"),
});