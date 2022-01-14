import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { emptyRoutes, RouteNames, tasksRoutes } from "../../router";
import { useTasks } from "../../hooks/useTasks";

const AppRouter = () => {
  const { tasks } = useTasks();

  return tasks.length === 0 ? (
    <Routes>
      {emptyRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.EMPTY} />} />
    </Routes>
  ) : (
    <Routes>
      {tasksRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.TASKS} />} />
    </Routes>
  );
};

export default AppRouter;
