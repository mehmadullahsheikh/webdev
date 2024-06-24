var arr = [
    {dp:"/image/image.jpg/evening.avif",story:"/image/image.jpg/mountain.avif"

    },
    {dp:"/image/image.jpg/night.avif",story:"/image/image.jpg/rain.avif"

    },
    {
        dp:"/image/image.jpg/river.avif",story:"/image/image.jpg/shahrukh.img.jpg"
    },
    {
        dp:"/image/image.jpg/snow.avif",story:"/image/image.jpg/waterfall.avif"
        
    },

    
]
 var storiyan = document.querySelector(".storiyan")
 var clutter = ""
arr.forEach(function(elem,idx){
    clutter +=` <div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})

storiyan.innerHTML = clutter

storiyan.addEventListener("click", function(dets){
  
  document.querySelector('.full-screen').style.display = "block"
  document.querySelector('.full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`
  setTimeout(function(){
    document.querySelector('.full-screen').style.backgroundImage = "none"
  },3000)
})