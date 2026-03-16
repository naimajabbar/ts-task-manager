import type { Task } from '../models/tasks.js';

abstract class TaskManager {
    abstract addTask(id: number, title: string, description: string, status: 'pending' | 'in-progress' | 'completed'): void;

    abstract getTask(id: number): Task | undefined;

    abstract updateTask(id: number, title?: string, description?: string, status?: 'pending' | 'in-progress' | 'completed'): void;

    abstract deleteTask(id: number): void;
}
class InmemoryTaskManager extends TaskManager {
    private tasks: Task[] = [];

    addTask(id: number, title: string, description: string, status: 'pending' | 'in-progress' | 'completed'): void {
        const task: Task = { id, title, description, status };
        this.tasks.push(task);
    }

    getTask(id: number): Task | undefined {
        return this.tasks.find(task => task.id === id);
    }

    updateTask(id: number, title?: string, description?: string, status?: 'pending' | 'in-progress' | 'completed'): void {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            const task = this.tasks[taskIndex]!;
            if (title !== undefined) task.title = title;
            if (description !== undefined) task.description = description;
            if (status !== undefined) task.status = status;
        }
    }

    deleteTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}
export { InmemoryTaskManager };