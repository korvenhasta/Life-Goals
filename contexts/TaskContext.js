import { DateTime } from "luxon";
import { useRouter } from "next/router";
import { useState, createContext, useContext } from "react";

const tasksContext = createContext({});
export function useTasks() {
  return useContext(tasksContext);
}

export default function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  async function createTask(formValues) {
    setLoading(true);
    setTaskName(formValues.taskName);
    setTaskDate(formValues.taskDate);

    const date = DateTime.fromISO(formValues.taskDate.toISOString()).toFormat(
      "dd-MM-yyyy"
    );

    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formValues.taskName,
        date: formValues.taskDate,
      }),
    });
    const data = await response.json();
    if (response.status === 200) {
      router.push(`/tasks/${data.id}`);
    } else {
      setError(data.message);
      setLoading(false);
    }
  }

  return (
    <tasksContext.Provider
      value={{
        tasks: tasks,
        handleSubmit: createTask,
        updateTask: updateTask,
        loading: loading,
      }}
    >
      {children}
    </tasksContext.Provider>
  );
}
