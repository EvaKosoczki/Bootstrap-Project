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

function hoverfunc(inColor, outColor) {
  hover(function () {
    $(this).css('color', inColor)
  }, function () {
    $(this).css('color', outColor)
  });
}

//$('.socMed-bg').tooltip();

$('#Privacy').on('shown.bs.modal');
$('#Terms').on('shown.bs.modal');
$('#FAQ').on('shown.bs.modal');

$.getJSON('http://46.101.237.11/json/users.json', (data) => {
  let randomArray = []
  i = 0
  while (i < 5) {
    randomArray.push(Math.floor(Math.random() * 44));
    i += 1;
  }
  let choosenOnes = [];
  randomArray.map((item) => {
    for (let i = 0; i < data.length; i += 1) {
      if (item == i) {
        choosenOnes.push(data[i])
      }
    }
    return choosenOnes;
  })
  let str = '';
  for (let i = 0; i < choosenOnes.length; i += 1) {
    str += `<div><div class='img'><img src="${choosenOnes[i].picture}" alt="${choosenOnes[i].name.first}">
      </div><div class="h4">${choosenOnes[i].name.first} ${choosenOnes[i].name.last}</div>
      <p>${choosenOnes[i].greeting}</p></div>`
  }
  $('#testim-content').html(str);
  $('#testim-content > div:first').addClass('active');

  // vars
  'use strict'
  var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;;

  window.onload = function () {

    // Testim Script
    function playSlide(slide) {
      for (var k = 0; k < testimDots.length; k++) {
        testimContent[k].classList.remove("active");
        testimContent[k].classList.remove("inactive");
        testimDots[k].classList.remove("active");
      }

      if (slide < 0) {
        slide = currentSlide = testimContent.length - 1;
      }

      if (slide > testimContent.length - 1) {
        slide = currentSlide = 0;
      }

      if (currentActive != currentSlide) {
        testimContent[currentActive].classList.add("inactive");
      }
      testimContent[slide].classList.add("active");
      testimDots[slide].classList.add("active");

      currentActive = currentSlide;

      clearTimeout(testimTimer);
      testimTimer = setTimeout(function () {
        playSlide(currentSlide += 1);
      }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function () {
      playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function () {
      playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
      testimDots[l].addEventListener("click", function () {
        playSlide(currentSlide = testimDots.indexOf(this));
      })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function (e) {
      switch (e.keyCode) {
        case 37:
          testimLeftArrow.click();
          break;

        case 39:
          testimRightArrow.click();
          break;

        case 39:
          testimRightArrow.click();
          break;

        default:
          break;
      }
    })

    testim.addEventListener("touchstart", function (e) {
      touchStartPos = e.changedTouches[0].clientX;
    })

    testim.addEventListener("touchend", function (e) {
      touchEndPos = e.changedTouches[0].clientX;

      touchPosDiff = touchStartPos - touchEndPos;

      console.log(touchPosDiff);
      console.log(touchStartPos);
      console.log(touchEndPos);


      if (touchPosDiff > 0 + ignoreTouch) {
        testimLeftArrow.click();
      } else if (touchPosDiff < 0 - ignoreTouch) {
        testimRightArrow.click();
      } else {
        return;
      }

    })
  }


})