App.Demo = Em.Model.extend({
  templateName: "demo",

  name: "",
  version: "", // "alpha" | "beta" | "vX.X.X" | ""
  description: "",
  platforms: [], // array(<Platform> version?)
  thumbnail: null, // URL to thumbnail image  
  url: null, // url

  isSupported: function() {
    // Override this to return whether this work is supported on the current browsing platform.
    return true;
  }
});