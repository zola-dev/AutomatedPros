var imgDetails=JSON.parse(localStorage.getItem("img")),url="https://www.shebs-braids.area36000.com:8080/AutomatedProsJpeg";if(imgDetails&&document.URL.includes("file:///C:/AutomatedPros/main.html")){var scrollPX=imgDetails.scroll*window.innerWidth/100;console.log("width: ",.45*(window.innerWidth-scrollPX)*1.1," px");const t=document.getElementsByTagName("head")[0];let e=document.createElement("link");e.rel="preload",e.as="image",e.type="image/jpeg",e.href=`${url}/food.jpeg/?width=${imgDetails.width}&height=1027.4`,t.appendChild(e)}function fadeOut(t,e,a){"object"!=typeof t&&(t=document.getElementById(t)),setTimeout(()=>{tlPages=gsap.timeline({paused:!1}),tlPages.to(t,{autoAlpha:1,duration:e,ease:"power1.in"})},1e3*a)}
//# sourceMappingURL=preload.js.js.map