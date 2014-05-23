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

  getPortfolio: () ->
    this.unblock()
    try
      result = HTTP.get 'http://api.tumblr.com/v2/blog/blog.konsu.lt/posts/photo?',
        'params' :
          'api_key' : 'tHhp6SOZutqmkDU4WIi4RNijhQ8uzuHg2PkIkrkh0EU1K8myyt'
          'tag' : 'portfolio'
          'limit' : 8
          'reblog_info' : false
          'notes_info' : false
          'format' : 'text'
      posts = _.map result.data.response.posts, (post, idx) ->
        postObj =
          id : idx
          title : post.caption.substr(0, post.caption.indexOf('\n')).replace(/<\/?[^>]+(>|$)/g, '')
          body : post.caption.substr(post.caption.indexOf('\n')).replace(/\r?\n|\r/g, '')
          thumbnailImage : post.photos[0].alt_sizes[3].url
          imageUrls : _.map post.photos, (photo) ->
            photo.alt_sizes[0].url
        postObj
      posts
    catch e
      e
