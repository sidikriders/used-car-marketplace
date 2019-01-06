// initiate input search engine
$('form#keyword').submit(function (e) {
  e.preventDefault()
  var _form = $(e.currentTarget)
  var input = _form.find('input')
  var keyword = input.val()
  var _url = '/cari-mobil'
  window.location.href = '/cari-mobil' + keyword
})

// initiate select search engine
$('#search-engine .input.select .btn').click(function (e) {
  var btn = $(e.currentTarget)
  var inputSelect = btn.parent()
  var options = inputSelect.find('.options')
  var body = $('body')
  var fsMask = $('<div class="fs-mask"></div>')
  var opt = options.find('.opt')

  options.addClass('show')
  body.addClass('side-menu-open')
  inputSelect.append(fsMask)

  opt.off('click').on('click', function (e2) {
    var _opt = $(e2.currentTarget)
    var _text = _opt.find('p').text()
    var val = _opt.attr('val')
    inputSelect.attr('val', val)
    btn.find('span').text(_text)
    options.removeClass('show')
    inputSelect.find('.fs-mask').remove()
    body.removeClass('side-menu-open')
  })

  fsMask.click(function (e2) {
    var mask = $(e2.currentTarget)
    mask.remove()
    body.removeClass('side-menu-open')
    options.removeClass('show')
  })
})

// initiate tombol cari mobil
$('#do-search').click(function (e) {
  var keyword = $('#keyword input').val()
  var locationId = Number($('#location').attr('val') || '0')
  var locationName = $('#location .btn span').text()

  var params = {
    keyword: keyword ? 'q=' + keyword : false,
    location: locationId > 0 ? ( 'location=' + locationName + '&locId=' + locationId) : false
  }

  window.location.href = '/cari-mobil?' + Object.keys(params).map(function (key) {
    return params[key]
  }).filter(function(key) {
    return key
  }).join('&')
})

// initiate autocomplete
$('#search-engine .input.autocomplete input').on('focus', function(e) {
  var _input = $(e.currentTarget)
  var inputAutoComplete = _input.parent()
  var options = inputAutoComplete.find('.options')
  options.addClass('show')

  _input.off('focusout').on('focusout', function (e) {
    options.removeClass('show')
  })

  _input.off('keyup').on('keyup', function (e2) {
    var isEnter = e2.keyCode === 13
    if (isEnter) {
      options.removeClass('show')
      var selectedOpt = options.find('.opt:first')
      inputAutoComplete.attr('val', selectedOpt.attr('val'))
      _input.val(selectedOpt.text())
      $('#year input').focus()
    } else {
      console.log('requqest autocomplete untuk ' + _input.val())
    }
  })
})

// initiate advanced search
$('#search-engine .last-line > p').click(function (e) {
  var searchEngine = $('#search-engine')
  searchEngine.toggleClass('show-other-filters')
})