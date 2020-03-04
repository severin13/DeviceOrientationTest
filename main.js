

window.addEventListener("deviceorientation", render, true);


// RENDERER
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true});
renderer.setClearColor(0x000055);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);


//CAMERA
var camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 3000);


//SCENE
var scene = new THREE.Scene();


//LIGHTS
var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
var pointLight = new THREE.PointLight(0xffffff, 0.5);
scene.add(pointLight);


//MATERIAL
var material = new THREE.MeshLambertMaterial({
    color: 0xAAAAAA,
    map: new THREE.TextureLoader().load('textures/Cardboard.jpg')
    //emissive: 0xff0000,
    //emissiveIntensity: 0.1
});


//GEOMETRY
var geometry = new THREE.BoxGeometry(1, 1, 1);
var mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, -5);


scene.add(mesh);


//RENDER LOOP
requestAnimationFrame(render);


function render(event) {
    //mesh.rotation.x == event.alpha;
    if (event.alpha) {
        console.log(event.alpha);
        mesh.rotation.y = event.alpha;
    }

    if (event.beta) {
        console.log(event.beta);
        mesh.rotation.x = event.beta;
    }


    renderer.render(scene, camera);
    requestAnimationFrame(render);
}





