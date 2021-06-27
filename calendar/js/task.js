
const $taskCellList = document.querySelectorAll('.taskCell')

const $modal = document.querySelector('.modal')
const $closeModalButton = $modal.querySelector('#close-modal')
$modal.addEventListener('click', event => event.stopPropagation())
$closeModalButton.addEventListener('click', closeModal)

function openModal(x, y) {
  $modal.style.left = `${x}px`
  $modal.style.top = `${y}px`
  $modal.showModal()
}

function closeModal(event) {
  event.stopPropagation()
  $modal.close()
  removeActiveTaskCell()
}

function handleCreateTaskClick(event) {
  console.log(event)
  const x = event.pageX
  const y = event.pageY
  setActiveTaskCell(event.clientX, event.clientY)
  openModal(x, y)
}

let $selectedCell = null


function removeActiveTaskCell() {
  $selectedCell.classList.remove('is-active')
}

function setActiveTaskCell(x, y) {
  console.log({x}, {y})
  $selectedCell = document.elementFromPoint(x, y)
  $selectedCell.classList.add('is-active')
}

$taskCellList.forEach($taskCell => $taskCell.addEventListener('click', handleCreateTaskClick))