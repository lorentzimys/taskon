import "./header.css";
import headerMenu from "../header-menu/header-menu";
import headerMenuRight from "../header-menu-right/header-menu-right";

import LayoutService from "../../services/LayoutService";

const MODULE_NAME = 'app-header';

let header = () => {
    return {
        template: require('./header.html'),
        controller: 'HeaderCtrl',
        controllerAs: 'header'
    }
};

class HeaderCtrl {
    constructor() {
        this.layoutService = new LayoutService();

        this.logo = "taskon";

        this.personalInfo = this.layoutService.getPersonalInfo();

        this.balance = this.personalInfo.balance;

        this.username = this.personalInfo.username;

        this.notifications = this.layoutService.getNotifications();

        this.getNotificationsTpl = () => {
            let resultTpl = `<ul>`;

            this.notifications.forEach(notif => {
                resultTpl += `<li>${notif.text}</li>`
            });

            resultTpl += `</ul>`;

            return resultTpl;
        };

        this.notificationsHighlighted = (this.notifications.length > 0);

        this.userMenuOptions = [
            {
                id: 'personal_cabinet',
                text: 'Личный кабинет',
                href: 'personalCabinet'
            },
            {
                id: 'logout',
                text: 'Выход',
                href: '#logout'
            },
        ];

    }
}


angular.module(MODULE_NAME, [headerMenu, headerMenuRight])
    .directive('header', header)
    .controller('HeaderCtrl', HeaderCtrl);

export default MODULE_NAME;