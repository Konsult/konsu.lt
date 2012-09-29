App.PersonView = Em.View.extend({
  classNames: ["Person"],
  templateName: "person",

  didInsertElement: function () {
    this._super();

    // Add thumbnail image with the optimal size.
    var image = this._get("photo");
    if (!image)
      return;

    var el = this.$(".Photo");
    var width = Math.min(2048, el.innerWidth());
    el.css("background-image", "url(" + image + "?s=" + width + ")");
  },
});