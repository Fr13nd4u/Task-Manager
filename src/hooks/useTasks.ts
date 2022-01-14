import { useDispatch, useSelector } from 'react-redux';

import { tasksAction } from '../redux/tasks/action';

export const useTasks = () => {
  const selector = (state: any) => state.tasks;
  const { data } = useSelector(selector);
  const dispatch = useDispatch();

  const fillTasks = (tasks: any) => {
    const action = tasksAction.fillTasks(tasks);
    dispatch(action);
  }

  return {
    tasks: data,
    fillTasks
  }
}

