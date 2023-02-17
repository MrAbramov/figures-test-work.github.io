class Sphere extends FigureController {
  constructor(figureMeshList) {
    super(scene, camera, figureMeshList);
    this.figureMeshList = figureMeshList;
  }

  createSphere(size = 10, cameraPosition = 100) {
    camera.position.z = cameraPosition;

    const geometry = new THREE.SphereGeometry(size);
    const material = new THREE.MeshPhongMaterial({
      color: this.setRandomColor(),
      flatShading: true,
    });
    const sphere = new THREE.Mesh(geometry, material);

    sphere.name = sphere.uuid;
    this.setRandomPosition(sphere, size, cameraPosition);
    this.figureMeshList.push(sphere);

    scene.add(sphere);

    return sphere;
  }
}
