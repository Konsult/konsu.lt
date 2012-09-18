App.PageView = Em.View.extend({
  classNames: ["Page"],
  name: "",
  label: "",

  rotateOut: function (rotation) {
    this.rotateTransition(rotation, Direction.Out);
  },

  rotateIn: function (rotation) {
    this.rotateTransition(rotation, Direction.In);
  },

  rotateTransition: function (rotation, direction) {
    var el = this.$();
    var dirStr = direction === Direction.In ? "in" : "out";
    var thatRot = rotation;

    function applyTransition () {
      var animationName = M.prefixed("animationName");

      function finishTransition () {
        if (dirStr === "in") {
          el.addClass("Active");
          // Remove the manual setting of display
          el.css("display", "");
        } else 
          el.removeClass("Active");
        if (animationName)
          el.css(animationName, "");      
      }

      if (!animationName) {
        finishTransition();
        return;
      }

      switch (thatRot) {
        case Rotation.CW:
          el.css(animationName, "rotate-" + dirStr + "-cw");
          break;
        case Rotation.CCW:
          el.css(animationName, "rotate-" + dirStr + "-ccw");
          break;
      }
      el.one(M.prefixed("animationEnd"), finishTransition);
    }

    if (direction == Direction.In) {
      // Wait a runloop b/c the element needs to be back in the render tree
      // before we apply animations.
      el.css("display", "block");
      setTimeout(applyTransition, 0);
    } else
      applyTransition();
  },

});