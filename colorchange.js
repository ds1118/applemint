/* <body title background color blue : rgb(165, 218, 253)
<body background color pink : rgb(253, 220, 242)
<body font-family : cursive */

/* 강의 노트 color change button */
function bodybackgroundcolor(color) {
  var target1 = document.querySelector('body')
  target1.style.backgroundColor = color
}
function notebackgroundcolor(color) {
  var target2 = document.querySelector('.note')
  target2.style.backgroundColor = color
}

function colorchange(self) {
  var btn1 = 'Yellow'
  var btn2 = 'Mint'
  var btn3 = 'Blue'

  /*this는 해당하는 onclick이 포함된 태그를 가리킨다*/
  if (self.value == btn1) {
    self.value = 'Mint'
    bodybackgroundcolor('mintcream') /*'rgb(150, 250, 160)'*/
    notebackgroundcolor('rgb(150, 250, 160)')
    var th = document.querySelectorAll('th')
    var i = 0
    while (i < th.length) {
      th[i].style.backgroundColor = 'white'
      th[i].style.color = 'black'
      i = i + 1
    }
    var loop1 = document.querySelectorAll('.loop')
    var i = 0
    while (i < loop1.length) {
      loop1[i].onmouseover = function () {
        this.style.backgroundColor = 'black'
        this.style.color = 'white'
      }
      loop1[i].onmouseout = function () {
        this.style.backgroundColor = 'white'
        this.style.color = 'black'
      }
      i = i + 1
    }
    var sky = document.querySelectorAll('.skyblue')
    var i = 0
    while (i < sky.length) {
      console.log(sky[i])
      sky[i].onmouseover = function () {
        this.style.backgroundColor = 'rgba(194, 255, 177, 0.836)'
      }
      sky[i].onmouseout = function () {
        this.style.backgroundColor = 'transparent'
      }
      i = i + 1
    }
    var object2 = document.querySelectorAll('.obj')
    var i = 0
    while (i < object2.length) {
      object2[i].style.backgroundColor = 'rgb(230, 270, 50)'
      ;('rgb(150, 250, 110)')
      object2[i].style.border = '2px solid white'
      object2[i].style.color = 'black'
      i = i + 1
    }
  } else if (self.value == btn2) {
    self.value = 'Blue'
    /*target1.style.backgroundColor = 'white';*/
    bodybackgroundcolor('rgb(214, 240, 252)')
    notebackgroundcolor('rgb(85, 200, 250)')

    var th = document.querySelectorAll('th')
    var i = 0
    while (i < th.length) {
      th[i].style.backgroundColor = 'white'
      th[i].style.color = 'black'
      i = i + 1
    }

    var loop2 = document.querySelectorAll('.loop')
    var i = 0
    while (i < loop2.length) {
      console.log(loop2[i])
      loop2[i].onmouseover = function () {
        this.style.color = 'black'
        this.style.backgroundColor = 'whitesmoke'
        console.log(this)
      }
      loop2[i].onmouseout = function () {
        this.style.color = 'black'
        this.style.backgroundColor = 'white'
        console.log(this)
      }
      i = i + 1
    }
    var sky = document.querySelectorAll('.skyblue')
    var i = 0
    while (i < sky.length) {
      console.log(sky[i])
      sky[i].onmouseover = function () {
        this.style.backgroundColor = 'rgb(112, 126, 253)'
      } /*'rgb(85, 150, 250)'*/
      sky[i].onmouseout = function () {
        this.style.backgroundColor = 'transparent'
      }
      i = i + 1
    }
    var object2 = document.querySelectorAll('.obj')
    var i = 0
    while (i < object2.length) {
      object2[i].style.backgroundColor =
        'rgb(85, 184, 250)' /*'rgb(143, 220, 253)'*/
      object2[i].style.border = '2px solid white'
      object2[i].style.color = 'black'
      i = i + 1
    }
  } else {
    self.value = 'Yellow'
    /*target1.style.backgroundColor = 'white';*/
    bodybackgroundcolor('white')
    notebackgroundcolor('rgb(251, 253, 116)')

    var th = document.querySelectorAll('th')
    var i = 0
    while (i < th.length) {
      th[i].style.backgroundColor = 'whitesmoke'
      th[i].style.color = 'black'
      i = i + 1
    }

    var loop2 = document.querySelectorAll('.loop')
    var i = 0
    while (i < loop2.length) {
      console.log(loop2[i])
      loop2[i].onmouseover = function () {
        this.style.color = 'black'
        this.style.backgroundColor = 'lavenderblush'
        console.log(this)
      }
      ;('rgb(112, 126, 253)')
      loop2[i].onmouseout = function () {
        this.style.color = 'black'
        this.style.backgroundColor = 'whitesmoke'
        console.log(this)
      }
      i = i + 1
    }
    var sky = document.querySelectorAll('.skyblue')
    var i = 0
    while (i < sky.length) {
      console.log(sky[i])
      sky[i].onmouseover = function () {
        this.style.backgroundColor = 'rgb(85, 150, 250)'
      }
      sky[i].onmouseout = function () {
        this.style.backgroundColor = 'transparent'
      }
      i = i + 1
    }
    var object2 = document.querySelectorAll('.obj')
    var i = 0
    while (i < object2.length) {
      object2[i].style.backgroundColor = 'rgb(143, 220, 253)'
      object2[i].style.border = '2px solid whitesmoke'
      object2[i].style.color = 'black'
      i = i + 1
    }
  }
}
var sky = document.querySelectorAll('.skyblue')
var i = 0
while (i < sky.length) {
  console.log(sky[i])
  sky[i].onmouseover = function () {
    this.style.backgroundColor = 'rgb(85, 150, 250)'
  } /*'rgb(85, 184, 250)'*/
  sky[i].onmouseout = function () {
    this.style.backgroundColor = 'transparent'
  }
  i = i + 1
}
