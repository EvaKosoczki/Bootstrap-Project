$(window).on('scroll', function scroller() {
  let y = $(window).scrollTop();
  if (y == 0) {
    $('.navbar').css('background-color', 'transparent');
  } else {
    $('.navbar').css('background-color', '#FFF')
  }
})