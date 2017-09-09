import "./tab-menu.css";


const MODULE_NAME = 'tabMenu';

let tabMenu = () => {
    return {
        template: require('./tab-menu.html'),
        controller: 'TabMenuCtrl',
        controllerAs: 'tabMenu',
    }
};

class TabMenuCtrl {
    constructor($scope) {

        console.log($scope);

        this.filterTask = () => {
            console.log("filter");
        }
    }
}

angular.module(MODULE_NAME, [])
    .directive('tabMenu', tabMenu)
    .controller('TabMenuCtrl', TabMenuCtrl);

export default MODULE_NAME;
