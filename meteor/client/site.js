function draftEmail(addr)
{
  window.location = "mailto:"+addr;
};

function loadEventHandlers()
{
  var contactButton = $("#contactUs");

  function click (e) {
    var emailz = "us@konsu.lt";
    draftEmail(emailz);
  }

  function mousedown (e) {
    contactButton.addClass("active");
    contactButton.removeClass("hover");
  }

  function mouseup (e) {
    contactButton.removeClass("active");
    contactButton.addClass("hover");
  }

  function mouseenter (e) {
    contactButton.addClass("hover");
  }

  function mouseleave(e) {
    contactButton.removeClass("hover");
    contactButton.removeClass("active");
  }

  contactButton.click(click);
  contactButton.mousedown (mousedown);
  contactButton.mouseup (mouseup);
  contactButton.hover (mouseenter, mouseleave);

  contactButton.tap(click);
  // FIXME: jquery mobile supposedly has vmousedown/up, but doesn't
  // appear to have it in their latest js file.
  contactButton.touchstart(mousedown);
  contactButton.touchend(mouseup);
}

Meteor.startup (function () {
	Modernizr.load();
  $(document).bind('pageinit', loadEventHandlers());
})

// Stop jQuery mobile from inserting silly things into our page.
$.mobile.autoInitializePage = false;
