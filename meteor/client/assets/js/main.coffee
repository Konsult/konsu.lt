window.sendMessage = (event) ->
  name$ = $('#contact_name')
  email$ = $('#contact_email')
  message$ = $('#contact_message')

  name = name$.val().trim()
  email = email$.val().trim()
  message = message$.val().trim()

  if !(name?.length && email?.length && message?.length)
    return

  status$ = $('#contact_form .status')
  status$.html('Sending...')
  Meteor.call 'emailMessage', name, email, message, ->
    status$.html('Thanks for contacting us! We\'ll reach out to you shortly')
    $('#contact_form')[0].reset()

Meteor.startup ->
  # register GA pageview on startup
  GAnalytics.pageview()

  # Replace obfuscated email with more usable one
  domain = 'konsu.lt'
  subject = 'Konsult Inquiry'
  email = ['us', '@', domain, '?subject=', subject].join ''
  $('.email > a').attr 'href', 'mailto:' + email

  $('#contact_form .send.button').on('click', sendMessage)
