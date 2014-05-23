Template.portfolio.recentWorks = () ->
  Session.get 'recentWorks'

Template.portfolio.created = () ->
  getPosts()

Template.portfolio.events
  'click .entry-thumbnail': (e) ->
    highlightedWork = Session.get('recentWorks')[$(e.currentTarget).data('idx')]
    Session.set 'highlightedWork', highlightedWork

getPosts = () ->
  Meteor.call 'getPortfolio', (err, result) ->
    if err
      console.log 'Error getting portfolio', err
      getPosts()
    Session.set 'recentWorks', result

Template.projectModalContent.portfolioTitle = () ->
  return Session.get('highlightedWork').title

Template.projectModalContent.firstImage = () ->
  return Session.get('highlightedWork').imageUrls[0]

Template.projectModalContent.secondImage = () ->
  return Session.get('highlightedWork').imageUrls[1]

Template.projectModalContent.thirdImage = () ->
  return Session.get('highlightedWork').imageUrls[2]

Template.projectModalContent.portfolioBody = () ->
  return Session.get('highlightedWork').body
