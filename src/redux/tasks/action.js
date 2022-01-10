import { types } from './types'

export const tasksAction = {
  fillTasks: (tasks) => {
    return {
      type: types.TASKS_FILL,
      payload: tasks,
    }
  }
}