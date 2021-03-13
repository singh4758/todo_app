import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';


class ListContainer extends React.Component{

    render(){
        return(
            <>
                {this.props.state.length<=0 && <h3>List is Empty</h3>}
                {this.props.state.length>0 && this.props.state.map((item,index)=>{
                   return ( <TodoList item= {item} pos = {index+1} key={index+1} /> );
                })}
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        state
    };
}


export default connect(mapStateToProps)(ListContainer);