$(window).on('scroll', function scroller() {
  const y = $(window).scrollTop();
  if (y === 0) {
    $('.navbar').css('background-color', 'transparent');
    $('.SB--yellow').css('color', '#fdcc52');
    $('#Cont,#Down,#Feat').css('color', '#FFF');
  } else {
    $('.navbar').css('background-color', '#FFF')
    $('.SB--yellow,#Cont,#Down,#Feat').css('color', '#636363');
  }
});

$('.socMed-bg').tooltip();

$('#Privacy').on('shown.bs.modal');
$('#Terms').on('shown.bs.modal');
$('#FAQ').on('shown.bs.modal');