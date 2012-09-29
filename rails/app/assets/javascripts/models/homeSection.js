//= require models/section
//= require_self

App.HomeSection = App.Section.extend({
  name: "Konsult",
  path: "/",
  templateName: "homeSection",
  hasNavButton: false,
});