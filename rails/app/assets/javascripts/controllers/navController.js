App.NavController = Em.Object.extend({
  currentSection: null, // not settable, use goToSection.

  // Managed event from nav buttons.
  click: function (e, buttonView) {
    this.goToSection(buttonView.get("model"));
  },

  goToSection: function (section, ignoreHistory) {
    var currentSection = this.get("currentSection");
    if (section == currentSection)
      return;

    // If html5 history
    if (!ignoreHistory && M.has("history"))
        history.pushState(null, null, section.get("path"));

    // Initiate section transition
    var root = $(App.get("rootElement"));
    if (currentSection)
      root.removeClass(currentSection.get("name"));
    App.get("transitionController").transitionToSection(section);
    this.set("currentSection", section);
    root.addClass(section.get("name"));
  },

  initialize: function () {
    // Add event listener for history back.
    if (M.has("history")) {
      $(window).on("popstate", function (e) {
        var navController = App.get("navController");
        navController.goToSection(navController.sectionForCurrentPath(), true);
      });
    }

    // Add event listener for e-mailing.
    $(App.get("rootElement")).on("click", ".emailButton", function () {
      function sendMail (name, domain) {
        location.href = "mailto:" + name + "@" + domain;
      }
      sendMail("us", "konsu.lt");
    });

    this.goToSection(this.sectionForCurrentPath(), true);
  },

  sectionForCurrentPath: function () {
    var path = location.pathname;
    var sections = App.get("sections");
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      if (section.get("path") === path) {
        return section;
      }
    }

    // Non-existent URL, redirect to home.
    location.replace(location.getOrigin());
  },
});