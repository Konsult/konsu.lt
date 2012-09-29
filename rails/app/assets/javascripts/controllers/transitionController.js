App.TransitionController = Em.Object.extend({
  showSite: function () {
    // Position buttons
    var buttons = $(".NavButton");
    var right = 0;
    for (var i = buttons.length -1; i >= 0; i--) {
      var button = $(buttons[i]);
      button.css("right", right + "px");
      right += button.width() + parseFloat(button.css("margin-right"));
    }

    function showButtons () {
      // show buttons
      buttons.removeClass("Hide");

      // Check if animations are supported
      var animationEnd = M.prefixed("animationEnd");
      if (animationEnd) {
        var delay = 0;
        var animationDelay = M.prefixed("animationDelay");
        for (var i = 0; i < buttons.length; i++) {
          var button = $(buttons[i]);
          button.addClass("navButtonInAnimation");
          button.css(animationDelay, delay + "s");
          delay += 0.15;
          button.one(animationEnd, function (e) {
            target = $(e.target);
            target.css(animationDelay, "");
            target.removeClass("navButtonInAnimation");
          })
        }
      }
    }

    // Fade in the body now that everything is placed.
    var transitionEnd = M.prefixed("transitionEnd");
    $("#appContainer").css("opacity", "1");
    if (transitionEnd)
      $("#appContainer").one(transitionEnd, showButtons);
    else
      showButtons();
  },

  transitionToSection: function (section) {
    var currentSection = App.get("navController").get("currentSection");

    // Section selection during init.
    if (!currentSection) {
      var that = section;
      section.performAfterViewInsertion(function () {
        that.get("view").$().removeClass("Hide");
      });
      return;
    }

    var oldEl = currentSection.get("view").$();
    var newEl = section.get("view").$();
    var animationEnd = M.prefixed("animationEnd");

    // If animations aren't supported, fall back to immediate switch
    if (!animationEnd) {
      oldEl.addClass("Hide");
      newEl.removeClass("Hide");
      return;
    }

    var animationName = M.prefixed("animationName");
    // Figure out which direction to move.
    var sections = App.get("sections");
    var rotation = sections.indexOf(currentSection) < sections.indexOf(section) ? Rotation.CW : Rotation.CCW;

    // Rotate out old section first, then rotate in new section.
    oldEl.css(animationName, rotation === Rotation.CW ? "rotate-out-cw" : "rotate-out-ccw");
    oldEl.one(animationEnd, function () { 
      oldEl.css(animationName, "").addClass("Hide");
      newEl.removeClass("Hide").css(animationName, rotation === Rotation.CW ? "rotate-in-cw" : "rotate-in-ccw");
      newEl.one(animationEnd, function () {newEl.css(animationName, ""); });
    });
  },
});