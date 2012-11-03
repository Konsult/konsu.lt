//= require views/view
//= require_self
function PersonView(privates, model) {
  var personView = Object.new(View(privates, model));

  // Overrides
  var oldCreateElement = personView.createElement;
  personView.createElement = function (tag) {
    var model = this.model();

    // Photo
    var photo = $("<div class='Photo'>");
    photo.css("background-image", "url(" + model.photo + ")");

    var view = oldCreateElement.apply(personView, [tag]);
    view.append(photo);

    // Name + Bio
    var nameHTML = "<h1 class='Name'>" + model.name + "</h1>";
    var bioHTML = "<p class='Bio'>" + model.bio + "</p>";
    var info = "<div class='Info'>" + nameHTML + bioHTML + "</div>";
    view.append(info);

    view.addClass("Person");
    return view;
  }

  personView.toString = function () {
    return "PersonView";
  }

  return personView;
}