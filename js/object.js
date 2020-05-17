/* 기본 방법 vs 반복문 */
/* 객체에 (함수) 메소드 담아서 실행시키기 */
var repeatfunc = {
  normal: function () {
    var myWindow = window.open('', '', 'width=260, height=240px')
    myWindow.document.write(
      '<title>기본 방법</title>' +
        '<body style="background-color:lavender;text-align:center">' +
        '<h2 style="text-align:center;font-family:monospace">기본 방법</h2>' +
        '<ul style="display:inline-block"><li>1</li><li>2</li><li>3</li><li>2</li><li>3</li><li>2</li><li>3</li><li>4</li></ul></body>'
    )
    myWindow.blur()
  },
  loop: function () {
    var myWindow = window.open('', '', 'width=260, height=240px')
    myWindow.document.write(
      '<title>반복문</title>' +
        '<body style="background-color:lavender;text-align:center">' +
        '<h2 style="text-align:center;font-family:monospace">반복문</h2>'
    )
    myWindow.document.write('<ul style="display:inline-block"><li>1</li>')
    var i = 0
    while (i < 3) {
      myWindow.document.write('<li>2</li>')
      myWindow.document.write('<li>3</li>')
      i = i + 1
    }
    myWindow.document.write('<li>4</li></ul></body>')
    myWindow.blur()
  },
}

/* 객체 - 숫자 아이콘 클릭시 호출 함수 */
function clickme(txt) {
  document.getElementById('object1').innerHTML = txt
}
/* 객체 & 데이터 추가하기 */
var book = { '지리의 힘': '팀 마샬', '더 해빙': '이서윤, 홍주연' }
book['1cm 다이빙'] = '태수, 문정'
book.언컨택트 = '김용섭'

function code() {
  alert(
    "\nvar book = {\n'지리의 힘' : '팀 마샬' , \n'더 해빙' : '이서윤, 홍주연'\n} ;\nbook['1cm 다이빙'] = '태수, 문정' ;\nbook.언컨택트 = '김용섭' ;\ndocument.write('<ol>') ;\nfor(var key in book)\n{\n document.write\n('<li><b>도서명 : </b>'+key+\n' &nbsp;<b>저자 : </b>'+book[key]+'</li>')\n} ;\ndocument.write('</ol>') ;\n"
  )
}
/* 메소드 & 객체에 bookfunction 메소드 추가하기 */
var func = {
  date: function () {
    document.write(Date())
  },
  write: function () {
    document.write('메소드 : 객체에 들어있는 함수 데이터')
  },
}
func['bookfunction'] = function () {
  for (var key in book) {
    document.write(
      '<b>도서명 : </b>' + key + ' &nbsp;<b>저자 : </b>' + book[key] + '<br>'
    )
  }
}
func.br = function () {
  document.write('<br>')
}
function object(txt) {
  if (txt.value == 'func code 보기') {
    document.getElementById('code').value = 'func code 숨기기'
    document.getElementById('object').innerHTML =
      "var func = {<br> date: function () <br>{ document.write( Date() ) } ,<br>write : function () <br>{ document.write('메소드 : 객체에 들어있는 함수 데이터') } <br>};<br>func['bookfunction'] = function () <br>{ for (var key in book) <br>{ document.write('&lt;b>도서명 : &lt;/b>' + key +<br>'&lt;b>저자 : &lt;/b>' + book[key] + '&lt;br>') }<br>}<br>func.br = function () { document.write('&lt;br>') }<br>func.date(); func.br()<br>func.write(); func.br()<br>func.bookfunction(); func.br()"
  } else {
    txt.value = 'func code 보기'
    document.getElementById('object').innerHTML = ''
  }
}
