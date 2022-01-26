import { types } from './types'

// const initialState = {
//   data: [ ]
// }

const initialState = {
  data: [
    { 
      id: 1, 
      title: 'Design new dashboard',
      description: 'There is no denying the fact that the success of an advertisement lies mostly in the headline. The headline should attract the reader.',
      date: '2022-01-30T22:00:00.000Z',
      checklists: [
        {
          value: 'Design new home page',
          checked: true,
        },
        {
          value: 'Send design samples to the customer',
          checked: false,
        },
      ],
      teg: {
        name: 'Sketch',
        color: '#FFAB2B',
      },
    }
  ]
}

export const tasksReducer = (state = initialState, action) => {
  switch(action.type){
    case types.TASKS_FILL: {
      return {
        ...state,
        data: action.payload,
      }
    }

    default: 
      return state
  }
}



