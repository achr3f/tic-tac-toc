(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.module('TicTacToe', function() {
    return this.Game = (function() {
      Game.PLAYERS = ['X', 'O'];

      function Game() {
        this.toNextPlayer = __bind(this.toNextPlayer, this);
        this.play = __bind(this.play, this);
        this.board = [[null, null, null], [null, null, null], [null, null, null]];
        this.nextPlayer = this.constructor.PLAYERS[0];
      }

      Game.prototype.play = function(player, row, column) {
        if (player === this.nextPlayer) {
          if (this.board[row][column] === null) {
            this.board[row][column] = player;
            $('body').trigger('renderGame');
            return this.toNextPlayer();
          }
        }
      };

      Game.prototype.toNextPlayer = function() {
        var idx;
        idx = this.constructor.PLAYERS.indexOf(this.nextPlayer) + 1;
        if (idx >= this.constructor.PLAYERS.length) {
          idx = 0;
        }
        this.nextPlayer = this.constructor.PLAYERS[idx];
        return $('body').trigger('nextPlayer', [this.nextPlayer]);
      };

      return Game;

    })();
  });

}).call(this);
