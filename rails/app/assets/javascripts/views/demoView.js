App.DemoView = Em.View.extend({
  classNames: ["DemoView"],
  templateName: "demo",

  didInsertElement: function (e) {
    // Set image.
    this.$(".Thumbnail").css("background-image", "url(" + this._get("thumbnail") + ")");
  },
});