//= require models/page
//= require models/product
//= require_self
var homePage = (function () {
  var homePage = Object.create(Page());

  // Overrides
  homePage.viewClass = "HomePageView";

  homePage.toString = function () {
    return "homePage";
  }

  // Public
  homePage.products = []; // array<Product>
  { // Add products
    var sauce = Object.new(Product("Awesome Sauce"));
    sauce.addSection(
      "This is a headline", 
      "Bacon ipsum dolor sit amet pork chop tenderloin pork tail, kielbasa ground round ribeye. Pork chop ham meatloaf, ball tip shoulder capicola beef ribs tenderloin. Sausage boudin ham beef ribs turducken tail hamburger frankfurter jerky prosciutto tri-tip pork chop. Andouille ribeye pork loin frankfurter chuck meatloaf tail pork chop short loin turducken. Short loin meatloaf tri-tip pork loin ribeye. Brisket leberkas short loin, pig strip steak sirloin tongue."
    );
    sauce.addSection(
      "This is a 2nd headline",
      "Ground round salami brisket shankle, sausage kielbasa chicken pork belly bresaola meatloaf filet mignon tongue tri-tip frankfurter. Pork sirloin shoulder prosciutto jowl turkey capicola spare ribs. Bresaola tail kielbasa beef. Ham swine jowl pancetta tri-tip rump capicola ribeye."
    );

    var lite = Object.new(Product("Awesome Sauce Lite"));
    lite.addSection(
      "Now with eleventy percent less fat!",
      "Fatback shoulder flank, beef tenderloin pig shank brisket chicken cow. Tail strip steak corned beef, beef ribs bacon frankfurter turkey tenderloin doner ground round ham hock leberkas salami pork belly short loin. Hamburger pork pastrami, leberkas tri-tip ham hock shank boudin capicola strip steak ribeye meatball kielbasa filet mignon. Ham hock leberkas shank pastrami, pork ground round brisket tenderloin pork chop bresaola sirloin turducken flank chicken hamburger. Ball tip tri-tip meatball bresaola beef ribs brisket."
    )

    var togo = Object.new(Product("Awesome Sauce To-Go"));
    togo.addSection(
      "Size matters.",
      "Leberkas tenderloin turducken pork belly brisket shoulder. Shankle meatloaf swine, fatback beef brisket drumstick salami beef ribs pork. Spare ribs hamburger pork belly, ground round chicken t-bone turducken tri-tip strip steak bacon kielbasa chuck. Turducken salami bacon frankfurter flank brisket pork belly. Strip steak pancetta rump pork chop. Shoulder tail ham prosciutto ground round t-bone short loin biltong, capicola doner chuck turducken. Bresaola tail biltong filet mignon pastrami turkey."
    );

    homePage.products.push(sauce, lite, togo);
  }

  homePage.selectedProduct = 0; // index in this.products
  
  return homePage;
}());