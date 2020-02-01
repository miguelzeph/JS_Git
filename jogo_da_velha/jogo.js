const tic_tac_tow = {

    board: ["","","","","","","","",""],
    simbols: {
        options: ["x","o"],
        turn_index: 0,
        change: function () {
            this.turn_index = (this.turn_index === 0 ? 1 : 0);
        },
    },
    container_element: null,
    gameover: false,
    winning_sequence: [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [6,4,2]

    ],


    init: function (container) {
        this.container_element = container;

    },

    make_play: function (position) {
        if (this.gameover) return false;
        if (this.board[position] === "") {
            this.board[position] = this.simbols.options[this.simbols.turn_index];
            this.draw();

            let winner = this.check_winner(this.simbols.options[this.simbols.turn_index]);

            if (winner >= 0) {
                this.gameover = true;
                console.log('Gamer Over')
            }

            else {
                this.simbols.change();

            }
            return true;
        }
        else {
            return false;
        };
    },

    check_winner: function () {
        for (i in this.winning_sequence) {
            if (this.board[this.winning_sequence[i][0]] == this.simbols &&
                this.board[this.winning_sequence[i][1]] == this.simbols &&
                this.board[this.winning_sequence[i][2]] == this.simbols) {
                    return i;
                    console.log( "Sequencia vencedora: " +i);
            };
        };
    },

    draw: function () {
        let content = "";

        for (i in this.board) {
            content += '<div onclick = "tic_tac_tow.make_play('+i+')">'+ this.board[i] + '</div>';
            this.container_element.innerHTML = content;
            
        };

    },
};