import Status from './Status';

interface Todo {
    id?: number;
    title: string;
    content: string;
    status: Status;
    createdAt: Date;
    updatedAt?: Date;
}

export default Todo;