//= require_tree ./helpers
//= require_tree ./models
//= require_tree ./views
//= require_tree ./controllers
//= require_tree ./templates
//= require_tree ./routes
//= require_self

App.reopen({
  navContainer: App.NavContainer.create(),
  pages: [
    App.PageView.create({
      name: "Home",
      shortName: "Home",
      templateName: "homepage",
      index: 0,
    }),
    App.PageView.create({
      name: "Who We Are",
      shortName: "Who",
      templateName: "aboutpage",
      index: 1,
    }),
  ],

  currentPage: -1,

  ready: function () {
    var pageContainer = $("<div id='pageContainer'>");
    var pages = App.get("pages");
    for (var i = 0; i < App.pages.length; i++) {
      var page = pages[i];
      page.appendTo(pageContainer);
      // TODO: Add neccessary rotation here.
    }

    var root = $(App.rootElement);
    this.get("navContainer").appendTo(root);
    root.append(pageContainer);
  }, // ready

  changedPage: function () {
    var oldIndex = this.get("currentPage");
    var index = this.get("navContainer").get("selectedIndex");
    var rotation = oldIndex < index ? Rotation.CW : Rotation.CCW;

    if (oldIndex >= 0)
      this.get("pages")[oldIndex].rotateOut(rotation);

    this.get("pages")[index].rotateIn(rotation);
    this.set("currentPage", index);
  }.observes("navContainer.selectedIndex"),
});

// App.initialize();
