import Todo from '../interfaces/Todo';
import Status from '../interfaces/Status';
class TodoManagement {
    private static counter = 0;
    todos: Array<Todo>;

    constructor() {
        this.todos = new Array();
    }

    add(todo: Todo) {
        console.log('add function')
        todo.id = TodoManagement.counter++;
        this.todos.push(todo);
    }

    remove(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    update(todo: Todo) {
        const targetTodo = this.todos[this._findTodoIndex(todo.id)];
        targetTodo.title = todo.title;
        targetTodo.content = todo.content;
        targetTodo.status = todo.status;
        targetTodo.updatedAt = new Date();
    }

    _findTodoIndex(id: number | undefined) {
        if (id === undefined) {
            throw new Error('id is required');
        }
        return this.todos.findIndex(todo => todo.id === id);
    }

    getTodos() {
        return this.todos;
    }

    getTodoById(id: number) {
        return this.todos.find(todo => todo.id === id);
    }

    getTodosByStatus(status: Status) {
        return this.todos.filter(todo => todo.status === status);
    }
}

export default TodoManagement;