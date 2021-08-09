let wrapper = document.querySelector('.wrapper')
let wrap = document.querySelector('.wrap')
let one = document.querySelector('.one')

let username = document.querySelector('#username')
let password = document.querySelector('#password')
let lookBtn = document.querySelector('.lookBtn')
let countNum = document.querySelector('.countNum')
let passwordRe = document.querySelector('#password-retype')
let mismatch = document.querySelector('.mismatch')

let passCheck = document.querySelector('.passCheck')
let passAlert = document.querySelector('.passAlert')

let toggleBtn = document.querySelector('.toggleBtn')
let toggleColor = document.querySelector('.toggleColor')

let comb = document.querySelector('.comb')
let comb2 = document.querySelector('.comb2')

let sizeRange = document.querySelector('.sizeRange')

/*백그라운드 color change toggle*/
function colorChange(){
  toggleColor.classList.toggle('toggleColor')
}

/*마우스 포인트 위치*/

function move(e){
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  one.style.left = mouseX + 'px';
  one.style.top = mouseY + 'px';
}

toggleBtn.addEventListener('click',() => colorChange())
document.addEventListener("mousemove", (e) => move(e))

/*아이디 제한 주기
1. 5글자 이상,
2. 영문, 숫자 조합.
*/

function combMatch(e){
  let pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{5,}$/
  console.log(pattern.test(e.target.value));
  pattern.test(e.target.value) ? comb.classList.add("hide"): comb.classList.remove('hide');
}

username.addEventListener('keyup', (e) => combMatch(e))

/*비밀번호 제한
1. 6~12글자 제한
2. 영문, 숫자, 특수문자 조합
*/

function comb2Match(e){
  countNum.textContent  = e.target.value.length
  let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,12}$/
  pattern.test(e.target.value) ? comb2.classList.add("hide"): comb2.classList.remove('hide');
}

/*패스워드 look, hide toggle*/
function passwordLook(e){
  lookBtn.classList.toggle('look')

  if(lookBtn.classList.contains('look')){
    lookBtn.textContent = "look"
    password.setAttribute('type', 'password')
  } else {
    lookBtn.textContent = "hide"
    password.setAttribute('type', 'text')
  }
}

password.addEventListener('keyup',(e) => comb2Match(e));
lookBtn.addEventListener('click',(e) => passwordLook(e))

/*
비밀번호 확인
1. 동일하지 않으면 에러 메시지
2. 동일한 경우에만 통과
*/

function passwordMatch(e){
  if(e.target.value !== password.value){
    mismatch.classList.remove('hide')
  } else {
    mismatch.classList.add('hide')
  }
}

passwordRe.addEventListener('keyup',e => passwordMatch(e))

/*회원가입
1. 통과여부 확인
2. 모두 통과되면 가입 환영 모달
*/

function passModal(){
  passAlert.innerHTML = `
  <div>가입을 축하합니다!</div>
  <br>
  <div>ID : ${username.value}</div>
  <div>password : ${password.value.replace(password.value.slice(3),"*".repeat(password.value.slice(3).length))}</div>
  `
  passAlert.classList.add('show')
}

function allCheck(e){
  if(username.value && password.value && passwordRe.value){
    if(comb.classList.contains("hide") && comb2.classList.contains('hide') && mismatch.classList.contains('hide')){
      passModal()
    } else {
      alert('입력사항을 다시 확인해 주세요!')
    }
  } else {
    alert('입력창을 채워주세요!')
  }
}

passCheck.addEventListener('click', e => allCheck(e))

/*글자 사이즈 변경 랜지*/

function changeSize(){
  console.dir(sizeRange);
  document.body.style.fontSize = sizeRange.value + "rem"
}

sizeRange.addEventListener('change', e => changeSize(e))