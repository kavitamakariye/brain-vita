import { PEBBLE, BLANK } from '../../../constants';

const selectHole = function (boardState, row, column, prevSelectedHole) {
    const [selectedHoleX, selectedHoleY] = prevSelectedHole;
    const isAlreadySelected = selectedHoleX !== -1 && selectedHoleY !== -1;
    let nextSelectedHole = [];

    if (boardState[row][column] === PEBBLE) {
        if (row === selectedHoleX && column === selectedHoleY) {
            nextSelectedHole = [-1, -1];
        }
        else {
            nextSelectedHole = [row, column];
        }
    }

    if (boardState[row][column] === BLANK && isAlreadySelected) {

        let isAligned = false;
        let allowedPositions = [
            [selectedHoleX - 2, selectedHoleY],
            [selectedHoleX + 2, selectedHoleY],
            [selectedHoleX, selectedHoleY - 2],
            [selectedHoleX, selectedHoleY + 2],
        ];

        for (let pos of allowedPositions) {
            let tr = pos[0], tc = pos[1];
            if (tr === row && tc === column) {
                isAligned = true;
                break;
            }
        }

        let midRow = row - Math.sign(row - selectedHoleX);
        let midCol = column - Math.sign(column - selectedHoleY);

        if (isAligned && boardState[midRow][midCol] === PEBBLE) {

            boardState[midRow][midCol] = BLANK;
            boardState[selectedHoleX][selectedHoleY] = BLANK;
            boardState[row][column] = PEBBLE;

            nextSelectedHole = [-1, 1];
        }
    }

    return nextSelectedHole;
}

export default selectHole;