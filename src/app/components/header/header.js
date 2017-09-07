import "./header.css";
import headerMenu from "../header-menu/header-menu";

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
        this.logo = "taskon";
    }
}

angular.module(MODULE_NAME, [headerMenu])
    .directive('header', header)
    .controller('HeaderCtrl', HeaderCtrl);

export default MODULE_NAME;