const arrTransform = 
["tf-00px","tf-150px","tf-300px","tf-450px","tf-600px","tf-750px","tf-900px"] ;

const left = document.querySelector(".buttonleft") ;
const right = document.querySelector(".buttonright") ;

const listData = document.querySelectorAll(".dataItemSlider");

left.addEventListener("click",(e) => {
    e.preventDefault() ;
    listData.forEach(elem => {
        let check = false ;
        let pos ;
        let items ;
        let classList = elem.classList ;
        classList.forEach( item => {
            if(arrTransform.indexOf(item)!=-1) {
                check = true ; 
                pos = arrTransform.indexOf(item) ;
                items = item ;
            }
        })
        if(pos===0) { return }
        elem.classList.remove(items);
        elem.classList.add(arrTransform[pos-1]);
    })
})
right.addEventListener("click",(e) => {
    e.preventDefault() ;
    listData.forEach(elem => {
        let check = false ;
        let pos ;
        let items ;
        let classList = elem.classList ;
        classList.forEach( item => {
            if(arrTransform.indexOf(item)!=-1) {
                check = true ; 
                pos = arrTransform.indexOf(item) ;
                items = item ;
            }
        })
        if(pos===6) { return }
        elem.classList.remove(items);
        elem.classList.add(arrTransform[pos+1]);
    })
})