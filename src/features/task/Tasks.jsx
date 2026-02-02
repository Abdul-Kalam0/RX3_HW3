import { useSelector, useDispatch } from "react-redux";
import { statusButtonPressed } from "./taskSlice";

export const Tasks = () => {
  const dispatch = useDispatch();
  const tasksState = useSelector((state) => state.tasks);

  // ✅ Group tasks by date
  const groupedTasks = tasksState.tasks.reduce((acc, task) => {
    if (!acc[task.date]) {
      acc[task.date] = [];
    }
    acc[task.date].push(task);
    return acc;
  }, {});

  return (
    <div>
      <h1>My Task List</h1>

      {Object.entries(groupedTasks).map(([date, tasks]) => (
        <div key={date}>
          <h2>{date}</h2>

          {tasks.map((task) => (
            <li
              key={task.taskId}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginLeft: "20px",
              }}
            >
              <span>{task.name}</span>
              <button
                onClick={() => dispatch(statusButtonPressed(task.taskId))}
              >
                {task.status}
              </button>
            </li>
          ))}
        </div>
      ))}
    </div>
  );
};
