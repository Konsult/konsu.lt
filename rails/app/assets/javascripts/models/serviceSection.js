//= require models/section
//= require models/service
//= require_self

App.ServiceSection = App.Section.extend({
  name: "What",
  path: "/What",
  templateName: "serviceSection",
  services: [
    App.Service.create({
      name: "Web Apps",
      description: "<p>The Mobile Web is undoubtedly the new Wild West: unsettled, untamed, and largely misunderstood. But have no fear, intrepid explorer! This is our speciality. The Mobile Web is far more performant and powerful than most are led to believe; you just have to understand how to tame it correctly. So, bring us your wildest ideas that push the envelope of what’s “possible” and let’s have ourselves a chat.</p>",
    }),
    App.Service.create({
      name: "Traditional Websites",
      description: "<p>In need of a website and not interested in any of those fancy new flexible fluidy griddled layout schemas and trampolines? Not sure what I even just said? No problem! We’ve got you covered. If all you need is a traditional website with a simple-yet-sexy style, this is something that we can do for you. We’ll attack-clone the git repo for you and all that other mumbo-jumbo nonsense in order to quickly get you up and running with a sparkly new website.</p>",
    }),
    App.Service.create({
      name: "Mobile Web Consulting",
      description: "<p>Whether you’re looking to create a new site or you have an existing site, the reality is that more and more people are going to view it through the lens of a mobile phone or tablet. So, if you want those eyeballs staying on your site rather than squinting and leaving, you’ll need to adapt to the unique constraints of the Mobile Web.</p> \
                    <p>We can help you answer all the tough questions and work with you to quickly get your site up-to-date for the expanding mobile world. Additionally, if you have an existing site that you think simply needs an all-out redesign, we’re also available to prototype just that for you.</p>",
    }),
    App.Service.create({
      name: "Beta Testing and User Studies",
      description: "<p>Launching any new website, app, or service can often prove to be a nerve-racking and difficult experience to execute confidently. How much time should you allocate for beta-testing, if any? How should you best go about collecting user feedback? How well do you understand your current user base vs. your target user base?</p> \
                    <p>These are just a few of the questions that one needs to address in order to move with confidence toward a successful product launch. If your plan is to deliver only the best then you can’t afford to cut the corners. We can help you tailor just the right set of testing and setup necessary to answer all the vital questions.</p>",
    }),
    App.Service.create({
      name: "Presentations and Speaking",
      description: "<p>We think the growing global web development community is a wonderful thing and we just absolutely love being involved. From giving talks at the big conferences to smaller focused presentations for companies and tech groups, we’re up for just about anything. So, if you’re interested in having us speak at your company, conference, or group-of-any-nature then let us know and we’ll see what we can whip up. Candy mountains, Charlie!</p>",
    }),
  ], // array<Service>
});