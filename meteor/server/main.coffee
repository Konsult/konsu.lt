Meteor.methods
  emailMessage: (name, email, message) ->
    check [name, email, message], [String]
    this.unblock()

    Email.send
      to: 'NEED_REAL_EMAIL_ADDRESS'
      from: email
      subject: 'Inquiry on konsu.lt from ' + name
      text: message
