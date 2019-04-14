'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init({
      open: false,
      server: $.path.dest.root
    });

    $.browserSync.watch('dist', $.browserSync.reload);
  });
};