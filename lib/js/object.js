// Usage: Object.new(object)
if (typeof Object.new !== 'function') {
  Object.new = function (o) {
    function F() {};
    F.prototype = o;
    return new F();
  }
}

// Usage: o.later(function[, arguments])
if (typeof Object.prototype.later !== 'function') {
  Object.prototype.later = function (func, time) {
    var args = Array.prototype.splice.apply(arguments, [2]);
    var that = this;
    setTimeout(function () { that.func(args); }, time);
  }
}