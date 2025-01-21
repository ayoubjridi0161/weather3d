import { useEffect, useState,useRef } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useDebounce } from 'use-debounce';
import './App.css'

import * as THREE from 'three';
import { categorizeWeather,createRaindrops,formatDate } from './lib/utils';
import Header from './UI/header';
import InfoElement from './UI/InfoElement'

import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';
// import {grid} from '../assets/grid.jpg'
import SceneInit from './lib/SceneInit';

function App() {
  let direction = 1; // 1 for up, -1 for down
  let speed = 0.005;
  const [tempOut,setTempOut] = useState("C")
  const [inputValue, setInputValue] = useState('');
  const [debouncedInputValue] = useDebounce(inputValue, 500);
  const [weatherData,setWeatherData] = useState();
  const [parsedData,setParsed] = useState()
  const [finalLocation,setFinalLocation] = useState("sousse tun")
  const apiURL = "http://api.weatherapi.com/v1/forecast.json"
  const cityURL = "http://api.weatherapi.com/v1/search.json?key="
  const key = "8722fa1b1a5a461cbb050854240612"
  console.log(weatherData);
  const position = {x:0,y:1,z:0}
  const fetchData = async (city)=>{
    const res = await fetch(`${apiURL}?key=${key}&q=${city}&days=10&aqi=no&alerts=no`)
    const parsed = await res.json()
    setWeatherData(parsed)
    
  }
  const [options,setOptions] = useState([])
  console.log(options)

  // const cloudRef = useRef()
  const fetchCity = async (location) =>{
    console.log(`${cityURL}${key}&q=${location}`)
    const res = await fetch(`${cityURL}${key}&q=${location}`)
    const parsed = await res.json()
    console.log(parsed)
    setOptions(parsed.map(p => ({label:p.name,value:p.url})))
    
  }
  useEffect(()=>{
    if(debouncedInputValue)
    fetchCity(debouncedInputValue)

  },[debouncedInputValue])
  
  useEffect(()=>{
    fetchData(finalLocation)
   
  },[finalLocation])
  console.log(weatherData?.forecast.forecastday[0].day.daily_chance_of_rain);
  

  
  const weatherDetails = [
    {
      img:'/assets/images/threeDrops.png',
      info: `${weatherData?.forecast.forecastday[0].day.daily_chance_of_rain}%`,
      detail:"rain rate"
    },
    {
      img:'/assets/images/threeDrops.png',
      info: `${weatherData?.forecast.forecastday[0].day.avghumidity}%`,
      detail:"Humidity"
    },
    {
      img:'/assets/images/threeDrops.png',
      info:`${weatherData?.current.feelslike_c}°`,
      detail:"Feels lie"
    },{
      img:'/assets/images/threeDrops.png',
      info: " level 6",
      detail:"NNW"
    },{
      img:'/assets/images/threeDrops.png',
      info: `${weatherData?.current.uv}`,
      detail:"UV Index"
    },{
      img:'/assets/images/threeDrops.png',
      info: " 1%",
      detail:"Air quality"
    },{
      img:'/assets/images/threeDrops.png',
      info: `${weatherData?.forecast.forecastday[0].astro.sunrise}`,
      detail:"sunrise"
    },{
      img:'/assets/images/threeDrops.png',
      info: `${weatherData?.forecast.forecastday[0].astro.sunset}`,
      detail:"ss rate"
    }
  ]
  const weatherIcons = [
    {"name":"sun","pic":"/assets/images/sun.png"},
    {"name":"clouds","pic":"/assets/images/cloud.png"},
    {"name":"partly cloudy","pic":"/assets/images/sunCloud.png"},
    {"name":"mist","pic":"/assets/images/sunCloud.png"},
    {"name":"rain","pic":"/assets/images/sunrain.png"},
    {"name":"snow","pic":"/assets/images/snowy.png"},
    {"name":"thunder","pic":"/assets/images/Thund.png"},
    
  ]

  useEffect(()=>{
    if(weatherData){
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();
    test.scene.background = new THREE.Color(0xa9a9a9)
    console.log(weatherData)

    // main group
    const mainGroup = new THREE.Group();
    mainGroup.position.y = 0.1;
    test.scene.add(mainGroup);

    const al = new THREE.AmbientLight(0xffffff, 1);
    mainGroup.add(al);


    
  
  
    let weather = categorizeWeather(weatherData.current.condition.code)
    const objLoader = new OBJLoader()
    const gltfLoader = new GLTFLoader()
    const fbxLoader = new FBXLoader()
    let table 
    gltfLoader.load('/assets/3dtable/scene.gltf',(obj)=>{
      table = obj.scene
      // table.scale.set(1)
      table.position.set(-0.5,-5.5,0)
      mainGroup.add(table)
    })
    

    // setup directional light + helper
    const dl = new THREE.DirectionalLight(0xfdfdfd, 1);
    // use this for YouTube thumbnail
    dl.position.set(0, 2, 2);

    // dl.position.set(0, 2, 0);
    // dl.castShadow = true;
    mainGroup.add(dl)
    // weather = "thunder"
    console.log(weather)
    
    let weatherObject;
    
    
    //load the sun + add it
    switch(weather){
      case "clouds":

       let cloudMain
      gltfLoader.load('/assets/gltf/cloud/result.gltf',(obj)=>{
        cloudMain = obj.scene
        cloudMain.scale.set(0.3,0.3,0.3)
        cloudMain.position.set(-0.35,-0.8,0)
        // mainGroup.add(cloudMain)
        console.log(cloudMain)

      })
      weatherObject = cloudMain
        break;
        case 'sun':
          let sun
          objLoader.load('/assets/components/sun/sun.obj',(obj)=>{
            sun = obj
            sun.scale.set(0.5,0.5,0.5)
            sun.traverse((child) => {
              if (child.isMesh) {
                // Preserve original materials and colors
                //child.material.needsUpdate = true;
                
                // Optional: Ensure materials are visible and standard
                child.material = new THREE.MeshStandardMaterial({
                  map: child.material.map,  // Keep original texture
                  color: 0xffff00,  // Keep original color
                  opacity: child.material.opacity,
                  transparent: child.material.transparent
                });
              }
            });
            sun.position.set(-0.5,-0.5,0)
            // Add a spotlight
            const spotlight = new THREE.SpotLight(0xffffff, 6.5);
            spotlight.position.clone(sun.position);
            spotlight.castShadow = true;
            spotlight.angle = 0.58; // Narrow angle for focused light
            spotlight.penumbra = 0.5; // Soft edges
            spotlight.decay = 2; // Attenuation
            spotlight.distance = 20; // Limit the range of light
            const spotlightTarget = new THREE.Object3D();
            spotlightTarget.position.set(0, -10, 1); // Spotlight will aim at this position
            const sunandlight = new THREE.Group()
            spotlight.target = spotlightTarget;

            const slSettings = {
              visible: true,
            };
            
           
            
            console.log(sunandlight)
            weatherObject = new THREE.Group()
            weatherObject.add(sun,spotlight,spotlightTarget)

            mainGroup.add(weatherObject)

          })
          // requestAnimationFrame(animatesun);
          //   function animatesun() {
          //     requestAnimationFrame(animatesun);
            
          //     // Update position
          //     sun.position.y += speed * direction;
            
          //     // Reverse direction at limits
          //     if (sun.position.y > -1.2 || sun.position.y < -1.5) {
          //       direction *= -1;
          //     }
            
          //     // renderer.render(scene, camera);
          //     test.render()
          //   }
          break;       
        case 'mist':
          break;
        case 'partly cloudy':
          
            gltfLoader.load('/assets/gltfCloud/scene.gltf',(obj)=>{
              weatherObject = obj.scene
            
              weatherObject.scale.set(0.001,0.001,0.001)
              weatherObject.position.set(0,-1.2,0)
              mainGroup.add(weatherObject)
              console.log(weatherObject)
            })
            
            
            
            
          break;
        case 'rain':
          const rainWeather = new THREE.Group()
          let cloud2
          gltfLoader.load('/assets/gltf/cloud/result.gltf',(obj)=>{
            cloud2 = obj.scene
          
            cloud2.scale.set(0.3,0.3,0.3)
            cloud2.position.set(-0.35,-0.8,0)
            rainWeather.add(cloud2)
            console.log(cloud2)
          })
          let rainDrop
          objLoader.load('/assets/components/water/waterdrop.obj',(obj)=>{
            rainDrop = obj
            console.log(rainDrop)
            rainDrop.traverse((child) => {
              if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({ color: 0xAAAAff });
              }
            rainDrop.scale.set(0.01,0.01,0.01)


            });
            rainDrop.rotation.y = Math.PI / 2;
            
            const rainGroup = [];
            const rainDropCount = 66;
            for (let i = 0; i < rainDropCount; i++) {
              const drop = rainDrop.clone();
              drop.position.set(
                Math.random() * 2- 1.2, // Random X (-5 to 5)
                Math.random() * 1 + -1.5, // Random Y (above screen)
                Math.random() * 0.3 - 0.2 // Random Z (-2.5 to 2.5 for depth)
              );
          
              drop.scale.set(0.03, 0.03, 0.03); // Adjust size if necessary
              rainWeather.add(drop);
              rainGroup.push(drop);
            }
            // snowObj.position.set(0,-1.48,0)
            
            // snowWeather.position.y -= 
            rainWeather.scale.set(0.8,0.8,0.8)
            rainWeather.position.y -=0.2
            mainGroup.add(rainWeather)
          })
          break;
        case 'snow':
          const snowWeather = new THREE.Group()
          let cloud
          gltfLoader.load('/assets/gltf/cloud/result.gltf',(obj)=>{
            cloud = obj.scene
          
            cloud.scale.set(0.3,0.3,0.3)
            cloud.position.set(-0.35,-1,0)
            snowWeather.add(cloud)
            console.log(cloud)
          })
          let snowObj
          gltfLoader.load('/assets/gltf/snow.gltf',(obj)=>{
            snowObj = obj.scene
            console.log(snowObj)
            snowObj.traverse((child) => {
              if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({ color: 0xffffff });
              }
            snowObj.scale.set(0.01,0.01,0.01)

            });
            snowObj.rotation.y = Math.PI / 2;
            
            const snowflakes = [];
            const snowflakeCount = 20;
            for (let i = 0; i < snowflakeCount; i++) {
              const snowflake = snowObj.clone();
              snowflake.position.set(
                Math.random() * 2- 1.2, // Random X (-5 to 5)
                Math.random() * 0.6  -1.9, // Random Y (above screen)
                Math.random() * 0.3 - 0.2 // Random Z (-2.5 to 2.5 for depth)
              );
          
              snowflake.scale.set(0.03, 0.03, 0.03); // Adjust size if necessary
              snowWeather.add(snowflake);
              snowflakes.push(snowflake);
            }
            // snowObj.position.set(0,-1.48,0)
            
            // snowWeather.position.y -= 
            snowWeather.scale.set(0.8,0.8,0.8)
            snowWeather.position.y -=0.2
            mainGroup.add(snowWeather)
          })


          break;
        case 'sleet':
          break;
        case 'thunder':
          let thander
          gltfLoader.load('/assets/gltf/thander/result.gltf',(obj)=>{
            thander = obj.scene
            thander.scale.set(0.25,0.25,0.25)
            thander.position.set(-0.6,-0.5,0)
            mainGroup.add(thander)
            console.log(thander)
          })
          break;
        case 'unknown':
          break;
        
    }
    
   

   

    
    
  } 
  

  }, [weatherData]);

  


  return (
    <>
      {/* <canvas  id="myThreeJsCanvas" /> */}
      <div id='canvas-container'></div>
      {/* <div className='bg-transparent absolute left-0 top-0 z-10 p-10 w-screen px-20 h-screen'> */}
      <Header inputValue={inputValue} inputFunction={setInputValue} search={setFinalLocation} options={options}/>
      
      <div className='absolute z-10 top-52 left-20 grid w-fit grid-cols-2 gap-5'>
        {weatherDetails.map((d)=>(<InfoElement img={d.img} info={d.info} detail={d.detail}/>))}
        </div>
        

        
        <div className='flex flex-col items-center absolute top-52 right-20'>
          <h1 className='text-[82px] text-white'>{weatherData && weatherData.current.temp_c} {tempOut}</h1>
          <div className='text-center opacity-50 py-2 text-[22px] text-[#595959] w-[240px] h-[52px] rounded-[25px] bg-white'>
            {weatherData&& weatherData.location.name}, {weatherData&&weatherData.location.country}
          </div>
          
        </div>
        <div className='w-[400px]  rounded-[25px] bg-[#cfcfcf]/60  p-8 '>
          {/* <div className=' text-white space-y-16'>
            {leftBox.map((item)=>{
              
              return(
              <div className=' text-white flex justify-between'>
              <p className='text-[30px]'>{item.day}</p>
            <img src={item.pic} width={70} alt="" />
            <p className='text-[30px] text-white'>{item.temp}</p>
              </div>
            )})}
            
          </div> */}
        
        </div>
      
      
      {/* </div> */}
      </>
  );
}

export default App;
