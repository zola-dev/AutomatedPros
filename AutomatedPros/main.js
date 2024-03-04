gsap.registerPlugin(ScrollTrigger);
let header = document.getElementById('header');
const rotatate = document.getElementById('rotatate');
const pages = rotatate.children[0];
const arrow = pages.children[0];
const manu = rotatate.children[2]
const cart = document.getElementById('cart');
const cartField = document.getElementById('cartField');
if(!imgDetails){
    imgDetails=JSON.parse(localStorage.getItem('img'));
}
console.log("imgDetails",imgDetails)
if(header){
    const headerPoP = gsap.timeline({ paused: true });
    headerPoP.to(header.children[0], { 
        y: 0, 
        duration: .7, 
        ease: "power1.inOut",
        onComplete: () => {
        setTimeout(()=>{  
        cartField.style.transform = `translate(calc((100% - 1270px - ${imgDetails.scroll}vw)/2))`;
        }, 200); 
        }
    });
    setTimeout(()=>{  
    headerPoP.play();
    }, 200); 
    const headerSlide = gsap.timeline({ paused: false });
    headerSlide.to(header, {
        y: -120,
        scrollTrigger: {
            trigger: '#header', 
            start: '20% top', 
            end: '20% top',
            // markers:true,      
            scrub: 1, 
            delay:1,
            snap: {
            duration: { min: 0.2, max: 3 },
            ease:"power1.out", 
            }
        },
    });
    var tlArrow = gsap.timeline({ paused: true });
    tlArrow.to(arrow, { rotation: 180, duration: .1, ease: "power2.out"});
    var tlManu = gsap.timeline({ paused: false });
    tlManu.to(manu, { 
    autoAlpha: 0, 
    duration: .1, 
    ease: "power1.in",
    });
    tlManu.reverse();
    var pagesIn=false;
    pages.addEventListener("mouseenter", (event) => {
            pagesIn=true;
            tlArrow.play();
            tlManu.reverse();
            var object = rotatate.children[2].children[0];
            if(!object){
                console.log('main lazy loaded manu');
                rotatate.children[2].innerHTML  = `<object id="pages" type="text/html" style="height: 459px;border-radius: 24px;margin-top: 5px;transition:.3s;" data='./manu.html'></object>`;
            }else{
                console.log('main cached manu');
            }
        }); 
    var manuIn=false;
    pages.addEventListener("mouseleave", (event) => {
    pagesIn=false;
    setTimeout(()=>{  
    if(!manuIn){
        handleArrowManu();
    }
    }, 100); 
    });
    manu.addEventListener("mouseenter", (event) => {
    manuIn=true;
    if(pagesIn){
        console.log("in manu\nin of pages\n")
    }else{
        console.log("in manu\nout of pages\n")
    }
    });
    manu.addEventListener("mouseleave", (event) => {    
    manuIn=false;
        if(pagesIn){
        console.log("out manu\nin of pages\n")
    }else{
        console.log("out manu\nout of pages\n");
        handleArrowManu();
    }
    });
    function handleArrowManu() {
        tlArrow.reverse();  
        tlManu.play();
    }
}
if(cartField){
    const tlCart = gsap.timeline({ paused: false });
    tlCart.to(cartField, { 
        autoAlpha: 0, 
        duration: .2, 
        ease: "power1.out",
        onComplete: () => {
        setTimeout(()=>{  
        cartField.style.display = "block";
        }, 500); 
        }
    });
    const modalSlide = gsap.timeline({ paused: false });
    modalSlide.to(cartField.children[0], { 
        x: 60, 
        duration: .2, 
        ease: "power1.inOut",
        onComplete: () => {
        setTimeout(()=>{  
        cartField.children[0].style.transition = '0s';
        }, 200); 
        }
    });
    cart.addEventListener("click", () => {
        modalSlide.reverse();
        tlCart.reverse();
        setTimeout(()=>{ 
        cartField.style.transition = "0s"; 
        }, 500); 
        });
        cartField.children[0].children[0].children[1].addEventListener("click", () => {
        modalSlide.play();
        tlCart.play();
        });
        document.addEventListener("click", (event) => {
        if (!cartField.children[0].contains(event.target)&&event.target.id!=='cart') {
        modalSlide.play();
        tlCart.play();
        }
        },{ capture: true });
}







