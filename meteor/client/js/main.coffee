Meteor.startup ->
  # register GA pageview on startup
  GAnalytics.pageview()

  # Replace obfuscated email with more usable one
  domain = 'konsu.lt'
  subject = 'Konsult Inquiry'
  email = ['us', '@', domain, '?subject=', subject].join ''
  $('.email > a').attr 'href', 'mailto:' + email
