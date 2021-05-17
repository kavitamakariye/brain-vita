import { BOARD_SIZE, CROSS, BLANK, PEBBLE } from '../../../constants';

export default function makeBoard() {
    let board = [];
    for (let r = 0; r < BOARD_SIZE; r++) {
        let row = [];
        for (let c = 0; c < BOARD_SIZE; c++) {
            let value = CROSS;
            let halfBoard = Math.floor(BOARD_SIZE / 2);
            let halfRemaining = (BOARD_SIZE - halfBoard) / 2;
            if (r === c && r === halfBoard) {
                value = BLANK;
            }
            else if (r >= halfRemaining && r < BOARD_SIZE - halfRemaining ||
                c >= halfRemaining && c < BOARD_SIZE - halfRemaining) {
                value = PEBBLE;
            }
            row.push(value);
        }
        board.push(row);
    }
    return board;
}