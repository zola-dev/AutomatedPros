const observer=new IntersectionObserver(o=>{o.forEach(t=>{if(t.isIntersecting)for(var n=0;n<document.getElementsByTagName("section").length;n++)if(document.getElementsByTagName("section")[n]){let e=document.getElementsByTagName("section")[n].id;t.target.id&&t.target.id==e&&(document.getElementById(e).children[0]?console.log(e.substring(0,e.indexOf("."))," cached ",e.substring(e.indexOf("."),e.length)):(t.target.innerHTML=`<object type="text/html" data=${e.substring(e.indexOf("."),e.length)}></object>`,fadeOut(t.target,.2,0),console.log(e.substring(0,e.indexOf("."))," lazy loaded ",e.substring(e.indexOf("."),e.length))))}})});for(var i=0;i<document.getElementsByTagName("section").length;i++)observer.observe(document.getElementsByTagName("section")[i]);function setSizes(){let o=1.1*container.offsetWidth;var t=container.children[0];t.src=`${url}/food.jpeg/?width=${o}&height=1027.4`,t.width=`${o}`,fadeOut(t,.2,.2);let n=100*(window.innerWidth-document.documentElement.clientWidth)/window.innerWidth;console.log("scroll",n),localStorage.setItem("img",JSON.stringify({width:o,scroll:n})),console.log("set from lazy")}window.addEventListener("resize",o=>{document.getElementById("food")&&(setSizes(),console.log("img resized"))}),document.getElementById("food")&&!imgDetails&&setSizes();
//# sourceMappingURL=lazyHTML.js.js.map