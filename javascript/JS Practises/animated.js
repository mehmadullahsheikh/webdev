var crsr = document.querySelector("#cursor");
var crsrb = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",(dets) => {
    crsr.style.left = dets.clientX + "px";
    crsr.style.top= dets.clientY + "px";
    crsrb.style.left = dets.clientX - 150 + "px";
    crsrb.style.top= dets.clientY - 150 + "px";

})



gsap.to("#nav", {
    backgroundColor : "#000",
    height: "90px",
    duration:0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
    
})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger:"#main",
        scroller:"body",
        markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub:2
    }
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 3
    crsrb.style.border = " 0.5px solid #fff"
    crsr.style.backgroundColor = "transparent"
   })
})
