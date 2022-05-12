//creating a new scene
var scene = new THREE.Scene();

//camera properties
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 10;
camera.position.x = 125;
camera.position.y = 10.6;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#1f2024");
renderer.setSize(window.innerWidth,window.innerHeight);
 
document.body.appendChild(renderer.domElement);
//user control using orbitcontrols
var controls = new THREE.OrbitControls(camera,renderer.domElement);
//controls.enableRotate = false;


var loader = new THREE.GLTFLoader();


//my forest model
var forestModel;
loader.load( 'forest/forestLand/scene.gltf', ( gltf ) => {
    forestModel = gltf.scene;
    scene.add( forestModel );
    forestModel.position.x = -120;
    forestModel.position.z = 80;
    forestModel.scale.x = 3;
    forestModel.scale.y = 3;
    forestModel.scale.z = 3;
    forestModel.rotation.y =180 ;
} );

//my artic model
var articModel;
loader.load( 'artic/snow/scene.gltf', ( gltf ) => {
    articModel = gltf.scene;
    scene.add( articModel );
    articModel.scale.x = .1;
    articModel.scale.y = .1;
    articModel.scale.z = .1;
    articModel.rotation.y =120 ;

    
} );
//my island model

var islandModel;
loader.load( 'island_model/island/scene.gltf', ( gltf ) => {
    islandModel = gltf.scene;
    scene.add( islandModel );
   
    islandModel.position.x = 105;
    islandModel.position.y = 10;
    islandModel.rotation.y =100 ;

 
} );
//iceimage

var image = new THREE.TextureLoader().load( 'images/ice.jpg' );


				var geometry = new THREE.PlaneGeometry( 30, 30, );
				var material = new THREE.MeshBasicMaterial( { map: image } );
				var ice = new THREE.Mesh( geometry, material );
				scene.add( ice );

                ice.position.y = 15;
                ice.position.z= -10;
                ice.rotation.y= -5;





//forestimage

var pic = new THREE.TextureLoader().load( 'images/trees.jpg' );


                var geometry = new THREE.PlaneGeometry( 200,200, );
                var material = new THREE.MeshBasicMaterial( { map: pic } );
                var pic = new THREE.Mesh( geometry, material );
                scene.add( pic );
                pic.position.x = -230;
                pic.position.z= 100;
                pic.rotation.y= 20;

                
                
//audio 

var audio = document.getElementById("myAudio");
var playButton = document.getElementById("playButton");
playButton.addEventListener("click", () => {
    audio.volume = 1.0;
    audio.play();
});




//lighting section 

var light = new THREE.DirectionalLight(0xeeebd9,4,500)
//position.set(x,y,z)
light.position.set(4,1,1);
scene.add(light);

//responsive feature
window.addEventListener('resize', ()=>{
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight
    camera.updateProjectionMatrix();
});
//just animating the scene
function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}
 
animate();

