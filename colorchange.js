/* 강의 노트 color change button */
var backgroundColor = {
  body: function (color) {
    $('body').css('backgroundColor', color)
  },
  note: function (color) {
    $('.note').css('backgroundColor', color)
  },
}
var th = {
  color: function (color) {
    $('th').css('color', color)
  },
  backgroundColor: function (color) {
    $('th').css('backgroundColor', color)
  },
}
function notetitle(color) {
  $('#notetitle').css('border', color)
}
var hover1 = {
  loop_color: function (color1, color2) {
    $('.loop').hover(
      function () {
        $(this).css('color', color1)
      },
      function () {
        $(this).css('color', color2)
      }
    )
  },
  loop_backgroundColor: function (color1, color2) {
    $('.loop').hover(
      function () {
        $(this).css('backgroundColor', color1)
      },
      function () {
        $(this).css('backgroundColor', color2)
      }
    )
  },
  website_backgroundColor: function (color1, color2) {
    $('.website').hover(
      function () {
        $(this).css('backgroundColor', color1)
      },
      function () {
        $(this).css('backgroundColor', color2)
      }
    )
  },
}
var object1 = {
  color: function (color) {
    $('.obj').css('color', color)
  },
  backgroundColor: function (color) {
    $('.obj').css('backgroundColor', color)
  },
  border: function (color) {
    $('.obj').css('border', color)
  },
}
function jquery(color1, color2) {
  $('.jquery').hover(
    function () {
      $(this).css('backgroundColor', color1)
    },
    function () {
      $(this).css('backgroundColor', color2)
    }
  )
}
function colorchange(self) {
  var btn1 = 'Yellow'
  var btn2 = 'Mint'
  var btn3 = 'Blue'

  /*this는 해당하는 onclick이 포함된 태그를 가리킨다*/
  if (self.value == btn1) {
    self.value = 'Mint'
    backgroundColor.body('mintcream')
    backgroundColor.note('rgb(150, 250, 160)')
    th.color('black')
    th.backgroundColor('white')
    notetitle('4px solid lightgray')
    hover1.loop_color('white', 'black')
    hover1.loop_backgroundColor('black', 'white')
    hover1.website_backgroundColor('rgba(194, 255, 177, 0.836)', 'transparent')
    object1.color('black')
    object1.backgroundColor('rgb(230, 270, 50)')
    object1.border('2px solid white')
    jquery('rgb(150, 250, 110)', 'transparent')
  } else if (self.value == btn2) {
    self.value = 'Blue'
    backgroundColor.body('rgb(214, 240, 252)')
    backgroundColor.note('rgb(85, 200, 250)')
    th.color('black')
    th.backgroundColor('white')
    notetitle('4px solid white')
    hover1.loop_color('black', 'black')
    hover1.loop_backgroundColor('whitesmoke', 'white')
    hover1.website_backgroundColor('rgb(112, 126, 253)', 'transparent')
    object1.color('black')
    object1.backgroundColor('rgb(85, 184, 250)')
    object1.border('2px solid white')
    jquery('rgb(189, 230, 255)', 'transparent')
  } else {
    self.value = 'Yellow'
    backgroundColor.body('white')
    backgroundColor.note('rgb(251, 253, 116)')
    th.color('black')
    th.backgroundColor('whitesmoke')
    notetitle('4px solid lightgrey')
    hover1.loop_color('black', 'black')
    hover1.loop_backgroundColor('lavenderblush', 'whitesmoke')
    hover1.website_backgroundColor('rgb(85, 150, 250)', 'transparent')
    object1.color('black')
    object1.backgroundColor('rgb(143, 220, 253)')
    object1.border('2px solid whitesmoke')
    $('.jquery').on('mouseover', function () {
      $(this).css('backgroundColor', 'rgb(253, 220, 242)')
    })
  }
}
// var loop1 = document.querySelectorAll('.loop')
// var i = 0
// while (i < loop1.length) {
//   console.log(loop1[i])
//   loop1[i].onmouseover = function () {
//     this.style.color = 'black'
//     this.style.backgroundColor = 'lavenderblush'
//     console.log(this)
//   }
//   ;('rgb(112, 126, 253)')
//   loop1[i].onmouseout = function () {
//     this.style.color = 'black'
//     this.style.backgroundColor = 'whitesmoke'
//     console.log(this)
//   }
//   i = i + 1
// }
// var website = document.querySelectorAll('.website')
// var i = 0
// while (i < website.length) {
//   console.log(website[i])
//   website[i].onmouseover = function () {
//     this.style.backgroundColor = 'rgb(85, 150, 250)'
//   }
//   website[i].onmouseout = function () {
//     this.style.backgroundColor = 'transparent'
//   }
//   i = i + 1
// }
