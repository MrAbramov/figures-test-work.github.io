class Cube extends FigureController {
  constructor(figureMeshList) {
    super(scene, camera, figureMeshList);
    this.figureMeshList = figureMeshList;
  }

  createCube(size = 10, cameraPosition = 100) {
    camera.position.z = cameraPosition;

    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshPhongMaterial({
      color: this.setRandomColor(),
      flatShading: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    this.figureMeshList.push(cube);

    cube.name = cube.uuid;
    this.setRandomPosition(cube, size, cameraPosition);

    scene.add(cube);

    return cube;
  }
}
