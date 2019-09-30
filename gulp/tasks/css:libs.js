'use strict';

module.exports = function() {
    $.gulp.task('css:libs', function() {
      return $.gulp.src($.path.cssLibs)
      .pipe($.gp.rename({
        extname: ".scss"
      }))
      .pipe($.gulp.dest($.path.dest.cssLibs))
    });
};