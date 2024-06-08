import _ from 'lodash';
import './style.css';

class Project {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class ProjectView {
    constructor(project) {
        this.project = project;
    }

    render() {
        let newProject = document.createElement('div');
        newProject.className = 'project';
        document.body.appendChild(newProject);

        let newProjectTitle = document.createElement('h1');
        newProjectTitle.textContent = this.project.title;
        newProjectTitle.className = 'title';
        newProject.appendChild(newProjectTitle);

        let newProjectDescription = document.createElement('p');
        newProjectDescription.textContent = this.project.description;
        newProjectDescription.className = 'description';
        newProject.appendChild(newProjectDescription);

        let newProjectDueDate = document.createElement('h6');
        newProjectDueDate.textContent = this.project.dueDate;
        newProjectDueDate.className = 'dueDate';
        newProject.appendChild(newProjectDueDate);

        let newProjectPriority = document.createElement('h3');
        newProjectPriority.textContent = this.project.priority;
        newProjectPriority.className = 'priority';
        newProject.appendChild(newProjectPriority);

        const newTaskButton = document.createElement('button');
        newTaskButton.textContent = 'New Task';
        newProject.appendChild(newTaskButton);
    }
}

function createProjectForm() {
    const formContainer = document.getElementById('form-container');

    const form = document.createElement('form');
    form.id = 'projectForm';

    const titleGroup = createFormGroup('Title:', 'text', 'projectTitle', 'title');
    const descriptionGroup = createFormGroup('Description:', 'textarea', 'projectDescription', 'description');
    const dueDateGroup = createFormGroup('Due Date:', 'date', 'projectDueDate', 'dueDate');
    const priorityGroup = createPriorityGroup();

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'form-group';
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    buttonGroup.appendChild(submitButton);

    form.appendChild(titleGroup);
    form.appendChild(descriptionGroup);
    form.appendChild(dueDateGroup);
    form.appendChild(priorityGroup);
    form.appendChild(buttonGroup);

    formContainer.appendChild(form);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let projectTitle = document.getElementById('projectTitle').value;
        let projectDescription = document.getElementById('projectDescription').value;
        let projectDueDate = document.getElementById('projectDueDate').value;
        let projectPriority = document.getElementById('projectPriority').value;

        const project = new Project(projectTitle, projectDescription, projectDueDate, projectPriority);
        const projectView = new ProjectView(project);
        projectView.render();

        form.remove();
    });
}

function createFormGroup(labelText, inputType, inputId, inputName) {
    const group = document.createElement('div');
    group.className = 'form-group';
    const label = document.createElement('label');
    label.htmlFor = inputId;
    label.textContent = labelText;
    let input;
    if (inputType === 'textarea') {
        input = document.createElement('textarea');
        input.rows = '4';
    } else {
        input = document.createElement('input');
        input.type = inputType;
    }
    input.id = inputId;
    input.name = inputName;
    input.required = true;
    group.appendChild(label);
    group.appendChild(input);
    return group;
}

function createPriorityGroup() {
    const group = document.createElement('div');
    group.className = 'form-group';
    const label = document.createElement('label');
    label.htmlFor = 'projectPriority';
    label.textContent = 'Priority Level:';
    const select = document.createElement('select');
    select.id = 'projectPriority';
    select.name = 'priority';
    select.required = true;
    const options = ['low', 'medium', 'high'];
    options.forEach(optionValue => {
        const option = document.createElement('option');
        option.value = optionValue;
        option.textContent = optionValue.charAt(0).toUpperCase() + optionValue.slice(1);
        select.appendChild(option);
    });
    group.appendChild(label);
    group.appendChild(select);
    return group;
}

const projectButton = document.createElement('button');
projectButton.textContent = 'Create Project';
document.body.appendChild(projectButton);

projectButton.addEventListener('click', function() {
    createProjectForm();
});