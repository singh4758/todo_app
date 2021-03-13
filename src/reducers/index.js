

export default function reducers(state=[],action) {
    switch(action.type){
        case "ADD_TODO" :
            return [...state,action.payload];
        case "UPDATE_ENTRY" :
            state.splice(action.pos,1,action.payload);
            return [...state];
        case "DELETE_ENTRY" :
            state.splice(action.pos,1);
            return [...state];
        default: return state;
    }
}