
// intiate header select
$('.h-select .btn').click(function(e) {
  var options = $(e.currentTarget).parent().find('.options')
  options.toggle()
  options.find('p').off('click').click(function(e2) {
    var opt = $(e2.currentTarget)
    var _text = opt.text()
    var val = opt.attr('val')
    var placeholder = $(e.currentTarget).find('span')
    placeholder.text(_text)
    $(e.currentTarget).parent().attr('val', val)
    options.hide()
  })
})