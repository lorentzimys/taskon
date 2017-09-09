export default class Task {
    constructor(task) {
        this._id = task.__id;
        this.index = task.index;
        this.unread = task.unread;
        this.city = task.city ? task.city : null;
        this.responsible = task.responsible ? task.responsible : null;
        this.completeBefore = task.completeBefore ? new Date(task.completeBefore) : null;
        this.total = task.total ? task.total : null;
        this.taskType = task.type ? task.type : null;
        this.username = task.username ? task.username : null;
        this.balance = task.task ? task.balance : null;
        this.taskProp = task.taskProp ? task.taskProp :null;
    }
}
