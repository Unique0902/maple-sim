// 선택창
let jobSelect = document.querySelector('#job');
let itemTypeSelect = document.querySelector('#itemType');
let bodyPartSelect = document.querySelector('#bodyPart');
let weaponHandSelect;
let weaponTypeSelect;

let searchedItemsArr;

const searchedPageCancelBtn = document.querySelector(
  '.searchedPageWindow__cancelBtn'
);
const searchedPageWindow = document.querySelector('.searchedPageWindow');
const nameSearchBlock = document.querySelector('.nameSearch__searchBlock');
const levelFrontLimitBlock = document.querySelector('.levelLimit__frontLevel');
const levelBackLimitBlock = document.querySelector('.levelLimit__backLevel');
const searchClearBtn = document.querySelector('.searchClearBtn');
const searchStartBtn = document.querySelector('.searchStartBtn');
const clothBtn = document.querySelector('.clothBtn');
const weaponBtn = document.querySelector('.weaponBtn');
const optionBtnBlock = document.querySelector('.optionSelct__buttons');
const selectsBlock = document.querySelector('.itemSlectWindow__selects');

const Job = Object.freeze({
  warrior: 'warrior',
  wizard: 'wizard',
  archer: 'archer',
  thief: 'thief',
  pirate: 'pirate',
});

const ItemType = Object.freeze({
  armor: 'armor',
  accessory: 'accessory',
  etc: 'etc',
});

const BodyPart = Object.freeze({
  hat: 'hat',
  shirts: 'shirts',
  pants: 'pants',
  onePiece: 'onePiece',
  shoes: 'shoes',
  gloves: 'gloves',
  shield: 'shield',
  cloak: 'cloak',
  faceMark: 'faceMark',
  eyeMark: 'eyeMark',
  earRing: 'earRing',
  ring: 'ring',
  pendant: 'pendant',
  belt: 'belt',
  shoulderMark: 'shoulderMark',
});

const HandNum = Object.freeze({
  oneHand: 'oneHand',
  twoHand: 'twoHand',
});

const WeaponType = Object.freeze({
  shiningRoad: 'shiningRoad',
  soulShooter: 'soulShooter',
  desperado: 'desperado',
  energySword: 'energySword',
  oneHandSword: 'oneHandSword',
  oneHandAx: 'oneHandAx',
  oneHandBlunt: 'oneHandBlunt',
  dagger: 'dagger',
  kane: 'kane',
  wand: 'wand',
  staff: 'staff',
  espLimiter: 'espLimiter',
  chain: 'chain',
  magicGuntlet: 'magicGuntlet',
  fan: 'fan',
  tuner: 'tuner',
  breatheShooter: 'breatheShooter',
  twoHandSword: 'twoHandSword',
  twoHandAx: 'twoHandAx',
  twoHandBlunt: 'twoHandBlunt',
  spear: 'spear',
  poleArm: 'poleArm',
  bow: 'bow',
  crossbow: 'crossbow',
  sub: 'sub',
  knuckle: 'knuckle',
  gun: 'gun',
  dualBowGun: 'dualBowGun',
  handCannon: 'handCannon',
  guntletRevolver: 'guntletRevolver',
  ancientBow: 'ancientBow',
});

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

class ClothItem {
  constructor(name, job, itemType, bodyPart, level) {
    this.name = name;
    this.job = job;
    this.itemType = itemType;
    this.bodyPart = bodyPart;
    this.level = level;
    this.url = this.job + '_' + this.bodyPart + '_' + this.level + '.jpg';
  }
}

class WeaponItem {
  constructor(name, handNum, weaponType, level) {
    this.name = name;
    this.handNum = handNum;
    this.weaponType = weaponType;
    this.level = level;
    this.url = this.weaponType + '_' + this.level + '.jpg';
  }
}
//아이템 데이터
const clothItemArr = [
  new ClothItem(
    '하이네스 워리어헬름',
    Job.warrior,
    ItemType.armor,
    BodyPart.hat,
    150
  ),
  new ClothItem(
    '이글아이 워리어아머',
    Job.warrior,
    ItemType.armor,
    BodyPart.shirts,
    150
  ),
  new ClothItem(
    '트릭스터 워리어팬츠',
    Job.warrior,
    ItemType.armor,
    BodyPart.pants,
    150
  ),
];

