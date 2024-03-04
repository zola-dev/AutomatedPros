
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            for(var i=0; i<document.getElementsByTagName('section').length;i++) {  
                if(document.getElementsByTagName('section')[i]){
                    let id = document.getElementsByTagName('section')[i].id;
                    if(entry.target.id&&entry.target.id==id){
                    // console.log("entry found"); 
                        if(!document.getElementById(id).children[0]
                        ){
                            entry.target.innerHTML  = `<object type="text/html" data=${id.substring(id.indexOf("."),id.length)}></object>`;   
                            fadeOut(entry.target,.2,0);                      
                            console.log(id.substring(0,id.indexOf("."))," lazy loaded ",id.substring(id.indexOf("."),id.length));
                            // observer.disconnect(); 
                        }else{
                            console.log(id.substring(0,id.indexOf("."))," cached ",id.substring(id.indexOf("."),id.length));
                        }
                    }else{
                    // console.log("entry not found"); 
                    }        
                }
            }
    }
    });
});
for(var i=0; i<document.getElementsByTagName('section').length;i++) {  
    observer.observe(document.getElementsByTagName('section')[i]);
}
window.addEventListener("resize", (event) => {
    if(document.getElementById('food')){
    setSizes();
    console.log('img resized');
    }
});
if(document.getElementById('food')&&!imgDetails){
    setSizes() ;
}
function setSizes(){
  let width=container.offsetWidth*1.1;
  var img = container.children[0];
  img.src=`${url}/food.jpeg/?width=${width}&height=1027.4` 
  img.width=`${width}`;
  fadeOut(img,.2,.2);
  let scroll=100*(window.innerWidth - document.documentElement.clientWidth)/window.innerWidth;
  console.log('scroll',scroll); 
  localStorage.setItem('img', JSON.stringify({width:width,scroll:scroll}));
  console.log('set from lazy');
}