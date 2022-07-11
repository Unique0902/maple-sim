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
