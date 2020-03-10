import React from 'react'
//import Board from './Board'


class Squire extends React.Component {
   
    render() {
        return (<button className="square"
            onClick={() => this.props.onClick()}>
            {this.props.value}
        </button>
        );
    }
}
export default Squire;