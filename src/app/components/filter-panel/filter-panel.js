import './filter-panel.css';

const MODULE_NAME = 'filter-panel';

let filterPanel = () => {
    return {
        template: require('./filter-panel.html'),
        controller: 'FilterPanelCtrl',
        controllerAs: 'filterPanel'
    }
};

class FilterPanelCtrl {
    constructor($scope) {}
}

angular.module(MODULE_NAME, [])
    .directive('filterPanel', filterPanel)
    .controller('FilterPanelCtrl', FilterPanelCtrl);

export default MODULE_NAME;