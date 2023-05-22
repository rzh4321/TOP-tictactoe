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
    return {

    };
})();

let container = document.querySelector('.board');
for (let i = 0; i < 9; ++i) {
    let cell = document.createElement('div');
    cell.classList.add('cell', 'valid');
    container.append(cell);
}