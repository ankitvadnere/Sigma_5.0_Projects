const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Button Clicked");
    })
})