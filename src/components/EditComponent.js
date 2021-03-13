import React from "react";
import { connect } from "react-redux";
import { updateEntry } from "../actions";


class EditComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            todo_name : this.props.item.todo_name,
            status : this.props.item.status
        });
    }

    takeInput=(e)=>{
        this.setState({
            todo_name : e.target.value,
        })
    }

    changeStatus = (e) => {
        this.setState({
            status : e.target.value
        })
    }

    updateInput = () =>{
        const todo_name = this.state.todo_name;
        const status = this.state.status;
        this.props.dispatch(updateEntry({todo_name: todo_name, status: status}, this.props.pos-1));
        this.props.chooseEdit();
    }

    render(){
        return (
            <div className="editComponent">
                <div className='pos'>{this.props.pos}</div>
                <input className={this.state.status} value={this.state.todo_name} onChange = {this.takeInput}/>
                <select value={this.state.status} onChange={this.changeStatus} >
                    <option value='to_do'>To Do</option>
                    <option value='in_progress'>In Progress</option>
                    <option value='done'>Done</option>
                    <option value="wont_do">Won't Do</option>
                </select>
                <button className='button' onClick={this.updateInput}>Update</button>
                <button className='button' onClick={this.props.chooseEdit}>cancel</button>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        state
    };
}


export default connect(mapStateToProps)(EditComponent);