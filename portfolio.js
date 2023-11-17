const openBtn =document.querySelector(".openBtn");
const closeBtn =document.querySelector(".closeBtn");
const main =document.querySelector(".main");
const mobile =document.querySelector(".mobile");



openBtn.addEventListener('click',  function(){
    mobile.classList.remove('hidden')
    mobile.style.display ="block"
    main.style.display ="none"
});



closeBtn.addEventListener('click',  function(){
   
    mobile.style.display ="none"
    main.style.display ="block"
    mobile.classList.addd('hidden')
});