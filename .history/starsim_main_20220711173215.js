// 선택창
const jobSelect = document.querySelector('#job');
const itemTypeSelect = document.querySelector('#itemType');
const bodyPartSelect = document.querySelector('#bodyPart');
const nameSearchBlock = document.querySelector('.nameSearch__searchBlock');
const levelFrontLimitBlock = document.querySelector('.levelLimit__frontLevel');
const levelBackLimitBlock = document.querySelector('.levelLimit__backLevel');
const searchClearBtn = document.querySelector('.searchClearBtn');
const searchStartBtn = document.querySelector('.searchStartBtn');

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

if (!window.indexedDB) {
  console.log(
    "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
  );
}
