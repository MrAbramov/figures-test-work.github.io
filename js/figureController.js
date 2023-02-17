class FigureController {
  constructor(scene, camera, material) {
    this.figureMeshList = [];
    this.scene = scene;
    this.camera = camera;
  }

  setRandomPosition(figure, size, position) {
    const minPosition = position * -1 + size * 2;
    const maxPosition = position - size * 2;

    figure.position.x = Math.random() * (maxPosition - minPosition) + minPosition;
    figure.position.y = Math.random() * (maxPosition - minPosition) + minPosition;
    figure.position.z = Math.random() * (maxPosition - minPosition) + minPosition;
  }

  setRandomColor() {
    const color = '#' + Math.floor(Math.random() * 16777215);

    return color.length == 7 ? color : this.setRandomColor();
  }

  setShadow() {
    const dirLight1 = new THREE.DirectionalLight(0xffffff);
    dirLight1.position.set(1, 1, 1);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x002288);
    dirLight2.position.set(-1, -1, -1);
    this.scene.add(dirLight2);

    const ambientLight = new THREE.AmbientLight(0x222222);
    this.scene.add(ambientLight);
  }

  removeFigure(name) {
    this.figureMeshList = this.figureMeshList.filter((item) => item.name != name);
    const selectedObject = this.scene.getObjectByName(name);
    scene.remove(selectedObject);
  }
}
