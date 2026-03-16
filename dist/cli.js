import { InmemoryTaskManager } from './services/task-manager.js';
const taskManager = new InmemoryTaskManager();
const args = process.argv.slice(2);
const command = args[0];
switch (command) {
    case 'add': {
        if (!args[1] || !args[2]) {
            console.log('Error: add command requires id and title');
            break;
        }
        const id = parseInt(args[1], 10);
        const title = args[2];
        const description = args[3] || '';
        const status = args[4];
        taskManager.addTask(id, title, description, status);
        console.log('Task added!');
        break;
    }
    case 'list': {
        console.log('All tasks:');
        const tasks = taskManager.getAllTasks();
        tasks.forEach(task => {
            console.log(`ID: ${task.id}, Title: ${task.title}, Description: ${task.description}, Status: ${task.status}`);
        });
        break;
    }
    case 'update': {
        if (!args[1]) {
            console.log('Error: update command requires id');
            break;
        }
        const id = parseInt(args[1], 10);
        const title = args[2]; // optional
        const description = args[3]; // optional
        const status = args[4]; // optional
        taskManager.updateTask(id, title, description, status);
        console.log('Task updated!');
        break;
    }
    case 'delete': {
        if (!args[1]) {
            console.log('Error: delete command requires id');
            break;
        }
        const id = parseInt(args[1], 10);
        taskManager.deleteTask(id);
        console.log(`Task deleted!`);
        break;
    }
    default: {
        console.log('Unknown command. Use add, list, update, or delete.');
        break;
    }
}
//# sourceMappingURL=cli.js.map