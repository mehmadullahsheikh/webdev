var ans = new Promise((res,rej) => {
    var n = Math.floor(Math.random()*10);

    if(n<5){
        return res();
    }
    else {
        return rej();
    }
});

ans.then(function () {
      console.log('below');
})
.catch(function () {
    console.log('above');
})


function abcd() {
    fetch('https://randomuser.me/api/')
    .then(function (raw) {
          return raw.json();
    })
    .then(function (data) {
          console.log(data);
    });
}
abcd();
 
 async function abcd() {
  let raw = await  fetch('https://randomuser.me/api/')
    let ans = await raw.json();
    console.log(ans);
}
abcd();
