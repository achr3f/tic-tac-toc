(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.module('TicTacToe.Player.AImod', function() {
    return this.minmaxNode = (function() {
      minmaxNode.MIN = -999;

      minmaxNode.MAX = 999;

      minmaxNode.MAXDEPTH = 9;

      function minmaxNode(board, player, minOrMax, currentDepth) {
        this.player = player;
        this.minOrMax = minOrMax != null ? minOrMax : 'max';
        this.currentDepth = currentDepth != null ? currentDepth : 0;
        this._isBoardWon = __bind(this._isBoardWon, this);
        this._isBoardFull = __bind(this._isBoardFull, this);
        this._copyBoard = __bind(this._copyBoard, this);
        this._evalPattern = __bind(this._evalPattern, this);
        this["eval"] = __bind(this["eval"], this);
        this.value = __bind(this.value, this);
        this.board = this._copyBoard(board);
      }

      minmaxNode.prototype.value = function() {
        var children, max, max_col, max_row, min, min_col, min_row, winner;
        if (winner = this._isBoardWon()) {
          if (winner === 'O') {

          } else {

          }
          return {
            value: winner === 'O' ? this.constructor.MAX : this.constructor.MIN,
            row: null,
            column: null,
            children: []
          };
        }
        if (this._isBoardFull()) {
          return {
            value: 0,
            row: null,
            column: null,
            children: []
          };
        }
        if (this.currentDepth < this.constructor.MAXDEPTH) {
          min = this.constructor.MAX + 1;
          max = this.constructor.MIN - 1;
          min_row = null;
          min_col = null;
          max_row = null;
          max_col = null;
          children = [];
          this.board.forEach((function(_this) {
            return function(row, row_index) {
              return row.forEach(function(tile, column_index) {
                var childBoard, minOrMax, node, player, result;
                if (tile === null) {
                  childBoard = _this._copyBoard(_this.board);
                  childBoard[row_index][column_index] = _this.player;
                  player = _this.player === 'O' ? 'X' : 'O';
                  minOrMax = _this.minOrMax === 'min' ? 'max' : 'min';
                  node = new _this.constructor(childBoard, player, minOrMax, _this.currentDepth + 1);
                  result = node.value();
                  children.push(result);
                  if (result.value < min || result.value > max) {
                    if (result.value < min) {
                      min = result.value;
                      min_row = row_index;
                      min_col = column_index;
                    }
                    if (result.value > max) {
                      max = result.value;
                      max_row = row_index;
                      return max_col = column_index;
                    }
                  }
                }
              });
            };
          })(this));
          if (this.minOrMax === 'min') {
            return {
              value: min,
              row: min_row,
              column: min_col,
              children: children
            };
          } else {
            return {
              value: max,
              row: max_row,
              column: max_col,
              children: children
            };
          }
        } else {
          return {
            value: this["eval"](),
            row: null,
            column: null
          };
        }
      };

      minmaxNode.prototype["eval"] = function() {
        return Math.random();
      };

      minmaxNode.prototype._evalPattern = function(pattern) {};

      minmaxNode.prototype._copyBoard = function(board) {
        var ret;
        ret = [];
        board.forEach((function(_this) {
          return function(row) {
            return ret.push(row.slice(0));
          };
        })(this));
        return ret;
      };

      minmaxNode.prototype._isBoardFull = function() {
        var isFull;
        isFull = true;
        this.board.forEach((function(_this) {
          return function(row, row_index) {
            return row.forEach(function(tile, column_index) {
              return isFull = isFull && (tile != null);
            });
          };
        })(this));
        return isFull;
      };

      minmaxNode.prototype._isBoardWon = function() {
        var col, row, _i, _j, _ref, _ref1, _ref2, _ref3;
        for (row = _i = 0; _i <= 2; row = ++_i) {
          if ((this.board[row][0] === (_ref = this.board[row][1]) && _ref === this.board[row][2])) {
            return this.board[row][0];
          }
        }
        for (col = _j = 0; _j <= 2; col = ++_j) {
          if ((this.board[0][col] === (_ref1 = this.board[1][col]) && _ref1 === this.board[2][col])) {
            return this.board[0][col];
          }
        }
        if ((this.board[0][0] === (_ref2 = this.board[1][1]) && _ref2 === this.board[2][2])) {
          return this.board[0][0];
        }
        if ((this.board[2][0] === (_ref3 = this.board[1][1]) && _ref3 === this.board[0][2])) {
          return this.board[2][0];
        }
        return false;
      };

      return minmaxNode;

    })();
  });

}).call(this);
