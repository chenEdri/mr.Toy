const initialState = {
  filterBy: null
}


export function filterReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return { ...state, filterBy: action.filterBy }
    default:
      return state;
  }
}