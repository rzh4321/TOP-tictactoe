const board = (() => {
    let board_array = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    let turn = 'X';
    let left = 9;
    const resetBoard = () => {
        board_array = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        const cells = document.querySelectorAll('.cell');
        for (let cell of cells) {
            cell.textContent = '';
            cell.classList.add('valid');
        }
    }

    const checkWinner = () => {
          // Check rows
        for (var i = 0; i < 3; i++) {
            if (!board_array[i].includes(null) && board_array[i][0] === board_array[i][1] && board_array[i][1] === board_array[i][2]) {
                return true;
            }
        }

        // Check columns
        for (var j = 0; j < 3; j++) {
            if (board_array[0][j] !== null && board_array[0][j] === board_array[1][j] && board_array[1][j] === board_array[2][j]) {
                return true;
            }
        }

        // Check diagonals
        if (board_array[0][0] !== null && board_array[0][0] === board_array[1][1] && board_array[1][1] === board_array[2][2]) {
            return true;
        }
        if (board_array[0][2] !== null && board_array[0][2] === board_array[1][1] && board_array[1][1] === board_array[2][0]) {
            return true;
        }

        // No winner
        return false;
    }

    const play = (r, c, elem) => {
        if (!board_array[r][c]) {
            --left;
            board_array[r][c] = turn;
            elem.textContent = turn;
            elem.classList.remove('valid');
            let turn_text = document.getElementById('turn');
            turn_text.textContent = turn;
            if (checkWinner()) {
                setTimeout(() => alert(`Player ${turn} has won`), 100);
                let score_elem;
                if (turn == 'X') {
                    score_elem = document.getElementById('x-score');
                }
                else {
                    score_elem = document.getElementById('o-score');
                }
                let score = +(score_elem.textContent);
                ++score;
                score_elem.textContent = score; 
                turn = 'X';
                left = 9;
                setTimeout(resetBoard, 100);
            }
            else if (left == 0) {
                setTimeout(() => alert('TIE'), 100);
                let score = +(ties.textContent);
                ++score;
                score_elem.textContent = score; 
                turn = 'X';
                left = 9;
                setTimeout(resetBoard, 100);
            }
            else turn = (turn == 'X')? 'O' : 'X';
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
        cell.addEventListener('click', function(e) {
            board.play(r, c, cell);
        });
        container.append(cell);
    }
}