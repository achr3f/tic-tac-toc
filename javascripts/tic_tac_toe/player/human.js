(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.module('TicTacToe.Player', function() {
    return this.Human = (function(_super) {
      __extends(Human, _super);

      function Human(options) {
        Human.__super__.constructor.apply(this, arguments);
        this.view = options.view;
        this.view.tiles.forEach((function(_this) {
          return function(row, row_index) {
            return row.forEach(function(td, column_index) {
              return td.on('click', function() {
                return _this.game.play(_this.symbol, row_index, column_index);
              });
            });
          };
        })(this));
      }

      return Human;

    })(this.Base);
  });

}).call(this);
