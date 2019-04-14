'use strict';

module.exports = function() {
    $.gulp.task('js:libs', function() {
        return $.gulp.src($.path.jsLibs)
        .pipe($.gulp.dest($.path.dest.jsLibs))
    });
};