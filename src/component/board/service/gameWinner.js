import { PEBBLE } from '../../../constants';

export default function isWinner(board) {
  let halfBoard = Math.floor(board.length / 2);
  let count = 0;
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] === PEBBLE)
        count++;
    }
  }
  return (board[halfBoard][halfBoard] === PEBBLE && count === 1);
}
