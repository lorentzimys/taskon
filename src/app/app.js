import angular from 'angular';

import appHeader from "./components/header/header";
import tabMenu from "./components/tab-menu/tab-menu";
import '../style/app.css';

const MODULE_NAME = 'app';

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app',
    }
};

class AppCtrl {
    constructor() {
        this.pageTitle = "Задания";
    }
}

angular.module(MODULE_NAME, [appHeader, tabMenu])
    .directive('app', app)
    .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;