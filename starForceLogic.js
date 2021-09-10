document.cookie = "crossCookie=bar; SameSite=None; Secure";
var a = 0;
var tryNumber = 0;
var successPerArr = [95, 90, 85, 85, 80, 75, 70, 65, 60, 55, 50, 45 ,40 ,35 ,30, 30, 30, 30, 30, 30, 30, 30, 3, 2, 1];
var destroyPerArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.6, 1.3, 1.4, 2.1, 2.1, 2.1, 2.8, 2.8, 7.0, 7.0, 19.4, 29.4, 39.6];
var failPerArr = [5, 10, 15, 15, 20, 25, 30, 35, 40, 45, 50, 55, 59.4, 63.7, 68.6, 67.9, 67.9, 67.9, 67.2, 67.2, 63, 63, 77.6, 68.6, 59.4];
var chancetime_SuccessPercentage = 100;
var chancetime_FailPercentage = 0;
var nextStar
var chanceTimeCheckNum = 0;
var starCatchNum = 0;
var starCatchSuccess = 0;
var rsp = successPerArr[a] / 100;
var dsp = destroyPerArr[a] / 100;
var destroyProtectNum = 0;
function jangbiBOOMAlert(){
    Swal.fire({
  title: '강화에 실패하여 장비가 파괴되었습니다.',
  text: "파괴된 장비를 복구하시겠습니까?",
  imageUrl: 'picture/boomDestroyed.png',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: '네, 복구합니다.',
  cancelButtonText: '아니요.'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      '장비가 복구되었습니다!',
      '장비가 12성이 되었습니다.',
      'success'
    )
    a = 12;//starfoce 함수실행?
    nextStar = 13;
    jeongboPrint_12to25();
  }
  else{
    a = 0;
    grid_Hide();
    dropHide_Make();
  }
})
  }
function makestarCatchFailedImage(){
  document.getElementById('starCatchFailedImage').style.display = 'inline';
}
function hideStarCatchFailedImage(){
  document.getElementById('starCatchFailedImage').style.display = 'none';
}
function makestarCatchSuccessImage(){
  document.getElementById('starCatchSuccessImage').style.display = 'inline';
}
function hideStarCatchSuccessImage(){
  document.getElementById('starCatchSuccessImage').style.display = 'none';
}
function hideOrMakeDestroyProtect(){
  if(a < 12 || a > 16 || chanceTimeCheckNum == 3){
    document.getElementById('destroyProtect').style.display = 'none';
    destroyProtectNum = 0;
  }
  else{
    document.getElementById('destroyProtect').style.display = 'inline';
  }
}

function makeStarCatchLogic(){
  var checkBox = document.getElementById("starCatchHaeJae");
  if(checkBox.checked == true){
  starCatchNum = 1;
}
else if (checkBox.checked == false){
  starCatchNum = 0;
}
}
function makeDestroyProtectLogic(){
  var protectLogic = document.getElementById('destroyProtect');
   if(protectLogic.checked == true){
     destroyProtectNum = 1;
   }
   else if(protectLogic.checked == false){
     destroyProtectNum = 0;
   }
}
function checkDestroyProtectNum(){
  if(a < 17){
    if(destroyProtectNum == 1){
      console.log('파괴방지 적용!')
      dsp = 0;
    }
  }
}

function onclickStop(){
  document.getElementById('starstar').style.animation = 'move 2s alternate both infinite paused';
  var absoluteLeft = window.pageXOffset + document.getElementById('starstar').getBoundingClientRect().left;
  if (absoluteLeft > 247 && absoluteLeft < 320){
    starCatchSuccess = 1;
    console.log("스타캐치 성공");
    console.log(absoluteLeft);
    setTimeout(function(){removeStarCatch();},1000);
    makestarCatchSuccessImage();
    setTimeout(function(){hideStarCatchSuccessImage();},1000)
    makeStarFoceLogicTotal(a)
}
else{ starCatchSuccess = 0;
  console.log("스타캐치 실패");
  console.log(absoluteLeft);
  setTimeout(function(){removeStarCatch();},1000);
  makestarCatchFailedImage();
  setTimeout(function(){hideStarCatchFailedImage();},1000)
  makeStarFoceLogicTotal(a)
}
}

