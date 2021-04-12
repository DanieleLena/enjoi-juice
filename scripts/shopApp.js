let container;
let camera;
let renderer;
let scene;
let object;


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
    camera.position.set(0,0,120);

    //Light
    const ambient = new THREE.AmbientLight(0x404040,3);
    scene.add(ambient);

    const light = new THREE.DirectionalLight(0xffffff,0.7);
    light.position.set(0,0,10);
    scene.add(light);

    //Renderer
    renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
    renderer.setSize(container.clientWidth, container.clientHeight);

    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    //Load model
    let loader = new THREE.GLTFLoader();
      // loader.load("3d/Juice/scene.gltf", function(gltf){
      
       loader.load("https://enjoi-juice-l8to8b8il-lennyman.vercel.app/3D/Juice/scene.gltf", function(gltf){

        
 
        scene.add(gltf.scene);
        
        object = gltf.scene.children[0];
        animate();

        object.rotation.y = "0.5";
        object.rotation.z = "-0.3";

        
       

       //GSAP 

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();


tl.to("body", {background: "linear-gradient(to left , var(--orange),var(--yellow) )",ease: "power1.inOut", scrollTrigger: {
    trigger: ".faq",
    start: "top center",
     end: "top center ",
    scrub: true,
    
}})
.to(object.rotation, {z: 1, scrollTrigger: {
    start: "top top",
    end: "800",
    scrub: 1,
}})
// CARDS HORIZZONTAL PARALLAX

gsap.utils.toArray(".card").forEach(card => {
    const speed = card.dataset.speed * 20;
    
    tl.to(card, { x: `${speed}`, ease: "none", scrollTrigger: {
      trigger: ".shop-reviews",
    
      start: "top top",
       end: "bottom top",
      scrub: 1,
  
  }});

});


})
       }

       
function animate(){
    requestAnimationFrame(animate);    
  
    renderer.render(scene,camera);
    
}


       init();

function onWindowResize(){

        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
    
        renderer.setSize(container.clientWidth,container.clientHeight);
       }

       window.addEventListener("resize", onWindowResize);





// THE PRICE BOX HOVER AND SELECTION

const priceBox = document.querySelectorAll(".price-box");
const bigBtn = document.querySelector(".shop-big-btn");
let isSelected = false;

priceBox.forEach((box)=> {

    box.addEventListener("mouseover", ()=> {
        
        box.classList.add("active-box");
        
    });
   
    box.addEventListener("mouseleave", ()=>{
        if(!box.classList.contains("isSelected")) {
        box.classList.remove("active-box");
        }
    })


    box.addEventListener("click", ()=> {

        priceBox.forEach((box2)=> {
            box2.classList.remove("isSelected");
            box2.classList.remove("active-box");
            
        });
         box.classList.add("isSelected");
         box.classList.add("active-box");
         bigBtn.classList.add("active-big-btn");
         
       
    })

});

bigBtn.addEventListener("mouseover", ()=> {

    if (bigBtn.classList.contains("active-big-btn")){
    bigBtn.classList.add("hover-big-btn");
    }
});

bigBtn.addEventListener("mouseleave", ()=>{
    if (bigBtn.classList.contains("active-big-btn")){
        bigBtn.classList.remove("hover-big-btn");
        
        }
})


// THR TOGGLE FAQ

const faqs = document.querySelectorAll(".question");


faqs.forEach((faq)=>{
    faq.addEventListener("click", ()=> {

    let iconPlus = faq.children[0].children[1];
       
faqs.forEach((faq2)=>{
    if (faq2 !== faq){
    faq2.children[1].classList.remove("show-text");
    //the iconPlus
    faq2.children[0].children[1].classList.remove("rotate-icon");
    }
});
 
    iconPlus.classList.toggle("rotate-icon");
    faq.children[1].classList.toggle("show-text");
    faq.scrollIntoView();

    })
})








