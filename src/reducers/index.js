const { combineReducers } = require("redux");
const { to_do } = require("./todo");


export const reducer = combineReducers({
    to_do : to_do.reducer
});