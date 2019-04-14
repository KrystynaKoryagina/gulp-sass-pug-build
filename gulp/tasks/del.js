'use strict';

module.exports = function() {
  $.gulp.task('del', function() {
    return $.del([
        'dist'
    ]);
  });
};