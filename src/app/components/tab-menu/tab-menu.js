import "./tab-menu.css";

const MODULE_NAME = 'tabMenu';

let tabMenu = () => {
    return {
        template: require('./tab-menu.html'),
        controller: 'TabMenuCtrl',
        controllerAs: 'tab-menu'
    }
};

class TabMenuCtrl {
    constructor() {

    }
}

angular.module(MODULE_NAME, [])
    .directive('tabMenu', tabMenu)
    .controller('TabMenuCtrl', TabMenuCtrl);

export default MODULE_NAME;
