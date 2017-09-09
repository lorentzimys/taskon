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

        this.getUsername = () => {
            let username = new Person(layoutApi[0].personalInfo);

            return username;
        };

        var top = null;

        var skip = null;

        this.getNotifications = (top, skip) => {
            throw new Error("not implemented");
        };

        // return module.service("layoutService", () => {});
    }

}