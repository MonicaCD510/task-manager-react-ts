type TaskItemProps = {
  title: string;
  status: string;
  onDelete: () => void;
};

function TaskItem({ title, status, onDelete }: TaskItemProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Status: {status}</p>

      <button>Toggle Status</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default TaskItem;