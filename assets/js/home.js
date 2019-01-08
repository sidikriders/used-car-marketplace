// initiate input search engine
$('form#keyword').submit(function (e) {
  e.preventDefault()
  var _form = $(e.currentTarget)
  var input = _form.find('input')
  var keyword = input.val()
  var _url = '/cari-mobil'
  window.location.href = '/cari-mobil?q=' + keyword
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

// initiate tombol cari mobil di search engine
$('#do-search').click(function (e) {
  if ($('#search-engine').hasClass('show-other-filters')) {
    var params = {
      q: $('#keyword input').val(),
      brand: $('#brand').attr('val') || 0,
      type: $('#type').attr('val') || 0,
      year: $('#year').val(),
      distance: $('#distance').attr('val') || 0,
      transmition: $('#transmition').attr('val') || 0,
      price: ($('#price input:nth-child(1)').val() || 0) + '-' + ($('#price input:nth-child(1)').val() || 1000000000)
    }

    window.location.href = '/cari-mobil?' + Object.keys(params).map(function (key) {
      return key + '=' + params[key]
    }).join('&')
  } else {
    window.location.href = '/cari-mobil?q=' + $('#keyword input').val()
  }
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

// initiate carousel mobil rekomendai
$('.car-recommendation .car-recommendation-list .arrow').click(function (e) {
  var arrow = $(e.currentTarget)
  var carList = $('.car-recommendation .car-recommendation-list .main-list')
  if (arrow.hasClass('right')) {
    carList.animate({
      scrollLeft: (carList.scrollLeft() + 207) + 'px'
    }, 120)
  } else {
    carList.animate({
      scrollLeft: (carList.scrollLeft() - 207) + 'px'
    }, 120)
  }
})
