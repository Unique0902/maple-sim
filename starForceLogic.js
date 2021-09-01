var a = 0;
var tryNumber = 0;
function starforce(star){
   var nextStar = star + 1;
   var failPercentage = 5 * nextStar;
   var successPercentage = 100 - failPercentage;
   var rsp = successPercentage / 100;
   tryNumber += 1;
   console.log('실행 횟수: ' + tryNumber);
   if(star < 2){
 if(Math.random() < rsp){
   console.log(successPercentage);
   console.log('강화 성공 ^^');
   star += 1;
   nextStar += 1;
   failPercentage += 5;
   successPercentage -= 5;
   a += 1;
   document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
   return a;
 }
 else {
   console.log(failPercentage);
   console.log('강화 실패 ^^');
   document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
   return a;
 }
   }
   else if (star == 2) {
     var nextStar = star + 1;
     var failPercentage = 5 * nextStar;
     var successPercentage = 100 - failPercentage;
     var rsp = successPercentage / 100;
     if(Math.random() < rsp){
       console.log(successPercentage);
       console.log('강화 성공 ^^');
       star += 1;
       nextStar += 1;
       a += 1;
       document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
       return a;
     }
     else {
       console.log(failPercentage);
       console.log('강화 실패 ^^');
       document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
       return a;
     }
   }
   else if (star > 2 && star < 10) {
     var nextStar = star + 1;
     var failPercentage = 5 * star;
     var successPercentage = 100 - failPercentage;
     var rsp = successPercentage / 100;
     if(Math.random() < rsp){
       console.log(successPercentage);
       console.log('강화 성공 ^^');
       star += 1;
       nextStar += 1;
       failPercentage += 5;
       successPercentage -= 5;
       a += 1;
       document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
       return a;
     }
     else {
       console.log(failPercentage);
       console.log('강화 실패 ^^');
       document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
       return a;
     }
   }

   else if (star == 10 ) {
     var nextStar = star + 1;
     var failPercentage = 5 * star;
     var successPercentage = 100 - failPercentage;
     var rsp = successPercentage / 100;
     if(Math.random() < rsp){
       console.log(successPercentage);
       console.log('강화 성공 ^^');
       star += 1;
       nextStar += 1;
       failPercentage += 5;
       successPercentage -= 5;
       a += 1;
       document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
       return a;
     }
     else {
       console.log(failPercentage);
       console.log('강화 실패 ^^');
       document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
       return a;
     }
   }
   else if (star < 14 && star > 10) {
     var nextStar = star + 1;
     var failPercentage = 5 * star;
     var successPercentage = 100 - failPercentage;
     var rsp = successPercentage / 100;
     if(Math.random() < rsp){
       console.log(successPercentage);
       console.log('강화 성공 ^^');
       star += 1;
       nextStar += 1;
       failPercentage += 5;
       successPercentage -= 5;
       a += 1;
       document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패확률:' + failPercentage + '%';
       return a;
     }
     else {
       console.log(failPercentage);
       console.log('강화 실패 ^^');
       star -= 1;
       nextStar -= 1;
       failPercentage -= 5;
       successPercentage += 5;
       a -= 1;
       document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
       return a;
     }
   }
   else if (star == 14) {
     var nextStar = star + 1;
     var failPercentage = 5 * star;
     var successPercentage = 100 - failPercentage;
     var rsp = successPercentage / 100;
     if(Math.random() < rsp){
       console.log(successPercentage);
       console.log('강화 성공 ^^');
       star += 1;
       nextStar += 1;
       a += 1;
       document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패확률:' + failPercentage + '%';
       return a;
     }
     else {
       console.log(failPercentage);
       console.log('강화 실패 ^^');
       star -= 1;
       nextStar -= 1;
       failPercentage -= 5;
       successPercentage += 5;
       a -= 1;
       document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
       return a;
     }
   }
  else if (star == 15) {
    var nextStar = star + 1;
    var failPercentage = 70;
    var successPercentage = 30;
    var rsp = successPercentage / 100;
    if(Math.random() < rsp){
      console.log(successPercentage);
      console.log('강화 성공 ^^');
      star += 1;
      nextStar += 1;
      a += 1;
      document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
      return a;
    }
    else {
      console.log(failPercentage);
      console.log('강화 실패 ^^');
      document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
      return a;
    }
  }
  else if (star < 20 && star > 15) {
    var nextStar = star + 1;
    var failPercentage = 70;
    var successPercentage = 30;
    var rsp = successPercentage / 100;
    if(Math.random() < rsp){
      console.log(successPercentage);
      console.log('강화 성공 ^^');
      star += 1;
      nextStar += 1;
      a += 1;
      document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패확률:' + failPercentage + '%';
      return a;
    }
    else {
      console.log(failPercentage);
      console.log('강화 실패 ^^');
      star -= 1;
      nextStar -= 1;
      a -= 1;
      document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
      return a;
    }
  }
  else if (star == 20) {
    var nextStar = star + 1;
    var failPercentage = 70;
    var successPercentage = 30;
    var rsp = successPercentage / 100;
    if(Math.random() < rsp){
      console.log(successPercentage);
      console.log('강화 성공 ^^');
      star += 1;
      nextStar += 1;
      a += 1;
      document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
      return a;
    }
    else {
      console.log(failPercentage);
      console.log('강화 실패 ^^');
      document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
      return a;
    }
  }
  else if (star == 21) {
    var nextStar = star + 1;
    var failPercentage = 70;
    var successPercentage = 30;
    var rsp = successPercentage / 100;
    if(Math.random() < rsp){
      console.log(successPercentage);
      console.log('강화 성공 ^^');
      star += 1;
      nextStar += 1;
      failPercentage = 97;
      successPercentage = 3;
      a += 1;
      document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
      return a;
    }
    else {
      console.log(failPercentage);
      console.log('강화 실패 ^^');
      star -= 1;
      nextStar -= 1;
      a -= 1;
      document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
      return a;
    }
  }
  else if (star == 22) {
    var nextStar = star + 1;
    var failPercentage = 97;
    var successPercentage = 3;
    var rsp = successPercentage / 100;
    if(Math.random() < rsp){
      console.log(successPercentage);
      console.log('강화 성공 ^^');
      star += 1;
      nextStar += 1;
      failPercentage = 98;
      successPercentage = 2;
      a += 1;
      document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
      return a;
    }
    else {
      console.log(failPercentage);
      console.log('강화 실패 ^^');
      star -= 1;
      nextStar -= 1;
      a -= 1;
      document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
      return a;
    }
  }
  else if (star == 23) {
    var nextStar = star + 1;
    var failPercentage = 98;
    var successPercentage = 2;
    var rsp = successPercentage / 100;
    if(Math.random() < rsp){
      console.log(successPercentage);
      console.log('강화 성공 ^^');
      star += 1;
      nextStar += 1;
      failPercentage = 99;
      successPercentage = 1;
      a += 1;
      document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
      return a;
    }
    else {
      console.log(failPercentage);
      console.log('강화 실패 ^^');
      star -= 1;
      nextStar -= 1;
      a -= 1;
      document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
      return a;
    }
  }
  else if (star == 24) {
    var nextStar = star + 1;
    var failPercentage = 99;
    var successPercentage = 1;
    var rsp = successPercentage / 100;
    if(Math.random() < rsp){
      console.log(successPercentage);
      console.log('강화 성공 ^^');
      a += 1;
      document.getElementById("jeongbo").innerHTML = '25강 축하드립니다 ^^';
      return a;
    }
    else {
      console.log(failPercentage);
      console.log('강화 실패 ^^');
      star -= 1;
      nextStar -= 1;
      a -= 1;
      document.getElementById("jeongbo").innerHTML = star + '성' + ' > ' + nextStar + '성' + '<br>' + '성공확률: ' + successPercentage + '%' + '<br>' + '실패(유지)확률:' + failPercentage + '%';
      return a;
    }
  }

 }
