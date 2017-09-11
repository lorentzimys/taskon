import tabMenu from "../tab-menu/tab-menu";
import filterPanel from "../filter-panel/filter-panel";

import TaskService from "../../services/TasksService"

import "./tasks.css";

const MODULE_NAME = 'tasks';

let tasks = () => {
    return {
        template: require('./tasks.html'),
        controller: 'TasksCtrl',
        controllerAs: 'tasks'
    }
};

export class TasksCtrl {
    constructor($scope) {
        this.taskService = new TaskService();

        this.taskTypes = this.taskService.getTaskTypes(); //.sort((a, b) => a.order < b.order);

        const taskTypeNames = this.taskTypes.map((t) => t.type);

        this.getCountByType = (type) => {
            return this.taskService.getTasksByType(type).length;
        };

        this.activeMenuItem = taskTypeNames[0];

        this.hasUnreadItems = (type) => {
            console.log(this.taskService.getTasksByType(type), type);

            const unreadCount = this.taskService
                .getTasksByType(type)
                .filter((task) => task.unread).length;

            return unreadCount ? true : false;
        };

        this.toggleMenu = (menuItem) => {
            this.activeMenuItem = menuItem.type;

            this.tasks = this.taskService.getTasksByType(this.activeMenuItem);
        };


        // this.tasksOfTypeCount = taskTypeNames.map((typeName) => {
        //     return {
        //         typeName: this.taskService.getTasksByType(typeName).length;
        //     }
        // });


        this.tasks = this.taskService.getAllTasks();

        console.log(taskTypeNames);
        console.log(this.tasks);

    }
}

angular.module(MODULE_NAME, [tabMenu, filterPanel])
    .directive('tasks', tasks)
    .controller('TasksCtrl', TasksCtrl);

export default MODULE_NAME;
