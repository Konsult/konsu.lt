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
      logo: "/images/logo.png",
      templateName: "homepage",
      index: 0,
    }),
    App.PageView.create({
      name: "Who We Are",
      shortName: "Who",
      templateName: "aboutpage",
      index: 1,
    }),
    App.PageView.create({
      name: "What We Do",
      shortName: "What",
      templateName: "whatpage",
      index: 2,
    }),
    App.PageView.create({
      name: "Contact Us",
      shortName: "Contact",
      templateName: "contactpage",
      index: 3,
    }),
    App.PageView.create({
      classNames: ["SamplePage"],
      name: "Sample Works and Demos",
      shortName: "Samples",
      templateName: "samplepage",
      index: 4,
    }),
  ],
  samples: [
    App.SampleWork.create({
      title: "Face Invaders",
      version: "Beta",
      description: "It's a space invaders game where you shoot your Facebook friends! Contact us for access to the private beta.",
      supportedPlatforms: [
        Platform.Safari,
        Platform.Chrome,
        Platform.iPad,
        Platform.Firefox,
      ],
      thumbnail: "/images/sample/invaders.png",
    }),
    App.SampleWork.create({
      title: "Combination Dial",
      description: "This password entry UI concept is specifically designed for touch devices.",
      supportedPlatforms: [
        Platform.iPhone,
        Platform.iPad,
        Platform.Safari,
        Platform.Chrome,
      ],
      url: "http://konsu.lt/demos/SafeBoxDial/",
      thumbnail: "/images/sample/dial.png",
    }),
  ],

  currentPage: -1,

  ready: function () {
    var optimalWidth = 532;
    var deviceWidth = $(window).width();
    if (deviceWidth < optimalWidth) {
      var scale = (deviceWidth / optimalWidth).toFixed(2);
      $("meta[name=viewport]").attr("content", "width=" + optimalWidth + ", initial-scale=" + scale);
    }

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
    var rotation = oldIndex < index ? Rotation.CCW : Rotation.CW;

    if (oldIndex >= 0)
      this.get("pages")[oldIndex].rotateOut(rotation);

    this.get("pages")[index].rotateIn(rotation);
    this.set("currentPage", index);
  }.observes("navContainer.selectedIndex"),
});

// App.initialize();
