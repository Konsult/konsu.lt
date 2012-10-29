//= require_tree ./helpers
//= require_tree ./models
//= require_tree ./views
//= require_tree ./controllers
//= require_tree ./templates
//= require_tree ./routes
//= require_self

App.reopen({
  navController: App.NavController.create(),
  transitionController: App.TransitionController.create(),
  sections: [
    App.HomeSection.create(),
    App.BioSection.create(),
    App.ServiceSection.create(),
    App.DemoSection.create(),
  ],

  ready: function () {
    var sectionContainer = $("<div id='sections'>");
    var buttonContainer = $("<div id='nav'>");
    var sections = App.get("sections");
    var eventManager = App.get("navController");
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      // Create and append section.
      App.SectionView.create({
        model: section,
        templateName: section.get("templateName"),
      }).appendTo(sectionContainer);

      // Create and append nav buttons
      if (section.get("hasNavButton"))
        App.NavButtonView.create({
          model: section,
          label: section.get("name"),
          eventManager: eventManager,
        }).appendTo(buttonContainer);
    }

    var root = App.get("rootElement");
    sectionContainer.appendTo(root);
    buttonContainer.appendTo(root);
    $("<div id='konsult'>").appendTo(root);

    this.get("navController").initialize();

    // Wait for all the bindings to finish before showing site.
    // FIXME: Waiting 1 runloop or even < 1s isn't enough on the iPhone
    setTimeout(App.get("transitionController").showSite, 1000);
  }
});
