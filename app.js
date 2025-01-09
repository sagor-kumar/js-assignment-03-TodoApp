// Selectors
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");

// create a task

function createTask() {
  const task = taskInput.value;
  if (task === "") {
    alert("The field is empty!");
  } else {
    // create a task div
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-list");
    taskContainer.prepend(taskDiv); // prepend for keeping the latest task on top

    // create a task input field
    const taskName = document.createElement("input");
    taskName.setAttribute("readonly", "readonly"); // for making input field readonly
    taskName.setAttribute("type", "text");
    taskName.classList.add("task-input");
    taskDiv.appendChild(taskName);
    taskName.value = task;

    // create button group
    const taskButtonGroup = document.createElement("div");
    taskButtonGroup.classList.add("button-group");
    taskDiv.appendChild(taskButtonGroup);

    // edit button div
    const editButtonDiv = document.createElement("div");
    editButtonDiv.classList.add("edit-button");
    taskButtonGroup.appendChild(editButtonDiv);

    // delete button div
    const deleteButtonDiv = document.createElement("div");
    deleteButtonDiv.classList.add("delete-button");
    taskButtonGroup.appendChild(deleteButtonDiv);

    // edit button
    const editButton = document.createElement("button");
    editButtonDiv.appendChild(editButton);
    editButton.innerHTML = `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>`;

    // delete button
    const deleteButton = document.createElement("button");
    deleteButtonDiv.appendChild(deleteButton);
    deleteButton.innerHTML = `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>`;

    // Empty input field after adding a task
    taskInput.value = "";

    // delete task
    deleteButtonDiv.addEventListener("click", function () {
      taskDiv.remove();
    });

    // edit task
    editButtonDiv.addEventListener("click", () => {
      if (taskName.hasAttribute("readonly") === true) {
        taskName.removeAttribute("readonly");
        taskName.focus();
        editButton.innerHTML = "Save";
      } else {
        taskName.setAttribute("readonly", "readonly");
        editButton.innerHTML = `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>`;
      }
    });
  }
}
