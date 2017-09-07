import layoutApi from "../api/layout.json";
import Person from "../models/Person";

class LayoutService {

    constructor(module) {
        return module.service("layoutService", () => {

            getMenuItems = () => {
                return layoutApi.menu.items;
            };

            getCurrentBalance = () => {
                let person = new Person(layoutApi.personalInfo);

                return person.balance;
            };

            getUsername = () => {
                let username = new Person(layoutApi.personalInfo);

                return username;
            };

            var top = null;

            var skip = null;

            getNotifications = (top, skip) => {
                throw new Error("not implemented");
            }
        });
    }

}