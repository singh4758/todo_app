import React from 'react';


export default class Cockpit extends React.Component{
    constructor(){
        super();
        this.state = {
            input : '',
        }
    }

    takeinput = (e) =>{
        this.setState({
            input : e.target.value
        })
    }

    addTodo = () =>{
        if(this.state.input!=='') {
            this.props.addTodo(this.state.input,'to_do');
            this.setState({
                input : '',
            });
        }else{
            window.alert("Please Insert String");
        }
    }

    render(){
        return(
            <div className='cockpit'>
                <input value={this.state.input} onChange={this.takeinput} placeholder='Enter Todo Name'/>
                <button onClick={this.addTodo}>Add Todo</button>
            </div>
        );
    }
}