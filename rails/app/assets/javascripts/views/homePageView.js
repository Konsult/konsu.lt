//= require models/homepage
//= require views/pageView

function HomePageView (privates, model) {
  privates = privates || {};
  var homePageView = Object.new(PageView(privates, model));

  // Overrides
  var oldCreateElement = homePageView.createElement;
  homePageView.createElement = function (tag) {
    // Add the wheel of products
    var productEls = [];
    var products = this.model().products;
    for (var i = 0; i < products.length; i++)
      productEls[i] = products[i].view().el()[0];
    var splash = $("<div id='splash'>");
    splash.append(productEls);

    // Add the center thingy
    splash.append($("<div id='centerThingy'>"));

    // Add whole splash element to page
    var page = oldCreateElement.apply(this, [tag]);
    page.append(splash);

    // Add separator and description container for selected products
    var selectedProduct = products[this.model().selectedProduct];
    var separatorHTML = "<div id='separator'><header id='selectedProductName'>" + selectedProduct.name + "</header></div>";
    var description = $("<div class='selectedProductDescription'>");
    var descEls = [];
    for (var i = 0; i < selectedProduct.description.length; i++)
      descEls[i] = selectedProduct.description[i].view().el()[0];
    description.append(descEls);
    var container = $("<article class='selectedProductDescriptionContainer'>" + separatorHTML + "</article>");
    container.append(description);
    page.append(container);

    page.addClass("HomePage");

    return page;
  };

  homePageView.toString = function () {
    return "HomePageView";
  }

  return homePageView;
};