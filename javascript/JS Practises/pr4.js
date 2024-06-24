var elem = document.querySelectorAll('#elem');

elem.forEach((imm)=> {
    var elemImage = imm.querySelector('#elem img');

    imm.addEventListener('mousemove' ,(dets) => {
        elemImage.style.left = dets.x + "px";
        // elemImage.style.top = dets.y + "px";
    })
    imm.addEventListener('mouseenter' , () => {
        elemImage.style.opacity = 1
        imm.style.backgroundColor = "red";

    })

     
    imm.addEventListener('mouseleave' , () => {
        elemImage.style.opacity = 0
        imm.style.backgroundColor = "transparent";

    })
    
})
