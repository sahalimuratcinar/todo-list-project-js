//Tüm elementleri seçme..
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstcardBody = document.querySelectorAll(".card-body")[0];//bu iekilde ilk kartı seçmiş oluyoruz..
const secondcardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){

    form.addEventListener("submit",addTodo);

}

function addTodo(e){

    const newTodo = todoInput.value.trim();//burada inputtan alınan todoyu newTodoya atıyoruz.. ve trim fn u ifadenin başına ve sonuna  boşluk gelmesin egeller..

    addTodoToUI(newTodo);

    console.log(newTodo);

    e.preventDefault();
}
function addTodoToUI(newTodo){

  /*  <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>*/
    //list item oluşturma..
    const listItem=document.createElement("li");
    //link oluşturma..
    const link=document.createElement("a");
    link.href="#";
    link.className="delete-item";
    link.innerHTML="<i class='fa fa-remove'></i>";

    listItem.className="list-group-item d-flex justify-content-between";
    //text node ekleme..
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    //todo liste listitem ekleme..
    todoList.appendChild(listItem);

    console.log(listItem);                   
}




