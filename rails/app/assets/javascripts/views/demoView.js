//= require models/demo
//= require views/view
function DemoView (privates, model) {
  privates = privates || {};
  var demoView = Object.new(View(privates, model));

  // Overrides
  var oldCreateElement = demoView.createElement;
  demoView.createElement = function (tag) {
    // Thumbnail
    var thumb = $("<div class='Thumbnail'>");
    var model = this.model();
    if (model.thumbnail)
      thumb.css("background-image", "url(" + model.thumbnail + ")");

    var contents = [];

    // Title + version
    var titleHTML = "<h1 class='Title'>" + model.title + "</h1>";
    var versionHTML = model.version ? "<div class='Version'>" + model.version + "</div>" : "";
    var headerHTML = "<div class='Header'>" + titleHTML + versionHTML + "</div>";
    contents[0] = headerHTML;

    // Platforms
    if (model.platforms.length) {
      var platformHTML = "<div class='Platforms'>" + model.platforms.join(", ") + "</div>";
      contents[1] = platformHTML;
    }

    // Description + link
    var descriptionHTML = "<p class='Description'>" + model.description + "</div>";
    var linkHTML = model.url ? "<a class='Link' href='" + model.url + "'>Open</a>" : null;
    var container = "<div class='Details'>" + descriptionHTML + linkHTML + "</div>";
    contents.push(container);

    // Add it all up
    var view = oldCreateElement.apply(this, [tag]);
    view.append(thumb, contents.join(""));
    view.addClass("Demo");

    return view;
}

  demoView.toString = function () {
    return "DemoView";
  }

  return demoView;
}