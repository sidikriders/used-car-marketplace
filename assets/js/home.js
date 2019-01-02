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