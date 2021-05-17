import { PEBBLE } from '../../../constants';

export default function getPebbleCount(board) {
    let count = 0;
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            if (board[row][col] === PEBBLE)
                count++;
        }
    }
    return count;
}
