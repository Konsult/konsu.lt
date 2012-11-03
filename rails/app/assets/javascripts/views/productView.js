//=require views/view
//= require models/product
//= require_self

function ProductView (privates, model) {
  privates = privates || {};
  var productView = Object.new(View(privates, model));

  // Private
  privates.descriptionElement = null;

  // Overrides
  var oldCreateElement = productView.createElement;
  productView.createElement = function (tag) {
    var view = oldCreateElement.apply(this, [tag]);
    view.append(this.model().name);
    view.addClass("ProductView");
    return view;
  };

  productView.toString = function () {
    return "ProductView";
  }

  // API
  productView.descriptionEl = function () {
    if (!privates.descriptionElement && this.model)
      privates.descriptionElement = this.createDescriptionElement();
    return privates.descriptionElement;
  }

  productView.createDescriptionElement = function (tag) {
    tag = tag || "div"
    var descViews = [];
    for (var i = 0; i < this.model.description.length; i++)
      descViews[i] = this.model.description[i].view();
    var desc = $("<" + tag + " class='descriptionContainer'>");
    desc.append(descViews);  
    return desc;  
  }

  return productView;
};