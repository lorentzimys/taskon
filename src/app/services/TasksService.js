import tasksApi from "../../api/tasks.json";
import Task from "../models/Task";
import TaskType from "../models/TaskType";

export default class TasksService {

    constructor() {

        this.getTaskTypes = () => {
            return tasksApi[0].taskTypes.map((t) => new TaskType(t));
        };

        this.getAllTasks = () => {
            return tasksApi[0].tasks.map((t) => new Task(t));
        };

        this.getTasksProperties = () => {
            return tasksApi[0].taskProperties;
        };

        this.getTasksByType = (status) => {
            status = status ? status : null;

            if (status) {
                const filteredData = tasksApi[0].tasks.filter((t) => t.taskType === status);

                return filteredData.map((t) => new Task(t));
            } else {
                return new Error("Не задан тип задачи, обязательно для заполнения", "TasksService.js");
            }
        };

        this.filterTasksByProperty = (tasks, property) => {
            const propValues = tasksApi[0].taskTypes.map((obj) => obj.type);

            property = (property.indexOf(propValues)) ? property : null;

            if (Array.isArray(tasks)) {
                const filteredData = tasksApi[0].tasks.filter((t) => t.taskProp === property);

                return filteredData.map((t) => new Task(t));
            } else {
                throw new Error("Неверный тип для параметра tasks, должен быть Array", "TasksService.js");
            }
        };
    }

}