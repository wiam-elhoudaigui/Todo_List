
let tasks=[]

tasks=JSON.parse(localStorage.getItem("tasks"))


const affichetask =()=>{
    let cardes= ""
    tasks.forEach((e,i)=>{
        cardes +=`
        <div id="carde">
            <div><button class="btn" onclick="Checked(${i})"><input type="checkbox" class="check" ${e.completed ? 'checked' : ''}></button></div>
            <div class="p1"><p class="text" style="${e.completed ? 'text-decoration: line-through;' : ''}">${e.note}</p></div>
            <div><button class="btn" onclick="delet(${i})">X</button></div>
        </div>
        `
        
    })
    document.querySelector("#Card").innerHTML=cardes
    
}


affichetask()
const addtask =()=>{
    let input = document.querySelector(".inp").value
    if (input.trim()!==""){
        let task={
            id:tasks.length +1,
            note:input,
            completed: false
        }
        tasks.push(task)
        localStorage.setItem("tasks", JSON.stringify(tasks));
        affichetask()
        document.querySelector(".inp").value=""
    }
    
}


const delet =(i)=>{
    tasks.splice(i,1)
    localStorage.setItem("tasks", JSON.stringify(tasks));
    affichetask()
}




const Checked = (i) => {

    tasks[i].completed = !tasks[i].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    affichetask();

    
};


