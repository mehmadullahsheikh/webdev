var main = document.querySelector('#main')
var crsr = document.querySelector('i')

main.addEventListener('mousemove', (event)=> {
    crsr.style.top = event.clientY + 'px';
    crsr.style.left = event.clientX + 'px';
})