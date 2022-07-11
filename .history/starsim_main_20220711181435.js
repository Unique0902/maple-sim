// 선택창
const jobSelect = document.querySelector('#job');
const itemTypeSelect = document.querySelector('#itemType');
const bodyPartSelect = document.querySelector('#bodyPart');
const nameSearchBlock = document.querySelector('.nameSearch__searchBlock');
const levelFrontLimitBlock = document.querySelector('.levelLimit__frontLevel');
const levelBackLimitBlock = document.querySelector('.levelLimit__backLevel');
const searchClearBtn = document.querySelector('.searchClearBtn');
const searchStartBtn = document.querySelector('.searchStartBtn');

class Item {
  constructor(job, option, bodyPart, level) {
    this.job = job;
    this.option = option;
    this.bodyPart = bodyPart;
    this.level = level;
    this.url = this.job + '_' + this.bodyPart + '_' + this.level + '.jpg';
  }
}
//아이템 데이터
const itemDatas = [new Item('warrior', '방어구', 'pants', '150')];
console.log(itemDatas[0].url);
function clearOptions() {
  jobSelect.value = '전체';
  itemTypeSelect.value = '전체';
  bodyPartSelect.value = '전체';
  nameSearchBlock.value = '';
  levelFrontLimitBlock.value = '';
  levelBackLimitBlock.value = '';
}

searchClearBtn.addEventListener('click', () => {
  clearOptions();
});
