const initialState = {
    friends: [],
}

export function manageFriends(state=initialState, action){

    switch(action.type){
        
        case 'ADD_FRIEND':
            return {...state, friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            
            let friendID = state.friends.findIndex(friend => friend.id === action.id)

            return ({...state, friends: [
                ...state.friends.slice(0, friendID),
                ...state.friends.slice(friendID + 1)
            ]})
            
        default:
            return state
    }
}
