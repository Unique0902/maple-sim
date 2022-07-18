'use strict';

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

let isTableItemClicked = false;
let itemRowKey = 0;
let clothItemId = 0;
let weaponItemId = 0;
let userItemId = 0;
let tableItemNum = 0;
let itemreinforceKey = 0;
let nowPageNum = 1;
let totalPageNum = 1;
let filteredItemArr;
let isEndMouseMove;
let tableMouseMoveHandler;

const pageInformBlock = document.querySelector(
  '.searchedPageWindow__pageInformation'
);

const reinforceDescriptionBox = document.querySelector(
  '.mainItemBlock__reinforceDescription'
);
const starforceItemImg = document.querySelector('.mainItemBlock__itemImg');
const reinforceOuterBox = document.querySelector('.renforceBox__outerBox');
const followedItemBox = document.querySelector('.followedItemBox');
const starforceBox = document.querySelector('.starforceBox');
const itemWindowTable = document.querySelector('.items__table');
const itemTable = document.querySelector('.searchedPageWindow__itemTable');
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
const nextItemTableBtn = document.querySelector('.searchedPageWindow__nextBtn');
const previousItemTableBtn = document.querySelector(
  '.searchedPageWindow__previousBtn'
);

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

const WeaponConstant = Object.freeze({
  twenty: 1.2,
  thirty: 1.3,
  fifty: 1.5,
  seventy: 1.7,
  thirtyFour: 1.34,
  fourtyNine: 1.49,
  thirtyFive: 1.35,
  seventyFive: 1.75,
});