function ifSuccessActivate(){
  console.log(successPerArr[star]);
  console.log('강화 성공 ^^');
  star += 1;
  nextStar += 1;
  failPercentage = 100 - successPerArr[star] - destroyPerArr[star];
  a += 1;
}
function makeStarCatch(){
  var itemimgTakingByStarCatchClone = document.getElementById('itemimgTakingByStarCatch').cloneNode();
  document.getElementById('starCatchGrid').insertAdjacentHTML('afterbegin', '<div id="description"> 별을 정확한 곳에 멈추면 강화 성공률이 증가하며 연속해서 강화를 시도하면 난이도가 증가합니다.</div>');
  document.getElementById('description').insertAdjacentHTML('afterend', '<div id="backback"></div>');
  document.getElementById('backback').insertAdjacentHTML('afterend', '<div id="tel"></div>');
  document.getElementById('tel').insertAdjacentHTML('afterbegin', '<div id="targetZone"></div>');
  document.getElementById('tel').insertAdjacentHTML('beforeend', '<img id="starstar" src="picture/starcatch.png">');
  document.getElementById('tel').insertAdjacentHTML('afterend', '<div id="stopButtonBox"></div>');
  document.getElementById('stopButtonBox').insertAdjacentHTML('afterbegin', '<input type="button" id="button" value="STOP!" onclick="onclickStop()">');
  document.getElementById('backback').appendChild(itemimgTakingByStarCatchClone);
}
function removeStarCatch(){
  document.getElementById('starCatchGrid').innerHTML = "";
}

function jeongboPrint_0to11(){
  document.getElementById("jeongbo").innerHTML = a + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPerArr[a] + '%' + '<br>' + '실패확률:' + failPerArr[a] + '%';
} // 성공확률과 실패확률만 뜸
function jeongboPrint_12to25(){
  document.getElementById("jeongbo").innerHTML = a + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPerArr[a] + '%' + '<br>' + '실패확률:' + failPerArr[a] + '%' + '<br>' + '파괴확률: ' + destroyPerArr[a] + '%';
} //파괴확률이 추가
function chancetime_Print(){
  document.getElementById("jeongbo").innerHTML = a + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + chancetime_SuccessPercentage + '%' + '<br>' + '실패확률:' + chancetime_FailPercentage + '%';
}// 찬스타임때 성공확률 100
function starForce(){

if(starCatchNum == 0){
  console.log("스타캐치 실행");
  makeStarCatch()
}
else if(starCatchNum == 1){
  console.log("스타캐치 실행 X");
    makeStarFoceLogicTotal(a)
}
}


function makeStarFoceLogicTotal(star){
nextStar = star + 1;
rsp = successPerArr[star] / 100;
tryNumber += 1;
dsp = destroyPerArr[a] / 100;
console.log('실행 횟수: ' + tryNumber);
checkDestroyProtectNum();
if(starCatchSuccess == 1){
  rsp = rsp * 1.05;
  makeStarCatchLogicDivision(a)
}
else if(starCatchSuccess == 0){
  makeStarCatchLogicDivision(a)
}
}



