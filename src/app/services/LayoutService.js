import layoutApi from "../../api/layout.json";
import Person from "../models/Person";

export default class LayoutService {

    constructor(module) {
        this.test = () => {
            console.log(layoutApi);
        };

        this.getMenuItems = () => {
            return layoutApi[0].menu.items;
        };

        this.getCurrentBalance = () => {
            let person = new Person(layoutApi[0].personalInfo);

            return person.balance;
        };

        this.getPersonalInfo = () => {
            let username = new Person(layoutApi[0].personalInfo);

            return username;
        };

        this.getNotifications = () => {
            return layoutApi[0].personalInfo.notifications;
        };

        // return module.service("layoutService", () => {});
    }

}