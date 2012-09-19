App.SampleWorkView = Em.View.extend({
  classNames: ["SampleWork"],
  templateName: "samplework",

  model: null, // Should be set on init.
  
  didInsertElement: function () {
    // Add thumbnail image.
    var image = this._get("thumbnail");
    if (image)
      this.$().find(".Thumbnail").css("background-image", "url(" + image + ")");
  },
});