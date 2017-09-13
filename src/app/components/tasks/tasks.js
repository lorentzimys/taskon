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

        this.hasUnreadItems = (type) => {
            const unreadCount = this.taskService
                .getTasksByType(type)
                .filter((task) => task.unread).length;

            return unreadCount ? true : false;
        };

        this.toggleMenu = (menuItem) => {
            this.activeMenuItem = menuItem.type;

            this.tasks = this.taskService.getTasksByType(this.activeMenuItem);
        };

        this.togglePropCheckbox = (prop, e) => {

            // Если у target имеется value - значит это input
            if (e.target.value) {
                const propType = prop.type;

                (this.taskPropertyCollection.hasOwnProperty(propType)) ?
                    delete this.taskPropertyCollection[propType] :
                    this.taskPropertyCollection[propType] =  null;

                console.log(this.taskPropertyCollection);
            }

        };

        this.filterTasks = (t, i, a) => {
            let taskPropObj = {};


            t.taskProp.map(p => taskPropObj[p] = null);

            console.log(this.taskPropertyCollection === taskPropObj);

            return !(
                (JSON.stringify(this.taskPropertyCollection) !== JSON.stringify(taskPropObj)) ||
                t.text.indexOf(this.searchFieldValue) == -1
            )

        };

        this.activeMenuItem = taskTypeNames[0];

        this.searchFieldValue = '';

        this.taskPropertyCollection = {};


        // this.tasksOfTypeCount = taskTypeNames.map((typeName) => {
        //     return {
        //         typeName: this.taskService.getTasksByType(typeName).length;
        //     }
        // });

        this.tasks = this.taskService.getAllTasks();

        this.taskProps = this.taskService.getTasksProperties();


        console.log(taskTypeNames);
        console.log(this.tasks);
    }
}

angular.module(MODULE_NAME, [tabMenu, filterPanel])
    .directive('tasks', tasks)
    .controller('TasksCtrl', TasksCtrl)
    .animation('.task-row', ['$animateCss', ($animateCss) => {
        return {
            enter: (el, done) => {
                let animation = $animateCss(el, {
                    easing: 'ease-in',
                    from: { opacity:'0' },
                    to: { opacity: '1' },
                    duration: 0.5,
                    delay: 0
                });

                animation.start();
            },
            leave: (el, done) => {
                let animation = $animateCss(el, {
                    easing: 'ease-out',
                    from: { opacity:'1' },
                    to: { opacity: '0' },
                    duration: 0.3
                });

                animation.start();
            }
        }
    }]);

export default MODULE_NAME;
