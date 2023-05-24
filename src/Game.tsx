import React, { useEffect } from 'react'
import TileRowGenerator from './components/tile_row_generator';
import cloneDeep from 'lodash.clonedeep';
import GamePad from './components/game_pad';




function initboard(n: number): number[][] {
  let b: number[][] = [];
  for (let i = 0; i < n; i++) {
    b.push([]);
    for (let j = 0; j < n; j++) {
      b[i].push(0);
    }
  }
  b = randomNumberOnBoard(b, n);
  b = randomNumberOnBoard(b, n);
  return b;
}

function randomNumberOnBoard(board: number[][], n: number): number[][] {

  let b = board;
  let x: number, y: number;
  do {
    x = Math.floor(Math.random() * (n));
    y = Math.floor(Math.random() * (n));
  } while (board[x][y] !== 0);
  b[x][y] = Math.random() < 0.5 ? 2 : 4;
  return b;

}

function swipeLeft(board: number[][]): number[][] {
  const n = board.length;
  let b = cloneDeep(board);
  for (let i = 0; i < n; i++) {
    // Combine tiles that are adjacent and have the same value
    for (let j = 1; j < n; j++) {
      if (b[i][j] !== 0 && b[i][j] === b[i][j - 1]) {
        b[i][j - 1] *= 2;
        b[i][j] = 0;
      }
    }
    // Shift all non-zero tiles to the left
    for (let j = 1; j < n; j++) {
      if (b[i][j] !== 0) {
        let k = j;
        while (k > 0 && b[i][k - 1] === 0) {
          b[i][k - 1] = b[i][k];
          b[i][k] = 0;
          k--;
        }
      }
    }
  }
  console.log(b);


  if (b !== board) { b = randomNumberOnBoard(b, n); }

  return b;
}

function swipeRight(board: number[][]): number[][] { return [] }
function swipeUp(board: number[][]): number[][] { return [] }
function swipeDown(board: number[][]): number[][] { return [] }



type GameProps = {
  n: number
}

const Game = (props: GameProps) => {

  // const [scrore, setScore] = React.useState(0);
  const [board, setBoard] = React.useState<number[][]>([]);


  useEffect(() => {
    var initialboard = initboard(props.n);
    setBoard(initialboard);
  }, [props.n])

  return (
    <div>

      <h1 className='flex text-center justify-center'>
        20A8
      </h1>
      <div >
        {board.map((row, i) => <TileRowGenerator key={i} values={row} />)}
      </div>
      <div className='pt-10'>
        <GamePad
          onLeft={() => setBoard(swipeLeft(board))}
          onRight={() => setBoard(swipeRight(board))}
          onDown={() => setBoard(swipeDown(board))}
          onUp={() => setBoard(swipeUp(board))}
        />
      </div>

    </div>
  )
}

export default Game


