var M = {
  eventMapping: {
    "WebkitTransition": "webkitTransitionEnd",
    "MozTransition": "transitionend",
    "OTransition": "oTransitionEnd",
    "msTransition": "MSTransitionEnd",
    "transition": "transitionEnd",

    "WebkitAnimation": "webkitAnimationEnd",
    "MozAnimation": "animationend",
    "OAnimation": "oAnimationEnd",
    "msAnimation": "MSAnimationEnd",
    "transition": "animationend",
  },
  
  prefixed: function (property) {
    if (property === "transitionEnd")
      return M.eventMapping[Modernizr.prefixed("transition")];
    if (property === "animationEnd")
      return M.eventMapping[Modernizr.prefixed("animation")];
    return Modernizr.prefixed(property);
  },
};