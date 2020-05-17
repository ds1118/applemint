/* 공부 목표 팝업창 띄우기 함수 */
function save(inputtxt1) {
  var new1 = '시간'
  if (inputtxt1 !== new1) {
    var myWindow = window.open('', '', 'width=260, height=200')
    myWindow.document.write(
      '<title>오늘의 공부 계획</title>' +
        '<p style="font-size:small;">' +
        '현재 시간 : ' +
        Date() +
        '</p>' +
        '<hr>' +
        '<body style="background-color:lavender">' +
        '<h2 style="text-align:center">Today\'s Study Plan</h2>' +
        '<p style="text-align:center;background-color:white;border:1.7px solid purple"><br>' +
        document.getElementById('plan').value +
        ' 공부 ' +
        document.getElementById('time').value +
        '<br><br></p></body>'
    )
    myWindow.blur()
  }
}
/* 메인페이지 컬러 체인지 버튼 클릭시 발생하는 배경색 변화 함수 */
function change(inputtxt) {
  var btn1 = 'Color Change!'
  if (inputtxt == btn1) {
    document.querySelector('body').style.backgroundColor = 'rgb(191, 197, 252)'
    document.getElementById('title').style.backgroundColor = 'white'
    document.getElementById('title').style.fontFamily = 'Cambria'
    document.getElementById('button1').value = 'Return'
  } else {
    document.querySelector('body').style.backgroundColor = 'cornsilk'
    document.getElementById('title').style.backgroundColor =
      'rgb(250, 174, 199)'
    document.getElementById('title').style.fontFamily = 'Cursive'
    document.getElementById('button1').value = 'Color Change!'
  }
}
