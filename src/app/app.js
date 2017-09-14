import angular from 'angular';

import appHeader from './components/header/header';
import tasks from './components/tasks/tasks';

import 'angular-ui-router';
import 'angular-animate';
import 'angular-dropdowns';
import '@uirouter/angularjs'
import 'angular-tooltips';
import '../ngLocale/angular-locale-ru-ru';

import homeTpl from '../public/home.html';

import LayoutService from '../app/services/LayoutService';

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

        this.pageTitle = "";
    }
}

angular.module(MODULE_NAME, [appHeader, tasks, 'ui.router', 'ngAnimate', 'ngLocale', 'ngDropdowns', '720kb.tooltips'])
    .directive('app', app)
    .controller('AppCtrl', AppCtrl)
    .config(($stateProvider, $urlRouterProvider, $locationProvider) => {

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '^/',
            template: homeTpl
        });

        $stateProvider.state('tasks', {
            url: '^/tasks/:taskType?:taskProperties&:responsibleId',
            template: '<tasks></tasks>',
            params: {
                taskType: {
                    value: '',
                    dynamic: true
                },
                taskProperties: {
                    value: '',
                    dynamic: true,
                    squash: true
                },
                responsibleId: {
                    value: '',
                    dynamic: true,
                    squash: true
                }
            }
        });
    });

export default MODULE_NAME;