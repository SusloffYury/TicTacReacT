import React from 'react';
import './index.css';
import Squire from './Squire'

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsnext: true,
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsnext ? "X" : "0"
        this.setState({ squares: squares, xIsnext:!this.state.xIsnext, })
    }

    renderSquire(i) {
        return <Squire value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />
    }
    render() {
        const status = 'Next player: ' +(this.state.xIsnext ? "X": "0")


        return (
            <div>
                <div className='status'>{status}</div>
                <div className='boardRow'>
                    {this.renderSquire(0)}
                    {this.renderSquire(1)}
                    {this.renderSquire(2)}
                </div>
                <div className='boardRow'>
                    {this.renderSquire(3)}
                    {this.renderSquire(4)}
                    {this.renderSquire(5)}
                </div>
                <div className='boardRow'>
                    {this.renderSquire(6)}
                    {this.renderSquire(7)}
                    {this.renderSquire(8)}
                </div>
            </div>
        )
    }
}
export default Board;