//Define UI element
let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clrBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#add_task');

//Define event listner 
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clrBtn.addEventListener('click', clearTask);
filter.addEventListener('keyup', filterTask);


//Define Funtion
function addTask(e){
    if(taskInput.value==='')
    {
        alert('Add a task');
    }
    else
    {
        //Create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML='X';
        li.appendChild(link);
        taskList.appendChild(li);
        taskInput.value='';

    }
    e.preventDefault();
}

//Remove Task
function removeTask(e)
{
    if(e.target.hasAttribute('href'))
    {
        if(confirm('Are you sure?') )
        {
            e.target.parentElement.remove();
        }
    }
}

//Clear Task
function clearTask(e)
{
    if(confirm('Are you confirm to delete all task'))
    {
        taskList.innerHTML='';
    }
}

//Filter Task
function filterTask(e)
{
    let text = e.target.value.toLowerCase();
    //console.log(text);
    document.querySelectorAll('li').forEach(task => {
        let item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1)
        {
            task.style.display = 'block';
        }
        else
        {
            task.style.display='none';
        }
    })
}