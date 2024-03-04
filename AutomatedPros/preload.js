var imgDetails=JSON.parse(localStorage.getItem('img'));
var url=`https://www.shebs-braids.area36000.com:8080/AutomatedProsJpeg`
if(imgDetails&&document.URL.includes("file:///C:/AutomatedPros/main.html")){
    var scrollPX=imgDetails.scroll*window.innerWidth/100
    console.log("width: ",(window.innerWidth-scrollPX)*.45*1.1," px");
    const head = document.getElementsByTagName("head")[0];
    let preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    preloadLink.type = "image/jpeg";
    preloadLink.href = `${url}/food.jpeg/?width=${imgDetails.width}&height=1027.4`;
    head.appendChild(preloadLink);
}        
function fadeOut(el,duration,timeout) {
  if(typeof el!='object'){
    el=document.getElementById(el);
  }
  setTimeout(()=>{  
  tlPages = gsap.timeline({ paused: false });
  tlPages.to(el, { 
  autoAlpha: 1, 
  duration: duration, 
  ease: "power1.in",
  });
}, timeout*1000); 
}