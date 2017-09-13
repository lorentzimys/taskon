import angular from 'angular';
import 'angular-animate';
import 'angular-dropdowns';
import '../ngLocale/angular-locale-ru-ru';

import appHeader from "./components/header/header";
import tasks from "./components/tasks/tasks";

import LayoutService from "../app/services/LayoutService";

import '../../node_modules/angular-tooltips/dist/angular-tooltips.css';
import '../../node_modules/angular-dropdowns/dist/angular-dropdowns.css';
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
        this.layoutService = new LayoutService();

        this.menuItems = this.layoutService.getMenuItems();

        console.log(this.menuItems);

        this.pageTitle = "Задания";


    }
}

angular.module(MODULE_NAME, [appHeader, tasks, 'ngLocale', 'ngAnimate', 'ngDropdowns', '720kb.tooltips'])
    .directive('app', app)
    .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;