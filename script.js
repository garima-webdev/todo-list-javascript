


const taskInput=document.getElementById("taskInput");
const addBtn=document.getElementById("addBtn");
const taskList=document.getElementById("taskList");
const allBtn=document.getElementById("allBtn");
const activeBtn=document.getElementById("activeBtn");
const completedBtn=document.getElementById("completedBtn");
const clearBtn=document.getElementById("clearBtn");

function showTasks(taskArray){
 console.log("tasks received",taskArray)

   taskList.innerHTML="";

   taskArray.forEach((task)=>{
      console.log("displaying",task);
      displayTask(task);
   })
}

allBtn.addEventListener("click",()=>{
   console.log("clicked");
  showTasks(tasks);
});

activeBtn.addEventListener("click",()=>{
   console.log("active task");
   const activeTasks=tasks.filter(task=>!task.completed);
   showTasks(activeTasks);
})

completedBtn.addEventListener("click",()=>{
   const completedTasks=tasks.filter(task=>task.completed);
   showTasks(completedTasks)
})

clearBtn.addEventListener("click",()=>{
   tasks=tasks.filter(task=>!task.completed);

   localStorage.setItem("tasks",JSON.stringify(tasks));

   showTasks(tasks);
})

let tasks=JSON.parse(localStorage.getItem("tasks"))||[];

// function to display task

 function displayTask(task){
    const li=document.createElement("li");
   //  li.textContent=task;

    const span=document.createElement("span");
    span.textContent=task.text;
    
   if(task.completed){
      span.style.textDecoration="line-through";
   }

    const completeBtn=document.createElement("button");
    completeBtn.textContent=task.completed?"Undo":"Complete";

   
    completeBtn.addEventListener("click",()=>{
      task.completed=!task.completed;

      if(task.completed){
         span.style.textDecoration="line-through";
         completeBtn.textContent="undo";
      }else{
         span.style.textDecoration="none";
         completeBtn.textContent="complete";
      }
       localStorage.setItem("tasks",JSON.stringify(tasks));
    })

   

    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";


    deleteBtn.addEventListener("click",()=>{
      li.remove();

      // delete task from browser
      tasks=tasks.filter(t=>t!==task);

      localStorage.setItem("tasks",JSON.stringify(tasks));
    })



    // complete task
//  li.addEventListener("click",()=>{
//     li.classList.toggle("completed");
//  })

// //  delete button
// const button=document.createElement("button");
// button.textContent="Delete";
// button.addEventListener("click",()=>{
//     li.remove();
// })
 li.appendChild(span);
 li.appendChild(completeBtn);
 li.appendChild(deleteBtn);

 taskList.appendChild(li);

 }

//  display saved tasks when page loads
tasks.forEach((task) => {
 displayTask(task);
    
});
// addnew tasks

addBtn.addEventListener("click",()=>{
 const taskText=taskInput.value.trim();

//  taskList.appendChild(li);
   if(taskText===""){
    return;
   } 
   
   const newTask={
      text:taskText,
      completed:false
   };

   tasks.push(newTask);

   localStorage.setItem("tasks",JSON.stringify(tasks));
   

//    add tasks to array



// store array in browser


// display tasks
displayTask(newTask);




taskInput.value="";
//  console.log("button clicked");

 
});
 taskInput.addEventListener("keydown",(event)=>{
      if(event.key==="Enter"){
        console.log(event.key);
         event.preventDefault();
         addBtn.click();
      }
   })



// const taskInput=document.getElementById("taskInput");
// const addBtn=document.getElementById("addBtn");
// const taskList=document.getElementById("taskList");

// const tasks=JSON.parse(localStorage.getItem("tasks"))||[];

// tasks.forEach((task)=>{
//   displayTask(task);
// })

// function displayTask(task){
//       const li=document.createElement("li");
//       li.textContent=task;

//       const button=document.createElement("button");
//       button.textContent="Delete";
//       li.appendChild(button);

//       button.addEventListener("click",()=>{
//          li.remove()
//       })

//       taskList.appendChild(li);
//    }

// addBtn.addEventListener("click",()=>{
//    const task=taskInput.value.trim();

//    if(task===""){
//       return;
//    }

   
//    const li=document.createElement("li");
//    li.textContent=task;
//    taskList.appendChild(li);

//    li.addEventListener("click",()=>{
//       li.classList.toggle("completed");
//    })

//    const button=document.createElement("button");
//    button.textContent="Delete";
//    li.appendChild(button);
    
//    button.addEventListener("click",()=>{
//       li.remove();
//    })

//    tasks.push(task);

//    localStorage.setItem("tasks",JSON.stringify(tasks));

//     taskInput.value="";
   
// })
