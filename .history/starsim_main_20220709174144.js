function dragOver_(e) {
  e.preventDefault();
  console.log('dragOver');
}
var dropCount = 0;
function drop_(e) {
  e.preventDefault();
  console.log('drop');
  dropCount += 1;
  jangbiLevLim = document.getElementById('levellimit').value;
  if (dropCount == 1) {
  } else {
    // document.getElementById('sajin').setAttribute("type", "reset"); /* 이거 안해도되나?*/
    document
      .getElementById('sajin')
      .removeChild(document.getElementById('sajin').firstChild);
    document.getElementById('jeongbo').innerHTML =
      '0성 > 1성<br>성공확률: 95.0%<br>실패(유지)확률: 5.0%';
    a = 0;
  }
  // document.getElementById('sajin').removeChild(); 삭제 안해도되나?
  document
    .getElementById('sajin')
    .appendChild(document.getElementById('itemimgTaking'));
}
function dragenter_() {
  console.log('dragenter');
}
function dragend() {
  console.log('dragend');
}
function dropHide_Hide() {
  const div = document.getElementById('dropHide');
  div.style.display = 'none';
}
function dropHide_Make() {
  const div = document.getElementById('dropHide');
  div.style.display = 'block';
}
function grid_Make() {
  const div = document.getElementById('grid_');
  div.style.display = 'grid';
  hideOrMakeDestroyProtect(); // 스타포스 0성일때 파괴방지 체크박스를 숨기기 위함
}
function grid_Hide() {
  const div = document.getElementById('grid_');
  div.style.display = 'none';
}
function whereChange_b() {
  var clothes_a = ['전사', '궁수', '마법사', '도적', '해적'];
  var accessory_b = ['전체'];
  var weapon_c = [
    '히어로',
    '팔라딘',
    '다크나이트',
    '아크메이지(불,독)',
    '아크메이지(썬,콜)',
    '비숍',
    '보우마스터',
    '신궁',
    '패스파인더',
    '나이트로드',
    '섀도어',
    '듀얼블레이드',
    '바이퍼',
    '캡틴',
    '캐논슈터',
    '소울마스터',
    '플레임위자드',
    '윈드브레이커',
    '나이트워커',
    '호크아이',
    '미하일',
    '블래스터',
    '배틀메이지',
    '와일드헌터',
    '메카닉',
    '제논',
    '데몬슬레이어',
    '데몬어벤져',
    '메르세데스',
    '아란',
    '팬텀',
    '루미너스',
    '에반',
    '은월',
    '카데나',
    '카이저',
    '엔젤릭버스터',
    '카인',
    '아크',
    '아델',
    '일리움',
    '호영',
    '라라',
    '제로',
    '키네시스',
  ];
  var target = document.getElementById('job');
  target.options.length = 1;
  if (document.getElementById('type').value == '방어구') var d = clothes_a;
  else if (document.getElementById('type').value == '장신구')
    var d = accessory_b;
  else if (document.getElementById('type').value == '무기') var d = weapon_c;

  for (x in d) {
    var opt = document.createElement('option');
    opt.value = d[x];
    opt.innerHTML = d[x];
    target.appendChild(opt);
  }
}
function jobChange() {
  var levellimit_a = ['150', '160', '200'];
  var target = document.getElementById('levellimit');
  target.options.length = 1;
  if (
    document.getElementById('where').value === '상의' &&
    document.getElementById('job').value === '전사'
  ) {
    var d = levellimit_a;
  } else if (
    document.getElementById('where').value === '하의' &&
    document.getElementById('job').value === '전사'
  ) {
    var d = levellimit_a;
  }

  for (x in d) {
    var opt = document.createElement('option');
    opt.value = d[x];
    opt.innerHTML = d[x];
    target.appendChild(opt);
  }
}

function levLimClick() {
  a = 0;
  if (
    document.getElementById('type').value == '방어구' &&
    document.getElementById('where').value == '상의' &&
    document.getElementById('job').value === '전사' &&
    document.getElementById('levellimit').value === '150'
  ) {
    document.getElementById('img_out').innerHTML =
      "<img id= 'itemimg' src = 'picture/shirts.jpg' style='width: 100px; height: 80px;'>";
    document.getElementById('ninjaImg').innerHTML =
      "<img id= 'itemimgTaking' draggable='false' src = 'picture/shirts.jpg' style='width: 100px; height: 80px;'>";
    document.getElementById('samuraiImg').innerHTML =
      "<img id= 'itemimgTakingByStarCatch' draggable='false' src = 'picture/shirts.jpg' style='width: 300px; height: 300px;'>";
    document.getElementById('itemname').innerHTML = '이글아이 워리어아머';
  } else if (
    document.getElementById('type').value == '방어구' &&
    document.getElementById('where').value == '하의' &&
    document.getElementById('job').value === '전사' &&
    document.getElementById('levellimit').value === '150'
  ) {
    document.getElementById('img_out').innerHTML =
      "<img id= 'itemimg' src = 'picture/warrior_pants_150.jpg' style='width: 100px; height: 80px;'>";
    document.getElementById('ninjaImg').innerHTML =
      "<img id= 'itemimgTaking' draggable='false' src = 'picture/warrior_pants_150.jpg' style='width: 100px; height: 80px;'>";
    document.getElementById('samuraiImg').innerHTML =
      "<img id= 'itemimgTakingByStarCatch' draggable='false' src = 'picture/warrior_pants_150.jpg' style='width: 300px; height: 300px;'>";
    document.getElementById('itemname').innerHTML = '트릭스터 워리어팬츠';
  }
}

function jangbiExplain() {
  var jangbiText = '당신의 장비는' + a + '성 입니다.';
  document.getElementById('starResult').innerHTML = jangbiText;
}
