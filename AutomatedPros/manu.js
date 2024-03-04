const pages=document.getElementsByClassName('justify-content-center')[0].children[0];
if(window.innerWidth==580){
    if(!pages.id){
        pages.id='pages';
        pages.children[0].children[2].style.display = "none";
    }
}
