function initPage () {
  if (typeof $ !== 'undefined') {
    initFilter()
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

initPage()