import tasksApi from "../api/tasks.json";

class TasksService {

    constructor(module) {
        return module.service("tasksService", () => {
            getAllTasks = () => {
                return tasksApi.tasks;
            };

            getTasksByType = (taskType) => {
                const taskType = taskType ? taskType : null;

                if (taskType) {
                    return tasksApi.tasks.filter((task) => {
                        return task.taskType;
                    });
                } else {
                    return new Error("Не задан тип задачи, обязательно для заполнения", "TasksService.js");
                }
            };

            filterTasksByProperty = (tasks, property) => {
                const propValues = tasksApi.taskTypes.map((obj) => obj.type);
                const property = (property.indexOf(propValues)) ? property : null;

                if (Array.isArray(tasks)) {
                    return tasksApi.tasks.filter((t) => t.taskProp === property);
                } else {
                    throw new Error("Неверный тип для параметра tasks, должен быть Array", "TasksService.js");
                }
            };

        });
    }

}