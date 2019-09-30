'use strict';

module.exports = function() {
    $.gulp.task('sprite:svg', function() {
      return $.gulp.src($.path.src.spriteSvg)
        .pipe($.gp.plumber())
        .pipe($.gp.svgmin({
          js2svg: {
            pretty: true
          }
        }))
        .pipe($.gp.cheerio({
          run: function ($) {
            $('[fill]').removeAttr('fill');
            $('[fill-opacity]').removeAttr('fill-opacity');
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
          },
          parserOptions: { xmlMode: true }
        }))
        .pipe($.gp.replace('&gt;', '>'))
        .pipe($.gp.svgSprite({
          mode: {
            symbol: {
              sprite: "../sprite.svg"
            }
          }
        }))
        .pipe($.gulp.dest($.path.dest.spriteSvg))
    })
  };