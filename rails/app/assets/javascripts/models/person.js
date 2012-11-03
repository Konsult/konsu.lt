//= require models/model
//= require_self
function Person (name, privates) {
  privates = privates || {};
  var person = Object.new(Model(privates));

  // Overrides
  person.viewClass = "PersonView";
  person.toString = function () {
    return this.name;
  }

  // Public
  person.name = name || ""; // string
  person.photo = null; // url
  person.bio = ""; // string

  return person;
};