import Hole from './hole';
import '../../../index.css';
import { BOARD_SIZE, PEBBLE } from "../../../constants";

export default function Board({ selectedRow, selectedColumn, boardState, handleClick }) {
    const boardSequence = [...Array(BOARD_SIZE).keys()]; //Creates Sequence from [0,1,2,3,4,5,6,7]

    return (
        <div className="board">
            {
                boardSequence.map((row) => <div
                    key={row} className="board-row">
                    {
                        boardSequence.map((col) => <Hole
                            key={(row + col) * BOARD_SIZE}
                            classes={`hole ${boardState[row][col]} ${(row === selectedRow && col === selectedColumn ? 'selected' : '')}`}
                            handleClick={() => handleClick(row, col)}
                            isSmiley={boardState[row][col] === PEBBLE}
                        />)
                    }
                </div>)
            }
        </div>
    );
}
