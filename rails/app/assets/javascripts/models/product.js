//= require models/model
//= require models/section
//= require_self
function Product (name, privates) {
  privates = privates || {};
  var product = Object.new(Model(privates));

  // Overrides
  product.viewClass = "ProductView";
  
  product.toString = function () {
    return "Product " + this.name;
  }

  // Public

  product.name = name || ""; // string
  product.photoUrl = null; // string
  product.description = []; // array<Section>

  product.addSection = function (header, content, id) {
    var section = Object.new(Section());
    section.header = header;
    section.content = content;
    section.id = id;
    product.description.push(section);
  }

  return product;  
};