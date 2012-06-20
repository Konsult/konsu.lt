function draftEmail(addr)
{
  window.location = "mailto:"+addr;
};

Meteor.startup (function () {
	Modernizr.load();

  $("#contactus").click(function () {
    var emailz = "us@konsu.lt";
    draftEmail(emailz);
  });
})
