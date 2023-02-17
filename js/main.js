const controlPanel = document.querySelector('#control-panel');
const historyPanel = document.querySelector('#history-panel');

controlPanel.addEventListener('submit', getParams);
historyPanel.addEventListener('click', getHistoryItem);

function createHistoryItem(name) {
  historyPanel.insertAdjacentHTML(
    'beforeend',
    `<li data-name="${name}">
      <span class="title">${name}</span>
      <button class="btn btn-default btn-remove">X</button>
    </li>`,
  );
}

function removeHistoryItem(selectedElement) {
  const elem = selectedElement.closest('[data-name]');
  figureController.removeFigure(elem.dataset.name);
  elem.remove();
}

function getHistoryItem(e) {
  const selectedElement = e.target;

  if (selectedElement.classList.contains('btn-remove')) {
    removeHistoryItem(selectedElement);
  }
}

function getParams(e) {
  e.preventDefault();
  const figureData = {
    kay: this['figure'].value,
    scale: this['scale'].value.length ? this['scale'].value : 10,
  };

  figureSwitcher({ ...figureData });
}

function figureSwitcher({ kay, scale }) {
  let name = '';
  switch (kay) {
    case 'cube':
      name = cube.createCube(scale).name;
      break;
    case 'sphere':
      name = sphere.createSphere(scale).name;
      break;
    case 'pyramid':
      name = triangle.createPyramid(scale).name;
      break;
  }

  createHistoryItem(name);
}
