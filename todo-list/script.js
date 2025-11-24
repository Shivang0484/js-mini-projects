let todoInput = document.querySelector("#todo-input");
let addBtn = document.querySelector(".add-btn");
let deleteBtn = document.querySelectorAll(".delete-btn");
let todoLists = document.querySelector(".todo-lists");

let taskList = [];

let renderList = () => {
  todoLists.innerHTML = "";

  if (taskList.length === 0) {
    let emptyMsg = document.createElement("h3");
    emptyMsg.classList.add("empty-msg");
    emptyMsg.innerText = "Add some tasks here...";
    todoLists.appendChild(emptyMsg);
  } else {
    taskList.map((obj) => {
      let listElem = document.createElement("div");
      listElem.classList.add("list");
      listElem.innerHTML = `
        <p class="task">${obj.title}</p> 
        `;
      todoLists.appendChild(listElem);

      let buttonElem = document.createElement("button");
      buttonElem.classList.add("delete-btn");
      buttonElem.innerText = "Delete";
      buttonElem.onclick = () => {
        deleteBtnClicked(obj.id);
      };
      listElem.appendChild(buttonElem);
    });
  }
};
renderList(taskList);

let addBtnClicked = () => {
  let obj = {
    id: Date.now(),
    title: todoInput.value,
  };

  if (todoInput.value === "") {
    alert("Enter a task first!");
  } else {
    taskList.unshift(obj);
    renderList(taskList);
    todoInput.value = "";
  }
};

let deleteBtnClicked = (id) => {
  let newTaskList = taskList.filter((obj) => {
    return obj.id !== id;
  });
  taskList = newTaskList;
  renderList(taskList);
};

addBtn.addEventListener("click", addBtnClicked);
