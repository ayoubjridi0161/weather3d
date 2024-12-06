import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

export function categorizeWeather(weatherCode) {
    // Sunny conditions
    if (weatherCode === 1000) {
      return 'sun';
    }
    
    // Cloudy conditions
    if ([ 1006, 1009].includes(weatherCode)) {
      return 'clouds';
    }

    if(weatherCode === 1003){
      return 'partly cloudy'
    }
    
    // Mist and Fog conditions
    if ([1030, 1135, 1147].includes(weatherCode)) {
      return 'mist';
    }
    
    // Rain conditions
    const rainCodes = [
      1063, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 
      1192, 1195, 1198, 1201, 1240, 1243, 1246,
      //sleet 
      1069, 1204, 1207, 1249, 1252
    ];
    if (rainCodes.includes(weatherCode)) {
      return 'rain';
    }
    
    // Snow conditions
    const snowCodes = [
      1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 
      1237, 1255, 1258, 1261, 1264
    ];
    if (snowCodes.includes(weatherCode)) {
      return 'snow';
    }
    
    // Sleet conditions
    // const sleetCodes = [1069, 1204, 1207, 1249, 1252];
    // if (sleetCodes.includes(weatherCode)) {
    //   return 'sleet';
    // }
    
    // Thunder conditions
    const thunderCodes = [1087, 1273, 1276, 1279, 1282];
    if (thunderCodes.includes(weatherCode)) {
      return 'thunder';
    }
    
    // Default case
    return 'unknown';
  }


  export function createRaindrops(scene) {
    const loader = new GLTFLoader();
    
    loader.load('/assets/rain_drop_single/scene.gltf', (model) => {
      // Create a group to hold all raindrops
      const drop = model.scene
      const rainGroup = new THREE.Group();
      
      // Number of raindrops
      const numRaindrops = 30;
      
      // Customize the raindrop model if needed
      drop.traverse((child) => {
        if (child.isMesh) {
          // Optional: Ensure visibility
          child.material.transparent = false;
          child.material.side = THREE.DoubleSide;
          child.material.color = new THREE.Color(0xf0d0ff);
          child.material.opacity = 1;
        }
      });
  
      // Create multiple instances of the raindrop
      for (let i = 0; i < numRaindrops; i++) {
        // Clone the original model
        const raindrop = drop.clone();
        

        // Randomize position (adjust ranges as needed)
        raindrop.position.set(
          Math.random() * -0.5 - 0.5,  // X: spread from -1 to 1
          Math.random() * 2 - 2,      // Y: from 0 to 10
          Math.random() * 2 - 1   // Z: spread from -1 to 1
        );
        
        // Randomize rotation
        // raindrop.rotation.set(
        //   Math.random() * Math.PI,
        //   Math.random() * Math.PI,
        //   Math.random() * Math.PI
        // );
        
        // Randomize scale (optional)
        const randomScale = 0.5 + Math.random();
        raindrop.scale.set(randomScale, randomScale, randomScale);
        
        // Add to the group
        rainGroup.add(raindrop);
      }
      
      // Add the group to the scene
      scene.add(rainGroup)
      console.log(rainGroup)
      
      // Optional: Animate raindrops
      
  })
}


function bounce() {
  requestAnimationFrame(bounce);

  // Bounce animation
  const time = clock.getElapsedTime(); // Time in seconds
  const bounceHeight = 2; // Maximum bounce height
  const speed = 2; // Speed of the bounce

  cube.position.y = Math.abs(Math.sin(time * speed)) * bounceHeight;

  renderer.render(scene, camera);
}
export function formatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  return `${parseInt(month)}/${parseInt(day)}`;
}