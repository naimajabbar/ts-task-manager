import type { Task } from '../models/tasks.ts';
declare abstract class TaskManager {
    abstract addTask(id: number, title: string, description: string, status: 'pending' | 'in-progress' | 'completed'): void;
    abstract getTask(id: number): Task | undefined;
    abstract updateTask(id: number, title?: string, description?: string, status?: 'pending' | 'in-progress' | 'completed'): void;
    abstract deleteTask(id: number): void;
    abstract getAllTasks(): Task[];
}
declare class InmemoryTaskManager extends TaskManager {
    private tasks;
    addTask(id: number, title: string, description: string, status: 'pending' | 'in-progress' | 'completed'): void;
    getTask(id: number): Task | undefined;
    updateTask(id: number, title?: string, description?: string, status?: 'pending' | 'in-progress' | 'completed'): void;
    deleteTask(id: number): void;
    getAllTasks(): Task[];
}
export { InmemoryTaskManager };
//# sourceMappingURL=task-manager.d.ts.map