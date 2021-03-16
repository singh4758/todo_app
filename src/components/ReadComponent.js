import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../reducers/todo";


class ReadComponent extends React.Component{

    deleteEntry = () =>{
        const payload = this.props.pos-1;
        this.props.dispatch(deleteTodo(payload));
    }

    render(){
        let {item, pos, chooseEdit} = this.props;
        return (
            <div className="readComponent">
                <div className='pos'>{pos}</div>
                <div className={'todoField '+ item.status} title={item.todo_name}>{item.todo_name}</div>
                <button className="button" onClick={chooseEdit}>Edit</button>
                <button className="button" onClick={this.deleteEntry}>Delete</button>
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

export default connect(mapStateToProps)(ReadComponent);