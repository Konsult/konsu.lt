App.AppRouter = Ember.Router.extend({
  location: 'hash',

  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/'
      // Layout your routes here...
    })
  })
});

