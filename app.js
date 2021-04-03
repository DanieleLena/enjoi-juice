
let container;
let camera;
let renderer;
let scene;
let object;
let rightsidePosition = (window.innerWidth * 4.50)/100;
let vh;

function init(){
    container = document.querySelector(".scene");

    //Create scene
    scene = new THREE.Scene();

    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight ;
    const near = 0.1;
    const far = 500;

    //Camera setup
    camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
    camera.position.set(0,0,150);

    //Light
    const ambient = new THREE.AmbientLight(0x404040,3);
    scene.add(ambient);

    const light = new THREE.DirectionalLight(0xffffff,0.7);
    light.position.set(0,0,10);
    scene.add(light);

    //Renderer
    renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
    renderer.setSize(container.clientWidth, container.clientHeight); //THE FULL PAGE
    // renderer.setSize(400,300); 

    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    //Load model
    let loader = new THREE.GLTFLoader();
      // loader.load("3d/Juice/scene.gltf", function(gltf){
      
       loader.load("https://enjoi-juice-l8to8b8il-lennyman.vercel.app/3D/Juice/scene.gltf", function(gltf){

        
 
        scene.add(gltf.scene);
        object = gltf.scene.children[0];
        animate();

        
        //POSITIONG
        object.position.x = rightsidePosition;
        

  // SCROLLING ANIMATION

  vh = (unit) => window.innerHeight * (unit/100);

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

tl.to(object.position,{x: 1, ease: "power1.inOut", scrollTrigger: {
      
    start: "top top",
    end: vh(100),
    scrub: 1,
    
  }});
  tl.to(object.rotation,{z: -3, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(100),
    end: vh(200),
    scrub: 1,
    
  }});
  tl.to(object.rotation,{z:-6, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(199),
     end: vh(800),
    scrub: 1,
    
    
  }});
  tl.to("#elder2",{ opacity: 3, scale: 1.8, opacity: 0, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(400),
     end: vh(650),
    scrub: 1,
  }});
  tl.to("body",{ background: " linear-gradient(to right, #4A00E0, #8E2DE2) ", ease: "power1.inOut", scrollTrigger: {
      
    start: vh(400),
     end: vh(401),
    scrub: 1,
  }});


        
    });

    
}

function animate(){
    requestAnimationFrame(animate);    
    
    //prova====
    vh = (unit) => window.innerHeight * (unit/100);
    //========

    renderer.render(scene,camera);
}

init();



//make it responsive
function onWindowResize(){

    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    
    


    renderer.setSize(container.clientWidth,container.clientHeight);
    // POSITION ON THE RIGHT
    //  rightsidePosition = (window.innerWidth * 4.50)/100;
    // object.position.x = rightsidePosition;


}
window.addEventListener("resize", onWindowResize);




// window.addEventListener("scroll", ()=> {

//     const heightPoint = (window.pageYOffset);
//     const scrollingPosition = window.innerHeight;


//     let objectX = object.position.x;
//     let objectY = object.position.y;
//     let rotation = object.rotation.z;

//     console.log(rotation);

//     console.log(heightPoint);

    
//     if(objectX >= 0 || heightPoint < 500){
//             object.position.x = rightsidePosition - (window.pageYOffset/8);

//     }else if (heightPoint > scrollingPosition/2) {

//         object.rotation.z =  -((heightPoint-500)/200)

//     }
    
    
// });



