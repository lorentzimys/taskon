import './header-menu-right.css';

import 'angular-tooltips';

const MODULE_NAME = 'header-menu-right';

let headerMenuRight = () => {
    return {
        template: require('./header-menu-right.html'),
        controller: 'HeaderMenuRightCtrl',
        controllerAs: 'header-menu-right'
    }
};

class HeaderMenuRightCtrl {
    constructor() {

    }
}

angular.module(MODULE_NAME, ['720kb.tooltips'])
    .directive('headerMenuRight', headerMenuRight)
    .controller('HeaderMenuRightCtrl', HeaderMenuRightCtrl);

export default MODULE_NAME;
