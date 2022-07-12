// 선택창
let jobSelect = document.querySelector('#job');
let itemTypeSelect = document.querySelector('#itemType');
let bodyPartSelect = document.querySelector('#bodyPart');
let weaponHandSelect;
let weaponTypeSelect;
const nameSearchBlock = document.querySelector('.nameSearch__searchBlock');
const levelFrontLimitBlock = document.querySelector('.levelLimit__frontLevel');
const levelBackLimitBlock = document.querySelector('.levelLimit__backLevel');
const searchClearBtn = document.querySelector('.searchClearBtn');
const searchStartBtn = document.querySelector('.searchStartBtn');
const clothBtn = document.querySelector('.clothBtn');
const weaponBtn = document.querySelector('.weaponBtn');
const optionBtnBlock = document.querySelector('.optionSelct__buttons');
const selectsBlock = document.querySelector('.itemSlectWindow__selects');

function showClothSelect() {
  selectsBlock.innerHTML = `
    <div class="jobOption">
        <select name="job" id="job">
                <option >전체</option>
                <option>전사</option>
                <option>마법사</option>
                <option>궁수</option>
                <option>도적</option>
                <option>해적</option>
        </select>
    </div>
    <div class="itemOptions">
        <div class="itemType">
            <select name="itemType" id="itemType">
                <option selected>전체</option>
                <option>방어구</option>
                <option>장신구</option>
                <option>기타</option>
            </select>
        </div>
        <div class="bodyPartOption">
            <select name="bodyPart" id="bodyPart">
                <option selected>전체</option>
            </select>
        </div>
    </div>
    `;
}
function showWeaponSelect() {
  selectsBlock.innerHTML = `
    <div class="weaponHand">
    <select name="weaponHand" id="weaponHand">
      <option>전체</option>
      <option>한손무기</option>
      <option>두손무기</option>
    </select>
  </div>
  <div class="weaponType">
    <select name="weaponType" id="weaponType">
      <option>전체</option>
    </select>
  </div>
    `;
}
function rerollClothSelectElem() {
  jobSelect = document.querySelector('#job');
  itemTypeSelect = document.querySelector('#itemType');
  bodyPartSelect = document.querySelector('#bodyPart');
}

function rerollWeaponSelectElem() {
  weaponHandSelect = document.querySelector('#weaponHand');
  weaponTypeSelect = document.querySelector('#weaponType');
}

optionBtnBlock.addEventListener('click', (e) => {
  if (e.target === clothBtn) {
    if (!clothBtn.classList.contains('selected')) {
      clothBtn.classList.add('selected');
      weaponBtn.classList.remove('selected');
      showClothSelect();
      rerollClothSelectElem();
    }
  } else if (e.target === weaponBtn) {
    if (!weaponBtn.classList.contains('selected')) {
      weaponBtn.classList.add('selected');
      clothBtn.classList.remove('selected');
      showWeaponSelect();
      rerollWeaponSelectElem();
    }
  }
});

// class Item {
//   constructor(job, option, bodyPart, level, name) {
//     this.job = job;
//     this.option = option;
//     this.bodyPart = bodyPart;
//     this.level = level;
//     this.url = this.job + '_' + this.bodyPart + '_' + this.level + '.jpg';
//     this.name = name;
//   }
// }
// //아이템 데이터
// const warriotItemDatas = [
//   new Item('전사', '방어구', '하의', 100),
//   new Item('전사', '방어구', '하의', 110),
//   new Item('전사', '방어구', '하의', 120),
//   new Item('전사', '방어구', '하의', 130),
//   new Item('전사', '방어구', '하의', 140),
//   new Item('전사', '방어구', '하의', 150),
//   new Item('전사', '방어구', '하의', 160),
// ];
// function makeNewItems(first,last,interval){

// }

function clearOptions() {
  if (clothBtn.classList.contains('selected')) {
    showClothSelect();
  } else {
    showWeaponSelect();
  }
}

searchClearBtn.addEventListener('click', () => {
  clearOptions();
});

function addClothOptions() {
  bodyPartSelect.innerHTML = `
    <option>전체</option>
    <option>모자</option>
    <option>상의</option>
    <option>한벌옷</option>
    <option>하의</option>
    <option>신발</option>
    <option>장갑</option>
    <option>방패</option>
    <option>망토</option>
    `;
}

function addAccessoryOptions() {
  bodyPartSelect.innerHTML = `
      <option>전체</option>
      <option>얼굴장식</option>
      <option>눈장식</option>
      <option>귀고리</option>
      <option>반지</option>
      <option>펜던트</option>
      <option>벨트</option>
      <option>어깨장식</option>
      <option>망토</option>
      `;
}

function addEtcOptions() {
  bodyPartSelect.innerHTML = `
        <option>전체</option>
        <option>기계심장</option>
        `;
}

function addOneHandOptions() {
  bodyPartSelect.innerHTML = `
          <option>전체</option>
          <option>샤이닝로드</option>
          <option>소울슈터</option>
          <option>데스페라도</option>
          <option>에너지소드</option>
          <option>한손검</option>
          <option>한손도끼</option>
          <option>한손둔기</option>
          <option>단검</option>
          <option>케인</option>
          <option>완드</option>
          <option>스태프</option>
          <option>ESP리미터</option>
          <option>체인</option>
          <option>매직건틀렛</option>
          <option>부채</option>
          <option>튜너</option>
          <option>브레스슈터</option>
          `;
}
function addTwoHandOptions() {
  bodyPartSelect.innerHTML = `
          <option>전체</option>
          <option>기계심장</option>
          `;
}

selectsBlock.addEventListener('click', (e) => {
  if (e.target.idName === 'itemType') {
    if (e.target.value === '방어구') {
      if (!e.target.classList.contains('clothSelected')) {
        e.target.className = '';
        e.target.classList.add('clothSelected');
        addClothOptions();
      }
    } else if (e.target.value === '장신구') {
      if (!e.target.classList.contains('accessorySelected')) {
        e.target.className = '';
        e.target.classList.add('accessorySelected');
        addAccessoryOptions();
      }
    } else if (e.target.value === '기타') {
      if (!e.target.classList.contains('etcSelected')) {
        e.target.className = '';
        e.target.classList.add('etcSelected');
        addEtcOptions();
      }
    }
  } else if (e.target.idName === 'weaponHand') {
  }
}); //💩 추후 성능 수정
