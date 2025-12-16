let h1 = document.querySelector('h1');
let input = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener('click', function() {
   let task = document.createElement('li');
   task.innerText = input.value;
   ul.appendChild(task);
   input.value = ''; 
   let delBtn = document.createElement('button');
   delBtn.innerText = 'Delete';
   delBtn.classList.add('delete');
   task.appendChild(delBtn);
});

ul.addEventListener('click', function(event) {
    if (event.target.nodeName == 'BUTTON'){
        let delTask = event.target.parentElement;
        delTask.remove();
    }
});