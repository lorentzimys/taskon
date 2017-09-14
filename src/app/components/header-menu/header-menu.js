import "./header-menu.css";

import LayoutService from "../../services/LayoutService";

const MODULE_NAME = 'headerMenu';

let headerMenu = () => {
    return {
        template: require('./header-menu.html'),
        controller: 'HeaderMenuCtrl',
        controllerAs: 'header-menu'
    }
};

class HeaderMenuCtrl {
    constructor($scope) {
        this.layoutService = new LayoutService();

        $scope.menuItems = this.layoutService.getMenuItems();
    }
}

angular.module(MODULE_NAME, [])
    .directive('headerMenu', headerMenu)
    .controller('HeaderMenuCtrl', HeaderMenuCtrl);

export default MODULE_NAME;
