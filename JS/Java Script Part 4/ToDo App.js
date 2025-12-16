let todo = [];
while(true){
    let choice = prompt("Enter a choice");
    if (choice == 'quit'){
        console.log("Quiting");
        break;
    }

    if (choice == 'add'){
        let task = prompt("Enter the task");
        todo.push(task);
    } else if (choice == 'delete'){
        let delTask = prompt("Enter the index of the task you want to delete");
        todo.splice(delTask, 1);
    } else if (choice == 'list'){
        for (let i = 0; i < todo.length; i++){
            console.log(`${i}: ${todo[i]}`);
        }
    } else {
        console.log("Wrong choice");
    }
}