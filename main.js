var renderer, camera, scene, light, light1, geometry, material, mesh;

// renderer
renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('Canvas'),
    antialias: true
});
renderer.setClearColor(0x00ffff);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);


// camera
camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);


// scene
scene = new THREE.Scene();


// lights
light = new THREE.AmbientLight(0xffffff, 0.5);
light1 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light, light1);


// object
geometry = new THREE.BoxGeometry(100, 100, 100);
material = new THREE.MeshNormalMaterial();
mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, -1000);
scene.add(mesh);


// render loop
requestAnimationFrame(render);

function render() {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}