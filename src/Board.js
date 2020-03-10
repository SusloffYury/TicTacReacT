import React from 'react';
import './index.css';
import Squire from './Squire'

class Board extends React.Component {
    renderSquire(i) {
        return <Squire value={i} />
    }
    render() {
        const status = 'Next player: X'

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