import layoutApi from "../../api/layout.json";
import Person from "../models/Person";

export default class LayoutService {
    constructor() {
        let data = layoutApi[0];

        this.getCurrentBalance = () => {
            let person = new Person(data.personalInfo);

            return person.balance;
        };

        this.getPersonalInfo = () => {
            let username = new Person(data.personalInfo);

            return username;
        };

        this.getNotifications = () => {
            return data.personalInfo.notifications;
        };

        this.getMenuItems = () => {
            return data.menu.items;
        };
    }

}