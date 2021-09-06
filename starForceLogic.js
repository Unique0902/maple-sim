var a = 0;
var tryNumber = 0;
var successPerArr = [95, 90, 85, 85, 80, 75, 70, 65, 60, 55, 50, 45 ,40 ,35 ,30, 30, 30, 30, 30, 30, 30, 30, 3, 2, 1];
var destroyPerArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.6, 1.3, 1.4, 2.1, 2.1, 2.1, 2.8, 2.8, 7.0, 7.0, 19.4, 29.4, 39.6];
var failPerArr = [5, 10, 15, 15, 20, 25, 30, 35, 40, 45, 50, 55, 59.4, 63.7, 68.6, 67.9, 67.9, 67.9, 67.2, 67.2, 63, 63, 77.6, 68.6, 59.4];
var chancetime_SuccessPercentage = 100;
var chancetime_FailPercentage = 0;
var nextStar
var chanceTimeCheckNum = 0;


function ifSuccessActivate(){
  console.log(successPerArr[star]);
  console.log('강화 성공 ^^');
  star += 1;
  nextStar += 1;
  failPercentage = 100 - successPerArr[star] - destroyPerArr[star];
  a += 1;
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
function starforce(star){
   nextStar = star + 1;
   var rsp = successPerArr[star] / 100;
   tryNumber += 1;
   console.log('실행 횟수: ' + tryNumber);


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
       if(chanceTimeCheckNum == 3){
         console.log("강화 성공 ^^");
         chanceTimeCheckNum = 0;
         star += 1;
         nextStar += 1;
         a += 1;
         jeongboPrint_0to11();
       }
       else {
     console.log('강화 실패 ^^');
     chanceTimeCheckNum = 0;
     jeongboPrint_0to11();
   }
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
         if(chanceTimeCheckNum == 3){
           console.log("강화 성공 ^^");
           chanceTimeCheckNum = 0;
           star += 1;
           nextStar += 1;
           a += 1;
           jeongboPrint_12to25();
         }
         else {
       console.log('강화 실패 ^^');
       chanceTimeCheckNum += 1;
       star -= 1;
       nextStar -= 1;
       a -= 1;
       jeongboPrint_0to11();
     }
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
         if(chanceTimeCheckNum == 3){
           console.log("강화 성공 ^^");
           chanceTimeCheckNum = 0;
           star += 1;
           nextStar += 1;
           a += 1;
           jeongboPrint_12to25();
         }
         else {
       console.log('강화 실패 ^^');
       chanceTimeCheckNum += 1;
       star -= 1;
       nextStar -= 1;
       a -= 1;
       jeongboPrint_0to11();
     }
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
         if(chanceTimeCheckNum == 3){
           console.log("강화 성공 ^^");
           chanceTimeCheckNum = 0;
           star += 1;
           nextStar += 1;
           a += 1;
           jeongboPrint_12to25();
         }
         else {
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
    else{
      console.log(failPerArr[star]);
      if(chanceTimeCheckNum == 3){
        console.log("강화 성공 ^^");
        chanceTimeCheckNum = 0;
        star += 1;
        nextStar += 1;
        a += 1;
        jeongboPrint_12to25();
      }
      else {
    console.log('강화 실패 ^^');
    chanceTimeCheckNum = 0;
    jeongboPrint_12to25();
  }
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
        if(chanceTimeCheckNum == 3){
          console.log('강화 성공 ^^');
          chanceTimeCheckNum = 0;
          a += 1;
          document.getElementById("jeongbo").innerHTML = '25강 축하드립니다 ^^';
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


 }
