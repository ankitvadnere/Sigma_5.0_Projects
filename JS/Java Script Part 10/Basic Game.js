let doremon = document.querySelector('.block');
let move = document.querySelector('input');

move.addEventListener('keydown', function(event){
    if(event.code == 'ArrowDown'){
        doremon.classList.add('down');
        doremon.classList.remove('up');
    } else if (event.code == 'ArrowUp'){
        doremon.classList.add('up');
        doremon.classList.remove('down');
    } else if (event.code == 'ArrowLeft'){
        doremon.classList.add('left');
        doremon.classList.remove('right');
    } else if (event.code == 'ArrowRight'){
        doremon.classList.add('right');
        doremon.classList.remove('left');
    }
});