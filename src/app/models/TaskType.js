export default class TaskType {
    constructor(task) {
        this._id = task.__id;
        this.order = task.order ? task.order : null;
        this.type = task.type ? task.type : null;
        this.text = task.text ? task.text : null;
    }
}
