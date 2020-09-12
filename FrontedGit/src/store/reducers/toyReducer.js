const initialState = {
    toys: []
}

export function toyReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TOYS':
            return {
                ...state,
                toys: action.toys
            }
        case 'REMOVE_TOY':
            return {
                ...state,
                toys: state.toys.filter(toys => toys._id !== action._id)
            }
            case 'SAVE_TOY':
                return {...state, toys : state.toys.map(toy=>(toy._id === action.savedToy._id)? action.savedToy: toy)}
        default:
            return state;
    }
}