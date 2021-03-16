import React from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../reducers/todo';


class Cockpit extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            todo_name : '',
            status: 'to_do',
        }
    }

    takeinput = (e) =>{
        this.setState({
            todo_name : e.target.value
        })
    }

    addTodo = () =>{
        if(this.state.todo_name!=='') {
            const payload = this.state;
            this.setState({todo_name:''});
            this.props.dispatch(createTodo(payload));
        }else{
            window.alert("Please Insert String");
        }
    }

    render(){
        return(
            <div className='cockpit' >
                <input value={this.state.todo_name} onChange={this.takeinput} placeholder='Enter Todo Name'/>
                <button onClick={this.addTodo}>Add Todo</button>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        state: store.to_do,
        dispatch: store.dispatch
    };
}


export default connect(mapStateToProps)(Cockpit)