import { types } from './types'

const initialState = {
  data: [ ]
}

// const initialState = {
//   data: [
//     { 
//       id: 1, 
//       title: 'Design new dashboard',
//       description: 'There is no denying the fact that the success of an advertisement lies mostly in the headline. The headline should attract the reader.',
//       date: '2022-01-21',
//       checklists: [
//         {
//           value: 'Design new home page',
//           checked: true,
//         },
//         {
//           value: 'Send design samples to the customer',
//           checked: false,
//         },
//       ],
//       tegs: [
//         {
//           name: 'Sketch',
//           color: '#FFAB2B',
//         },
//         {
//           name: 'Spotify',
//           color: '#6DD230',
//         },
//         {
//           name: 'Dribble',
//           color: '#FE4D97',
//         },
//         {
//           name: 'Behance',
//           color: '#4D7CFE',
//         },
//         {
//           name: 'UX',
//           color: '#778CA2',
//         },
//       ]
//     }
//   ]
// }

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



