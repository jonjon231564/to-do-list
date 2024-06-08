import _ from 'lodash'
import './style.css'
import { format } from 'date-fns'

let newProject = ''

function saveProjectsToLocalStorage(projects) {
    localStorage.setItem('projects', JSON.stringify(projects))
}

function getProjectsFromLocalStorage() {
    let projects = localStorage.getItem('projects')
    return projects ? JSON.parse(projects) : []
}

function createProject() {
    let formContainer = document.getElementById('form-container')

    let form = document.createElement('form')
    form.id = 'projectForm'

    let titleGroup = document.createElement('div')
    titleGroup.className = 'form-group'
    let titleLabel = document.createElement('label')
    titleLabel.htmlFor = 'title'
    titleLabel.textContent = 'Title:'
    let titleInput = document.createElement('input')
    titleInput.type = 'text'
    titleInput.id = 'projectTitle'
    titleInput.name = 'title'
    titleInput.required = true
    titleGroup.appendChild(titleLabel)
    titleGroup.appendChild(titleInput)

    let descriptionGroup = document.createElement('div')
    descriptionGroup.className = 'form-group'
    let descriptionLabel = document.createElement('label')
    descriptionLabel.htmlFor = 'description'
    descriptionLabel.textContent = 'Description:'
    let descriptionTextarea = document.createElement('textarea')
    descriptionTextarea.id = 'projectDescription'
    descriptionTextarea.name = 'description'
    descriptionTextarea.rows = '4'
    descriptionTextarea.required = true
    descriptionGroup.appendChild(descriptionLabel)
    descriptionGroup.appendChild(descriptionTextarea)

    let dueDateGroup = document.createElement('div')
    dueDateGroup.className = 'form-group'
    let dueDateLabel = document.createElement('label')
    dueDateLabel.htmlFor = 'dueDate'
    dueDateLabel.textContent = 'Due Date:'
    let dueDateInput = document.createElement('input')
    dueDateInput.type = 'date'
    dueDateInput.id = 'projectDueDate'
    dueDateInput.name = 'dueDate'
    dueDateInput.required = true
    dueDateGroup.appendChild(dueDateLabel)
    dueDateGroup.appendChild(dueDateInput)

    let priorityGroup = document.createElement('div')
    priorityGroup.className = 'form-group'
    let priorityLabel = document.createElement('label')
    priorityLabel.htmlFor = 'priority'
    priorityLabel.textContent = 'Priority Level:'
    let prioritySelect = document.createElement('select')
    prioritySelect.id = 'projectPriority'
    prioritySelect.name = 'priority'
    prioritySelect.required = true
    let optionLow = document.createElement('option')
    optionLow.value = 'low'
    optionLow.textContent = 'Low'
    let optionMedium = document.createElement('option')
    optionMedium.value = 'medium'
    optionMedium.textContent = 'Medium'
    let optionHigh = document.createElement('option')
    optionHigh.value = 'high'
    optionHigh.textContent = 'High'
    prioritySelect.appendChild(optionLow)
    prioritySelect.appendChild(optionMedium)
    prioritySelect.appendChild(optionHigh)
    priorityGroup.appendChild(priorityLabel)
    priorityGroup.appendChild(prioritySelect)

    let buttonGroup = document.createElement('div')
    buttonGroup.className = 'form-group'
    let submitButton = document.createElement('button')
    submitButton.type = 'submit'
    submitButton.textContent = 'Submit'
    buttonGroup.appendChild(submitButton)

    form.appendChild(titleGroup)
    form.appendChild(descriptionGroup)
    form.appendChild(dueDateGroup)
    form.appendChild(priorityGroup)
    form.appendChild(buttonGroup)

    formContainer.appendChild(form)

    form.addEventListener('submit', function(event) {
        event.preventDefault()

        let projectTitle = document.getElementById('projectTitle').value
        let projectDescription = document.getElementById('projectDescription').value
        let projectDueDate = document.getElementById('projectDueDate').value
        let projectPriority = document.getElementById('projectPriority').value

        let project = new Project(projectTitle, projectDescription, projectDueDate, projectPriority)
        project.displayProject()

        let projects = getProjectsFromLocalStorage()
        projects.push(project)
        saveProjectsToLocalStorage(projects)

        form.remove()
    })
}

