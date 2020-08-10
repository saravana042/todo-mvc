class Modal {
    constructor() {
        this.todos = [
            { id: 1, text: 'This is first todo', completed: false },
            { id: 2, text: 'This is second todo', completed: false },
        ]
    }

    addTodo(todoText) {
        const todo = {
            id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
            text: todoText,
            completed: false
        }

        this.todos.push(todo)
    }

    editTodo(id, todoText) {

    }
}

class View {
    constructor() {

    }
}

class Controller {
    constructor(model, view) {
        this.modal = model
        this.view = view
    }
}

const app = new Controller(new Modal(), new View())