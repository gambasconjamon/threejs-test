//import * as THREE from '../node_modules/three/build/three.min.js';
//import * as GSAP from '../node_modules/gsap/dist/gsap.min.js';
console.log(window.innerWidth)
var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera (75,window.innerWidth/window.innerHeight,0.1,1000);
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
console.log("update");
    renderer.setSize(window.innerWidth , window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
    renderer.render(scene ,camera)
});

renderer.render(scene ,camera)