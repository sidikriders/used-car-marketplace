function initPage () {
  if (typeof $ !== 'undefined') {
    initFilter()
    initSort()
    initFilterMobile()
  } else {
    setTimeout(function () {
      return initPage()
    }, 100)
  }
}

function initFilter () {
  $('.input .btn').off('click').click(function (e) {
    var btn = $(e.currentTarget)
    var _input = btn.parent()
    if (_input.hasClass('select')) {
      var options = _input.find('.options')
      var opt = options.find('.opt')

      _input.append('<div class="fs-mask"></div>')
      options.show()
      _input.find('.fs-mask').click(function (e2) {
        $(e2.currentTarget).remove()
        options.hide()
      })

      opt.off('click').click(function (e2) {
        options.hide()
        _opt = $(e2.currentTarget)
        _input.attr('val', _opt.attr('val'))
        btn.find('p').text(_opt.text())
        _input.find('.fs-mask').remove()
      })
    }
  })
}

function initSort() {
  var opt = $('#sorting .sort .options .opt')
  opt.click(function (e) {
    var _opt = $(e.currentTarget)
    var val = _opt.attr('val')
    var _text = _opt.text()
    $('#sorting .sort').attr('val', val)
    $('#sorting .sort .btn p').text(_text)
    $('#sorting .sort .options').hide()
    setTimeout(function () {
      $('#sorting .sort .options').attr('style', '')
    }, 100);
  })
}

function initFilterMobile() {
  var filterBtn = $('#filter-mobile')
  var filter = $('#filter')
  var filterClose = $('#filter #close')

  filterBtn.click(function (e) {
    filterBtn.addClass('hide')
    filter.addClass('show')
    $('body').css('overflow', 'hidden')

    filterClose.off('click').click(function (e2) {
      filterBtn.removeClass('hide')
      filter.removeClass('show')
      $('body').css('overflow', '')
    })
  })
}

initPage()