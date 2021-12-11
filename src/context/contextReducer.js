// Reducer => a function that takes in the old state, and an action => new state...
const contextReducer = (state, action) => {
    switch (action.type){
        case'DELETE_TRANSACTION':
            return state.filter((t) => t.id !== action.payload )
        case 'ADD_TRANSACTION':
            return [action.payload, ...state]
        default:
            return state;
    }

}

export default contextReducer;
