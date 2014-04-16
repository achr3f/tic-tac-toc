(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.module('TicTacToe', function() {
    return this.View = (function() {
      function View(options) {
        this.render = __bind(this.render, this);
        this.el = options.el;
        this.game = options.game;
        this.tiles = [];
        this.el.find('tr').each((function(_this) {
          return function(row_index, tr) {
            var row;
            row = [];
            _this.tiles.push(row);
            return $(tr).find('td').each(function(column_index, td) {
              return row.push($(td));
            });
          };
        })(this));
        this.render();
        $('body').on('renderGame', this.render);
      }

      View.prototype.render = function() {
        return this.game.board.forEach((function(_this) {
          return function(row, row_index) {
            return row.forEach(function(tile, column_index) {
              var classes, td, tile_mark;
              td = _this.tiles[row_index][column_index];
              classes = "mark mark-" + tile;
              if (tile_mark = td.children()[0]) {
                tile_mark = $(tile_mark);
                if (tile != null) {
                  tile_mark.removeClass().addClass(classes);
                  return tile_mark.html(tile);
                } else {
                  return tile_mark.remove();
                }
              } else {
                if (tile != null) {
                  tile_mark = $('<div>').addClass(classes);
                  tile_mark.html(tile);
                  return td.append(tile_mark);
                }
              }
            });
          };
        })(this));
      };

      return View;

    })();
  });

}).call(this);
