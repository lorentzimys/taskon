import "./header-menu.css";

const MODULE_NAME = 'headerMenu';

let headerMenu = () => {
    return {
        template: require('./header-menu.html'),
        controller: 'HeaderMenuCtrl',
        controllerAs: 'header-menu'
    }
};

class HeaderMenuCtrl {
    constructor() {

    }
}

angular.module(MODULE_NAME, [])
    .directive('headerMenu', headerMenu)
    .controller('HeaderMenuCtrl', HeaderMenuCtrl);

export default MODULE_NAME;
