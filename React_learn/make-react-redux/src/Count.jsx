
import React, { Component } from 'react';
import connect from './react-redux/connect'

class Count extends Component {
    state = {  }
    render() {
        const { count } = this.props  
        return (  
            <div>
                count: {count}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    count: state
})
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        increment: () => dispatch({type: 'DECREMENT'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Count);