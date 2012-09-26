//= require_tree ./helpers
//= require_tree ./models
//= require_tree ./views
//= require_tree ./controllers
//= require_tree ./templates
//= require_tree ./routes
//= require_self

App.reopen({
  navContainer: App.NavContainer.create({
    clickedButton: function (button) {
      this._super(button);

      if (!M.has("history"))
        return;

      var index = App.get("navContainer").get("selectedIndex");
      if (index === 0)
        history.pushState(null, null, "/");
      else
        history.pushState(null, null, "/" + App.get("pages")[App.get("currentPage")].get("shortName"));
    },

    didInsertElement: function () {
      this._super();
      // This requires the elements to be in the DOM. Otherwise it should be in ready.
      App.updateNavToCurrentPath();
      App.updatePageToNavIndex(true);
    }
  }),
  pages: [
    App.PageView.create({
      name: "Home",
      shortName: "Home",
      logo: "/images/logo.png",
      templateName: "homepage",
      index: 0,
      didInsertElement: function () {
        $("#contactButton").click(function () {
          App.get("navContainer").buttonAtIndex(App._indexOfShortName("Contact")).$().click();
        });
      }
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
      didInsertElement: function () {
        var name = "us";
        var email = $(".emailPlaceholder");
        var addr = name + "@konsu.lt";
        var link = $("<a>");
        link.attr("href", "mailto:" + addr);
        link.append(addr);
        email.append(link);
      }
    }),
    App.PageView.create({
      classNames: ["SamplePage"],
      name: "Demos and Sample Work",
      shortName: "Demos",
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
      url: "http://games.konsu.lt",
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
  people: [
    App.Person.create({
      name: "Matt Delaney",
      photoSrc: "http://en.gravatar.com/avatar/5815d81f0e3ce6e355676124ea8a6bde",
      description: "As a former engineer on Apple’s WebKit core team, Matt loves building insanely great things and believes in open source. A high-performance graphics junky at heart and robotics tinkerer, Matt brings technical experience from all areas."
    }),
    App.Person.create({
      name: "Jing Jin",
      photoSrc: "http://en.gravatar.com/avatar/391841987bace82166edcc7263e1cc4c",
      description: "Jing is one of those few first-class designers who is also a fantastic engineer. Jing brings years of UI/UX design experience from Apple’s Safari team and a borderline irrational love for pixel-perfection. With an unabashed addiction for intuitively designed and flawlessly executed user interfaces, she’ll turn your magical unicorn into a triple Michelin star bacon cupcake delight."
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

    if (M.has("history")) {
      $(window).on("popstate", function (e) {
        App.updateNavToCurrentPath();
      });
    }
  }, // ready

  updatePageToNavIndex: function (isInit) {
    var index = this.get("navContainer").get("selectedIndex");
    var oldIndex = this.get("currentPage");
    var pages = this.get("pages");

    if (!isInit && oldIndex === index)
      return; 
    var rotation = oldIndex < index ? Rotation.CCW : Rotation.CW;
    if (oldIndex >= 0)
      pages[oldIndex].rotateOut(rotation);
    
    var newPage = pages[index];
    newPage.rotateIn(rotation);
    this.set("currentPage", index);
  }.observes("navContainer.selectedIndex"),

  updateNavToCurrentPath: function () {
    var indexOfSlash = location.pathname.lastIndexOf("/");
    if (isNaN(indexOfSlash)) {
      console.log("Can't find page name for path " + location.pathname);
      return;
    }

    // Find the corresponding page index.
    var name = location.pathname.substring(indexOfSlash + 1);
    var index = App._indexOfShortName(name);

    // Go to page.
    if (index === -1) {
      console.log("Cannot find page " + location.pathname);
      // Fall back to homepage.
      if (!M.has("history")) {
        location.replace(location.getOrigin());
        return;
      }
      index = 0;
      history.replaceState(null, null, "/");
    }

    this.get("navContainer").set("selectedIndex", index);
  },

  _indexOfShortName: function (shortName) {
    var pages = this.get("pages");
    if (shortName.length === 0)
      return 0;

    var nameRegex = new RegExp("^" + shortName + "$", "i");
    for (var i = 0; i < pages.length; i++) {
      if (nameRegex.test(pages[i].get("shortName")))
        return i;
    }

    return -1;
  }
});

// App.initialize();
