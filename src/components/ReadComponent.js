import React from "react";


export default class ReadComponent extends React.Component{

    deleteEntry = () =>{
        this.props.deleteEntry(this.props.pos-1);
    }

    render(){
        let {item, pos, chooseEdit} = this.props;
        return (
            <div className="readComponent">
                <div className='pos'>{pos}</div>
                <div className={'todoField '+ item.status} title={item.todoName}>{item.todoName}</div>
                <button className="button" onClick={chooseEdit}>Edit</button>
                <button className="button" onClick={this.deleteEntry}>Delete</button>
            </div>
        );
    }

}