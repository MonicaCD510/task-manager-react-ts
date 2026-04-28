import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: "1", title: "Task 1", status: "pending" },
    { id: "2", title: "Task 2", status: "completed" },
  ]);

  return (
    <div>
      <h2>Task List</h2>

      {tasks.map((task) => (
        <div key={task.id}>
          <p>{task.title}</p>
          <p>Status: {task.status}</p>

          <button
            onClick={() => {
              setTasks(
                tasks.map((t) =>
                  t.id === task.id
                    ? {
                        ...t,
                        status:
                          t.status === "pending" ? "completed" : "pending",
                      }
                    : t
                )
              );
            }}
          >
            Toggle Status
          </button>

          <button
            onClick={() => {
              setTasks(tasks.filter((t) => t.id !== task.id));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;