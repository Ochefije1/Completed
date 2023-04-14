// CLASS ACTIVITY 

 // LIST OF TASK
var tasks =[
    {name:'coding challenge', desc:'Google hackerton to commerce on the the 6 of March.', completed:false, dueDate:'12/4/2023'}, 
    {name:'Fix bugs', desc:"Assigned by the CTO. has to get this done to have my slice.", completed:true, dueDate:'6/4/2023'},
    {name:'watch movie', desc:'Man has to rest; all work and no play makes Rust a blunt dude', completed:false, dueDate:'144/2023'}
]

// GETTING ACCESS TO THE ELEMENTS IN THE DOCUMENT BY THEIR IDS

var panel = document.getElementById('panel')
const btnAdd = document.getElementById('btnAdd')
const toDo = document.getElementById('todo')
const completed = document.getElementById('completed')

// ATTACHING EVENT LISTENER TO THE TODO ELEMENT

toDo.addEventListener('click', (e)=>{
    // returns all tasks when 
    e.preventDefault()

    // a function that clears the panel element
    clearPanel()
    // a function that displays all the tasks on the panel elements 
    createTask(tasks)
})


completed.addEventListener('click', (e)=>{
    // this returns only completed tasks when clicked
    e.preventDefault()

    clearPanel()

    // Filter the tasks to return only the completed tasks
    var completedTasks = tasks.filter((task)=>task.completed === true)

    // displays only completed tasks
    createTask(completedTasks)
     
})

const createTask=(tasks)=>{
    for (let task of tasks){

        // CREATE A DIV ELEMENT FOR CONTAIN THE TASK
        const taskDiv = document.createElement('div')
        taskDiv.className = "bg-slate-300 rounded-md w-full"

        // CREATE A DIV FOR THE DESCRIPTION PARAGRAPH
        const descDiv = document.createElement('div')
        descDiv.className = "flex justify-center bg-slate-200 border-b-2 border-white"
    
        // CREATE A DIV THAT WILL CONTAIN THE DATE AND THE TASK STATUS (COMPLETED OR UNCOMPLETED)
        const dateDiv = document.createElement('div')
        dateDiv.className = "flex justify-between bg-slate-400 border-b-2 border-white p-5"

        // CREATE A H2 ELEMENT FOR THE TITLE
        const title = document.createElement('h2')
        title.className ="text-center text-xl text-slate-500 bg-slate-300 p-5"
        title.innerText = task.name;

          // CREATE A PARAGRAPH ELEMENT FOR THE TASK DESCRIPTION 
        const desc = document.createElement('p')
        desc.className ="text-center text-md text-white bg-slate-400 p-2"
        desc.innerText = task.desc;
    
        // CREATE A PARAGRAPH ELEMENT TO DISPLAY THE TASK STATUS
        const completedP = document.createElement('p')
        completedP.className = `p-2 rounded-md font-semibold text-md ${task.completed? 'bg-green-500' : 'bg-red-500'}`
        completedP.innerText = `${task.completed? 'Completed' : 'Uncompleted'}`;
    
        // CREATE A PARAGRAPH ELEMENT FOR THE TASK DUE DATE 
        const dueDateP = document.createElement('p')
        dueDateP.className ="text-center w-full"
        dueDateP.innerText = task.dueDate;

        // ADD THE DUE DATE AND COMPLETED PARAGRAPH ELEMENTS TOT HE DATE DIV
        dateDiv.appendChild(dueDateP)
        dateDiv.appendChild(completedP)
    
        // ADD THE DESCRIPTION P ELEMENT TO THE DESCRIPTION DIV
        descDiv.appendChild(desc)
    
        // ADD THE TITLE , DESCRIPTION DIV AND THE DATE DIV TO THE TASK CONTAINER
        taskDiv.appendChild(title)
        taskDiv.appendChild(descDiv)
        taskDiv.appendChild(dateDiv)
        
        // ADD THE TASK CONTAINER TO THE PANEL (IN THE HTML FILE)
        panel.appendChild(taskDiv)
}
}

const clearPanel=()=>{

    // Clear the panel element by removing every child node

    while (panel.hasChildNodes()){
        panel.removeChild(panel.firstChild)
    }
}