function createTask(projectIndex) {
    let form = document.createElement('form')
    form.id = 'taskForm'

    let titleGroup = document.createElement('div')
    titleGroup.className = 'form-group'
    let titleLabel = document.createElement('label')
    titleLabel.htmlFor = 'title'
    titleLabel.textContent = 'Title:'
    let titleInput = document.createElement('input')
    titleInput.type = 'text'
    titleInput.id = 'taskTitle'
    titleInput.name = 'title'
    titleInput.required = true
    titleGroup.appendChild(titleLabel)
    titleGroup.appendChild(titleInput)

    let descriptionGroup = document.createElement('div')
    descriptionGroup.className = 'form-group'
    let descriptionLabel = document.createElement('label')
    descriptionLabel.htmlFor = 'description'
    descriptionLabel.textContent = 'Description:'
    let descriptionTextarea = document.createElement('textarea')
    descriptionTextarea.id = 'taskDescription'
    descriptionTextarea.name = 'description'
    descriptionTextarea.rows = '4'
    descriptionTextarea.required = true
    descriptionGroup.appendChild(descriptionLabel)
    descriptionGroup.appendChild(descriptionTextarea)

    let dueDateGroup = document.createElement('div')
    dueDateGroup.className = 'form-group'
    let dueDateLabel = document.createElement('label')
    dueDateLabel.htmlFor = 'dueDate'
    dueDateLabel.textContent = 'Due Date:'
    let dueDateInput = document.createElement('input')
    dueDateInput.type = 'date'
    dueDateInput.id = 'taskDueDate'
    dueDateInput.name = 'dueDate'
    dueDateInput.required = true
    dueDateGroup.appendChild(dueDateLabel)
    dueDateGroup.appendChild(dueDateInput)

    let priorityGroup = document.createElement('div')
    priorityGroup.className = 'form-group'
    let priorityLabel = document.createElement('label')
    priorityLabel.htmlFor = 'priority'
    priorityLabel.textContent = 'Priority Level:'
    let prioritySelect = document.createElement('select')
    prioritySelect.id = 'taskPriority'
    prioritySelect.name = 'priority'
    prioritySelect.required = true
    let optionLow = document.createElement('option')
    optionLow.value = 'low'
    optionLow.textContent = 'Low'
    let optionMedium = document.createElement('option')
    optionMedium.value = 'medium'
    optionMedium.textContent = 'Medium'
    let optionHigh = document.createElement('option')
    optionHigh.value = 'high'
    optionHigh.textContent = 'High'
    prioritySelect.appendChild(optionLow)
    prioritySelect.appendChild(optionMedium)
    prioritySelect.appendChild(optionHigh)
    priorityGroup.appendChild(priorityLabel)
    priorityGroup.appendChild(prioritySelect)

    let buttonGroup = document.createElement('div')
    buttonGroup.className = 'form-group'
    let submitButton = document.createElement('button')
    submitButton.type = 'submit'
    submitButton.textContent = 'Submit'
    buttonGroup.appendChild(submitButton)

    form.appendChild(titleGroup)
    form.appendChild(descriptionGroup)
    form.appendChild(dueDateGroup)
    form.appendChild(priorityGroup)
    form.appendChild(buttonGroup)

    newProject.appendChild(form)

    form.addEventListener('submit', function(event) {
        event.preventDefault()

        let taskTitle = document.getElementById('taskTitle').value
        let taskDescription = document.getElementById('taskDescription').value
        let taskDueDate = document.getElementById('taskDueDate').value
        let taskPriority = document.getElementById('taskPriority').value

        let task = new Task(taskTitle, taskDescription, taskDueDate, taskPriority)
        task.displayTask()

        let projects = getProjectsFromLocalStorage()
        projects[projectIndex].tasks = projects[projectIndex].tasks || []
        projects[projectIndex].tasks.push(task)
        saveProjectsToLocalStorage(projects)

        form.remove()
    })
}

