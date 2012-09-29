//= require models/section
//= require models/demo
//= require_self

App.DemoSection = App.Section.extend({
  name: "Demos",
  path: "/Demos",
  templateName: "demoSection",

  demos: [
    App.Demo.create({
    name: "Face Invaders",
    version: "Beta",
    description: "It's a space invaders game where you shoot your Facebook friends! Contact us for access to the private beta.",
    platforms: [
      Platform.Safari,
      Platform.Chrome,
      Platform.iPad,
      Platform.Firefox,
    ],
    url: "http://games.konsu.lt",
    thumbnail: "/images/sample/invaders.png",
  }),
  App.Demo.create({
    name: "Combination Dial",
    description: "This password entry UI concept is specifically designed for touch devices.",
    platforms: [
      Platform.iPhone,
      Platform.iPad,
      Platform.Safari,
      Platform.Chrome,
    ],
    url: "http://konsu.lt/demos/SafeBoxDial/",
    thumbnail: "/images/sample/dial.png",
  }),
  ], // array<Demo>
});