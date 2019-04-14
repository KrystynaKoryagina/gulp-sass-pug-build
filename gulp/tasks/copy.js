  'use strict';

module.exports = function() {
    $.gulp.task('copy', function() {
        return $.gulp.src([
          $.path.src.fonts,
          $.path.src.jsLibs
        ], {
          base: 'app'
        })
        .pipe($.gulp.dest($.path.dest.root))
    });
}