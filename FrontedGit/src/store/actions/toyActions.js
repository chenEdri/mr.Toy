import { toyService } from '../../services/toyService'


export function loadToys(filterBy) {
    return dispatch => {
        toyService.query(filterBy).then(toys => {
            dispatch({ type: 'SET_TOYS', toys })
        })
    }
}

export function changeToysFilter(filterBy) {
    console.log('action-', filterBy);
    return dispatch => {
        toyService.query(filterBy).then(toys => {
            dispatch({ type: 'SET_TOYS', toys })
        })
    }
}

export function removeToy(_id) {
    return dispatch => {
        toyService.remove(_id).then(() => {
            dispatch({ type: 'REMOVE_TOY', _id })
        })
    }
}

export function updateFilter(filterBy) {
    console.log('filter in action-', filterBy);
    return dispatch => {
        dispatch({ type: 'SET_FILTER', filterBy })
    }
}


export function saveToy(toy) {
    return dispatch => {
        toyService.save(toy)
            .then((savedToy) => {
                console.log(savedToy);
                dispatch({ type: 'SAVE_TOY', savedToy });
            })
    }
}