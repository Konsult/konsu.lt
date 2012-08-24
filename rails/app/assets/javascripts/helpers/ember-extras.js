HTMLElement.prototype.view = function () {
  return Em.View.views[this.id];
}