const menuBtn = document.querySelector('.menu-btn')
const menumobile=document.querySelector('.menu-mobile')

menuBtn.addEventListener("click", ()=> {
    menumobile.classList.toggle("open");
});