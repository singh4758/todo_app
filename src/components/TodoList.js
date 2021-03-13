import React from 'react';
import ReadComponent from './ReadComponent';
import EditComponent from './EditComponent';
import { connect } from 'react-redux';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editable : false,
        }
    }

    chooseEdit=()=>{
        this.setState({
            editable : !this.state.editable,
        });
    }

    render(){
        const {editable} = this.state;
        const { item, pos } = this.props;
        return(
            <>
                {editable && <EditComponent item={item} pos={pos} chooseEdit={this.chooseEdit} />}
                {!editable && <ReadComponent item={item} pos={pos} chooseEdit={this.chooseEdit} />}
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    };
}

export default connect(mapStateToProps)(TodoList);