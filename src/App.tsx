import { useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import TaskFilter from "./components/TaskFilter/TaskFilter";

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <div>
      <h1>Task Manager</h1>

      <TaskFilter
        filter={filter}
        setFilter={setFilter}
      />

      <TaskList />
    </div>
  );
}

export default App;