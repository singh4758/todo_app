import React from 'react';
import TodoList from './TodoList';


export default class ListContainer extends React.Component{

    render(){
        let { todoList } = this.props.state;
        return(
            <>
                {todoList.length<=0 && <h3>List is Empty</h3>}
                {todoList.length>0 && todoList.map((item,index)=>{
                   return ( <TodoList item= {item} pos = {index+1} key={index+1} updateEntry={this.props.updateEntry} deleteEntry={this.props.deleteEntry} /> );
                })}
            </>
        );
    }
}