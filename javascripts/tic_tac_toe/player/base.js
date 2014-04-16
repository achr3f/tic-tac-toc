(function() {
  this.module('TicTacToe.Player', function() {
    return this.Base = (function() {
      function Base(options) {
        this.symbol = options.symbol;
        this.game = options.game;
      }

      return Base;

    })();
  });

}).call(this);
