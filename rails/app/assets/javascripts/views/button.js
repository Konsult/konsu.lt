App.ButtonView = Em.View.extend({
  classNames: ["Button"],
  templateName: "button",
  colors: ["Blue", "None"],
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
    this.$().addClass(this.get("color"));
  },

  updateButtonStyle: function () {
    var el = this.$();
    if (!el)
      return;

    el.removeClass(App.ButtonView.colors.join(" "));
    el.addClass(this.get("color"));

  }.observes("color"),
});