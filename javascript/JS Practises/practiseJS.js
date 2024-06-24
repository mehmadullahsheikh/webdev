 var stat = document.querySelector("h5");
 
 var add = document.querySelector('#add');
 var check = 0;
 add.addEventListener("click", () => {
   if(check == 0){
   stat.innerHTML = "Now Friends";
   stat.style.color = "green";
   add.classList.toggle('box');
   
   add.style.backgroundColor = "green";
   add.innerHTML = "Remove Friend";
   check = 1;
}
else {
   stat.innerHTML = "Stranger";
   stat.style.color = "red";
   add.classList.toggle('box');
   
   add.style.backgroundColor = "cadetblue";
   add.innerHTML = "Add Friend";
   check = 0;
}
 })

 
 add.addEventListener('mouseleave', () => {
      add.classList.remove('box')
 });
 