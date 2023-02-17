var todos =[];
var choice = prompt("what would like todo");
while(choice !== "quit"){
    if(choice === "list"){
        console.log("*************");
        listTodos();
        console.log("*************");
    }
    else if(choice === "new"){
        createTodos();
    }
    else if(choice === "delete"){
        deleteTodos();
    }
    var choice = prompt("what would like todo");
}
console.log("OK, YOU QUIT THE APP");


function deleteTodos(){
    var del = prompt("enter the index of the todo");
    todos.splice(del, 1);
}
function createTodos(){
    var add = prompt("add your todos");
    todos.push(add);
}
function listTodos(){
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
}



