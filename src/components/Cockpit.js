import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


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
            this.props.dispatch(addTodo(payload));
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

function mapStateToProps(state) {
    return {
        state
    };
}


export default connect(mapStateToProps)(Cockpit)