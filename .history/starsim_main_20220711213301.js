// 선택창
const jobSelect = document.querySelector('#job');
const itemTypeSelect = document.querySelector('#itemType');
const bodyPartSelect = document.querySelector('#bodyPart');
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

optionBtnBlock.addEventListener('click', (e) => {
  if (e.target === clothBtn) {
    if (!clothBtn.classList.contains('selected')) {
      clothBtn.classList.add('selected');
      weaponBtn.classList.remove('selected');
      showClothSelect();
    }
  } else if (e.target === weaponBtn) {
    if (!weaponBtn.classList.contains('selected')) {
      weaponBtn.classList.add('selected');
      clothBtn.classList.remove('selected');
      showWeaponSelect();
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
