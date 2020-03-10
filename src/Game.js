import React from 'react'
import Board from './Board'

class Game extends React.Component {
    render() {
        return (
            <div className="Game">
                <div className='gameBoard'>
                    <Board />
                </div>
                <div className="GameInfo">
                    <div>{/*status*/}</div>
                    <ol>{/*TODO*/}</ol>
                </div>
            </div>
        )
    }
}
export default Game;