class Project {
    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.tasks = []
    }

    displayProject() {
        newProject = document.createElement('div')
        newProject.className = 'project'
        document.body.appendChild(newProject)

        let projectHeading = document.createElement('h1')
        projectHeading.textContent = 'Project:'
        projectHeading.className = 'title'
        newProject.appendChild(projectHeading)

        let newProjectTitle = document.createElement('h1')
        newProjectTitle.textContent = this.title
        newProjectTitle.className = 'title'
        newProject.appendChild(newProjectTitle)

        let newProjectDescription = document.createElement('p')
        newProjectDescription.textContent = this.description
        newProjectDescription.className = 'description'
        newProject.appendChild(newProjectDescription)

        let newProjectDueDate = document.createElement('h6')
        newProjectDueDate.textContent = this.dueDate
        newProjectDueDate.className = 'dueDate'
        newProject.appendChild(newProjectDueDate)

        let newProjectPriority = document.createElement('h3')
        newProjectPriority.textContent = this.priority
        newProjectPriority.className = 'priority'
        newProject.appendChild(newProjectPriority)

        let now = new Date()
        let formattedDate = format(now, 'yyyy-MM-dd HH:mm:ss')
        let displayDate = document.createElement('h6')
        displayDate.textContent = 'Date made: ' + formattedDate
        newProject.appendChild(displayDate)

        let newTaskButton = document.createElement('button')
        newTaskButton.textContent = 'New Task'
        newProject.appendChild(newTaskButton)

        let deleteProjectButton = document.createElement('button')
        deleteProjectButton.textContent = 'Delete'
        newProject.appendChild(deleteProjectButton)

        let projectIndex = getProjectsFromLocalStorage().findIndex(proj => proj.title === this.title)

        deleteProjectButton.addEventListener('click', function() {
            let projects = getProjectsFromLocalStorage()
            projects.splice(projectIndex, 1)
            saveProjectsToLocalStorage(projects)
            newProject.remove()
        })

        newTaskButton.addEventListener('click', function() {
            newProject = newTaskButton.parentElement
            createTask(projectIndex)
        })

        if (this.tasks) {
            this.tasks.forEach(taskData => {
                let task = new Task(taskData.title, taskData.description, taskData.dueDate, taskData.priority)
                task.displayTask()
            })
        }
    }
}

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

    displayTask() {
        let newTask = document.createElement('div')
        newTask.className = 'task'
        newProject.appendChild(newTask)

        let taskHeading = document.createElement('h1')
        taskHeading.textContent = 'Task:'
        taskHeading.className = 'title'
        newTask.appendChild(taskHeading)

        let newTaskTitle = document.createElement('h1')
        newTaskTitle.textContent = this.title
        newTaskTitle.className = 'title'
        newTask.appendChild(newTaskTitle)

        let newTaskDescription = document.createElement('p')
        newTaskDescription.textContent = this.description
        newTaskDescription.className = 'description'
        newTask.appendChild(newTaskDescription)

        let newTaskDueDate = document.createElement('h6')
        newTaskDueDate.textContent = this.dueDate
        newTaskDueDate.className = 'dueDate'
        newTask.appendChild(newTaskDueDate)

        let newTaskPriority = document.createElement('h3')
        newTaskPriority.textContent = this.priority
        newTaskPriority.className = 'priority'
        newTask.appendChild(newTaskPriority)

        let now = new Date()
        let formattedDate = format(now, 'yyyy-MM-dd HH:mm:ss')
        let displayDate = document.createElement('h6')
        displayDate.textContent = 'Date made: ' + formattedDate
        newTask.appendChild(displayDate)

        let deleteTaskButton = document.createElement('button')
        deleteTaskButton.textContent = 'Delete'
        newTask.appendChild(deleteTaskButton)

        deleteTaskButton.addEventListener('click', function() {
            let projects = getProjectsFromLocalStorage()
            let projectIndex = projects.findIndex(proj => proj.title === newProject.querySelector('.title').textContent)
            projects[projectIndex].tasks = projects[projectIndex].tasks.filter(task => task.title !== newTaskTitle.textContent)
            saveProjectsToLocalStorage(projects)
            newTask.remove()
        })
    }
}

let projectButton = document.createElement('button')
projectButton.textContent = 'Create Project'
document.body.appendChild(projectButton)

projectButton.addEventListener('click', function() {
    createProject()
})

window.addEventListener('load', function() {
    let projects = getProjectsFromLocalStorage()
    projects.forEach(projectData => {
        let project = new Project(projectData.title, projectData.description, projectData.dueDate, projectData.priority)
        project.tasks = projectData.tasks || []
        project.displayProject()
    })
})
