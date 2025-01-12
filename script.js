// Selectors
const taskForm = document.getElementById("task-form");

// Variables

// Create a task
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const addTaskInput = document.getElementById("add-task-input");
  const addTaskInputValue = addTaskInput.value.trim();
  const taskContainer = document.getElementById("task-container");
  const editIcon = `<svg
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
  const deleteIcon = `<svg
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

  if (addTaskInputValue === "") {
    alert("Please enter a task!");
  } else {
    const taskDiv = document.createElement("div");
    taskDiv.innerHTML = `<input type="text" class="task-input" value="${addTaskInputValue}" readonly>
            <div class="button-group">
            </div>`;
    taskDiv.classList.add("task-div");
    taskContainer.prepend(taskDiv);

    // Creating Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = deleteIcon;
    deleteBtn.classList.add("delete-button");
    taskDiv.lastElementChild.appendChild(deleteBtn);

    // Creating Edit button
    const editBtn = document.createElement("button");
    editBtn.innerHTML = editIcon;
    editBtn.classList.add("edit-button");
    taskDiv.lastElementChild.prepend(editBtn);

    // Deleting a task
    deleteBtn.addEventListener("click", (event) => {
      taskDiv.remove();
    });

    // Editing a task
    const taskValue = taskDiv.firstChild;
    editBtn.addEventListener("click", () => {
      if (taskValue.hasAttribute("readonly") === true) {
        taskValue.removeAttribute("readonly");
        taskValue.focus();
        editBtn.innerHTML = "Save";

        // move cursor to the end of the text
        const length = taskValue.value.length;
        taskValue.setSelectionRange(length, length);
      } else {
        taskValue.setAttribute("readonly", "readonly");
        editBtn.innerHTML = editIcon;
      }
    });
  }

  addTaskInput.value = "";
});
