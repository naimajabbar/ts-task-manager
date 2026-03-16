import { InmemoryTaskManager } from './services/task-manager.js';

const taskManager = new InmemoryTaskManager();

// Get command and arguments from the CLI input
const args = process.argv.slice(2); // Skip the first two (node and script name)
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
        const status = args[4] as 'pending' | 'in-progress' | 'completed';
        taskManager.addTask(id, title, description, status);
        console.log('Task added!');
        break;
    }
    case 'list': {
        console.log('All tasks:');
        // You can customize how you print them
        console.log(taskManager['tasks']); // Access private tasks for demonstration
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
        const status = args[4] as 'pending' | 'in-progress' | 'completed'; // optional
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
            console.log('Task deleted!');
            break;
        }
    }