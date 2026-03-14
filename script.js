const img = document.querySelector(".about-img")

window.addEventListener("scroll",function(){
    const position = img.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if(position < screenPosition){
        img.classList.add("show");
    }
});