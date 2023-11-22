const imgList = document.querySelectorAll(".selectImg") ;
const imgReceiver = document.querySelector(".imgReceiver");

imgList.forEach( elem => {
    elem.addEventListener("click", (e) => {
        imgReceiver.src=elem.src;
    } )
})