`use strict`;
// select inputs
const titleEl = document.getElementById(`title`),
  addEl = document.getElementById(`add`),
  tasksEl = document.getElementById(`tasks`),
  dbOneEl = document.getElementById(`db-one`),
  dbTwoEl = document.getElementById(`db-two`),
  dbContainerEl = document.getElementById(`db-container`)
// global variables
let data = [];

// functions
function init() {
  addItemsToDom(data);
}

function addItemsToDom(items) {
  dbContainerEl.innerHTML = null;
  if (items.length > 0) {
    items.forEach((item) => {
      addItemToDom(item);
    });
  }
}

function addItemToDom(item) {
  const { title, id } = item;
  console.log(item);
  const listEl = document.createElement(`li`);
  listEl.classList.add(`db-two`);
  listEl.innerHTML = `<div class="db-two" id="db-two">
        <div class="box-div">
          <span class="db-title">${title}</span>
        </div>
        <div class="changes">
          <button class="btn-edit" onclick="editedItem(${id})">
            <i class="fa-solid fa-pencil"></i>
          </button>
          <button class="btn-delete" onclick="deletedItem(${id})">
            <i class="fa-solid fa-trash-arrow-up"></i>
          </button>
        </div>
      </div>`;
  dbContainerEl.appendChild(listEl);
}

function deletedItem(id){
  data.filter((item) =>{
    item.id !== id;
    addItemsToDom(data);
  })
}

// eventListeners
addEl.addEventListener(`click`, () =>{
  const input = titleEl.value;
  if(input){
    let newItem = {
      id: Date.now(),
      title:input
    }
    data.push(newItem);
  console.log(addItemsToDom(data))
  }else{
    alert(`input is required`)
  }
})

// init settings
init();
