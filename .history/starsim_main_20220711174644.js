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

const request = indexedDB.open('notes', 2);
// IndexedDB.open(Name, Version)

request.onupgradeneeded = (e) => {
  alert('upgraed is called');
};

request.onsuccess = (e) => {
  alert('success is called');
};

request.error = (e) => {
  alert('error is called');
};
