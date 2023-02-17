class Triangle extends FigureController {
  constructor(figureMeshList) {
    super(scene, camera, figureMeshList);
    this.figureMeshList = figureMeshList;
  }

  createPyramid(size = 10, cameraPosition = 100) {
    camera.position.z = cameraPosition;

    const geometry = new THREE.ConeGeometry(size, size, 3);
    const material = new THREE.MeshPhongMaterial({
      color: this.setRandomColor(),
      flatShading: true,
    });
    const triangle = new THREE.Mesh(geometry, material);

    triangle.name = triangle.uuid;
    this.setRandomPosition(triangle, size, cameraPosition);
    this.figureMeshList.push(triangle);
    scene.add(triangle);

    return triangle;
  }
}
