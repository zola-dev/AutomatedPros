var container = document.getElementById('food');
var img = container.children[0];
if(imgDetails){
imgDetails=JSON.parse(localStorage.getItem('img'));
img.src=`${url}/food.jpeg/?width=${imgDetails.width}&height=1027.4` ;
img.width=`${imgDetails.width}`;
fadeOut(img,.2,.4);
console.log('set from get');
}
