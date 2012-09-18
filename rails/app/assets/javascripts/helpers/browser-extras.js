location.getOrigin = function () {
  if (location.origin)
    return location.origin;

  // Polyfill for IE
  return location.protocol + "//" + location.host;
};