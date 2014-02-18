process.env.MAIL_URL = 'smtp://us%40konsult.mailgun.org:2zTDUM76VAhPQfe@smtp.mailgun.org:587/'

Meteor.methods
  emailMessage: (name, email, message) ->
    check [name, email, message], [String]
    this.unblock()

    Email.send
      to: 'us@konsu.lt'
      from: email
      subject: 'Konsult Inquiry from ' + name
      text: message