const weaponItemArr = [
  new WeaponItem(
    '파프니르 미스틸테인',
    HandNum.oneHand,
    WeaponType.oneHandSword,
    150
  ),
  new WeaponItem(
    '파프니르 트윈클리버',
    HandNum.oneHand,
    WeaponType.oneHandAx,
    150
  ),
  new WeaponItem(
    '파프니르 골디언해머',
    HandNum.oneHand,
    WeaponType.oneHandBlunt,
    150
  ),
];
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
      `;
}

function addEtcOptions() {
  bodyPartSelect.innerHTML = `
        <option>전체</option>
        <option>기계심장</option>
        `;
}
function addBodyPartDefaultOptions() {
  bodyPartSelect.innerHTML = `
          <option>전체</option>
          `;
}

function addOneHandOptions() {
  weaponTypeSelect.innerHTML = `
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
          <option>매직 건틀렛</option>
          <option>부채</option>
          <option>튜너</option>
          <option>브레스 슈터</option>
          `;
}
function addTwoHandOptions() {
  weaponTypeSelect.innerHTML = `
          <option>전체</option>
          <option>두손검</option>
          <option>두손도끼</option>
          <option>두손둔기</option>
          <option>창</option>
          <option>폴암</option>
          <option>활</option>
          <option>석궁</option>
          <option>아대</option>
          <option>너클</option>
          <option>건</option>
          <option>듀얼보우건</option>
          <option>핸드캐논</option>
          <option>건틀렛 리볼버</option>
          <option>에인션트 보우</option>
          `;
}

function addWeaponDefaultOptions() {
  weaponTypeSelect.innerHTML = `
            <option>전체</option>
            `;
}

selectsBlock.addEventListener('click', (e) => {
  if (e.target.id === 'itemType') {
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
    } else if (e.target.value === '전체') {
      if (e.target.className != '') {
        e.target.className = '';
        addBodyPartDefaultOptions();
      }
    }
  } else if (e.target.id === 'weaponHand') {
    if (e.target.value === '한손무기') {
      if (!e.target.classList.contains('oneHandSelected')) {
        e.target.className = '';
        e.target.classList.add('oneHandSelected');
        addOneHandOptions();
      }
    } else if (e.target.value === '두손무기') {
      if (!e.target.classList.contains('twoHandSelected')) {
        e.target.className = '';
        e.target.classList.add('twoHandSelected');
        addTwoHandOptions();
      }
    } else if (e.target.value === '전체') {
      if (e.target.className != '') {
        e.target.className = '';
        addWeaponDefaultOptions();
      }
    }
  }
}); //💩 추후 성능 수정

function showSearchedPage() {
  searchedPageWindow.classList.remove('none');
}
function hideSearchedPage() {
  searchedPageWindow.classList.add('none');
}

// 검색하기
function translateJob(value) {
  switch (value) {
    case '전체':
      return null;
    case '전사':
      return Job.warrior;
    case '마법사':
      return Job.wizard;
    case '궁수':
      return Job.archer;
    case '도적':
      return Job.thief;
    case '해적':
      return Job.pirate;
    default:
      throw new Error('not valid job');
  }
}
function translateBodyPart(value) {
  switch (value) {
    case '전체':
      return null;
    case '모자':
      return BodyPart.hat;
    case '상의':
      return BodyPart.shirts;
    case '한벌옷':
      return BodyPart.onePiece;
    case '하의':
      return BodyPart.pants;
    case '신발':
      return BodyPart.shoes;
    case '장갑':
      return BodyPart.gloves;
    case '방패':
      return BodyPart.shield;
    case '망토':
      return BodyPart.cloak;
    case '얼굴장식':
      return BodyPart.faceMark;
    case '눈장식':
      return BodyPart.eyeMark;
    case '귀고리':
      return BodyPart.earRing;
    case '반지':
      return BodyPart.ring;
    case '펜던트':
      return BodyPart.pendant;
    case '벨트':
      return BodyPart.belt;
    case '어깨장식':
      return BodyPart.shoulderMark;
    default:
      throw new Error('not valid bodyPart');
  }
}

function translateItemType(value) {
  switch (value) {
    case '전체':
      return null;
    case '방어구':
      return ItemType.armor;
    case '장신구':
      return ItemType.accessory;
    case '기타':
      return ItemType.etc;
    default:
      throw new Error('not valid itemType');
  }
}
function translateWeaponHand(value) {
  switch (value) {
    case '한손무기':
      return HandNum.oneHand;
    case '두손무기':
      return HandNum.twoHand;
    default:
      throw new Error('not valid weaponHand');
  }
}
function translateWeaponType(value) {
  switch (value) {
    case '샤이닝로드':
      return WeaponType.shiningRoad;
    case '소울슈터':
      return WeaponType.soulShooter;
    case '데스페라도':
      return WeaponType.desperado;
    case '에너지소드':
      return WeaponType.energySword;
    case '한손검':
      return WeaponType.oneHandSword;
    case '한손도끼':
      return WeaponType.oneHandAx;
    case '한손둔기':
      return WeaponType.oneHandBlunt;
    case '단검':
      return WeaponType.dagger;
    case '케인':
      return WeaponType.kane;
    case '완드':
      return WeaponType.wand;
    case '스태프':
      return WeaponType.staff;
    case 'ESP리미터':
      return WeaponType.espLimiter;
    case '체인':
      return WeaponType.chain;
    case '매직 건틀렛':
      return WeaponType.magicGuntlet;
    case '부채':
      return WeaponType.fan;
    case '튜너':
      return WeaponType.tuner;
    case '브레스 슈터':
      return WeaponType.breatheShooter;
    case '두손검':
      return WeaponType.twoHandSword;
    case '두손도끼':
      return WeaponType.twoHandAx;
    case '두손둔기':
      return WeaponType.twoHandBlunt;
    case '창':
      return WeaponType.spear;
    case '폴암':
      return WeaponType.poleArm;
    case '활':
      return WeaponType.bow;
    case '석궁':
      return WeaponType.crossbow;
    case '아대':
      return WeaponType.sub;
    case '너클':
      return WeaponType.knuckle;
    case '건':
      return WeaponType.gun;
    case '듀얼보우건':
      return WeaponType.dualBowGun;
    case '핸드캐논':
      return WeaponType.handCannon;
    case '건틀렛 리볼버':
      return WeaponType.guntletRevolver;
    case '에인션트 보우':
      return WeaponType.ancientBow;
  }
}

function filterClothItems() {
  const job = translateJob(jobSelect.value);
  const itemType = translateItemType(itemTypeSelect.value);
  const bodyPart = translateBodyPart(bodyPartSelect.value);
  return clothItemArr.filter(
    (x) =>
      (job === null ? true : x.job === job) &&
      (itemType === null ? true : x.itemType === itemType) &&
      (bodyPart === null ? true : x.bodyPart === bodyPart)
  );
}

function filterWeaponItems() {
  const weaponHand = translateWeaponHand(weaponHandSelect.value);
  const weaponType = translateWeaponType(weaponTypeSelect.value);
  return weaponItemArr.filter(
    (x) =>
      (weaponHand === null ? true : x.handNum === weaponHand) &&
      (weaponType === null ? true : x.weaponType === weaponType)
  );
}

function updateSearchedItemPage() {
  if (clothBtn.classList.contains('selected')) {
    const filteredClothItemArr = filterClothItems();
  } else {
    const filterWeaponItemArr = filterWeaponItems();
    console.log(filterWeaponItems);
  }
}

searchStartBtn.addEventListener('click', (e) => {
  updateSearchedItemPage();
  if (!e.target.classList.contains('clicked')) {
    e.target.classList.add('clicked');
    showSearchedPage();
  }
});

searchedPageCancelBtn.addEventListener('click', () => {
  hideSearchedPage();
  searchStartBtn.classList.remove('clicked');
});
