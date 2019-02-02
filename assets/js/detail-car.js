initMainCarousel()

function initMainCarousel () {
  var mainCarousel = $('#main-carousel')
  var arrow = mainCarousel.find('.arrow .the-arrow')
  var dots = mainCarousel.find('.dot')
  var imgBig = mainCarousel.find('.big-one img')
  var titleCard = mainCarousel.find('.big-one .main-photo-title p')

  // initiate Arrow
  arrow.click(function (e) {
    var _arrow = $(e.currentTarget)
    var isLeft = _arrow.parent().hasClass('left')
    var currentIndex = mainCarousel.attr('index')
    var newIndex = Number(currentIndex || 0) + 1
    if (isLeft) {
      newIndex = Number(currentIndex || 0) - 1
    }

    if (newIndex < 0) {
      newIndex = dots.length - 1
    } else if (newIndex === dots.length) {
      newIndex = 0
    }

    var selectedDot = $(dots[newIndex])

    var title = selectedDot.attr('title')
    var url = selectedDot.attr('url')

    imgBig.fadeOut(150, function () {
      imgBig.attr('src', url).attr('title', title)
    }).fadeIn(150)
    titleCard.text(title)
    mainCarousel.attr('index', newIndex)

    $('.dot.active').removeClass('active')
    selectedDot.addClass('active')
  })

  // initiate Dots
  dots.click(function (e) {
    var dot = $(e.currentTarget)
    if (!dot.hasClass('active')) {
      var url = dot.attr('url')
      var title = dot.attr('title')
      var newIndex = dot.index()

      imgBig.fadeOut(150, function() {
        imgBig.attr('src', url).attr('title', title)
      }).fadeIn(150)
      titleCard.text(title)
      mainCarousel.attr('index', newIndex)

      $('.dot.active').removeClass('active')
      dot.addClass('active')

    }
  })
}