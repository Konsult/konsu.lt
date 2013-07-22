Header = window.Header

Meteor.startup ->
  Header.top$ = $ '#top .header_image.top'
  Header.bottom$ = $ '#top .header_image.bottom'
  Header.caption$ = $ '#top #header_image_caption'

  if !$.support.transition
    $.fn.transition = $.fn.animate

  # Pre-load bg-image before starting animations
  imgSrc = Header.loadImage Header.top$, Header.curr
  console.log 'preloading ' + imgSrc
  $('<img/>')
    .attr(src: imgSrc)
    .load ->
      # Start the auto-rotation of images
      console.log 'loaded ' + imgSrc
      Header.transitionHeader ->
        setInterval Header.transitionHeader, 10000

  # Set up button events
  activateButton = (event) ->
    $(event.currentTarget).addClass('active')
  deactivateButton = (event) ->
    $(event.currentTarget).removeClass('active')
  $('.button').on(
    touchstart: activateButton,
    touchend: deactivateButton,
    # touchcancel: deactivateButton
  )

  $('#contact_form .send.button').on('click', sendMessage)
