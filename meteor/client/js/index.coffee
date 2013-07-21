Header =
  headers: [
    { name: 'To-Do App Designs', image: 'todo.jpg' }
    { name: 'Safebox Dial ', image: 'safe_dial.jpg' }
    { name: 'BillSplitter Wireframes', image: 'bill_splitter.jpg' }
    { name: 'Typing Game', image: 'jsconf.jpg' }
    { name: 'Face Invaders Game', image: 'face_invaders.jpg' }
  ]

  curr: -1
  curr$: null

  top$: null
  bottom$: null
  caption$: null

  duration: 1000

  showImage: (image$, callback) ->
    if image$ is Header.bottom$
      Header.bottom$.css display: 'block'
      Header.top$.transition(opacity: 0, callback)
    else
      Header.top$
        .css(display: 'block', opacity: 0)
        .transition(opacity: 1, callback)

  loadImage: (image$, index) ->
    src = '/images/header/' + Header.headers[index].image
    image$.css
      display: 'none'
      'background-image': 'url("' + src + '")'
    src

  transitionHeader: (callback) ->
    console.log 'transitionHeader from ' + Header.curr
    oldIndex = Header.curr
    newIndex = ++oldIndex % Header.headers.length
    old$ = if Header.curr$? then Header.curr$ else Header.bottom$
    new$ = if old$ is Header.top$ then Header.bottom$ else Header.top$

    Header.caption$.transition opacity:0, Header.duration, ->
      Header.caption$.html Header.headers[newIndex]
      Header.showImage new$, ->
        Header.caption$.transition opacity:1, Header.duration, ->
          Header.loadImage old$, newIndex
          Header.curr = newIndex
          Header.curr$ = new$
          callback?()

Meteor.startup ->
  Header.top$ = $ '#top .header_image.top'
  Header.bottom$ = $ '#top .header_image.bottom'
  Header.caption$ = $ '#top #header_image_caption'
  $.fx.speeds._default = 1000

  if !$.support.transition
    $.fn.transition = $.fn.animate

  # Pre-load bg-image before starting animations
  next = Header.curr + 1
  imgSrc = Header.loadImage Header.top$, next
  console.log 'preloading ' + imgSrc
  $('<img/>')
    .attr(src: imgSrc)
    .load ->
      # Start the auto-rotation of images
      console.log 'loaded ' + imgSrc
      Header.transitionHeader ->
        setInterval Header.transitionHeader, 10000


