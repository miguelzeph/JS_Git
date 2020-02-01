const tic_tac_tow = {

    board: ["","","","","","","","",""],
    simbols: {
        options: ["x","o"],
        turn_index: 0,
        change: function () {
            this.turne_index = (this.turn_index === 0 ? 1 : 0);
        },
    },
    container_element: null,
    gameover: false,


    init: function (container) {
        this.container_element = container;

    },

    make_play: function (position) {
        if (this.gameover) return false;
        if (this.board[position] === "") {
            this.board[position] = this.simbols
        }
    },

    draw: function () {
        let content = "";

        for (i in this.board) {
            content += '<div onclick = "tic_tac_tow.make_play('+i+')">'+ this.board[i] + '</div>';

            this.container_element.innerHTML = content;
        };

    },
};