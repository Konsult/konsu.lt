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
    this._super(e);
  },

  lala: function (e) {
    alert(this.get("label"));
  }.observes("label"),
});