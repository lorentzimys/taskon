import './filter-panel.css';

import TaskService from "../../services/TasksService"

const MODULE_NAME = 'filter-panel';

let filterPanel = () => {
    return {
        template: require('./filter-panel.html'),
        controller: 'FilterPanelCtrl',
        controllerAs: 'filterPanel'
    }
};

class FilterPanelCtrl {
    constructor($scope) {
        console.log($scope);

        this.taskService = new TaskService();
    }
}

angular.module(MODULE_NAME, [])
    .directive('filterPanel', filterPanel)
    .controller('FilterPanelCtrl', FilterPanelCtrl);

export default MODULE_NAME;