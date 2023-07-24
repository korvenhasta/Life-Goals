import { useState, createContext, useContext } from "react";

const tasksContext = createContext({});
export function useTasks() {
  return useContext(tasksContext);
}

export default function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState(0);

  function updateTask(taskName, taskDate, taskId) {
    setTasks(
      tasks.map((task) => {
        if (taskId === task.id) {
          task.task = taskName;
          task.date = taskDate;
        }
        return task;
      })
    );
  }

  function addTask(task) {
    console.log("Submit? ", task);
    setTasks([
      ...tasks,
      {
        id: taskId,
        task: task.taskName,
        date: task.taskDate,
      },
    ]);
    setTaskId(taskId + 1);
  }

  return (
    <tasksContext.Provider
      value={{
        tasks: tasks,
        handleSubmit: addTask,
        updateTask: updateTask,
      }}
    >
      {children}
    </tasksContext.Provider>
  );
}
