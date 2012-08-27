App.SampleWork = Em.Object.extend({
  title: "",
  version: "", // Optional string to tack onto title, such as Alpha, Beta, In Development, Final, etc.
  description: "",
  supportedPlatforms: [], // Array of Platforms
  thumbnail: null, // URL to thumbnail image
  
  url: null, // Url that the button opens to. Ignored if buttonAction is defined.
  buttonName: "Open in New Window",
  buttonAction: null, // If buttonAction is defined, url is ignored.

  isSupported: function() {
    // Override this to return whether this work is supported on the current browsing platform.
    return true;
  }
});