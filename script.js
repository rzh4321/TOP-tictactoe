const board = (() => {
    const board_array = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ];
    let turn = 'X';
    const play = (r, c) => {
        if (board_array[r][c]) {
            board_array[r][c] = turn;
            turn = (turn == 'X')? 'O' : 'X';
            return true;
        }
        return false;
    }
    const add = (a, b) => a + b;

    return {

    };
  })();