import tabMenu from "../tab-menu/tab-menu";
import filterPanel from "../filter-panel/filter-panel";

import TaskService from "../../services/TasksService";

import "./tasks.css";

const MODULE_NAME = 'tasks';

const tasks = () => {
    return {
        template: require('./tasks.html'),
        controller: 'TasksCtrl',
        controllerAs: 'tasks'
    }
};



export class TasksCtrl {


    constructor($scope, $rootScope, $state, $stateParams) {

        this.transitionParams = () => {
            let params = {};

            params.taskType = this.activeMenuItem;
            params.responsibleId = (this.filterMenuSelected.id !== "0") ? this.filterMenuSelected.id : null;
            params.taskProperties = (this.setTaskPropertyParamsToStr().length) ? this.setTaskPropertyParamsToStr() : null;

            return params;
        };

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

            $state.go('.', this.transitionParams());
        };

        this.togglePropCheckbox = (prop, e) => {
            // Если у target имеется value - значит это input
            if (e.target.value) {
                const propType = prop.type;

                (this.taskPropertyCollection.hasOwnProperty(propType)) ?
                    delete this.taskPropertyCollection[propType] :
                    this.taskPropertyCollection[propType] =  null;

                $state.go('.', this.transitionParams());
            }
        };

        this.dropdownChange = (selected) => {
            this.filterMenuSelected = selected;

            $state.go('.', this.transitionParams());
        };

        this.filterTasks = (t, i, a) => {
            let taskPropObj = {};

            t.taskProp.forEach(p => taskPropObj[p] = null);

            const searchFieldCond = t.text.indexOf(this.searchFieldValue) == -1;
            const taskPropCond = $stateParams.taskProperties.length ? !t.taskProp.reduce((result,current) => result += (this.taskPropertyCollection[current] !== undefined), 0): false;
            const filterMenuCond = $stateParams.responsibleId.length ? (t.responsible !== this.filterMenuSelected.text) : false;

            return !(searchFieldCond || taskPropCond || filterMenuCond);
        };

        this.setTaskPropertyParamsToStr = () => {
            let result = [];

            for (let i = 0; i < this.taskProps.length; i++) {
                const prop = this.taskProps[i];
                if (this.taskPropertyCollection.hasOwnProperty(prop.type)) {
                    result.push(prop.type);
                }
            }

            return result.toString();
        };

        this.setTaskPropertyParamsFromStr = () => {

            let paramsArr = ($stateParams.taskProperties === "") ? [] : $stateParams.taskProperties.split(',');
            let paramsObj = {};

            paramsArr.forEach(param => {
                paramsObj[param] = null;
            });

            return paramsObj;
        };

        this.isActiveProp = (propName) => {
            return ($stateParams.taskProperties) ?
                ($stateParams.taskProperties.split(',').indexOf(propName) == -1) ? false : true : false;
        };

        this.activeMenuItem = $stateParams.taskType ? $stateParams.taskType : taskTypeNames[0];

        this.searchFieldValue = '';

        this.taskPropertyCollection = this.setTaskPropertyParamsFromStr();

        this.tasks = this.taskService.getTasksByType(this.activeMenuItem); // this.taskService.getAllTasks();

        this.taskProps = this.taskService.getTasksProperties();

        this.filterMenuOptions = [
            {
                id: '0',
                text: 'Все',
            },
            {
                id: '1',
                text: 'Виктор Лохматов',
            },
            {
                id: '2',
                text: 'Никита Ласточкин',
            },
        ];

        this.filterMenuSelected = $stateParams.responsibleId.length ? this.filterMenuOptions.find((o) => o.id === $stateParams.responsibleId) : this.filterMenuOptions[0];
        console.log(this.filterMenuSelected);

        $state.go('.', this.transitionParams());
    }
}

angular.module(MODULE_NAME, [tabMenu, filterPanel])
    .directive('tasks', tasks)
    .controller('TasksCtrl', TasksCtrl);

export default MODULE_NAME;
