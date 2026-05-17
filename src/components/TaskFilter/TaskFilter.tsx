type TaskFilterProps = {
  filter: string;
  setFilter: (filter: string) => void;
};

function TaskFilter({ filter, setFilter }: TaskFilterProps) {
  return (
    <div>
      <label>Status Filter: </label>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}

export default TaskFilter;