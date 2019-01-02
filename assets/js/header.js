// initiate search header
$('#header-search').on('keyup', function (e) {
  if (e.keyCode === 13) {
    return searchFromHeader()
  }
})

$('#header .header-input .btn.info-btn').click(function (e) {
  return searchFromHeader()
})

function searchFromHeader () {
  var keyword = $('#header-search').val()
  window.location.href = '/cari-mobil?q=' + keyword
}