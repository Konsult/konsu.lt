//= require models/page
//= require models/person
//= require_self
var aboutPage = (function () {
  var aboutPage = Object.create(Page());

  // Overrides
  aboutPage.name = "Us";
  aboutPage.path = "us";
  aboutPage.viewClass = "AboutPageView";

  aboutPage.toString = function () {
    return "aboutPage";
  }

  // Public
  aboutPage.people = [];
  { // Add people
    var matt = Object.create(Person("Matt Delaney"));
    matt.photo = "http://en.gravatar.com/avatar/5815d81f0e3ce6e355676124ea8a6bde";
    matt.bio = "As a former engineer on Apple’s WebKit core team, Matt loves building insanely great things and believes in open source. A high-performance graphics junky at heart and robotics tinkerer, Matt brings technical experience from all areas."

    var jing = Object.create(Person("Jing Jin"));
    jing.photo = "http://en.gravatar.com/avatar/391841987bace82166edcc7263e1cc4c";
    jing.bio = "Jing is one of those few first-class designers who is also a fantastic engineer. Jing brings years of UI/UX design experience from Apple’s Safari team and a borderline irrational love for pixel-perfection. With an unabashed addiction for intuitively designed and flawlessly executed user interfaces, she’ll turn your magical unicorn into a triple Michelin star bacon cupcake delight."

    aboutPage.people.push(matt, jing);
  }

  aboutPage.email = ["us", "konsu.lt"].join("@"); // silly attempt at obfuscation.

  return aboutPage;
}());