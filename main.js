var size = 20;
var divisions = 10;


var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 0;
camera.position.x = 30;
camera.position.y = 5;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#89CFF0");
renderer.setSize(window.innerWidth,window.innerHeight);
 
document.body.appendChild(renderer.domElement);

var controls = new THREE.OrbitControls(camera,renderer.domElement);
controls.enableRotate = false;


var loader = new THREE.GLTFLoader();
 
var girlModel;
loader.load( 'models/cartoon_girl/girl.gltf', ( gltf ) => {
    girlModel = gltf.scene;
    scene.add( girlModel );
    girlModel.position.y = 0;
    girlModel.position.x = 5;
    girlModel.position.z = -1;
} );

var landscapeModel;
loader.load( 'landscape/low_poly_mountain_scene/scene.gltf', ( gltf ) => {
    landscapeModel = gltf.scene;
    scene.add( landscapeModel );
 
} );

var light = new THREE.DirectionalLight(0xeeebd9,4,500)
//position.set(x,y,z)
light.position.set(1,2,1);
scene.add(light);

window.addEventListener('resize', ()=>{
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight
    camera.updateProjectionMatrix();
});

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}
 
animate();

