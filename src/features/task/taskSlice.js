import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        taskId: "001",
        date: "29 / 01 / 2026",
        name: "Get grocerries from market.",
        status: "Pending",
      },
      {
        taskId: "002",
        date: "29 / 01 / 2026",
        name: "Go to Gym.",
        status: "Completed",
      },
      {
        taskId: "003",
        date: "29 / 01 / 2026",
        name: "Water the plant.",
        status: "Pending",
      },
      {
        taskId: "004",
        date: "30 / 01 / 2026",
        name: "Go to Park.",
        status: "Completed",
      },
      {
        taskId: "005",
        date: "30 / 01 / 2026",
        name: "Get my room cleaned.",
        status: "Pending",
      },
    ],
  },

  reducers: {
    statusButtonPressed: (state, action) => {
      // const taskIndex = state.tasks.findIndex(
      //   (task) => task.taskId === action.payload
      // );
      // if (taskIndex !== -1) {
      //   state.tasks[taskIndex].status =
      //     state.tasks[taskIndex].status === "Pending" ? "Completed" : "Pending";
      // }

      const task = state.tasks.find((task) => task.taskId === action.payload);
      if (task) {
        task.status = task.status === "Pending" ? "Completed" : "Pending";
      }
    },
  },
});

export const { statusButtonPressed } = taskSlice.actions;

export default taskSlice.reducer;
