//= require models/section
//= require models/person
//= require_self

App.BioSection = App.Section.extend({
  name: "Who",
  path: "/Who",
  templateName: "bioSection",
  companyBlurb: "We are a 2-person web design & development shop based in San Francisco, California. Give us a holler and let's get to work! ;)",
  contactButtonLabel: "Contact Us",
  people: [
    App.Person.create({
      name: "Matt Delaney",
      photo: "http://en.gravatar.com/avatar/5815d81f0e3ce6e355676124ea8a6bde",
      description: "As a former engineer on Apple’s WebKit core team, Matt loves building insanely great things and believes in open source. A high-performance graphics junky at heart and robotics tinkerer, Matt brings technical experience from all areas."
    }),
    App.Person.create({
      name: "Jing Jin",
      photo: "http://en.gravatar.com/avatar/391841987bace82166edcc7263e1cc4c",
      description: "Jing is one of those few first-class designers who is also a fantastic engineer. Jing brings years of UI/UX design experience from Apple’s Safari team and a borderline irrational love for pixel-perfection. With an unabashed addiction for intuitively designed and flawlessly executed user interfaces, she’ll turn your magical unicorn into a triple Michelin star bacon cupcake delight."
    }),
  ], // array<Person>
});