const AttackSpeed = Object.freeze({
  four: 4,
  five: 5,
  six: 6,
  eight: 8,
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
function reloadClothSelectElem() {
  jobSelect = document.querySelector('#job');
  itemTypeSelect = document.querySelector('#itemType');
  bodyPartSelect = document.querySelector('#bodyPart');
}

function reloadWeaponSelectElem() {
  weaponHandSelect = document.querySelector('#weaponHand');
  weaponTypeSelect = document.querySelector('#weaponType');
}

optionBtnBlock.addEventListener('click', (e) => {
  if (e.target === clothBtn) {
    if (!clothBtn.classList.contains('selected')) {
      clothBtn.classList.add('selected');
      weaponBtn.classList.remove('selected');
      showClothSelect();
      reloadClothSelectElem();
    }
  } else if (e.target === weaponBtn) {
    if (!weaponBtn.classList.contains('selected')) {
      weaponBtn.classList.add('selected');
      clothBtn.classList.remove('selected');
      showWeaponSelect();
      reloadWeaponSelectElem();
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
    this.url =
      'picture/' + this.job + '_' + this.bodyPart + '_' + this.level + '.jpg';
    this.alt = this.job + '_' + this.bodyPart + '_' + this.level;
    this.id = ++clothItemId;
  }
}

class WeaponItem {
  constructor(name, handNum, weaponType, level, attackPower) {
    this.name = name;
    this.handNum = handNum;
    this.weaponType = weaponType;
    this.level = level;
    this.url = 'picture/' + this.weaponType + '_' + this.level + '.jpg';
    this.alt = this.weaponType + '_' + this.level;
    this.id = ++weaponItemId;
    this.attackPower = attackPower;

    switch (this.weaponType) {
      case WeaponType.dagger:
      case WeaponType.chain:
      case WeaponType.fan:
      case WeaponType.tuner:
      case WeaponType.sub:
        this.attackSpeed = AttackSpeed.four;
        break;
      case WeaponType.oneHandAx:
      case WeaponType.oneHandBlunt:
      case WeaponType.oneHandSword:
      case WeaponType.kane:
      case WeaponType.energySword:
      case WeaponType.soulShooter:
      case WeaponType.breatheShooter:
      case WeaponType.poleArm:
      case WeaponType.guntletRevolver:
      case WeaponType.gun:
      case WeaponType.knuckle:
        this.attackSpeed = AttackSpeed.five;
        break;
      case WeaponType.wand:
      case WeaponType.shiningRoad:
      case WeaponType.desperado:
      case WeaponType.espLimiter:
      case WeaponType.magicGuntlet:
      case WeaponType.twoHandSword:
      case WeaponType.twoHandAx:
      case WeaponType.twoHandBlunt:
      case WeaponType.spear:
      case WeaponType.bow:
      case WeaponType.crossbow:
      case WeaponType.dualBowGun:
      case WeaponType.ancientBow:
        this.attackSpeed = AttackSpeed.six;
        break;
      case WeaponType.staff:
      case WeaponType.handCannon:
        this.attackSpeed = AttackSpeed.eight;
        break;
    }

    switch (this.weaponType) {
      case WeaponType.oneHandSword:
      case WeaponType.oneHandBlunt:
      case WeaponType.oneHandAx:
      case WeaponType.staff:
      case WeaponType.wand:
      case WeaponType.shiningRoad:
      case WeaponType.espLimiter:
      case WeaponType.magicGuntlet:
        this.weaponConstant = WeaponConstant.twenty;
        break;
      case WeaponType.dagger:
      case WeaponType.desperado:
      case WeaponType.chain:
      case WeaponType.fan:
      case WeaponType.tuner:
      case WeaponType.breatheShooter:
      case WeaponType.bow:
      case WeaponType.dualBowGun:
      case WeaponType.ancientBow:
        this.weaponConstant = WeaponConstant.thirty;
        break;
      case WeaponType.energySword:
      case WeaponType.gun:
      case WeaponType.handCannon:
        this.weaponConstant = WeaponConstant.fifty;
        break;
      case WeaponType.soulShooter:
      case WeaponType.guntletRevolver:
      case WeaponType.knuckle:
        this.weaponConstant = WeaponConstant.seventy;
        break;
      case WeaponType.crossbow:
        this.weaponConstant = WeaponConstant.thirtyFive;
        break;
      case WeaponType.sub:
        this.weaponConstant = WeaponConstant.seventyFive;
        break;
      case WeaponType.twoHandAx:
      case WeaponType.twoHandBlunt:
      case WeaponType.twoHandSword:
        this.weaponConstant = WeaponConstant.thirtyFive;
        break;
      case WeaponType.spear:
      case WeaponType.poleArm:
        this.weaponConstant = WeaponConstant.fourtyNine;
        break;
    }

    switch (this.weaponType) {
      case WeaponType.magicGuntlet:
      case WeaponType.wand:
      case WeaponType.staff:
      case WeaponType.shiningRoad:
      case WeaponType.espLimiter:
        this.majorPower = 'magic';
        break;
      default:
        this.majorPower = 'attack';
    }
  }
}

class UserItem {
  #starNum = 0;
  constructor(item) {
    this.itemInform = item;
    this.id = ++userItemId;
    this.totalAttackPower = item.attackPower;
    this.totalMaigcPower = item.magicPower;
    this.totalStr = item.str;
    this.totalInt = item.int;
    this.totalLuk = item.luk;
    this.totalDex = item.dex;
  }
  plusStar = () => {
    this.#starNum++;
  };
  minusStar = () => {
    this.#starNum--;
  };
  returnStarNum = () => {
    return this.#starNum;
  };
}

const userItemArr = [];

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
  new ClothItem(
    '하이네스 던위치햇',
    Job.wizard,
    ItemType.armor,
    BodyPart.hat,
    150
  ),
  new ClothItem(
    '이글아이 던위치로브',
    Job.wizard,
    ItemType.armor,
    BodyPart.shirts,
    150
  ),
  new ClothItem(
    '트릭스터 던위치팬츠',
    Job.wizard,
    ItemType.armor,
    BodyPart.pants,
    150
  ),
  new ClothItem(
    '하이네스 레인져베레',
    Job.archer,
    ItemType.armor,
    BodyPart.hat,
    150
  ),
  new ClothItem(
    '이글아이 레인져후드',
    Job.archer,
    ItemType.armor,
    BodyPart.shirts,
    150
  ),
  new ClothItem(
    '트릭스터 레인져팬츠',
    Job.archer,
    ItemType.armor,
    BodyPart.pants,
    150
  ),
  new ClothItem(
    '하이네스 어새신보닛',
    Job.thief,
    ItemType.armor,
    BodyPart.hat,
    150
  ),
  new ClothItem(
    '이글아이 어새신셔츠',
    Job.thief,
    ItemType.armor,
    BodyPart.shirts,
    150
  ),
  new ClothItem(
    '트릭스터 어새신팬츠',
    Job.thief,
    ItemType.armor,
    BodyPart.pants,
    150
  ),
  new ClothItem(
    '하이네스 원더러햇',
    Job.pirate,
    ItemType.armor,
    BodyPart.hat,
    150
  ),
  new ClothItem(
    '이글아이 원더러코트',
    Job.pirate,
    ItemType.armor,
    BodyPart.shirts,
    150
  ),
  new ClothItem(
    '트릭스터 원더러팬츠',
    Job.pirate,
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
    150,
    164
  ),
  new WeaponItem(
    '파프니르 트윈클리버',
    HandNum.oneHand,
    WeaponType.oneHandAx,
    150,
    164
  ),
  new WeaponItem(
    '파프니르 골디언해머',
    HandNum.oneHand,
    WeaponType.oneHandBlunt,
    150,
    164
  ),
];
// function makeNewItems(first,last,interval){

// }

function clearOptions() {
  if (clothBtn.classList.contains('selected')) {
    showClothSelect();
    reloadClothSelectElem();
  } else {
    showWeaponSelect();
    reloadWeaponSelectElem();
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
  if (searchedPageWindow.classList.contains('none')) {
    searchedPageWindow.classList.remove('none');
  }
}
function hideSearchedPage() {
  if (!searchedPageWindow.classList.contains('none')) {
    searchedPageWindow.classList.add('none');
  }
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
    case '전체':
      return null;
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
    case '전체':
      return null;
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
    default:
      throw new Error('not valid weaponType');
  }
}

function translateLevelLimit(value) {
  const intLevel = parseInt(value);
  if (!intLevel) {
    return null;
  } else {
    return intLevel;
  }
}

function translateItemName(value) {
  if (value == '') {
    return null;
  } else {
    return value;
  }
}

function filterClothItems() {
  const job = translateJob(jobSelect.value);
  const itemType = translateItemType(itemTypeSelect.value);
  const bodyPart = translateBodyPart(bodyPartSelect.value);
  const itemName = translateItemName(nameSearchBlock.value);
  const frontLevel = translateLevelLimit(levelFrontLimitBlock.value);
  const backLevel = translateLevelLimit(levelBackLimitBlock.value);
  filteredItemArr = clothItemArr.filter(
    (x) =>
      (job === null ? true : x.job === job) &&
      (itemType === null ? true : x.itemType === itemType) &&
      (bodyPart === null ? true : x.bodyPart === bodyPart) &&
      (itemName === null ? true : x.name.includes(itemName)) &&
      (frontLevel === null ? true : x.level >= frontLevel) &&
      (backLevel === null ? true : x.level <= backLevel)
  );
}

function filterWeaponItems() {
  const weaponHand = translateWeaponHand(weaponHandSelect.value);
  const weaponType = translateWeaponType(weaponTypeSelect.value);
  const itemName = translateItemName(nameSearchBlock.value);
  const frontLevel = translateLevelLimit(levelFrontLimitBlock.value);
  const backLevel = translateLevelLimit(levelBackLimitBlock.value);
  filteredItemArr = weaponItemArr.filter(
    (x) =>
      (weaponHand === null ? true : x.handNum === weaponHand) &&
      (weaponType === null ? true : x.weaponType === weaponType) &&
      (itemName === null ? true : x.name.includes(itemName)) &&
      (frontLevel === null ? true : x.level >= frontLevel) &&
      (backLevel === null ? true : x.level <= backLevel)
  );
}

function makeClothItemRow(item) {
  const itemRowId = 'itemRow' + ++itemRowKey;
  const itemRowElem = document.createElement('div');
  itemRowElem.setAttribute('class', 'itemRow');
  itemRowElem.setAttribute('id', itemRowId);
  itemRowElem.setAttribute('data-type', 'cloth');
  itemRowElem.setAttribute('data-id', item.id);
  itemRowElem.innerHTML = `
        <div class="itemRow__itemImgBlock">
            <img src="${item.url}" alt="${item.alt}" class="itemRow__itemImg">
          </div>
          <div class="itemRow__itemName">
            ${item.name}
          </div>
          <div class="itemRow__levelLimit">
            ${item.level}
          </div>
          <button class="itemRow__addItemBtn" id="${itemRowId}">+</button>
        `;
  return itemRowElem;
}

function makeWeaponItemRow(item) {
  const itemRowId = 'itemRow' + ++itemRowKey;
  const itemRowElem = document.createElement('div');
  itemRowElem.setAttribute('class', 'itemRow');
  itemRowElem.setAttribute('id', itemRowId);
  itemRowElem.setAttribute('data-type', 'weapon');
  itemRowElem.setAttribute('data-id', item.id);
  itemRowElem.innerHTML = `
          <div class="itemRow__itemImgBlock">
              <img src="${item.url}" alt="${item.alt}" class="itemRow__itemImg">
            </div>
            <div class="itemRow__itemName">
              ${item.name}
            </div>
            <div class="itemRow__levelLimit">
              ${item.level}
            </div>
            <button class="itemRow__addItemBtn" id="${itemRowId}">+</button>
          `;
  return itemRowElem;
}

function updateClothItemRowTable() {
  itemTable.innerHTML = '';
  for (
    let i = (nowPageNum - 1) * 10;
    i < filteredItemArr.length && i < nowPageNum * 10;
    i++
  ) {
    const itemRowElem = makeClothItemRow(filteredItemArr[i]);
    itemTable.append(itemRowElem);
  }
}
function updateWeaponItemRowTable() {
  itemTable.innerHTML = '';
  for (
    let i = (nowPageNum - 1) * 10;
    i < filteredItemArr.length && i < nowPageNum * 10;
    i++
  ) {
    const itemRowElem = makeWeaponItemRow(filteredItemArr[i]);
    itemTable.append(itemRowElem);
  }
}
function calculateTotalPageNum() {
  totalPageNum = parseInt((filteredItemArr.length - 1) / 10) + 1;
}

function updatePageInform() {
  pageInformBlock.innerHTML = `${nowPageNum} / ${totalPageNum}`;
}

function updateSearchedItemPage() {
  itemTable.innerHTML = '';
  nowPageNum = 1;
  if (clothBtn.classList.contains('selected')) {
    filterClothItems();
    calculateTotalPageNum();
    updatePageInform();
    updateClothItemRowTable();
  } else {
    filterWeaponItems();
    calculateTotalPageNum();
    updatePageInform();
    updateWeaponItemRowTable();
  }
}

searchStartBtn.addEventListener('click', (e) => {
  updateSearchedItemPage();

  showSearchedPage();
});

searchedPageCancelBtn.addEventListener('click', () => {
  hideSearchedPage();
});

nextItemTableBtn.addEventListener('click', () => {
  if (nowPageNum >= 1 && nowPageNum < totalPageNum) {
    nowPageNum++;
    updateItemRowTable();
    updatePageInform();
  }
});
previousItemTableBtn.addEventListener('click', () => {
  if (nowPageNum > 1 && nowPageNum <= totalPageNum) {
    nowPageNum--;
    updateItemRowTable();
    updatePageInform();
  }
});

function makeItemImgElem(userItem, type) {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('class', 'table__img');
  imgElem.setAttribute('data-type', type);
  imgElem.setAttribute('data-itemInformId', userItem.itemInform.id);
  imgElem.setAttribute('data-userItemId', userItem.id);
  imgElem.setAttribute('src', userItem.itemInform.url);
  imgElem.setAttribute('alt', userItem.itemInform.alt);
  return imgElem;
}

function findItemInArr(type, id) {
  let item;
  if (type === 'cloth') {
    item = clothItemArr.find((x) => x.id === parseInt(id));
  } else if (type === 'weapon') {
    item = weaponItemArr.find((x) => x.id === parseInt(id));
  }
  return item;
}

function makeNewUserItem(item) {
  const userItem = new UserItem(item);
  userItemArr.push(userItem);
  return userItem;
}

function addItemInTable(type, id) {
  const item = findItemInArr(type, id);
  const userItem = makeNewUserItem(item);
  const imgElem = makeItemImgElem(userItem, type);
  i: for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      if (document.querySelector(`#tr${i + 1} #td${j + 1} img`) === null) {
        document.querySelector(`#tr${i + 1} #td${j + 1}`).append(imgElem);
        break i;
      }
    }
  }
}

itemTable.addEventListener('click', (e) => {
  if (e.target.className === 'itemRow__addItemBtn') {
    const itemRowBlock = document.querySelector(
      `.searchedPageWindow__itemTable #${e.target.id}`
    );
    tableItemNum++;
    if (tableItemNum > 24) {
      return;
    }
    addItemInTable(itemRowBlock.dataset.type, itemRowBlock.dataset.id);
  }
});

function showStarforceBox() {
  if (starforceBox.classList.contains('none')) {
    starforceBox.classList.remove('none');
  }
}
function hideStarforceBox() {
  if (!starforceBox.classList.contains('none')) {
    starforceBox.classList.add('none');
  }
}

function showFollowedItemBox() {
  followedItemBox.style.display = 'block';
}
function hideFollowedItemBox() {
  followedItemBox.style.display = 'none';
}

function moveFollowedItemBox(xpos, ypos) {
  followedItemBox.style.left = `${xpos}px`;
  followedItemBox.style.top = `${ypos}px`;
}

function makeFollowedItemBox(e) {
  if (e.target.dataset.type === 'cloth') {
    const item = clothItemArr.find(
      (x) => x.id === parseInt(e.target.dataset.iteminformid)
    );
    followedItemBox.innerHTML = `
  <img src="picture/${item.job}_${item.bodyPart}_${item.level}.jpg">
  `;
  } else if (e.target.dataset.type === 'weapon') {
    const item = weaponItemArr.find(
      (x) => x.id === parseInt(e.target.dataset.iteminformid)
    );
    followedItemBox.innerHTML = `
  <img src="picture/${item.weaponType}_${item.level}.jpg">
  `;
  }
}

function changeTwoElem(el1, el2) {
  const parent = el2.parentElement;
  el1.parentElement.append(el2);
  parent.append(el1);
}

function removeClickedItem() {
  isEndMouseMove = true;
  clickedImg = null;
  hideFollowedItemBox();
}

let clickedImg = null;

itemWindowTable.addEventListener('click', (e) => {
  if (clickedImg === null) {
    if (e.target.className === 'table__img') {
      clickedImg = e.target;
      makeFollowedItemBox(e);
      showFollowedItemBox();
      moveFollowedItemBox(e.pageX, e.pageY);
      document.addEventListener(
        'mousemove',
        (tableMouseMoveHandler = (e2) => {
          moveFollowedItemBox(e2.pageX - 15, e2.pageY - 15);
          if (isEndMouseMove) {
            isEndMouseMove = false;
            document.removeEventListener(
              'mousemove',
              tableMouseMoveHandler,
              true
            );
          }
        }),
        true
      );
      hideSearchedPage();
    }
  } else {
    if (e.target.tagName === 'TD') {
      e.target.append(clickedImg);
    } else if (e.target.className === 'table__img') {
      if (e.target === clickedImg) {
      } else {
        changeTwoElem(e.target, clickedImg);
      }
    }
    removeClickedItem();
  }
});

function hideReinforceOuterBox() {
  if (!reinforceOuterBox.classList.contains('none')) {
    reinforceOuterBox.classList.add('none');
  }
}

function showReinforceOuterBox() {
  if (reinforceOuterBox.classList.contains('none')) {
    reinforceOuterBox.classList.remove('none');
  }
}

let elemInReinforce = null;

function calculateStarforceSuccess(userItem) {
  const starNum = userItem.returnStarNum();
  if (starNum >= 0 && starNum <= 2) {
    return 95 - 5 * starNum;
  } else if (starNum >= 3 && starNum <= 14) {
    return 100 - 5 * starNum;
  } else if (starNum >= 15 && starNum <= 21) {
    return 30;
  } else if (starNum === 22) {
    return 3;
  } else if (starNum === 23) {
    return 2;
  } else if (starNum === 24) {
    return 1;
  }
}
function calculateStarforceDestroy(userItem) {
  const starNum = userItem.returnStarNum();
  if (starNum >= 0 && starNum <= 11) {
    return 0;
  } else if (starNum == 12) {
    return 0.6;
  } else if (starNum == 13) {
    return 1.3;
  } else if (starNum === 14) {
    return 14;
  } else if (starNum >= 15 && starNum <= 17) {
    return 2.1;
  } else if (starNum >= 18 && starNum <= 19) {
    return 2.8;
  } else if (starNum >= 20 && starNum <= 21) {
    return 7.0;
  } else if (starNum == 22) {
    return 19.4;
  } else if (starNum == 23) {
    return 29.4;
  } else if (starNum == 24) {
    return 39.6;
  }
}

function calculateStarforceStat(userItem) {
  const starNum = userItem.returnStarNum();
  const level = userItem.itemInform.level;
  if (starNum <= 4) {
    return 2;
  } else if (starNum >= 5 && starNum <= 14) {
    return 3;
  } else if (level === 130 && starNum >= 15 && starNum <= 19) {
    return 7;
  } else if (level === 140 && starNum >= 15 && starNum <= 21) {
    return 9;
  } else if (level === 150 && starNum >= 15 && starNum <= 21) {
    return 11;
  } else if (level === 160 && starNum >= 15 && starNum <= 21) {
    return 13;
  } else if (level === 200 && starNum >= 15 && starNum <= 21) {
    return 15;
  } else {
    return null;
  }
}
function calculateStarforceAttackPower(userItem) {
  const starNum = userItem.returnStarNum();
  const level = userItem.itemInform.level;
  const type = elemInReinforce.dataset.type;
  if (type === 'cloth') {
    const bodypart = userItem.itemInform.bodyPart;
    if (bodypart === BodyPart.gloves) {
      if (
        starNum === 4 ||
        starNum === 6 ||
        starNum === 10 ||
        starNum === 12 ||
        starNum === 13 ||
        starNum === 14
      ) {
        return 1;
      }
    }

    if (level == 130 && starNum >= 15 && starNum <= 19) {
      return starNum - 8;
    } else if (level == 140 && starNum >= 15 && starNum <= 20) {
      return starNum - 7;
    } else if (level == 150 && starNum >= 15 && starNum <= 20) {
      return starNum - 6;
    } else if (level == 160 && starNum >= 15 && starNum <= 20) {
      return starNum - 5;
    } else if (level == 200 && starNum >= 15 && starNum <= 20) {
      return starNum - 3;
    } else if (level == 140 && starNum >= 21 && starNum <= 24) {
      return starNum * 2 - 27;
    } else if (level == 150 && starNum >= 21 && starNum <= 24) {
      return starNum * 2 - 26;
    } else if (level == 160 && starNum >= 21 && starNum <= 24) {
      return starNum * 2 - 25;
    } else if (level == 200 && starNum >= 21 && starNum <= 24) {
      return starNum * 2 - 23;
    } else {
      return null;
    }
  } else if (type === 'weapon') {
    const attackPower = userItem.itemInform.attackPower;
    if (starNum >= 0 && starNum <= 14) {
      return parseInt(attackPower / 50) + 1;
    } else if (level === 130 && starNum >= 15 && starNum <= 16) {
      return starNum - 9;
    } else if (level === 140 && starNum >= 15 && starNum <= 16) {
      return starNum - 8;
    } else if (level === 150 && starNum >= 15 && starNum <= 16) {
      return starNum - 7;
    } else if (level === 160 && starNum === 15) {
      return starNum - 6;
    } else if (level === 200 && starNum === 15) {
      return starNum - 2;
    } else if (level === 130 && starNum >= 17 && starNum <= 19) {
      return starNum - 10;
    } else if (level === 140 && starNum >= 17 && starNum <= 21) {
      return starNum - 9;
    } else if (level === 150 && starNum >= 17 && starNum <= 21) {
      return starNum - 8;
    } else if (level === 160 && starNum >= 16 && starNum <= 21) {
      return starNum - 7;
    } else if (level === 200 && starNum >= 16 && starNum <= 17) {
      return starNum - 3;
    } else if (level === 200 && starNum >= 18 && starNum <= 21) {
      return starNum - 4;
    } else if (level === 140 && starNum >= 22 && starNum <= 24) {
      return starNum + 8;
    } else if (level === 150 && starNum >= 22 && starNum <= 24) {
      return starNum + 9;
    } else if (level === 160 && starNum >= 22 && starNum <= 24) {
      return starNum + 10;
    } else if (level === 200 && starNum >= 22 && starNum <= 24) {
      return starNum + 12;
    } else {
      return null;
    }
  }
}

function updateReinforceDescription(userItem) {
  const successPer = calculateStarforceSuccess(userItem);
  const destroyedPer = calculateStarforceDestroy(userItem);
  const starNum = userItem.returnStarNum();
  const stat = calculateStarforceStat(userItem);
  const attackPower = calculateStarforceAttackPower(userItem);
  if (starNum <= 10) {
    if (attackPower === null) {
      reinforceDescriptionBox.innerHTML = `
    ${starNum}성 > ${starNum + 1}성<br>
    성공확률: ${successPer}.0% <br>
    실패(유지)확률: ${100 - successPer}.0% <br>
    <br>
    STR: +${stat}<br>
    DEX +${stat}<br>
    INT +${stat}<br>
    LUK +${stat}
    `;
    } else {
      reinforceDescriptionBox.innerHTML = `
    ${starNum}성 > ${starNum + 1}성<br>
    성공확률: ${successPer}.0% <br>
    실패(유지)확률: ${100 - successPer}.0% <br>
    <br>
    STR: +${stat}<br>
    DEX +${stat}<br>
    INT +${stat}<br>
    LUK +${stat}
    `;
    }
  } else if (starNum == 11) {
    reinforceDescriptionBox.innerHTML = `
    ${starNum}성 > ${starNum + 1}성<br>
    성공확률: ${successPer}.0% <br>
    실패(하락)확률: ${100 - successPer}.0% <br>
    <br>
    STR: +${stat}<br>
    DEX +${stat}<br>
    INT +${stat}<br>
    LUK +${stat}
    `;
  } else if (starNum == 15 || starNum == 20) {
    reinforceDescriptionBox.innerHTML = `
    ${starNum}성 > ${starNum + 1}성<br>
    성공확률: ${successPer}.0% <br>
    실패(유지)확률: ${100 - successPer - destroyedPer}% <br>
    파괴확률: ${destroyedPer}% <br>
    <br>
    STR: +${stat}<br>
    DEX +${stat}<br>
    INT +${stat}<br>
    LUK +${stat}
    `;
  } else {
    reinforceDescriptionBox.innerHTML = `
    ${starNum}성 > ${starNum + 1}성<br>
    성공확률: ${successPer}.0% <br>
    실패(하락)확률: ${100 - successPer - destroyedPer}% <br>
    파괴확률: ${destroyedPer}% <br>
    <br>
    STR: +${stat}<br>
    DEX +${stat}<br>
    INT +${stat}<br>
    LUK +${stat}
    `;
  }
}

function updateStarforceWindow() {
  const item = findItemInArr(
    elemInReinforce.dataset.type,
    elemInReinforce.dataset.iteminformid
  );
  const userItem = userItemArr.find(
    (x) => x.id === parseInt(elemInReinforce.dataset.useritemid)
  );
  starforceItemImg.setAttribute('src', item.url);
  updateReinforceDescription(userItem);
}

let isReinforceStart = false;

reinforceOuterBox.addEventListener('click', () => {
  if (clickedImg != null) {
    elemInReinforce = clickedImg;
    hideReinforceOuterBox();
    showStarforceBox();
    removeClickedItem();
    isReinforceStart = true;
    updateStarforceWindow();
  }
});

starforceBox.addEventListener('click', () => {
  if (clickedImg != null) {
    elemInReinforce = clickedImg;
    removeClickedItem();
    isReinforceStart = true;
    updateStarforceWindow();
  }
});
