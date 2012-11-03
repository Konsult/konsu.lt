//= require models/model
function Demo (privates, title) {
  privates = privates || {};
  var demo = Object.new(Model(privates));

  // Overrides
  demo.viewClass = "DemoView";

  demo.toString = function () {
    return "Demo";
  }

  // Public
  demo.title = title || ""; // string
  demo.version = null; // optional string e.g. Beta, v1.1.0
  demo.description = ""; // raw HTML
  demo.platforms = []; // array<string> e.g. ["iPhone", "iPad", "Safari"]
  demo.thumbnail = null; // url
  demo.url = null; // url

  return demo;
}