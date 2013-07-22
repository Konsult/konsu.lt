Header =
  headers: [
    { name: 'To-Do List', image: 'todo.jpg' }
    { name: 'Safebox Dial ', image: 'safe_dial.jpg' }
    { name: 'BillSplitter', image: 'bill_splitter.jpg' }
    { name: 'Typing Game', image: 'jsconf.jpg' }
    { name: 'Face Invaders', image: 'face_invaders.jpg' }
  ]

  curr: 0
  curr$: null

  top$: null
  bottom$: null
  caption$: null

  duration: 2000
  captionDuration: 1000

  showImage: (image$, callback) ->
    if image$ is Header.bottom$
      Header.bottom$.css display: 'block'
      Header.top$.transition(opacity: 0, Header.duration, callback)
    else
      Header.top$
        .css(display: 'block', opacity: 0)
        .transition(opacity: 1, Header.duration, callback)

  loadImage: (image$, index) ->
    src = '/images/header/' + Header.headers[index].image
    image$.css
      display: 'none'
      'background-image': 'url("' + src + '")'
    src

  transitionHeader: (callback) ->
    console.log 'transitionHeader from ' + Header.curr
    nextIndex = (Header.curr + 1) % (Header.headers.length - 1)
    old$ = if Header.curr$? then Header.curr$ else Header.bottom$
    new$ = if old$ is Header.top$ then Header.bottom$ else Header.top$

    Header.caption$.transition opacity:0, Header.captionDuration, ->
      Header.caption$.html Header.headers[Header.curr].name
      Header.showImage new$, ->
        Header.caption$.transition opacity:0.5, Header.captionDuration, ->
          Header.loadImage old$, nextIndex
          Header.curr = nextIndex
          Header.curr$ = new$
          callback?()

window.Header = Header
