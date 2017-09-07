
export default class Person {
    constructor(user) {
        this._id = user.id;
        this.username = user.username ? user.username : null;
        this.balance = user.balance ? user.balance : null;
    }
}
