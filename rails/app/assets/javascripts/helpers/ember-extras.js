HTMLElement.prototype.view = function () {
  return Em.View.views[this.id];
}

Em.View.reopen({
  model: null, // Assigned on creation. Type Em.Model.
  classNameBindings: ["templateName", "model.name"],
  _get: function (property) {
    var model = this.get("model");
    if (model)
      return model.get(property);
    return null;
  },

  didInsertElement: function () {
    var model = this.get("model");
    if (!model)
      return;
    model.set("view", this);

    var delayedFunction = this._get("functionWhenInserted");
    if (delayedFunction) {
      delayedFunction();
      this.get("model").set("functionWhenInserted", null);
    }
  },

});

Em.View.createViewsForModels = function (models, classNames, elementToAppendTo) {
  var views = [];
  for (var i = 0; i < models.length; i++) {
    var model = models[i];
    var view = Em.View.create({
      classNames: classNames,
      model: model,
      templateName: model.get("templateName"),
    });
    if (elementToAppendTo)
      view.appendTo(elementToAppendTo);
    views.push(view);
  }
};

Em.Model = Em.Object.extend({
  view: null, // Set by view.
  functionWhenInserted: null, // Used by performAfterViewInsertion

  performAfterViewInsertion: function (func) {
    if (this.get("view"))
      func();
    else
      this.set("functionWhenInserted", func);
  }
});