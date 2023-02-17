const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
scene.fog = new THREE.FogExp2(0xffffff, 0.002);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const figureController = new FigureController(scene, camera);
figureController.setShadow();
const cube = new Cube(figureController.figureMeshList);
const triangle = new Triangle(figureController.figureMeshList);
const sphere = new Sphere(figureController.figureMeshList);

// controls

const controls = new THREE.OrbitControls(camera, renderer.domElement);

controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 1;

controls.screenSpacePanning = false;

controls.minDistance = 10;
controls.maxDistance = 100;

controls.maxPolarAngle = Math.PI;

function animate() {
  requestAnimationFrame(animate);
  figureController.figureMeshList.forEach((figure) => {
    figure.rotation.x += 0.01;
    figure.rotation.y += 0.01;
  });

  renderer.render(scene, camera);
}
animate();
