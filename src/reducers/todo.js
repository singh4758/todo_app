const { createSlice } = require("@reduxjs/toolkit");

export const to_do = createSlice({
    name: 'to_do',
    initialState: [],
    reducers: {
        createTodo: (state,action)=>{
            state.push(action.payload);
        },
        updateTodo: (state,action)=>{
            state.splice(action.payload.pos,1,{todo_name:action.payload.todo_name,status:action.payload.status});
        },
        deleteTodo: (state,action)=>{
            state.splice(action.payload,1);
        }
    }
});


export const {createTodo, updateTodo, deleteTodo} = to_do.actions;
