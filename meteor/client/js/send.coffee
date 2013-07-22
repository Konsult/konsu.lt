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
  status$.html('Sending...').transition opacity: 1, ->
    Meteor.call 'emailMessage', name, email, message, ->
      #Update status message
      status$.transition opacity: 0, ->
        status$.html('Thanks for contacting us! We\'ll reach out to you shortly')
        status$.transition opacity: 1
        #Clear form fields
        $('#contact_form')[0].reset()
