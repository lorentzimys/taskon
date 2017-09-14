import './header-menu-right.css';

import LayoutService from './../../services/LayoutService';

// import 'angular-tooltips';

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
        this.decrement = () => {
            const d = new LayoutService().decrement();
            console.log(d);
        }
    }
}

angular.module(MODULE_NAME, [/*'720kb.tooltips'*/])
    .directive('headerMenuRight', headerMenuRight)
    .controller('HeaderMenuRightCtrl', HeaderMenuRightCtrl);

export default MODULE_NAME;
