App.PersonView = Em.View.extend({
  classNames: ["Person"],
  templateName: "person",

  model: null, //Should be set on init.

  didInsertElement: function () {
    // Add thumbnail image.
    var image = this._get("photoSrc");
    if (!image)
      return;

    var el = this.$().find(".Photo");
    var width = Math.min(2048, el.innerWidth());
    el.css("background-image", "url(" + image + "?s=" + width + ")");
  },
});