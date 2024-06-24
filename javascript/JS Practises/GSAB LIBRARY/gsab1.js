
gsap.to("#page2 h1",{
    transform:"translateX(-68%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true


    }
})
gsap.from("#page3 #box",{
    scale:0,
    opacity:0,
    rotate:360,
    
    duration:2,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 550%",
        scrub:1

    }
   
})
