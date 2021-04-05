
let container;
let camera;
let renderer;
let scene;
let object;
let rightsidePosition = (window.innerWidth * (4.50/100));
let vh = (unit) => window.innerHeight * (unit/100);

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


gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline()
.to(object.position,{x: 1, ease: "power1.inOut", scrollTrigger: {
      
    start: "top top",
    end: vh(100),
    scrub: 1,
    
  }})
  
  .to(object.rotation,{z: -3, ease: "power1.inOut", scrollTrigger: {
      
    
    start: vh(101),
    end: vh(200),
    scrub: 1,
    
  }})
  .from(object.rotation,{z: -3, ease: "power1.inOut"})
  .to(object.rotation,{z:-20, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(250),
     end: vh(1500),
    scrub: 1,
    
    
  }})
  .to("#elder1",{  scale: 1.8, opacity: 0,  ease: "power1.inOut", scrollTrigger: {
      
    start: vh(300),
     end: vh(325),
    scrub: 1,
  }})
  
  .to("#elder2",{  scale: 1.8, opacity: 0, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(326),
     end: vh(350),
    scrub: 1,
  }})
  .to("#elder3",{  scale: 1.8, opacity: 0, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(351),
     end: vh(375),
    scrub: 1,
  }})
  .to("#elder4",{ scale: 1.8, opacity: 0, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(401),
     end: vh(425),
    scrub: 1,
  }})

  //ORANGES ===================================================================================

  //BACKGROUD PURPLE
  
  .to("body",{ background: "linear-gradient(to right, #4A00E0, #8E2DE2)", ease: "power1.inOut",scrollTrigger: {
    start: vh(426),
     end: vh(426),
    scrub: 1,
  }})
   //fonts
   .to(".section-four",{ ease: "power1.inOut", scrollTrigger: {

    toggleClass: {targets: ".section-four", className: "orange-text"},
    start: vh(426),
     end: vh(624),
    scrub: 1,
    
  }})
  //ORANGES FADE-IN
  .to("#orange1",{ scale: 1.8, opacity: 100, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(427),
     end: vh(450),
    scrub: 1,
  }})
  .to("#orange2",{ scale: 2, opacity: 100, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(451),
     end: vh(475),
    scrub: 1,
  }}).to("#orange3",{ scale: 1.8, opacity: 100, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(476),
     end: vh(500),
    scrub: 1,
  }})
  .to("#orange4",{ scale: 1.8, opacity: 100, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(501),
     end: vh(525),
    scrub: 1,
  }})
  //ORANGES FADE-OUT
  .from("#orange1",{ scale: 1.8, opacity: 100, ease: "power1.inOut"})
  .to("#orange1",{ scale: 3.5, opacity: 0, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(526),
     end: vh(550),
    scrub: 1,
  }})
  .from("#orange2",{ scale: 1.8, opacity: 100, ease: "power1.inOut"})
  .to("#orange2",{ scale: 3.5, opacity: 0, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(551),
     end: vh(575),
    scrub: 1,
  }})
  .from("#orange3",{ scale: 1.8, opacity: 100, ease: "power1.inOut"})
  .to("#orange3",{ scale: 3.5, opacity: 0, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(576),
     end: vh(600),
    scrub: 1,
  }}).from("#orange4",{ scale: 1.8, opacity: 100, ease: "power1.inOut"})
  .to("#orange4",{ scale: 3.5, opacity: 0, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(601),
     end: vh(625),
    scrub: 1,
  }})

  //ZINK ===================================================================================

  //BACKGROUND WHITE
  .to("body",{ background: "linear-gradient(95deg, #e2e8f0, #fff, #FFFCF4)", ease: "power1.inOut", scrollTrigger: {

    start: vh(625),
     end: vh(625),
    scrub: 1,
  }})
  //fonts
  .to(".section-four",{ ease: "power1.inOut", scrollTrigger: {

    toggleClass: {targets: ".section-four", className: "zinc-text"},
    start: vh(625),
     end: vh(1500),
    scrub: 1,
    
  }})
  // ZINC FADE-IN
  .to("#zinc1",{ scale: 1.8, opacity: 100, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(626),
     end: vh(650),
    scrub: 1,
  }})
  .to("#zinc2",{ scale: 2, opacity: 100, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(651),
     end: vh(675),
    scrub: 1,
  }}).to("#zinc3",{ scale: 1.8, opacity: 100,x: 300, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(676),
     end: vh(700),
    scrub: 1,
  }})
  .to("#zinc4",{ scale: 1.8, opacity: 100,  ease:"power1.inOut", scrollTrigger: {
      
    start: vh(701),
     end: vh(725),
    scrub: 1,
  }})
  //ZINC FADE-OUT
  .from("#zinc1",{ scale: 1.8, opacity: 100, ease: "power1.inOut"})
  .to("#zinc1",{ scale: 3.5, opacity: 0, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(1001),
     end: vh(1025),
    scrub: 1,
  }})
  .from("#zinc2",{ scale: 1.8, opacity: 100, ease: "power1.inOut"})
  .to("#zinc2",{ scale: 3.5, opacity: 0, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(1026),
     end: vh(1050),
    scrub: 1,
  }})
  .from("#zinc3",{ scale: 1.8, opacity: 100, x:300, ease: "power1.inOut"})
  .to("#zinc3",{ scale: 3.5, opacity: 0, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(1051),
     end: vh(1075),
    scrub: 1,
  }}).from("#zinc4",{ scale: 1.8, opacity: 100, ease: "power1.inOut"})
  .to("#zinc4",{ scale: 3.5, opacity: 0, ease: "power1.inOut", scrollTrigger: {
      
    start: vh(1076),
     end: vh(1100),
    scrub: 1,
  }})
 


        
    });

    
}

function animate(){
    requestAnimationFrame(animate);    
  
    renderer.render(scene,camera);
   
    
    
}

init();



//make it responsive
function onWindowResize(){

    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    
    


    renderer.setSize(container.clientWidth,container.clientHeight);

    if (container.clientWidth < 770) {
      

      
    }

    // POSITION ON THE RIGHT
     rightsidePosition = (window.innerWidth * (4.50/100));
     
    object.position.x = rightsidePosition;
    //VH
    vh = (unit) => window.innerHeight * (unit/100);


}
window.addEventListener("resize", onWindowResize);



