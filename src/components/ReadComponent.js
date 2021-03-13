import React from "react";
import { connect } from "react-redux";
import { deleteEntry } from '../actions';


class ReadComponent extends React.Component{

    deleteEntry = () =>{
        this.props.dispatch(deleteEntry(this.props.pos-1));
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

function mapStateToProps(state) {
    return {
        state
    };
}

export default connect(mapStateToProps)(ReadComponent);
