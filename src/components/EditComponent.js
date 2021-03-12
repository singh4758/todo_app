import React from "react";


export default class EditComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            input : this.props.item.todoName,
            status : this.props.item.status
        });
    }

    takeInput=(e)=>{
        this.setState({
            input : e.target.value,
        })
    }

    changeStatus = (e) => {
        this.setState({
            status : e.target.value
        })
    }

    updateInput = () =>{
        const input = this.state.input;
        const status = this.state.status;
        this.props.updateEntry({todoName: input,status: status},this.props.pos-1);
        this.props.chooseEdit();
    }

    render(){
        return (
            <div className="editComponent">
                <div className='pos'>{this.props.pos}</div>
                <input className={this.state.status} value={this.state.input} onChange = {this.takeInput}/>
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