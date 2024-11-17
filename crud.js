

function addTask() {

    let inputData = document.getElementById("enterData");
    let inputDataValue = inputData.value.trim()

    let allTasksContainer = document.querySelector("#tasks")

    let liTag = document.createElement("li");

    liTag.innerHTML += `
    ${inputDataValue}
     <button class="edit">Edit</button>
     <button class="delete">Delete</button> `

    liTag.style.listStyleType = "none"

  
    allTasksContainer.appendChild(liTag)

    let editBtn = liTag.querySelector(".edit")
    editBtn.style.backgroundColor = "blue"

    let dlteBtn = liTag.querySelector(".delete")
    dlteBtn.style.backgroundColor = "red"

    inputData.value = ""
    
   dlteBtn.addEventListener("click",()=>{
    deleteTask(liTag)
    console.log("df is called");
})
function deleteTask(litag){
    let a=confirm("are you sure wanna delete the task")
    if(a){
        liTag.remove()
    }
}
editBtn.addEventListener("click",()=>{
    EditTask(liTag)
})
function EditTask(item){
    let b=prompt("Enter the data",item.firstChild.textContent)
    if(b!== null && b.trim()!==""){
        item.firstChild.textContent=b;
    }
}


}
