App.ButtonView = Em.View.extend({
  classNames: ["Button"],
  templateName: "button",
  hover: false,
  active: false,

  // Settable things
  label: "",
  color: "Blue",

  mouseEnter: function (e) {
    this.$().addClass("Hover");
    this.set("hover", true);
  },
  mouseLeave: function (e) {
    this.$().removeClass("Hover Active");
    this.set("hover", false);
    this.set("active", false);
  },
  mouseDown: function (e) {
    this.$().addClass("Active");
    this.set("active", true);
  },
  mouseUp: function (e) {
    this.$().removeClass("Active");
    this.set("active", false);
  },
  touchStart: function (e) {
    this.$().addClass("Hover Active");
    this.set("hover", true);
    this.set("active", true);
  },
  touchEnd: function (e) {
    this.$().removeClass("Hover Active");
    this.set("hover", false);
    this.set("active", false);
  },
  touchCancel: function (e) {
    this.touchEnd(e);
  },

  didInsertElement: function () {
    this.updateButtonStyle();
  },

  updateButtonStyle: function () {
    var el = this.$();
    if (!el)
      return;

    el.removeClass(App.ButtonView.colors.join(" "));
    var newColor = this.get("color");
    if (App.ButtonView.colors.contains(newColor))
      el.addClass(newColor).css("backgroundColor", "");
    else
      el.addClass("None").css("backgroundColor", newColor);

  }.observes("color"),
});
App.ButtonView.colors = ["Blue", "White", "None"];