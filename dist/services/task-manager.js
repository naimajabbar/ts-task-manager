class TaskManager {
}
class InmemoryTaskManager extends TaskManager {
    tasks = [];
    addTask(id, title, description, status) {
        const task = { id, title, description, status };
        this.tasks.push(task);
    }
    getTask(id) {
        return this.tasks.find(task => task.id === id);
    }
    updateTask(id, title, description, status) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            const task = this.tasks[taskIndex];
            if (title !== undefined)
                task.title = title;
            if (description !== undefined)
                task.description = description;
            if (status !== undefined)
                task.status = status;
        }
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    getAllTasks() {
        return this.tasks;
    }
}
export { InmemoryTaskManager };
//# sourceMappingURL=task-manager.js.map