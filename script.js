const board = (() => {
    const board_array = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ];
    let turn = 'X';
    const play = (r, c, elem) => {
        if (!board_array[r][c]) {
            board_array[r][c] = turn;
            elem.textContent = turn;
            turn = (turn == 'X')? 'O' : 'X';
        }
        else {
            alert('Position already taken');
        }
    }
    return {
        play
    };
})();

let container = document.querySelector('.board');
for (let r = 0; r < 3; ++r) {
    for (let c = 0; c < 3; ++c) {
        let cell = document.createElement('div');
        cell.classList.add('cell', 'valid');
        // cell.setAttribute('data-row', r);
        // cell.setAttribute('data-col', c);
        cell.addEventListener('click', function(e) {
            board.play(r, c, cell);
        });
        container.append(cell);
    }
}