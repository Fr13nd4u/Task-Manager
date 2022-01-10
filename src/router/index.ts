import React from 'react';

import Empty from '../pages/Empty';
import Tasks from '../pages/Tasks';

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RouteNames {
  EMPTY = '/',
  TASKS = '/tasks'
}

export const emptyRoutes: IRoute[] = [
  {path: RouteNames.EMPTY, element: Empty}
]

export const tasksRoutes: IRoute[] = [
  {path: RouteNames.TASKS, element: Tasks}
]