function makeStarCatchLogicDivision(star){
if(chanceTimeCheckNum == 3){
  console.log("찬스타임으로 인한 강화 성공 ^^");
  chanceTimeCheckNum = 0;
  star += 1;
  nextStar += 1;
  a += 1;
  if(a == 11){
  jeongboPrint_12to25();
}
else{
  jeongboPrint_12to25();
}
}
else{
   if(star < 10){
 if(Math.random() < rsp){
   console.log(successPerArr[star]);
   console.log('강화 성공 ^^');
   star += 1;
   nextStar += 1;
   a += 1;
   jeongboPrint_0to11();
 }
 else {
   console.log(failPerArr[star]);
   console.log('강화 실패 ^^');
   jeongboPrint_0to11();
 }
   }
     else if (star == 10 ) {          //10성 15성 20성은 실패시 하락하더라도 고정역할이기때문에 로직이 다르다.
     if(Math.random() < rsp){
       console.log(successPerArr[star]);
       console.log('강화 성공 ^^');
       chanceTimeCheckNum = 0;
       star += 1;
       nextStar += 1;
       a += 1;
       jeongboPrint_0to11();
     }
     else{
       console.log(failPerArr[star]);
     console.log('강화 실패 ^^');
     chanceTimeCheckNum = 0;
     jeongboPrint_0to11();
   }
   }
   else if (star == 11) {              //11성만 빼주는 이유는 12성부터는 파괴확률이 적용되기 때문이다.
     if(Math.random() < rsp){
       console.log(successPerArr[star]);
       console.log('강화 성공 ^^');
       chanceTimeCheckNum = 0;
       star += 1;
       nextStar += 1;
       a += 1;
       jeongboPrint_12to25();
     }
     else {
       console.log(failPerArr[star]);
       if(chanceTimeCheckNum == 1){
         console.log("강화 실패 하지만 찬스 타임!!");
         chanceTimeCheckNum = 3;
         star -= 1;
         nextStar -= 1;
         a -= 1;
         chancetime_Print()
       }
       else{
       console.log('강화 실패 ^^');
       chanceTimeCheckNum += 1;
       star -= 1;
       nextStar -= 1;
       a -= 1;
       jeongboPrint_0to11();
     }
     }
   }
   else if (star == 12) {               //12성을 빼주는 이유는 12성실패시 11>12성이 되는데 이때는 print0to11 출력함수를 이용해야해서이다.
     if(Math.random() < rsp){
       console.log(successPerArr[star]);
       console.log('강화 성공 ^^');
       chanceTimeCheckNum = 0;
       star += 1;
       nextStar += 1;
       a += 1;
       jeongboPrint_12to25();
     }
     else if(Math.random() < dsp){
       jangbiBOOMAlert();
     }
     else {
       console.log(failPerArr[star]);
       if(chanceTimeCheckNum == 1){
         console.log("강화 실패 하지만 찬스 타임!!");
         chanceTimeCheckNum = 3;
         star -= 1;
         nextStar -= 1;
         a -= 1;
         chancetime_Print()
       }
       else{
       console.log('강화 실패 ^^');
       chanceTimeCheckNum += 1;
       star -= 1;
       nextStar -= 1;
       a -= 1;
       jeongboPrint_0to11();
     }
     }
   }
   else if ((star > 12 && star < 15)||(star < 20 && star > 15)||(star < 24 && star > 20)) {   // 스타포스는 12성 이상부터 파괴확률이 등장하므로 if문을 나누어준다.
     if(Math.random() < rsp){
       console.log(successPerArr[star]);
       console.log('강화 성공 ^^');
       chanceTimeCheckNum = 0;
       star += 1;
       nextStar += 1;
       a += 1;
       jeongboPrint_12to25();
     }
     else if(Math.random() < dsp){
       jangbiBOOMAlert();
     }
     else {
       console.log(failPerArr[star]);
       if(chanceTimeCheckNum == 1){
         console.log("강화 실패 하지만 찬스 타임!!");
         chanceTimeCheckNum = 3;
         star -= 1;
         nextStar -= 1;
         a -= 1;
         chancetime_Print()
       }
       else{
       console.log('강화 실패 ^^');
       chanceTimeCheckNum += 1;
       star -= 1;
       nextStar -= 1;
       a -= 1;
       jeongboPrint_12to25();
     }
     }
   }

  else if (star == 15 || star == 20) {  //스타포스에서 10성이상시 실패시 하락하는데 10성 15성 20성이 완충제역할을 한다.
    if(Math.random() < rsp){
      console.log(successPerArr[star]);
      console.log('강화 성공 ^^');
      chanceTimeCheckNum = 0;
      star += 1;
      nextStar += 1;
      a += 1;
      jeongboPrint_12to25();
    }
    else if(Math.random() < dsp){
      jangbiBOOMAlert();
    }
    else{
      console.log(failPerArr[star]);
    console.log('강화 실패 ^^');
    chanceTimeCheckNum = 0;
    jeongboPrint_12to25();
  }
  }


  else if (star == 24) {                         //24>25성 성공시 함수에서 빠져나오며 축하문구가 나타나야하기때문에 따로 빼준다.
    if(Math.random() < rsp){
      console.log(successPerArr[star]);
      console.log('강화 성공 ^^');
      chanceTimeCheckNum = 0;
      a += 1;
      document.getElementById("jeongbo").innerHTML = '25강 축하드립니다 ^^';
    }
    else if(Math.random() < dsp){
      jangbiBOOMAlert();
    }
    else {
      console.log(failPercentage);
      if(chanceTimeCheckNum == 1){
        console.log("강화 실패 하지만 찬스 타임!!");
        chanceTimeCheckNum = 3;
        star -= 1;
        nextStar -= 1;
        a -= 1;
        chancetime_Print()
      }
      else{
      console.log('강화 실패 ^^');
      chanceTimeCheckNum += 1;
      star -= 1;
      nextStar -= 1;
      a -= 1;
      jeongboPrint_12to25();
    }
    }
  }

}
jangbiExplain(); // 스타캐치 실행시 함수 발생하지 않기때문에 여기서 한번더 실행
 }
