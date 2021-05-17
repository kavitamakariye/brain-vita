
import React, { useEffect, useState } from 'react';

import '../../../index.css';
import Board from './board';
import isWinner from "../service/gameWinner";
import makeBoard from "../service/makeBoard";
import getPebbleCount from "../service/pebbleCount";

import { BOARD_SIZE } from '../../../constants';
import selectHole from "../service/selectHole";

let boardState = makeBoard(BOARD_SIZE);

export default function Game({ username, setpebbleCount }) {
    const [selectedHole, setSelectedHole] = useState([-1, -1]);  //Default Selection kept at corner cell

    useEffect(() => boardState = makeBoard(BOARD_SIZE), [username]);

    useEffect(() => {
        setpebbleCount(getPebbleCount(boardState));
    }, [selectedHole]);

    const handleClick = (row, column) => {
        if (isWinner(boardState)) {
            alert(`Congratulations ${username}. You Win!!`);
            return;
        }
        setSelectedHole(selectHole(boardState, row, column, selectedHole));
    }

    return (
        <div className="game">
            <Board boardState={boardState}
                selectedRow={selectedHole[0]}
                selectedColumn={selectedHole[1]}
                handleClick={(row, column) => handleClick(row, column)} />
        </div>
    );
}
