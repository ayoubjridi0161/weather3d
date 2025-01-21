import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

export default class SceneInit {
  constructor(canvasId) {
    // NOTE: Core components to initialize Three.js app.
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;

    // NOTE: Camera params;
    this.fov = 45;
    this.nearPlane = 1;
    this.farPlane = 1000;
    this.canvasId = canvasId;

    // NOTE: Additional components.
    this.clock = undefined;
    this.stats = undefined;
    this.controls = undefined;

    // NOTE: Lighting is basically required.
    this.spotLight = undefined;
    this.ambientLight = undefined;
  }

  initialize() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.z = 10;
    const canvas =document.getElementById("canvas-container")
    // NOTE: Specify a canvas which is already created in the HTML.
    // Check if canvas has existing child elements
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
    this.renderer = new THREE.WebGLRenderer({
      
      // NOTE: Anti-aliasing smooths out the edges.
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // enable this for shadows
    this.renderer.shadowMap.enabled = true;
    
    canvas.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // document.body.appendChild(this.stats.dom);

    // HIDE LIGHTING FOR DEMO.
    // ambient light which is for the whole scene
    // this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    // this.ambientLight.castShadow = true;
    // this.scene.add(this.ambientLight);
    // spot light which is illuminating the chart directly
    // this.spotLight = new THREE.SpotLight(0xffffff, 1);
    // this.spotLight.castShadow = true;
    // this.spotLight.position.set(0, 64, 32);
    // this.scene.add(this.spotLight);

    // if window resizes
    window.addEventListener('resize', () => this.onWindowResize(), false);

    // NOTE: Load space background.
    this.loader = new THREE.TextureLoader();
    // this.scene.background = this.loader.load('./pics/space.jpeg');

    // NOTE: Declare uniforms to pass into glsl shaders.
    // this.uniforms = {
    //   u_time: { type: 'f', value: 1.0 },
    //   colorB: { type: 'vec3', value: new THREE.Color(0xfff000) },
    //   colorA: { type: 'vec3', value: new THREE.Color(0xffffff) },
    // };
  }

  animate() {
    // NOTE: Window is implied.
    // requestAnimationFrame(this.animate.bind(this));
    this.render();
    window.requestAnimationFrame(this.animate.bind(this));

    // this.stats.update();
    // this.controls.update();
  }


  render() {
    // NOTE: Update uniform data on each render.
    // this.uniforms.u_time.value += this.clock.getDelta();
    this.renderer.render(this.scene, this.camera);
  }
  animationLoop(animationFunction){
    this.renderer.setAnimationLoop(animationFunction)
  }
  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
