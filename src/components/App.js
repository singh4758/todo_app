import React from "react";
import Cockpit from "./Cockpit";
import ListContainer from "./ListContainer";


class App extends React.Component{

  constructor(){
    super();
    this.state = {
      todoList : []
    };
  }

  addTodo= (value, status) =>{
    const arr = this.state.todoList;
    arr.push({todoName: value,status : 'to_do'});
    this.setState({
      todoList : arr,
    });
  }

  updateEntry = (value,pos) => {
    if(pos<0){
      return;
    }
    const todoList = this.state.todoList;
    todoList.splice(pos,1,value);
    this.setState({
      todoList : todoList
    });
  }

  deleteEntry = (pos) => {
    if(pos<0){
      return;
    }
    const todoList = this.state.todoList;
    todoList.splice(pos,1);
    this.setState({
      todoList : todoList
    });
  }

  render(){
    return (
      <div className='app'>
        <h1>ToDo App</h1>
        <Cockpit addTodo={this.addTodo}/>
        <ListContainer state={this.state}  updateEntry={this.updateEntry} deleteEntry={this.deleteEntry} />
      </div>
    );
  }
}

export default App;
