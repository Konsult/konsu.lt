HTMLElement.prototype.view = function () {
  return Em.View.views[this.id];
}

Em.View.reopen({
    _get: function (property) {
    var model = this.get("model");
    if (model)
      return model.get(property);
    return null;
  },
});