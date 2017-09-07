import angular from 'angular';

import appHeader from "./components/header/header";
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

angular.module(MODULE_NAME, [appHeader])
    .directive('app', app)
    .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;