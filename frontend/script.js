const form = document.querySelector('#form-task');
const ul = document.querySelector('.task-list');


//source of truth
let tasks = [];

const render = ()=> {
    ul.innerHTML = "";

    tasks.forEach(data => {
        //li element
        const newLi = document.createElement('li');
        newLi.setAttribute('class', 'task-item');
        //div element(description)
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'task-info');

        //name and desctiption element
        const newH4 = document.createElement('h4');
        const newP = document.createElement('p');
        newH4.textContent = data.name;
        newP.textContent = data.description;

        newDiv.append(newH4);
        newDiv.append(newP);
        newLi.append(newDiv);
        ul.append(newLi);

        return;
    })
}
const handleForm = (e)=> {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    const description = e.target.elements.description.value.trim();

    if (name !== "" && description !== "") {
        tasks.push({
            id: Date.now(),
            name: name,
            description: description,
        })
    }
    render();
    e.target.reset();
}

form.addEventListener('submit', handleForm);